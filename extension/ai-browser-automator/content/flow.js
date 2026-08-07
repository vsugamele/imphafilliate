AiAutomator.registerAdapter({
  async sendPrompt({ prompt, submit, imageData }) {
    if (imageData) {
      await attachImage(imageData);
      await AiAutomator.sleep(500);
    }

    const editor = await waitForFlowEditor();

    if (isSlateFlowEditor(editor)) {
      await showFlowManualHandoff(prompt, submit);
      throw new Error("Flow usa um editor Slate que bloqueia insercao automatica confiavel. Use o painel AffHub na pagina para copiar e colar manualmente no campo do Flow.");
    }

    AiAutomator.setEditableText(editor, prompt);
    dispatchFlowInputEvents(editor);
    await AiAutomator.sleep(250);

    if (!submit) return;

    const sendButton = await waitForFlowSendButton(editor);
    if (!sendButton) {
      throw new Error("Botao de envio do Flow nao encontrado. O prompt foi colado, mas talvez precise enviar manualmente.");
    }
    sendButton.click();
  }
});

async function waitForFlowEditor(timeout = 12000) {
  const existing = findFlowEditor();
  if (existing) return existing;

  return new Promise((resolve, reject) => {
    const observer = new MutationObserver(() => {
      const found = findFlowEditor();
      if (found) {
        observer.disconnect();
        clearTimeout(timer);
        resolve(found);
      }
    });

    const timer = setTimeout(() => {
      observer.disconnect();
      reject(new Error("Campo de prompt do Flow nao encontrado."));
    }, timeout);

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  });
}

function findFlowEditor() {
  const candidates = [
    ...document.querySelectorAll("textarea, input[type='text'], div[contenteditable='true'], [role='textbox']")
  ].filter((element) => {
    if (!isVisible(element)) return false;
    const text = [
      element.getAttribute("placeholder"),
      element.getAttribute("aria-label"),
      element.getAttribute("data-placeholder"),
      element.textContent
    ].filter(Boolean).join(" ").toLowerCase();

    if (text.includes("search") || text.includes("pesquisar") || text.includes("buscar")) return false;
    if (element.matches("input") && element.getAttribute("type") === "search") return false;
    return element.matches("textarea, div[contenteditable='true'], [role='textbox']");
  });

  if (!candidates.length) return null;

  const direct = candidates.find((element) => {
    const text = [
      element.getAttribute("placeholder"),
      element.getAttribute("aria-label"),
      element.getAttribute("data-placeholder")
    ].filter(Boolean).join(" ").toLowerCase();
    return text.includes("criar") || text.includes("prompt") || text.includes("comando");
  });
  if (direct) return direct;

  return candidates.sort((a, b) => {
    const ar = a.getBoundingClientRect();
    const br = b.getBoundingClientRect();
    return (br.bottom + br.right / 10) - (ar.bottom + ar.right / 10);
  })[0];
}

async function waitForFlowSendButton(editor, timeout = 6000) {
  const started = Date.now();
  while (Date.now() - started < timeout) {
    const button = findFlowSendButton(editor);
    if (button && !isButtonDisabled(button)) return button;
    await AiAutomator.sleep(250);
  }
  return findFlowSendButton(editor);
}

function findFlowSendButton(editor) {
  const labels = ["send", "enviar", "create", "criar", "generate", "gerar"];
  const buttons = [...document.querySelectorAll("button")].filter((button) => {
    if (!isVisible(button) || isButtonDisabled(button)) return false;
    const text = [
      button.getAttribute("aria-label"),
      button.title,
      button.textContent
    ].filter(Boolean).join(" ").toLowerCase();
    return labels.some((label) => text.includes(label));
  });

  if (buttons.length) return buttons[0];

  const editorRect = editor.getBoundingClientRect();
  const nearby = [...document.querySelectorAll("button")].filter((button) => {
    if (!isVisible(button) || isButtonDisabled(button)) return false;
    const rect = button.getBoundingClientRect();
    const horizontallyNear = rect.left >= editorRect.left && rect.left <= editorRect.right + 120;
    const verticallyNear = rect.top >= editorRect.top - 40 && rect.top <= editorRect.bottom + 80;
    return horizontallyNear && verticallyNear;
  });

  if (nearby.length) {
    return nearby.sort((a, b) => {
      const ar = a.getBoundingClientRect();
      const br = b.getBoundingClientRect();
      return (br.right + br.bottom) - (ar.right + ar.bottom);
    })[0];
  }

  const bottomRightButtons = [...document.querySelectorAll("button")].filter((button) => {
    if (!isVisible(button) || isButtonDisabled(button)) return false;
    const rect = button.getBoundingClientRect();
    return rect.right > window.innerWidth - 120 && rect.bottom > window.innerHeight - 120;
  });

  return bottomRightButtons.sort((a, b) => {
    const ar = a.getBoundingClientRect();
    const br = b.getBoundingClientRect();
    return (br.right + br.bottom) - (ar.right + ar.bottom);
  })[0] || null;
}

