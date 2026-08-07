AiAutomator.registerAdapter({
  async sendPrompt({ prompt, submit }) {
    const editor = await AiAutomator.waitForElement([
      "#prompt-textarea",
      "div[contenteditable='true'][data-testid='prompt-textarea']",
      "textarea"
    ]);

    AiAutomator.setEditableText(editor, prompt);
    await AiAutomator.sleep(250);

    if (!submit) return;

    await AiAutomator.clickFirst([
      "button[data-testid='send-button']",
      "button[aria-label*='Send']",
      "button[aria-label*='Enviar']"
    ]);
  }
});
