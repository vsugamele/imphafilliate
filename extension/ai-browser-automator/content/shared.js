window.AiAutomator = (() => {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function waitForElement(selectors, timeout = 12000) {
    const list = Array.isArray(selectors) ? selectors : [selectors];
    const existing = findFirst(list);
    if (existing) return existing;

    return new Promise((resolve, reject) => {
      const observer = new MutationObserver(() => {
        const found = findFirst(list);
        if (found) {
          observer.disconnect();
          clearTimeout(timer);
          resolve(found);
        }
      });

      const timer = setTimeout(() => {
        observer.disconnect();
        reject(new Error(`Elemento nao encontrado: ${list.join(", ")}`));
      }, timeout);

      observer.observe(document.documentElement, {
        childList: true,
        subtree: true
      });
    });
  }

  function findFirst(selectors) {
    for (const selector of selectors) {
      const found = document.querySelector(selector);
      if (found) return found;
    }
    return null;
  }

  function setEditableText(element, text) {
    element.focus();

    if (element.matches("textarea, input")) {
      element.value = text;
      element.dispatchEvent(new Event("input", { bubbles: true }));
      element.dispatchEvent(new Event("change", { bubbles: true }));
      return;
    }

    selectEditableContents(element);
    document.execCommand("insertText", false, text);
    element.dispatchEvent(new InputEvent("input", {
      bubbles: true,
      inputType: "insertText",
      data: text
    }));
  }

  function selectEditableContents(element) {
    const range = document.createRange();
    range.selectNodeContents(element);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  async function clickFirst(selectors, timeout = 5000) {
    const button = await waitForElement(selectors, timeout);
    button.click();
    return button;
  }

  function registerAdapter(adapter) {
    chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
      if (message.type === "AI_AUTOMATOR_PING") {
        sendResponse({ ok: true });
        return false;
      }

      if (message.type !== "AI_AUTOMATOR_SEND_PROMPT") return false;

      (async () => {
        await adapter.sendPrompt({
          prompt: message.prompt,
          submit: Boolean(message.submit),
          imageData: message.imageData
        });
        sendResponse({ ok: true });
      })().catch((error) => {
        sendResponse({ ok: false, error: error.message });
      });

      return true;
    });
  }

  return {
    clickFirst,
    registerAdapter,
    setEditableText,
    sleep,
    waitForElement
  };
})();