async function attachImage(imageData) {
  const input = document.querySelector("input[type='file'][accept*='image'], input[type='file']");
  if (!input) {
    throw new Error("Upload de imagem nao encontrado no Flow. Abra o seletor de imagem/manual ou ajuste o adaptador.");
  }

  const file = dataUrlToFile(imageData.dataUrl, imageData.name, imageData.type);
  const transfer = new DataTransfer();
  transfer.items.add(file);
  input.files = transfer.files;
  input.dispatchEvent(new Event("input", { bubbles: true }));
  input.dispatchEvent(new Event("change", { bubbles: true }));
}

function dataUrlToFile(dataUrl, name, type) {
  const [meta, base64] = dataUrl.split(",");
  const mime = type || meta.match(/data:([^;]+)/)?.[1] || "image/png";
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new File([bytes], name || "reference.png", { type: mime });
}

function isVisible(element) {
  const rect = element.getBoundingClientRect();
  const style = window.getComputedStyle(element);
  return rect.width > 20 &&
    rect.height > 15 &&
    style.visibility !== "hidden" &&
    style.display !== "none" &&
    Number(style.opacity || 1) > 0;
}

function isButtonDisabled(button) {
  return button.disabled ||
    button.getAttribute("aria-disabled") === "true" ||
    button.dataset.disabled === "true";
}

function isSlateFlowEditor(editor) {
  return editor?.getAttribute("data-slate-editor") === "true" ||
    Boolean(editor?.querySelector?.("[data-slate-placeholder], [data-slate-zero-width]"));
}

async function showFlowManualHandoff(prompt, submit) {
  await copyPromptToClipboard(prompt);
  const existing = document.getElementById("affhub-flow-handoff");
  if (existing) existing.remove();

  const panel = document.createElement("div");
  panel.id = "affhub-flow-handoff";
  panel.style.cssText = [
    "position:fixed",
    "z-index:2147483647",
    "right:18px",
    "bottom:18px",
    "width:360px",
    "max-width:calc(100vw - 36px)",
    "background:#111118",
    "color:#f4f4f7",
    "border:1px solid #3a3a4a",
    "box-shadow:0 18px 60px rgba(0,0,0,.45)",
    "border-radius:12px",
    "font:13px/1.45 Inter,Arial,sans-serif",
    "padding:14px"
  ].join(";");

  panel.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:8px">
      <strong style="font-size:14px">AffHub Flow Assist</strong>
      <button type="button" data-affhub-close style="background:#242433;color:#fff;border:1px solid #3a3a4a;border-radius:7px;padding:4px 8px">Fechar</button>
    </div>
    <div style="color:#b9b9c8;margin-bottom:8px">
      O Flow bloqueou a insercao automatica. O prompt ja foi copiado; clique no campo do Flow, use Ctrl+V e envie quando a seta habilitar.
    </div>
    <textarea readonly style="width:100%;height:150px;resize:vertical;background:#181824;color:#f4f4f7;border:1px solid #343447;border-radius:8px;padding:8px">${escapeHtml(prompt)}</textarea>
    <div style="display:flex;gap:8px;margin-top:10px">
      <button type="button" data-affhub-copy style="flex:1;background:#6c5ce7;color:#fff;border:0;border-radius:8px;padding:9px;font-weight:700">Copiar prompt</button>
      <span style="color:#9a9aac;align-self:center">${submit ? "Depois clique em Criar" : "Modo colar"}</span>
    </div>
  `;

  document.documentElement.appendChild(panel);
  panel.querySelector("[data-affhub-close]").addEventListener("click", () => panel.remove());
  panel.querySelector("[data-affhub-copy]").addEventListener("click", async () => {
    await copyPromptToClipboard(prompt);
  });
}

async function copyPromptToClipboard(prompt) {
  try {
    await navigator.clipboard.writeText(prompt);
  } catch (_error) {
    // Clipboard can be blocked without a user gesture; the textarea still exposes the prompt.
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function dispatchFlowInputEvents(editor) {
  editor.focus();
  editor.dispatchEvent(new InputEvent("beforeinput", {
    bubbles: true,
    inputType: "insertText",
    data: editor.value || editor.textContent || ""
  }));
  editor.dispatchEvent(new InputEvent("input", {
    bubbles: true,
    inputType: "insertText",
    data: editor.value || editor.textContent || ""
  }));
  editor.dispatchEvent(new Event("change", { bubbles: true }));
  editor.dispatchEvent(new KeyboardEvent("keyup", {
    bubbles: true,
    key: " ",
    code: "Space"
  }));
}
