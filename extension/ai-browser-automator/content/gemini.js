AiAutomator.registerAdapter({
  async sendPrompt({ prompt, submit }) {
    const editor = await AiAutomator.waitForElement([
      "div[contenteditable='true'][aria-label*='Enter a prompt']",
      "div[contenteditable='true'][aria-label*='Digite um comando']",
      "rich-textarea div[contenteditable='true']",
      "div[contenteditable='true']",
      "textarea"
    ]);

    AiAutomator.setEditableText(editor, prompt);
    await AiAutomator.sleep(250);

    if (!submit) return;

    await AiAutomator.clickFirst([
      "button[aria-label*='Send message']",
      "button[aria-label*='Enviar mensagem']",
      "button[aria-label*='Send']",
      "button[aria-label*='Enviar']"
    ]);
  }
});
