chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(["templates"], (stored) => {
    if (stored.templates) return;
    chrome.storage.local.set({
      templates: [
        {
          name: "Imagem 9:16 anuncio",
          prompt: "Crie uma imagem vertical 9:16 para anuncio. Tema: {{tema}}. Estilo: cinematico, alta qualidade, sem texto ilegivel, sem marcas famosas."
        },
        {
          name: "Video curto",
          prompt: "Crie um video curto em 9:16 com duracao de 6 a 8 segundos. Cena: {{cena}}. Movimento de camera suave, iluminacao natural, sem texto na tela."
        }
      ]
    });
  });
});

chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (!alarm.name.startsWith("ai-automator-project:")) return;

  const projectId = alarm.name.replace("ai-automator-project:", "");
  const stored = await chrome.storage.local.get(["projects", "scheduledQueues"]);
  const projects = Array.isArray(stored.projects) ? stored.projects : [];
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  const queue = buildScheduledQueue(project);
  const scheduledQueues = Array.isArray(stored.scheduledQueues) ? stored.scheduledQueues : [];
  scheduledQueues.unshift({
    id: crypto.randomUUID(),
    projectId,
    projectName: project.name,
    createdAt: new Date().toISOString(),
    queue
  });

  await chrome.storage.local.set({ scheduledQueues: scheduledQueues.slice(0, 30) });
});

function buildScheduledQueue(project) {
  const styles = Array.isArray(project.batchStyles) && project.batchStyles.length
    ? project.batchStyles
    : ["UGC realista", "Editorial premium", "Antes/depois"];
  const count = Math.max(1, Number(project.batchImageCount) || 3);
  const brief = project.brief || "campanha visual";
  const videoBrief = project.batchVideoBrief || "criar video 9:16 usando a imagem como first frame";
  const context = [
    `Oferta: ${project.offer || ""}.`,
    `Avatar: ${project.avatar || ""}.`,
    `Mecanismo/tese: ${project.mechanism || ""}.`,
    `Distribuição: ${project.contentMode || "both"}.`,
    `Objetivo: ${project.campaignObjective || "stop-scroll"}.`,
    `Continuidade visual: ${project.visualContinuity || "manter sujeito, produto e identidade visual consistentes"}.`
  ].join(" ");

  const queue = [];
  for (let index = 0; index < count; index += 1) {
    const style = styles[index % styles.length];
    queue.push(`[IMAGEM] ${brief}. ${context} Estilo: ${style}. Gerar criativo visual 9:16 com composicao clara, luz profissional, sujeito principal evidente e sem texto ilegivel.`);
  }
  queue.push(`[VIDEO] ${videoBrief}. ${context} Use as imagens geradas hoje como referencia/first frame quando disponivel. Duracao 8s, movimento de camera suave, primeiro frame forte, acao principal clara e ultimo frame com sensacao de conclusao. Gere um unico take, sem variacoes duplicadas.`);
  return queue;
}
