const DEFAULT_TEMPLATES = [
  {
    name: "Imagem 9:16 anuncio",
    prompt: "Crie uma imagem vertical 9:16 para anuncio. Tema: {{tema}}. Estilo: cinematico, alta qualidade, sem texto ilegivel, sem marcas famosas."
  },
  {
    name: "Video curto",
    prompt: "Crie um video curto em 9:16 com duracao de 6 a 8 segundos. Cena: {{cena}}. Movimento de camera suave, iluminacao natural, sem texto na tela."
  },
  {
    name: "Variacoes",
    prompt: "Gere 4 variacoes visuais do conceito abaixo, mantendo o mesmo produto e mudando composicao, luz e fundo: {{conceito}}"
  }
];

const HOOKLAB_HOOKS = Array.isArray(globalThis.HOOKLAB_HOOKS) ? globalThis.HOOKLAB_HOOKS : [];

const CREATIVE_ANGLES = [
  {
    slug: "auto",
    name: "Automatico",
    description: "Escolher o melhor angulo conforme o objetivo.",
    hook: "",
    visual: ""
  },
  {
    slug: "dor",
    name: "Dor",
    description: "Mostra a frustracao e o problema sentido pelo avatar.",
    hook: "Voce encara o problema por 2 segundos e tenta fingir que ele nao existe.",
    visual: "Expressao de cansaco/frustracao, atmosfera de problema concreto, contexto realista do dia a dia."
  },
  {
    slug: "desejo",
    name: "Desejo / Transformacao",
    description: "Projeta a vida ideal e a transformacao aspiracional.",
    hook: "Imagina acordar e perceber que o resultado que parecia distante virou rotina.",
    visual: "Ambiente aspiracional, expressao de conquista, composicao limpa, sensacao de progresso."
  },
  {
    slug: "prova",
    name: "Prova Social",
    description: "Depoimentos, numeros e resultados concretos.",
    hook: "Os prints e resultados mostram o que mudou quando a pessoa aplicou isso.",
    visual: "Elementos de credibilidade, antes/depois, numeros, prints, sinais de validacao sem exagero."
  },
  {
    slug: "autoridade",
    name: "Autoridade",
    description: "Expert posicionado como referencia absoluta.",
    hook: "Quem domina esse mercado faz diferente, e quase ninguem percebe o detalhe.",
    visual: "Postura confiante, ambiente profissional, luz controlada, sinais sutis de expertise."
  },
  {
    slug: "curiosidade",
    name: "Curiosidade",
    description: "Gancho intrigante que abre um loop.",
    hook: "Tem uma coisa que ninguem te conta sobre isso.",
    visual: "Elemento misterioso, pergunta visual no ar, contraste forte, composicao que para o scroll."
  },
  {
    slug: "antes-depois",
    name: "Antes vs Depois",
    description: "Contraste visual entre estado atual e resultado.",
    hook: "Antes parecia normal. Depois ficou obvio qual era o erro.",
    visual: "Composicao comparativa, contraste claro entre estado ruim e resultado desejado."
  },
  {
    slug: "objecao",
    name: "Objecao Destruida",
    description: "Responde a maior objeção do mercado.",
    hook: "A desculpa mais comum cai quando voce olha para esse detalhe.",
    visual: "Imagem que responde visualmente 'nao tenho tempo', 'e caro' ou 'nao funciona para mim'."
  },
  {
    slug: "controversia",
    name: "Controversia",
    description: "Vai contra o consenso do mercado.",
    hook: "Vou falar uma coisa que muita gente do mercado nao quer admitir.",
    visual: "Tom confrontador, comparacao errado vs certo, expressao decidida, alto contraste."
  },
  {
    slug: "historia",
    name: "Historia Emocional",
    description: "Cena pessoal com pico emocional e virada.",
    hook: "Foi nesse momento especifico que a pessoa percebeu que precisava mudar.",
    visual: "Cena intima e cinematografica, luz quente, vulnerabilidade, momento de decisao."
  },
  {
    slug: "promessa",
    name: "Promessa",
    description: "Resultado especifico, mensuravel e com prazo.",
    hook: "Em poucos dias, o primeiro sinal de mudanca ja aparece.",
    visual: "Numero ou marco visual, calendario/cronometro sutil, sensacao de clareza e prazo."
  }
];

const CAMPAIGN_STAGES = [
  {
    slug: "auto",
    name: "Automatica",
    instruction: "Etapa da campanha: escolha a etapa mais adequada para cada peca."
  },
  {
    slug: "descoberta",
    name: "Descoberta",
    instruction: "Etapa da campanha: descoberta. O criativo deve interromper o scroll, abrir curiosidade e apresentar o problema sem vender pesado."
  },
  {
    slug: "dor",
    name: "Dor",
    instruction: "Etapa da campanha: dor. O criativo deve fazer o publico se reconhecer na frustracao atual e sentir urgencia de resolver."
  },
  {
    slug: "desejo",
    name: "Desejo",
    instruction: "Etapa da campanha: desejo. O criativo deve mostrar o estado desejado, a transformacao e o ganho emocional."
  },
  {
    slug: "prova",
    name: "Prova",
    instruction: "Etapa da campanha: prova. O criativo deve reforcar confianca com resultado, demonstracao, evidencia, bastidor ou validacao."
  },
  {
    slug: "objecao",
    name: "Objecao",
    instruction: "Etapa da campanha: objecao. O criativo deve atacar uma barreira especifica: preco, tempo, ceticismo, medo, dificuldade ou 'nao e para mim'."
  },
  {
    slug: "cta",
    name: "CTA",
    instruction: "Etapa da campanha: CTA. O criativo deve deixar clara a proxima acao, promessa central, motivo de agir agora e reducao de risco."
  }
];

const CREATIVE_FRAMEWORKS = [
  {
    slug: "auto",
    name: "Automatico",
    instruction: "Framework criativo: escolha o formato mais adequado ao objetivo."
  },
  {
    slug: "ugc",
    name: "UGC",
    instruction: "Framework criativo: UGC. Use pessoa realista falando ou demonstrando, ambiente cotidiano, celular na mao, linguagem natural e prova visual simples."
  },
  {
    slug: "demo",
    name: "Demo",
    instruction: "Framework criativo: demonstracao. Mostre o produto/metodo em uso, antes do uso, acao principal e resultado visual claro."
  },
  {
    slug: "before-after",
    name: "Antes/Depois",
    instruction: "Framework criativo: antes/depois. Estruture contraste entre estado inicial ruim e estado final desejado, com mudanca perceptivel."
  },
  {
    slug: "pov",
    name: "POV",
    instruction: "Framework criativo: POV. Use ponto de vista do avatar vivendo a dor ou a transformacao, com detalhes sensoriais e situacionais."
  },
  {
    slug: "testimonial",
    name: "Depoimento",
    instruction: "Framework criativo: depoimento. Simule relato humano, especifico e crivel, sem promessas absolutas ou resultado garantido."
  },
  {
    slug: "viral-reel",
    name: "Reel Viral",
    instruction: "Framework criativo: reel viral. Estruture com gancho nos 2 primeiros segundos, progressao simples, payoff e fechamento curto."
  },
  {
    slug: "vsl-hook",
    name: "Gancho VSL",
    instruction: "Framework criativo: gancho de VSL. Comece com interrupcao de padrao, contradicao do mercado, inimigo comum ou mecanismo unico."
  }
];

const SKILL_ENGINES = [
  { slug: "auto", name: "Automatico", instruction: "Motor de skill: escolha o melhor raciocinio para o objetivo." },
  { slug: "angulos-criativos", name: "Angulos Criativos", instruction: "Motor de skill: Angulos Criativos. Gere criativos de topo de funil com headline, corpo curto, CTA e brief visual. Priorize hooks que param o scroll, uma emocao dominante por peca e imagem que reforce o angulo. Nao comece vendendo o produto; comece pelo mundo mental do prospect." },
  { slug: "avatar-architect", name: "Avatar Architect", instruction: "Motor de skill: Avatar Architect. Use sub-avatares, dor dominante, crenca bloqueadora, crenca necessaria, vergonha, desejo e cena concreta. Evite abstracoes. Cada prompt deve conter uma microrrealidade visual especifica do avatar." },
  { slug: "escavador-desejos", name: "Escavador Desejos", instruction: "Motor de skill: Escavador de Desejos. Crie prompts baseados em desejos externos, internos e proibidos, gatilhos de dor/desejo/vergonha e sintomas fisicos. Use cenas que parecem reconhecimento imediato, nao beneficios genericos." },
  { slug: "viral-video", name: "Video Viral", instruction: "Motor de skill: Viral Video Creator. Para videos, estruture hook nos primeiros 3 segundos, cena por cena, fala ou acao, texto na tela opcional, emocao e payoff. Otimize para Reels/TikTok/Shorts em 9:16." },
  { slug: "headline-forge", name: "Headline Forge", instruction: "Motor de skill: Headline Forge. Crie aberturas usando nivel de consciencia, sofisticacao, desejo dominante e verbalizacoes como pergunta, paradoxo, mecanismo, antes/depois, autoridade ou desafio. A headline deve fazer a pessoa querer ler/ver o proximo segundo." },
  { slug: "vsl-filemon", name: "VSL Filemon", instruction: "Motor de skill: VSL Filemon. Use blocos de VSL: raio X do publico, mecanismo, tese, historia, lead e oferta. Para prompts visuais/video, transforme o bloco escolhido em cena concreta com loop aberto e progressao narrativa." },
  { slug: "mecanismo-unico", name: "Mecanismo Unico", instruction: "Motor de skill: Mecanismo Unico. Destaque falha raiz do mercado, logica diferenciadora, parabola explicativa, nome proprietario e contranarrativa. O criativo deve mostrar por que a abordagem comum falha e por que este metodo segue outra logica." },
  { slug: "weaponized-credibility", name: "Credibilidade", instruction: "Motor de skill: Weaponized Credibility. Blinde claims com especificidade, reason-why, prova, condicao se/entao, detalhes verificaveis e reducao de ceticismo. Evite hype. Todo claim forte precisa de motivo ou evidencia." }
];

const COPY_TEMPLATES = [
  {
    slug: "auto",
    name: "Automatico",
    instruction: "Template de copy: escolha a estrutura mais adequada ao objetivo."
  },
  {
    slug: "reels-ugc",
    name: "Roteiro Reels UGC",
    instruction: "Template de copy: Roteiro Reels UGC. Estrutura obrigatoria: HOOK 0-2s, cena real do avatar, problema especifico, virada/epifania, CTA e PROMPT FLOW. Linguagem oral, realista e direta."
  },
  {
    slug: "pov-avatar",
    name: "POV do Avatar",
    instruction: "Template de copy: POV do Avatar. Estrutura: POV: voce e o avatar em uma situacao dolorosa; pensamento automatico; vergonha oculta; acao visivel; virada; prompt visual. Deve gerar reconhecimento imediato."
  },
  {
    slug: "objecao-destruida",
    name: "Objecao Destruida",
    instruction: "Template de copy: Objecao Destruida. Estrutura: objecao, o que ela realmente significa, cena onde aparece, resposta de autoridade, nova crenca e CTA. Foque em quebrar crenca sem humilhar o avatar."
  },
  {
    slug: "mecanismo-unico",
    name: "Mecanismo Unico",
    instruction: "Template de copy: Mecanismo Unico. Estrutura: o mercado diz, por que isso falha, causa raiz, novo mecanismo, nome proprietario, parabola e prompt visual/video."
  },
  {
    slug: "criativo-estatico",
    name: "Criativo Estatico",
    instruction: "Template de copy: Angulo de Criativo Estatico. Estrutura: angulo, gatilho emocional, headline, corpo curto, CTA, brief de imagem, texto na arte e formato."
  },
  {
    slug: "headline-forge",
    name: "Headline Forge",
    instruction: "Template de copy: Headline Forge. Estrutura: nivel de consciencia, sofisticacao, desejo dominante, tecnica de verbalizacao, 10 headlines, recomendada e 2 A/B."
  },
  {
    slug: "escavador-criativo",
    name: "Escavador Criativo",
    instruction: "Template de copy: Escavador de Desejos para Criativos. Estrutura: desejo externo, desejo interno, desejo proibido, gatilho de dor, gatilho de vergonha, cena concreta, prompt UGC e prompt imagem."
  },
  {
    slug: "vsl-hook",
    name: "VSL Hook Curto",
    instruction: "Template de copy: VSL Hook Curto. Estrutura: raio X do publico, cena de dor, mecanismo, tese, historia curta, lead, CTA e prompt video."
  },
  {
    slug: "credibilidade",
    name: "Credibilidade/Prova",
    instruction: "Template de copy: Credibilidade/Prova. Estrutura: claim, por que parece exagerado, prova disponivel, reason-why, condicao SE/ENTAO, detalhe especifico e criativo final."
  },
  {
    slug: "antes-depois",
    name: "Antes/Depois",
    instruction: "Template de copy: Antes/Depois. Estrutura: antes, depois, erro invisivel, mudanca, cena 1, cena 2, prompt imagem e prompt video."
  },
  {
    slug: "jp-sabe-cobra-pouco",
    name: "JP - Sabe/Cobra Pouco",
    instruction: "Template JP: Roteiro Reels - Sabe fazer, cobra pouco. Hook deve partir da frase: voce ja sabe fazer o corte; o problema e que ainda cobra como iniciante. Mostrar salao, agenda cheia, preco baixo e virada para identidade profissional."
  },
  {
    slug: "jp-medo-preco",
    name: "JP - Medo de Preco",
    instruction: "Template JP: POV - Cabeleireira com medo de aumentar preco. Mostrar a cena de digitar novo valor, apagar, mandar preco antigo e sentir frustracao. Virada: preco nao e tecnica, e identidade profissional."
  },
  {
    slug: "jp-cliente-nao-paga",
    name: "JP - Cliente Nao Paga",
    instruction: "Template JP: Objecao - Minha cliente nao paga isso. Quebrar a crenca mostrando que cliente nao paga quando nao percebe posicionamento, autoridade e valor. Sem culpar a cabeleireira."
  },
  {
    slug: "jp-impostor-profissional",
    name: "JP - Impostor Profissional",
    instruction: "Template JP: Mecanismo - Sindrome do Impostor Profissional. Explicar que a profissional ja tem tecnica, mas opera com identidade de iniciante. Criar nome proprietario e cena visual forte."
  },
  {
    slug: "jp-valor-mesa",
    name: "JP - Valor na Mesa",
    instruction: "Template JP: Imagem/Video - Valor deixado na mesa. Usar contraste entre cobrar R$70 e poder cobrar R$130, com calculo anual de dinheiro perdido sem exagero. Brief visual claro."
  },
  {
    slug: "jp-problema-nao-tecnica",
    name: "JP - Nao e Tecnica",
    instruction: "Template JP: VSL Hook - O problema nao e tecnica. Abrir com contranarrativa: se tecnica resolvesse, toda cabeleireira boa cobraria caro. Instalar o mecanismo identidade/posicionamento."
  },
  {
    slug: "jp-carrossel-identidade-premium",
    name: "JP - Carrossel Premium",
    instruction: "Template JP: Carrossel educativo para cabeleireiras de cachos/crespos. Sequencia: hook sobre saber fazer mas cobrar pouco; dor de atender muito e lucrar pouco; falsa causa 'falta tecnica'; mecanismo Sindrome do Impostor Profissional; calculo simples de valor deixado na mesa; nova crenca identidade premium; CTA para aprender a cobrar o que o corte vale."
  }
];

const JP_FREITAS_PRESET = {
  name: "JP Freitas - Cabeleireiras Cachos",
  brief: "Criar roteiros e criativos para JP Freitas (@jpfreitas06), especialista em posicionamento e identidade profissional para cabeleireiras especializadas em cabelos crespos/cacheados. O ponto central: a cabeleireira ja sabe fazer a tecnica, mas cobra pouco porque nao se enxerga como profissional premium.",
  offer: "Programa/mentoria de posicionamento, identidade profissional e precificacao para cabeleireiras de cachos/crespos. Nao vender como curso tecnico; vender como o proximo passo depois da tecnica.",
  avatar: "Cabeleireira de cachos/crespos que ja estudou tecnica, atende clientes reais, mas ainda cobra R$60-R$70 quando poderia cobrar R$130+. Sente vergonha de aumentar preco, medo de perder cliente, sindrome do impostor profissional e frustracao por trabalhar muito sem ver margem. Deseja ser reconhecida como especialista, cobrar com seguranca e virar referencia local.",
  mechanism: "Contranarrativa: o problema nao e tecnico. Ela ja sabe fazer o corte/tratamento; o que falta e identidade profissional, posicionamento e permissao interna para cobrar o que vale. Mecanismo sugerido: Sindrome do Impostor Profissional / Sistema de Identidade Premium. Frase central: voce ja sabe fazer o corte, agora precisa aprender a cobrar o que ele vale.",
  batchVideoBrief: "Criar video 9:16 estilo Reels com hook nos 2 primeiros segundos, fala natural de JP ou POV da cabeleireira, cena concreta do salao, quebra da crenca 'preciso de mais tecnica' e fechamento com proximo passo.",
  batchStyles: ["UGC no salao", "POV cabeleireira cobrando pouco", "Antes/depois de posicionamento"],
  format: "video",
  angleSlug: "objecao",
  targetEngine: "flow",
  campaignStage: "descoberta",
  creativeFramework: "viral-reel",
  skillEngine: "viral-video"
};

const BUILTIN_PROJECT_PRESETS = {
  linfaflow: {
    id: "preset-linfaflow",
    name: "LinfaFlow - Wellness 9:16",
    brief: "Criar imagens e videos para LinfaFlow com foco em mulher 35-60, bem-estar, leveza, energia percebida e autocuidado. Manter linguagem segura: sem claims medicos, sem cura, sem substituicao de tratamento, sem emagrecimento garantido e sem antes/depois corporal agressivo.",
    offer: "LinfaFlow drops, ritual diario de bem-estar em gotas. Posicionar como suporte a rotina de autocuidado, clareza e sensacao de leveza.",
    avatar: "Mulheres 35-60 que se sentem cansadas, pesadas, invisiveis e desconectadas do corpo. Querem voltar a se sentir leves, confiantes, vistas e com momentum no dia a dia, mas desconfiam de promessas exageradas.",
    mechanism: "Ritual simples de duas gotas dentro de uma rotina de bem-estar. Mecanismo narrativo seguro: small daily reset, natural rhythm, clarity, lightness and momentum. Sempre usar linguagem de suporte, nao promessa clinica.",
    batchVideoBrief: "Criar clipes 9:16 de 8s, x1, estilo wellness ad cinematografico realista. Sem claims medicos, sem perda de peso garantida, sem comparacao corporal antes/depois.",
    contentMode: "both",
    campaignObjective: "retention",
    visualContinuity: "Manter a mesma Sarah, mulher no fim dos 40, cabelo castanho na altura dos ombros, roupa casual clara, mesmo frasco sem marca, paleta verde suave e luz matinal natural em todas as cenas.",
    batchStyles: [
      "UGC realista em banheiro/quarto, luz natural, mulher 45+",
      "Foto premium editorial com frasco unbranded, agua e rotina matinal",
      "Montagem emocional de autocuidado feminino, sem antes/depois corporal"
    ],
    format: "video",
    angleSlug: "historia",
    targetEngine: "flow",
    campaignStage: "descoberta",
    creativeFramework: "viral-reel",
    skillEngine: "viral-video",
    flowScenes: [
      "Scene 1, 8s, vertical 9:16, x1. Sarah, relatable woman late 40s, looks disheartened in a bathroom mirror in soft morning light. Quick emotional cut to diverse women 30-60 frustrated with clothes and avoiding photos. Warm realistic cinematic wellness ad. Karaoke subtitles: Is your body making you feel invisible? If you lost your spark, listen up. No medical or weight loss claims.",
      "Scene 2, 8s, vertical 9:16, x1. Tasteful old photo of Sarah looking tired transitions to present-day Sarah smiling softly with more confidence. Emotional but realistic, no body comparison, no scale, no before/after weight claim. Karaoke subtitles: Meet Sarah, who felt trapped in her own routine just two months ago.",
      "Scene 3, 8s, vertical 9:16, x1. Warm dramatic light shift as Sarah holds a small unbranded wellness dropper bottle and looks hopeful. Close-up on hands, water glass, calm morning kitchen. Karaoke subtitles: Then she discovered a simple daily ritual.",
      "Scene 4, 8s, vertical 9:16, x1. Sarah adds two drops to water, then walks outside, stretches, cooks colorful food, laughs with a friend. Energetic daily-life montage, natural movement. Karaoke subtitles: With two drops a day as part of her routine, she started feeling energized from within.",
      "Scene 5, 8s, vertical 9:16, x1. Clean abstract wellness graphics: water, leaves, soft light particles, natural rhythm, clarity, focus. No medical diagrams, no disease language, no detox sludge. Karaoke subtitles: Designed to support your natural reset, clarity and daily energy.",
      "Scene 6, 8s, vertical 9:16, x1. Testimonial-style montage of happy women 35-60 walking, smiling, dancing casually, enjoying everyday life. Text card: Real women. Real routines. Real momentum. Karaoke subtitles: Small daily rituals can help you feel like yourself again.",
      "Scene 7, 8s, vertical 9:16, x1. End card with product bottle silhouette, discount badge, countdown timer animation, clean typography. Text on screen: Special discount available today. Check the link below. No exaggerated claims."
    ]
  },
  xyz: {
    id: "preset-xyz",
    name: "XYZ - Template",
    brief: "Projeto XYZ. Preencher briefing, promessa permitida, prova, imagens e restricoes antes de gerar criativos.",
    offer: "Oferta/produto XYZ.",
    avatar: "Avatar XYZ: dor dominante, desejo, objecoes e cena cotidiana.",
    mechanism: "Mecanismo XYZ: por que funciona, prova disponivel e o que nao pode ser prometido.",
    batchVideoBrief: "Criar clipes 9:16 de 8s, x1, alinhados ao projeto XYZ. Manter claims seguros e CTA claro.",
    contentMode: "both",
    campaignObjective: "stop-scroll",
    visualContinuity: "Definir e manter sujeito, produto, roupa, paleta, cenário e luz entre todas as peças.",
    batchStyles: ["UGC realista", "Editorial premium", "Demo de produto", "Prova social"],
    format: "video",
    angleSlug: "auto",
    targetEngine: "flow",
    campaignStage: "descoberta",
    creativeFramework: "viral-reel",
    skillEngine: "viral-video",
    flowScenes: [
      "Scene 1, 8s, vertical 9:16, x1. Introduce the avatar in a concrete daily pain moment. Realistic cinematic ad, fast hook, no unsupported claims.",
      "Scene 2, 8s, vertical 9:16, x1. Show the product or mechanism entering the routine naturally. Clear visual action, no exaggerated result.",
      "Scene 3, 8s, vertical 9:16, x1. Show proof-style everyday momentum and an end card with clear CTA."
    ]
  }
};

const els = {
  tabButtons: document.querySelectorAll("[data-tab]"),
  panels: document.querySelectorAll("[data-panel]"),
  siteLabel: document.getElementById("siteLabel"),
  connectionCard: document.getElementById("connectionCard"),
  connectionTitle: document.getElementById("connectionTitle"),
  connectionHint: document.getElementById("connectionHint"),
  reconnectPage: document.getElementById("reconnectPage"),
  templateSelect: document.getElementById("templateSelect"),
  saveTemplate: document.getElementById("saveTemplate"),
  prompt: document.getElementById("prompt"),
  promptFormat: document.querySelectorAll("input[name='promptFormat']"),
  outputSize: document.getElementById("outputSize"),
  scriptLength: document.getElementById("scriptLength"),
  scriptStyle: document.getElementById("scriptStyle"),
  toggleOpenRouter: document.getElementById("toggleOpenRouter"),
  openRouterConfig: document.getElementById("openRouterConfig"),
  openRouterKey: document.getElementById("openRouterKey"),
  openRouterModel: document.getElementById("openRouterModel"),
  openRouterModelOptions: document.getElementById("openRouterModelOptions"),
  refreshModels: document.getElementById("refreshModels"),
  assistantBrief: document.getElementById("assistantBrief"),
  creativeAngle: document.getElementById("creativeAngle"),
  targetEngine: document.getElementById("targetEngine"),
  campaignStage: document.getElementById("campaignStage"),
  creativeFramework: document.getElementById("creativeFramework"),
  skillEngine: document.getElementById("skillEngine"),
  copyTemplate: document.getElementById("copyTemplate"),
  hookTemplate: document.getElementById("hookTemplate"),
  assistantMode: document.getElementById("assistantMode"),
  assistantCount: document.getElementById("assistantCount"),
  generateAssistant: document.getElementById("generateAssistant"),
  autoSend: document.getElementById("autoSend"),
  delaySeconds: document.getElementById("delaySeconds"),
  projectSelect: document.getElementById("projectSelect"),
  saveProject: document.getElementById("saveProject"),
  projectName: document.getElementById("projectName"),
  projectOffer: document.getElementById("projectOffer"),
  projectAvatar: document.getElementById("projectAvatar"),
  projectMechanism: document.getElementById("projectMechanism"),
  contentMode: document.getElementById("contentMode"),
  campaignObjective: document.getElementById("campaignObjective"),
  visualContinuity: document.getElementById("visualContinuity"),
  loadLinfaFlowPreset: document.getElementById("loadLinfaFlowPreset"),
  loadXyzPreset: document.getElementById("loadXyzPreset"),
  loadJpPreset: document.getElementById("loadJpPreset"),
  batchTime: document.getElementById("batchTime"),
  batchImageCount: document.getElementById("batchImageCount"),
  batchStyles: document.getElementById("batchStyles"),
  batchVideoBrief: document.getElementById("batchVideoBrief"),
  localImages: document.getElementById("localImages"),
  referenceFolder: document.getElementById("referenceFolder"),
  referenceAction: document.getElementById("referenceAction"),
  referenceLimit: document.getElementById("referenceLimit"),
  clearReferences: document.getElementById("clearReferences"),
  localImagesStatus: document.getElementById("localImagesStatus"),
  referenceList: document.getElementById("referenceList"),
  planBatch: document.getElementById("planBatch"),
  planFlowScenes: document.getElementById("planFlowScenes"),
  planProductionPack: document.getElementById("planProductionPack"),
  scheduleBatch: document.getElementById("scheduleBatch"),
  queueVideosFromImages: document.getElementById("queueVideosFromImages"),
  fillPrompt: document.getElementById("fillPrompt"),
  sendPrompt: document.getElementById("sendPrompt"),
  queue: document.getElementById("queue"),
  loadCurrent: document.getElementById("loadCurrent"),
  runQueue: document.getElementById("runQueue"),
  pauseQueue: document.getElementById("pauseQueue"),
  stopQueue: document.getElementById("stopQueue"),
  copyQueue: document.getElementById("copyQueue"),
  downloadQueue: document.getElementById("downloadQueue"),
  queueState: document.getElementById("queueState"),
  queueProgress: document.getElementById("queueProgress"),
  queueProgressBar: document.getElementById("queueProgressBar"),
  queueCurrent: document.getElementById("queueCurrent"),
  openOptions: document.getElementById("openOptions"),
  status: document.getElementById("status")
};

let activeTab = null;
let templates = [];
let projects = [];
let selectedLocalImages = [];
let activeSite = "unsupported";
let queueJobs = [];
let queueRunner = {
  running: false,
  paused: false,
  stopped: false,
  index: 0,
  total: 0
};

init();

async function init() {
  [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
  updateSiteLabel(activeTab?.url || "");

  const stored = await chrome.storage.local.get([
    "templates",
    "lastPrompt",
    "autoSend",
    "delaySeconds",
    "openRouterKey",
    "openRouterModel",
    "assistantBrief",
    "promptFormat",
    "outputSize",
    "scriptLength",
    "scriptStyle",
    "creativeAngle",
    "targetEngine",
    "campaignStage",
    "creativeFramework",
    "skillEngine",
    "copyTemplate",
    "hookTemplate",
    "referenceAction",
    "referenceLimit",
    "openRouterModels",
    "projects",
    "activeProjectId"
  ]);
  templates = Array.isArray(stored.templates) && stored.templates.length ? stored.templates : DEFAULT_TEMPLATES;
  els.prompt.value = stored.lastPrompt || templates[0].prompt;
  els.autoSend.checked = Boolean(stored.autoSend);
  els.delaySeconds.value = stored.delaySeconds || 15;
  els.openRouterKey.value = stored.openRouterKey || "";
  els.openRouterModel.value = stored.openRouterModel || "~openai/gpt-latest";
  renderModelOptions(stored.openRouterModels || []);
  els.assistantBrief.value = stored.assistantBrief || "";
  renderCreativeAngles(stored.creativeAngle || "auto");
  renderSelectOptions(els.campaignStage, CAMPAIGN_STAGES, stored.campaignStage || "auto");
  renderSelectOptions(els.creativeFramework, CREATIVE_FRAMEWORKS, stored.creativeFramework || "auto");
  renderSelectOptions(els.skillEngine, SKILL_ENGINES, stored.skillEngine || "auto");
  renderSelectOptions(els.copyTemplate, COPY_TEMPLATES, stored.copyTemplate || "auto");
  renderHookOptions(stored.hookTemplate || "auto");
  els.targetEngine.value = stored.targetEngine || "generic";
  els.outputSize.value = stored.outputSize || "9:16";
  els.scriptLength.value = stored.scriptLength || "15s";
  els.scriptStyle.value = stored.scriptStyle || "ugc";
  els.referenceAction.value = stored.referenceAction || "video";
  els.referenceLimit.value = stored.referenceLimit || 20;
  setPromptFormat(stored.promptFormat || "image");
  projects = Array.isArray(stored.projects) ? stored.projects : [];
  renderProjects(stored.activeProjectId || "");
  renderTemplates();
  updateConnectionUi("idle");
}

function renderTemplates() {
  els.templateSelect.innerHTML = "";
  for (const [index, item] of templates.entries()) {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = item.name;
    els.templateSelect.appendChild(option);
  }
}

function renderCreativeAngles(selectedSlug) {
  els.creativeAngle.innerHTML = "";
  for (const angle of CREATIVE_ANGLES) {
    const option = document.createElement("option");
    option.value = angle.slug;
    option.textContent = angle.name;
    els.creativeAngle.appendChild(option);
  }
  els.creativeAngle.value = selectedSlug;
}

function renderSelectOptions(select, items, selectedSlug) {
  select.innerHTML = "";
  for (const item of items) {
    const option = document.createElement("option");
    option.value = item.slug;
    option.textContent = item.name;
    select.appendChild(option);
  }
  select.value = selectedSlug;
}

function renderHookOptions(selectedId) {
  els.hookTemplate.innerHTML = "";

  const auto = document.createElement("option");
  auto.value = "auto";
  auto.textContent = `Automatico (${HOOKLAB_HOOKS.length} hooks)`;
  els.hookTemplate.appendChild(auto);

  for (const hook of HOOKLAB_HOOKS) {
    const option = document.createElement("option");
    option.value = String(hook.id);
    option.textContent = `#${String(hook.id).padStart(3, "0")} ${hook.o} - ${hook.t}`;
    els.hookTemplate.appendChild(option);
  }

  els.hookTemplate.value = selectedId;
}

function updateSiteLabel(url) {
  if (url.includes("chatgpt.com") || url.includes("chat.openai.com")) {
    activeSite = "chatgpt";
    els.siteLabel.textContent = "Aba atual: ChatGPT";
    return;
  }
  if (url.includes("gemini.google.com")) {
    activeSite = "gemini";
    els.siteLabel.textContent = "Aba atual: Gemini";
    return;
  }
  if (url.includes("labs.google/fx/tools/flow") || /labs\.google\/fx\/[^/]+\/tools\/flow/.test(url) || url.includes("flow.google")) {
    activeSite = "flow";
    els.siteLabel.textContent = "Aba atual: Flow";
    return;
  }
  activeSite = "unsupported";
  els.siteLabel.textContent = "Abra ChatGPT, Gemini ou Flow para usar.";
}

function updateConnectionUi(state, detail = "") {
  els.connectionCard.classList.remove("ready", "warn", "error");

  if (activeSite === "unsupported") {
    els.connectionCard.classList.add("warn");
    els.connectionTitle.textContent = "Aba não suportada";
    els.connectionHint.textContent = "Abra ChatGPT, Gemini ou Flow e clique na extensão de novo.";
    els.reconnectPage.disabled = true;
    return;
  }

  els.reconnectPage.disabled = false;

  if (state === "ready") {
    els.connectionCard.classList.add("ready");
    els.connectionTitle.textContent = "Conectado à página";
    els.connectionHint.textContent = "A extensão está pronta para colar ou enviar prompts.";
    return;
  }

  if (state === "error") {
    els.connectionCard.classList.add("error");
    els.connectionTitle.textContent = "Não conectou à página";
    els.connectionHint.textContent = detail || "Recarregue a aba do site ou clique em Conectar.";
    return;
  }

  els.connectionCard.classList.add("warn");
  els.connectionTitle.textContent = "Conexão pendente";
  els.connectionHint.textContent = "Se der erro, clique em Conectar ou recarregue a aba do site.";
}

function setActiveTab(tabName) {
  for (const button of els.tabButtons) {
    button.classList.toggle("active", button.dataset.tab === tabName);
  }

  for (const panel of els.panels) {
    panel.hidden = panel.dataset.panel !== tabName;
  }
}

for (const button of els.tabButtons) {
  button.addEventListener("click", () => setActiveTab(button.dataset.tab));
}

els.templateSelect.addEventListener("change", () => {
  const selected = templates[Number(els.templateSelect.value)];
  if (selected) els.prompt.value = selected.prompt;
});

els.prompt.addEventListener("input", () => {
  chrome.storage.local.set({ lastPrompt: els.prompt.value });
});

for (const input of els.promptFormat) {
  input.addEventListener("change", () => {
    chrome.storage.local.set({ promptFormat: getPromptFormat() });
  });
}

els.outputSize.addEventListener("change", () => {
  chrome.storage.local.set({ outputSize: els.outputSize.value });
});

els.scriptLength.addEventListener("change", () => {
  chrome.storage.local.set({ scriptLength: els.scriptLength.value });
});

els.scriptStyle.addEventListener("change", () => {
  chrome.storage.local.set({ scriptStyle: els.scriptStyle.value });
});

els.toggleOpenRouter.addEventListener("click", () => {
  els.openRouterConfig.hidden = !els.openRouterConfig.hidden;
});

els.openRouterKey.addEventListener("input", () => {
  chrome.storage.local.set({ openRouterKey: els.openRouterKey.value.trim() });
});

els.openRouterModel.addEventListener("input", () => {
  chrome.storage.local.set({ openRouterModel: els.openRouterModel.value.trim() });
});

els.refreshModels.addEventListener("click", async () => {
  try {
    setStatus("Buscando modelos do OpenRouter...");
    const models = await fetchOpenRouterModels();
    renderModelOptions(models);
    await chrome.storage.local.set({ openRouterModels: models });
    setStatus(`Modelos atualizados: ${models.length}`);
  } catch (error) {
    setStatus(error.message || "Erro ao buscar modelos.", true);
  }
});

els.assistantBrief.addEventListener("input", () => {
  chrome.storage.local.set({ assistantBrief: els.assistantBrief.value });
});

els.creativeAngle.addEventListener("change", () => {
  chrome.storage.local.set({ creativeAngle: els.creativeAngle.value });
});

els.targetEngine.addEventListener("change", () => {
  chrome.storage.local.set({ targetEngine: els.targetEngine.value });
});

els.campaignStage.addEventListener("change", () => {
  chrome.storage.local.set({ campaignStage: els.campaignStage.value });
});

els.creativeFramework.addEventListener("change", () => {
  chrome.storage.local.set({ creativeFramework: els.creativeFramework.value });
});

els.skillEngine.addEventListener("change", () => {
  chrome.storage.local.set({ skillEngine: els.skillEngine.value });
});

els.copyTemplate.addEventListener("change", () => {
  chrome.storage.local.set({ copyTemplate: els.copyTemplate.value });
});

els.hookTemplate.addEventListener("change", () => {
  chrome.storage.local.set({ hookTemplate: els.hookTemplate.value });
});

els.autoSend.addEventListener("change", () => {
  chrome.storage.local.set({ autoSend: els.autoSend.checked });
});

els.delaySeconds.addEventListener("change", () => {
  chrome.storage.local.set({ delaySeconds: Number(els.delaySeconds.value) || 15 });
});

els.saveTemplate.addEventListener("click", async () => {
  const prompt = els.prompt.value.trim();
  if (!prompt) return setStatus("Escreva um prompt antes de salvar.", true);

  const name = window.prompt("Nome do template:");
  if (!name) return;

  templates.push({ name, prompt });
  await chrome.storage.local.set({ templates });
  renderTemplates();
  els.templateSelect.value = String(templates.length - 1);
  setStatus("Template salvo.");
});

els.fillPrompt.addEventListener("click", () => {
  sendToPage({ prompt: els.prompt.value, submit: false });
});

els.sendPrompt.addEventListener("click", () => {
  sendToPage({ prompt: els.prompt.value, submit: true });
});

els.loadCurrent.addEventListener("click", () => {
  const prompt = els.prompt.value.trim();
  if (!prompt) return;
  els.queue.value = els.queue.value ? `${els.queue.value}\n${prompt}` : prompt;
  queueJobs = [];
  updateQueueUi("Parada");
});

els.generateAssistant.addEventListener("click", async () => {
  try {
    setStatus("Gerando com OpenRouter...");
    const result = await generateWithOpenRouter({
      mode: els.assistantMode.value,
      count: Number(els.assistantCount.value) || 8,
      brief: els.assistantBrief.value.trim(),
      offer: els.projectOffer.value.trim(),
      avatar: els.projectAvatar.value.trim(),
      mechanism: els.projectMechanism.value.trim(),
      currentPrompt: els.prompt.value.trim(),
      format: getPromptFormat(),
      outputSize: els.outputSize.value,
      scriptLength: els.scriptLength.value,
      scriptStyle: els.scriptStyle.value,
      angleSlug: els.creativeAngle.value,
      targetEngine: els.targetEngine.value,
      campaignStage: els.campaignStage.value,
      creativeFramework: els.creativeFramework.value,
      skillEngine: els.skillEngine.value,
      copyTemplate: els.copyTemplate.value,
      hookTemplate: els.hookTemplate.value,
      referenceContext: buildReferenceContext()
    });

    applyAssistantResult(result, els.assistantMode.value);
    setStatus("Assistente concluiu.");
  } catch (error) {
    setStatus(error.message || "Erro no OpenRouter.", true);
  }
});

els.runQueue.addEventListener("click", async () => {
  if (queueRunner.running && queueRunner.paused) {
    queueRunner.paused = false;
    updateQueueUi("Rodando");
    return;
  }

  if (queueRunner.running) return;

  const jobs = getQueueJobs();
  if (!jobs.length) return setStatus("Adicione pelo menos um prompt na fila.", true);

  await runQueueJobs(jobs);
});

els.pauseQueue.addEventListener("click", () => {
  if (!queueRunner.running) return;
  queueRunner.paused = true;
  updateQueueUi("Pausada");
});

els.stopQueue.addEventListener("click", () => {
  if (!queueRunner.running) return;
  queueRunner.stopped = true;
  queueRunner.paused = false;
  updateQueueUi("Parando");
});

els.copyQueue.addEventListener("click", async () => {
  const queue = els.queue.value.trim();
  if (!queue) return setStatus("A fila está vazia.", true);
  try {
    await navigator.clipboard.writeText(queue);
    setStatus("Fila copiada para a área de transferência.");
  } catch (_error) {
    setStatus("O Chrome bloqueou a cópia. Use Baixar .txt ou selecione a fila manualmente.", true);
  }
});

els.downloadQueue.addEventListener("click", () => {
  const queue = els.queue.value.trim();
  if (!queue) return setStatus("A fila está vazia.", true);
  const project = (els.projectName.value.trim() || "affhub-campanha").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const blob = new Blob([queue], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${project}-fila-criativos.txt`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  setStatus("Fila baixada em .txt.");
});

els.projectSelect.addEventListener("change", async () => {
  const id = els.projectSelect.value;
  await chrome.storage.local.set({ activeProjectId: id });
  loadProjectIntoForm(id);
});

els.loadJpPreset.addEventListener("click", () => {
  applyProjectPreset(JP_FREITAS_PRESET);
  setActiveTab("project");
  setStatus("Preset JP Freitas carregado. Revise e salve o projeto.");
});

els.loadLinfaFlowPreset.addEventListener("click", () => {
  applyProjectPreset(BUILTIN_PROJECT_PRESETS.linfaflow);
  setActiveTab("project");
  setStatus("Preset LinfaFlow carregado. Use Cenas Flow x1 para montar a fila.");
});

els.loadXyzPreset.addEventListener("click", () => {
  applyProjectPreset(BUILTIN_PROJECT_PRESETS.xyz);
  setActiveTab("project");
  setStatus("Preset XYZ carregado. Preencha oferta/avatar/mecanismo antes de gerar.");
});

els.saveProject.addEventListener("click", async () => {
  const project = collectProject();
  if (!project.name) return setStatus("Informe um nome para o projeto.", true);

  const existingIndex = projects.findIndex((item) => item.id === project.id);
  if (existingIndex >= 0) projects[existingIndex] = project;
  else projects.push(project);

  await chrome.storage.local.set({ projects, activeProjectId: project.id });
  renderProjects(project.id);
  setStatus("Projeto salvo.");
});

els.planBatch.addEventListener("click", () => {
  const project = collectProject();
  const queue = buildProjectBatchQueue(project);
  els.queue.value = queue.join("\n");
  queueJobs = queue.map((prompt) => ({ prompt }));
  updateQueueUi("Parada");
  setStatus("Fila de batch criada.");
});

els.planFlowScenes.addEventListener("click", () => {
  const project = collectProject();
  const queue = buildFlowSceneQueue(project);
  els.queue.value = queue.join("\n");
  queueJobs = queue.map((prompt) => ({ prompt }));
  updateQueueUi("Parada");
  setActiveTab("queue");
  setStatus(`Fila Flow x1 criada com ${queue.length} cena(s).`);
});

els.planProductionPack.addEventListener("click", () => {
  const project = collectProject();
  const queue = buildProductionPackQueue(project);
  els.queue.value = queue.join("\n");
  queueJobs = queue.map((prompt) => ({ prompt }));
  updateQueueUi("Parada");
  setActiveTab("queue");
  setStatus(`Esteira completa criada com ${queue.length} ativo(s): cenas, hooks e orgânico.`);
});

els.scheduleBatch.addEventListener("click", async () => {
  const project = collectProject();
  if (!project.name) return setStatus("Salve/informe um projeto antes de agendar.", true);

  const existingIndex = projects.findIndex((item) => item.id === project.id);
  if (existingIndex >= 0) projects[existingIndex] = project;
  else projects.push(project);

  await chrome.storage.local.set({ projects, activeProjectId: project.id });
  await scheduleProject(project);
  renderProjects(project.id);
  setStatus(`Batch agendado para ${project.batchTime}.`);
});

els.localImages.addEventListener("change", () => {
  selectedLocalImages = normalizeImageFiles(els.localImages.files, "arquivos");
  renderSelectedImagesStatus("arquivos");
});

els.referenceFolder.addEventListener("change", () => {
  selectedLocalImages = normalizeImageFiles(els.referenceFolder.files, "pasta");
  renderSelectedImagesStatus("pasta");
});

els.referenceAction.addEventListener("change", () => {
  chrome.storage.local.set({ referenceAction: els.referenceAction.value });
});

els.referenceLimit.addEventListener("change", () => {
  chrome.storage.local.set({ referenceLimit: Number(els.referenceLimit.value) || 20 });
  renderSelectedImagesStatus("referencias");
});

els.clearReferences.addEventListener("click", () => {
  selectedLocalImages = [];
  els.localImages.value = "";
  els.referenceFolder.value = "";
  renderSelectedImagesStatus("referencias");
  setStatus("Referencias limpas.");
});

els.queueVideosFromImages.addEventListener("click", () => {
  if (!selectedLocalImages.length) {
    return setStatus("Selecione imagens ou uma pasta de referencias primeiro.", true);
  }

  const project = collectProject();
  const files = getLimitedReferenceImages();
  const queue = buildReferenceQueue(project, files, els.referenceAction.value);
  queueJobs = queue;
  els.queue.value = queue.map((job) => job.prompt).join("\n");
  updateQueueUi("Parada");
  setStatus(`Fila criada com ${queue.length} item(ns) de referencia.`);
});

function normalizeImageFiles(fileList, source) {
  return [...fileList]
    .filter((file) => file.type.startsWith("image/"))
    .map((file) => {
      file.referencePath = file.webkitRelativePath || file.name;
      file.referenceSource = source;
      return file;
    })
    .sort((a, b) => {
      const pathCompare = (a.referencePath || a.name).localeCompare(b.referencePath || b.name, undefined, { numeric: true, sensitivity: "base" });
      if (pathCompare !== 0) return pathCompare;
      return b.lastModified - a.lastModified;
    });
}

function renderSelectedImagesStatus(source) {
  if (!selectedLocalImages.length) {
    els.localImagesStatus.textContent = "Nenhuma imagem selecionada.";
    els.referenceList.hidden = true;
    els.referenceList.innerHTML = "";
    return;
  }

  const total = selectedLocalImages.length;
  const limited = getLimitedReferenceImages();
  const folders = new Set(
    selectedLocalImages
      .map((file) => file.webkitRelativePath ? file.webkitRelativePath.split("/").slice(0, -1).join("/") : "")
      .filter(Boolean)
  );
  const preview = limited.slice(0, 3).map((file) => file.referencePath || file.name).join(", ");
  const folderInfo = folders.size ? ` em ${folders.size} pasta(s)` : "";
  const limitInfo = limited.length < total ? `, usando ${limited.length}` : "";
  els.localImagesStatus.textContent = `${total} imagem(ns) de ${source}${folderInfo}${limitInfo}: ${preview}${limited.length > 3 ? "..." : ""}`;
  els.referenceList.hidden = false;
  els.referenceList.innerHTML = limited
    .slice(0, 12)
    .map((file, index) => `<div>${index + 1}. ${escapeHtml(file.referencePath || file.name)}</div>`)
    .join("");
}

function getLimitedReferenceImages() {
  const limit = Math.max(1, Math.min(80, Number(els.referenceLimit.value) || 20));
  return selectedLocalImages.slice(0, limit);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildReferenceContext() {
  if (!selectedLocalImages.length) {
    return "Referencias visuais: nenhuma referencia selecionada.";
  }

  const files = getLimitedReferenceImages();
  const folders = [...new Set(
    files
      .map((file) => file.webkitRelativePath ? file.webkitRelativePath.split("/").slice(0, -1).join("/") : "")
      .filter(Boolean)
  )];
  const paths = files
    .map((file, index) => `${index + 1}. ${file.referencePath || file.webkitRelativePath || file.name}`)
    .join("\n");

  return [
    `Referencias visuais selecionadas: ${files.length} imagem(ns).`,
    folders.length ? `Pastas/subpastas: ${folders.join("; ")}.` : "",
    "Ordem das referencias:",
    paths,
    "Use os nomes/caminhos como pistas de campanha, ordem, estilo e funcao visual. Quando a fila rodar em site com upload, a extensao tambem tentara anexar a imagem correspondente."
  ].filter(Boolean).join("\n");
}

els.openOptions.addEventListener("click", () => {
  chrome.tabs.create({ url: chrome.runtime.getURL("README.html") });
});

els.reconnectPage.addEventListener("click", async () => {
  try {
    await ensureContentScript();
    updateConnectionUi("ready");
    setStatus("Página conectada.");
  } catch (error) {
    updateConnectionUi("error", normalizePageError(error));
    setStatus(normalizePageError(error), true);
  }
});

function getQueueJobs() {
  const prompts = els.queue.value
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (queueJobs.length === prompts.length) return queueJobs;
  return prompts.map((prompt) => ({ prompt }));
}

async function runQueueJobs(jobs) {
  queueRunner = {
    running: true,
    paused: false,
    stopped: false,
    index: 0,
    total: jobs.length
  };
  updateQueueUi("Rodando");

  const delayMs = Math.max(3, Number(els.delaySeconds.value) || 15) * 1000;

  try {
    for (let i = 0; i < jobs.length; i += 1) {
      queueRunner.index = i;
      await waitWhilePaused();
      if (queueRunner.stopped) break;

      const job = jobs[i];
      updateQueueUi("Rodando", job.prompt);
      const imageData = job.file ? await fileToImagePayload(job.file) : undefined;

      await sendToPage({
        prompt: job.prompt,
        submit: els.autoSend.checked,
        imageData
      }, false);

      queueRunner.index = i + 1;
      updateQueueUi("Rodando");

      if (i < jobs.length - 1) await sleepWithStop(delayMs);
      if (queueRunner.stopped) break;
    }

    setStatus(queueRunner.stopped ? "Fila parada." : "Fila concluida.");
  } catch (error) {
    setStatus(normalizePageError(error), true);
  } finally {
    queueRunner.running = false;
    queueRunner.paused = false;
    queueRunner.stopped = false;
    updateQueueUi(queueRunner.index >= queueRunner.total ? "Concluida" : "Parada");
  }
}

function updateQueueUi(state, currentPrompt = "") {
  const total = queueRunner.total || getQueueJobs().length;
  const done = Math.min(queueRunner.index, total);
  els.queueState.textContent = state;
  els.queueProgress.textContent = `${done}/${total}`;
  els.queueProgressBar.value = total ? Math.round((done / total) * 100) : 0;
  els.queueCurrent.textContent = currentPrompt
    ? currentPrompt.slice(0, 140)
    : queueRunner.running ? "Aguardando próximo item..." : "Nenhum item em execução.";
  els.runQueue.textContent = queueRunner.running && queueRunner.paused ? "Continuar" : "Iniciar";
}

async function waitWhilePaused() {
  while (queueRunner.paused && !queueRunner.stopped) {
    await sleep(250);
  }
}

async function sleepWithStop(ms) {
  const started = Date.now();
  while (Date.now() - started < ms) {
    if (queueRunner.stopped) return;
    await waitWhilePaused();
    await sleep(250);
  }
}

function fileToImagePayload(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error(`Nao consegui ler ${file.name}.`));
    reader.onload = () => resolve({
      name: file.name,
      type: file.type || "image/png",
      dataUrl: reader.result
    });
    reader.readAsDataURL(file);
  });
}

async function sendToPage(payload, showSuccess = true) {
  try {
    if (!activeTab?.id) throw new Error("Aba ativa nao encontrada.");
    if (!payload.prompt.trim()) throw new Error("Prompt vazio.");
    if (activeSite === "unsupported") {
      throw new Error("Abra ChatGPT, Gemini ou Flow antes de enviar.");
    }

    await chrome.storage.local.set({ lastPrompt: payload.prompt });
    await ensureContentScript();
    const response = await chrome.tabs.sendMessage(activeTab.id, {
      type: "AI_AUTOMATOR_SEND_PROMPT",
      ...payload
    });

    if (response?.ok) {
      updateConnectionUi("ready");
    }

    if (response?.ok && showSuccess) {
      setStatus(payload.submit ? "Prompt enviado." : "Prompt colado.");
    }
  } catch (error) {
    const message = normalizePageError(error);
    updateConnectionUi("error", message);
    setStatus(message, true);
    throw error;
  }
}

async function ensureContentScript() {
  if (!activeTab?.id) throw new Error("Aba ativa nao encontrada.");
  if (activeSite === "unsupported") throw new Error("Aba nao suportada.");

  try {
    const ping = await chrome.tabs.sendMessage(activeTab.id, { type: "AI_AUTOMATOR_PING" });
    if (ping?.ok) return;
  } catch (_error) {
    // The content script is missing; inject it below.
  }

  const files = ["content/shared.js"];
  if (activeSite === "chatgpt") files.push("content/chatgpt.js");
  if (activeSite === "gemini") files.push("content/gemini.js");
  if (activeSite === "flow") files.push("content/flow.js");

  await chrome.scripting.executeScript({
    target: { tabId: activeTab.id },
    files
  });

  const ping = await chrome.tabs.sendMessage(activeTab.id, { type: "AI_AUTOMATOR_PING" });
  if (!ping?.ok) throw new Error("Script injetado, mas a pagina nao respondeu.");
}

function normalizePageError(error) {
  const raw = error?.message || String(error || "");
  if (raw.includes("Receiving end does not exist")) {
    return "A conexão com a aba não estava ativa. Clique em Conectar ou recarregue a aba do site.";
  }
  if (raw.includes("Cannot access") || raw.includes("permission")) {
    return "O Chrome bloqueou acesso a esta aba. Abra ChatGPT, Gemini ou Flow em uma aba normal.";
  }
  if (raw.includes("Elemento nao encontrado")) {
    return "Não encontrei o campo ou botão na página. O site pode ter mudado ou ainda estar carregando.";
  }
  return raw || "Erro ao enviar para a página.";
}

function setStatus(message, isError = false) {
  els.status.textContent = message;
  els.status.classList.toggle("error", isError);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function generateWithOpenRouter({ mode, count, brief, offer, avatar, mechanism, currentPrompt, format, outputSize, scriptLength, scriptStyle, angleSlug, targetEngine, campaignStage, creativeFramework, skillEngine, copyTemplate, hookTemplate, referenceContext }) {
  const apiKey = els.openRouterKey.value.trim();
  const model = els.openRouterModel.value.trim() || "~openai/gpt-latest";

  if (!apiKey) throw new Error("Informe sua API key do OpenRouter em Config.");
  if (!brief && mode !== "improve" && mode !== "score") throw new Error("Descreva o objetivo antes de gerar.");
  if (mode === "improve" && !currentPrompt) throw new Error("Escreva um prompt atual para melhorar.");
  if (mode === "score" && !brief && !currentPrompt) throw new Error("Informe um objetivo ou escreva um prompt atual para avaliar.");

  const system = [
    "Voce e um estrategista de prompts para geracao de imagens e videos em IA.",
    "Responda sempre em portugues do Brasil.",
    "Nao inclua markdown pesado; use apenas texto simples, listas numeradas e tags [IMAGEM], [VIDEO] ou [COPY] quando solicitado.",
    "Para filas, retorne somente uma lista numerada, um prompt final por item.",
    "Cada prompt deve ser diretamente colavel em ChatGPT, Gemini ou Flow.",
    "Inclua detalhes de cena, sujeito, composicao, estilo, luz, camera, proporcao e restricoes quando fizer sentido.",
    "Evite pedir violacao de marca, celebridade real, nudez, menores, conteudo enganoso ou bypass de politicas."
  ].join(" ");

  const user = buildAssistantUserPrompt({
    mode,
    count,
    brief,
    offer,
    avatar,
    mechanism,
    currentPrompt,
    format,
    outputSize,
    scriptLength,
    scriptStyle,
    angleSlug,
    targetEngine,
    campaignStage,
    creativeFramework,
    skillEngine,
    copyTemplate,
    hookTemplate,
    referenceContext
  });

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "chrome-extension://ai-browser-automator-mvp",
      "X-Title": "AI Browser Automator MVP"
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user }
      ],
      temperature: 0.8,
      max_tokens: mode === "campaignPack" || mode === "carousel" || mode === "carouselBatch" ? 5500 : 2500
    })
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message = data?.error?.message || data?.message || `OpenRouter retornou HTTP ${response.status}`;
    throw new Error(message);
  }

  const content = data?.choices?.[0]?.message?.content;
  if (!content) throw new Error("Resposta vazia do modelo.");
  return content.trim();
}

async function fetchOpenRouterModels() {
  const apiKey = els.openRouterKey.value.trim();
  if (!apiKey) throw new Error("Informe sua API key do OpenRouter em Config.");

  const response = await fetch("https://openrouter.ai/api/v1/models", {
    headers: { "Authorization": `Bearer ${apiKey}` }
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data?.error?.message || `OpenRouter retornou HTTP ${response.status}`);
  }

  const rawModels = Array.isArray(data?.data) ? data.data : [];
  const preferredProviders = [
    "openai/",
    "anthropic/",
    "google/",
    "meta-llama/",
    "deepseek/",
    "qwen/",
    "mistralai/",
    "x-ai/",
    "bytedance/",
    "recraft/"
  ];

  return rawModels
    .filter((model) => preferredProviders.some((prefix) => model.id?.startsWith(prefix)))
    .map((model) => ({
      id: model.id,
      name: model.name || model.id,
      context: model.context_length || 0
    }))
    .sort((a, b) => a.id.localeCompare(b.id))
    .slice(0, 250);
}

function renderModelOptions(models) {
  els.openRouterModelOptions.innerHTML = "";
  for (const model of models) {
    const option = document.createElement("option");
    option.value = model.id;
    option.label = model.name;
    els.openRouterModelOptions.appendChild(option);
  }
}

function renderProjects(selectedId) {
  els.projectSelect.innerHTML = "";

  const empty = document.createElement("option");
  empty.value = "";
  empty.textContent = "Novo projeto";
  els.projectSelect.appendChild(empty);

  for (const project of projects) {
    const option = document.createElement("option");
    option.value = project.id;
    option.textContent = project.name;
    els.projectSelect.appendChild(option);
  }

  els.projectSelect.value = selectedId;
  if (selectedId) loadProjectIntoForm(selectedId);
}

function loadProjectIntoForm(id) {
  const project = projects.find((item) => item.id === id);
  if (!project) {
    els.projectName.value = "";
    els.projectOffer.value = "";
    els.projectAvatar.value = "";
    els.projectMechanism.value = "";
    return;
  }

  els.projectName.value = project.name || "";
  els.assistantBrief.value = project.brief || "";
  els.projectOffer.value = project.offer || "";
  els.projectAvatar.value = project.avatar || "";
  els.projectMechanism.value = project.mechanism || "";
  els.contentMode.value = project.contentMode || "both";
  els.campaignObjective.value = project.campaignObjective || "stop-scroll";
  els.visualContinuity.value = project.visualContinuity || "";
  els.batchTime.value = project.batchTime || "09:00";
  els.batchImageCount.value = project.batchImageCount || 3;
  els.batchStyles.value = Array.isArray(project.batchStyles) ? project.batchStyles.join("\n") : "";
  els.batchVideoBrief.value = project.batchVideoBrief || "";
  els.outputSize.value = project.outputSize || "9:16";
  els.scriptLength.value = project.scriptLength || "15s";
  els.scriptStyle.value = project.scriptStyle || "ugc";
  setPromptFormat(project.format || "mixed");
  els.creativeAngle.value = project.angleSlug || "auto";
  els.targetEngine.value = project.targetEngine || "flow";
  els.campaignStage.value = project.campaignStage || "auto";
  els.creativeFramework.value = project.creativeFramework || "auto";
  els.skillEngine.value = project.skillEngine || "auto";
  els.copyTemplate.value = project.copyTemplate || "auto";
  els.hookTemplate.value = project.hookTemplate || "auto";
}

function applyProjectPreset(preset) {
  els.projectSelect.value = "";
  els.projectName.value = preset.name || "";
  els.assistantBrief.value = preset.brief || "";
  els.projectOffer.value = preset.offer || "";
  els.projectAvatar.value = preset.avatar || "";
  els.projectMechanism.value = preset.mechanism || "";
  els.contentMode.value = preset.contentMode || "both";
  els.campaignObjective.value = preset.campaignObjective || "stop-scroll";
  els.visualContinuity.value = preset.visualContinuity || "";
  els.batchVideoBrief.value = preset.batchVideoBrief || "";
  els.batchStyles.value = Array.isArray(preset.batchStyles) ? preset.batchStyles.join("\n") : "";
  els.outputSize.value = "9:16";
  els.scriptLength.value = "30s";
  els.scriptStyle.value = "viral-reel";
  setPromptFormat(preset.format || "video");
  els.creativeAngle.value = preset.angleSlug || "auto";
  els.targetEngine.value = preset.targetEngine || "flow";
  els.campaignStage.value = preset.campaignStage || "descoberta";
  els.creativeFramework.value = preset.creativeFramework || "viral-reel";
  els.skillEngine.value = preset.skillEngine || "viral-video";
  els.copyTemplate.value = preset.copyTemplate || "auto";
  els.hookTemplate.value = preset.hookTemplate || "auto";
  els.assistantMode.value = "scripts";
}

function collectProject() {
  const currentId = els.projectSelect.value || crypto.randomUUID();
  return {
    id: currentId,
    name: els.projectName.value.trim(),
    brief: els.assistantBrief.value.trim(),
    offer: els.projectOffer.value.trim(),
    avatar: els.projectAvatar.value.trim(),
    mechanism: els.projectMechanism.value.trim(),
    contentMode: els.contentMode.value,
    campaignObjective: els.campaignObjective.value,
    visualContinuity: els.visualContinuity.value.trim(),
    format: getPromptFormat(),
    outputSize: els.outputSize.value,
    scriptLength: els.scriptLength.value,
    scriptStyle: els.scriptStyle.value,
    angleSlug: els.creativeAngle.value,
    targetEngine: els.targetEngine.value,
    campaignStage: els.campaignStage.value,
    creativeFramework: els.creativeFramework.value,
    skillEngine: els.skillEngine.value,
    copyTemplate: els.copyTemplate.value,
    hookTemplate: els.hookTemplate.value,
    batchTime: els.batchTime.value || "09:00",
    batchImageCount: Number(els.batchImageCount.value) || 3,
    batchStyles: els.batchStyles.value.split(/\n+/).map((line) => line.trim()).filter(Boolean),
    batchVideoBrief: els.batchVideoBrief.value.trim()
  };
}

function buildProjectBatchQueue(project) {
  const styles = project.batchStyles.length ? project.batchStyles : ["UGC realista", "Editorial premium", "Antes/depois"];
  const count = Math.max(1, project.batchImageCount || 3);
  const queue = [];

  for (let index = 0; index < count; index += 1) {
    const style = styles[index % styles.length];
    queue.push(`[IMAGEM] ${project.brief}. Oferta: ${project.offer || ""}. Avatar: ${project.avatar || ""}. Mecanismo: ${project.mechanism || ""}. Tamanho: ${project.outputSize || "9:16"}. Estilo ${index + 1}: ${style}. Angulo: ${project.angleSlug}. Etapa: ${project.campaignStage}. Framework: ${project.creativeFramework}. Skill: ${project.skillEngine}. Template: ${project.copyTemplate || "auto"}. HookLab: ${project.hookTemplate || "auto"}. Criar imagem com sujeito claro, composicao forte, luz profissional, fundo coerente e sem texto ilegivel.`);
  }

  queue.push(`[VIDEO] ${project.batchVideoBrief || "Criar video usando as imagens geradas como first frame/referencia."} Base da campanha: ${project.brief}. Oferta: ${project.offer || ""}. Avatar: ${project.avatar || ""}. Mecanismo: ${project.mechanism || ""}. Tamanho: ${project.outputSize || "9:16"}. Duracao: ${project.scriptLength || "15s"}. Estilo: ${project.scriptStyle || "ugc"}. Template: ${project.copyTemplate || "auto"}. HookLab: ${project.hookTemplate || "auto"}. Movimento suave, primeiro frame forte, acao principal clara, ultimo frame com fechamento visual.`);
  return queue;
}

function buildFlowSceneQueue(project) {
  const preset = resolveBuiltinPreset(project);
  const scenes = preset?.flowScenes?.length ? preset.flowScenes : buildGenericFlowScenes(project);
  const safety = [
    "Flow settings: Video, 8s, vertical 9:16, x1.",
    "Generate one take only; do not create duplicate variations.",
    "Keep the shot usable as an ad clip with clear first frame, natural motion and clean ending."
  ].join(" ");

  return scenes.map((scene, index) => [
    `[FLOW_SCENE_${String(index + 1).padStart(2, "0")}]`,
    safety,
    `Project: ${project.name || "Untitled"}.`,
    `Offer: ${project.offer || ""}.`,
    `Avatar: ${project.avatar || ""}.`,
    `Mechanism: ${project.mechanism || ""}.`,
    `Visual continuity: ${project.visualContinuity || "Keep the same subject, product, wardrobe and visual identity across this project."}`,
    scene
  ].join(" ").replace(/\s+/g, " ").trim());
}

function buildProductionPackQueue(project) {
  const queue = [];
  const mode = project.contentMode || "both";
  const allowAds = mode === "ads" || mode === "both";
  const allowOrganic = mode === "organic" || mode === "both";
  const identity = project.visualContinuity || "Keep the same subject, product, wardrobe, setting and visual identity across this project.";
  const base = [
    `Project: ${project.name || "Untitled"}.`,
    `Offer: ${project.offer || ""}.`,
    `Avatar: ${project.avatar || ""}.`,
    `Mechanism: ${project.mechanism || ""}.`,
    `Objective: ${project.campaignObjective || "stop-scroll"}.`,
    `Visual continuity: ${identity}`,
    "Create one usable take only. Do not create duplicate variations in the same take.",
    "Keep claims accurate, avoid guaranteed outcomes and avoid unreadable generated text."
  ].join(" ");

  if (allowAds) {
    const scenes = buildFlowSceneQueue(project);
    scenes.forEach((prompt) => queue.push(prompt.replace("[FLOW_SCENE_", "[AD_FLOW_SCENE_")));
    ["A", "B", "C"].forEach((hook) => queue.push([
      `[AD_HOOK_${hook}] [VIDEO]`,
      "Create an 8-second vertical 9:16 x1 paid-ad opening using the same campaign identity.",
      `Hook variant ${hook}: change only the opening hook and first visual beat; keep the core promise, subject, product and visual language consistent.`,
      base,
      "Start with a concrete scroll-stopping moment, natural movement, clean ending and no fake testimonial."
    ].join(" ")));
  }

  if (allowOrganic) {
    ["POV", "story", "reply"].forEach((format) => queue.push([
      `[ORGANIC_${format.toUpperCase()}] [VIDEO]`,
      "Create an 8-second vertical 9:16 x1 native short-form video for Reels, TikTok and Shorts.",
      `Format: ${format}. Keep it conversational, observational and less polished than a paid ad while preserving the same product and visual identity.`,
      base,
      "One clear action, one spoken or visual idea, natural handheld camera, no hard-sell countdown and no unsupported claim."
    ].join(" ")));
    queue.push([
      "[ORGANIC_STATIC] [IMAGEM]",
      "Create a vertical 4:5 or 9:16 social image that can work as a post cover or story frame.",
      base,
      "Strong subject, generous negative space for later captioning, recognizable daily-life moment, natural light and no generated text inside the image."
    ].join(" "));
  }

  return queue;
}

function resolveBuiltinPreset(project) {
  const name = `${project.name || ""} ${project.offer || ""}`.toLowerCase();
  if (name.includes("linfaflow") || name.includes("linfa flow")) return BUILTIN_PROJECT_PRESETS.linfaflow;
  if (name.includes("xyz")) return BUILTIN_PROJECT_PRESETS.xyz;
  return null;
}

function buildGenericFlowScenes(project) {
  const base = project.batchVideoBrief || "Create an 8-second vertical 9:16 ad clip.";
  return [
    `Scene 1, 8s, vertical 9:16, x1. Strong hook scene for the avatar's concrete pain. ${base}`,
    `Scene 2, 8s, vertical 9:16, x1. Show the product, mechanism or new ritual entering the avatar's routine. ${base}`,
    `Scene 3, 8s, vertical 9:16, x1. Show proof-style momentum, emotional payoff and CTA/end card. ${base}`
  ];
}

function buildVideoQueueFromLocalImages(project, files) {
  return files.map((file, index) => {
    const base = project.batchVideoBrief || "Criar video 9:16 usando a imagem selecionada como first frame/referencia.";
    const referencePath = file.referencePath || file.webkitRelativePath || file.name;
    const prompt = [
      `[VIDEO] Imagem local ${index + 1}: ${referencePath}.`,
      base,
      `Campanha: ${project.brief || "campanha visual"}.`,
      `Destino: ${project.targetEngine || "flow"}.`,
      `Referencia visual: ${referencePath}.`,
      "Use a imagem como primeiro frame ou referencia visual.",
      "Duracao 6s, movimento de camera suave, acao principal clara, continuidade natural, ultimo frame com fechamento visual.",
      "Preserve sujeito, roupa, produto, cores e composicao principal da imagem de referencia."
    ].join(" ");
    return { prompt, file };
  });
}

function buildReferenceQueue(project, files, action) {
  if (action === "imageVariation") {
    return files.map((file, index) => {
      const referencePath = file.referencePath || file.webkitRelativePath || file.name;
      const prompt = [
        `[IMAGEM] Referencia visual ${index + 1}: ${referencePath}.`,
        `Campanha: ${project.brief || "campanha visual"}.`,
        `Oferta: ${project.offer || ""}.`,
        `Avatar: ${project.avatar || ""}.`,
        `Mecanismo/tese: ${project.mechanism || ""}.`,
        `Formato: ${project.outputSize || "4:5"}.`,
        "Crie uma nova variacao visual inspirada na imagem de referencia, preservando linguagem visual, composicao geral, atmosfera e nivel de qualidade, mas sem copiar exatamente.",
        "Adapte para o projeto, com sujeito claro, fundo coerente, luz profissional, hierarquia visual e sem texto pequeno ilegivel.",
        `Referencia visual: ${referencePath}.`
      ].join(" ");
      return { prompt, file };
    });
  }

  if (action === "carouselStyle") {
    const referenceMap = files
      .map((file, index) => `${index + 1}. ${file.referencePath || file.webkitRelativePath || file.name}`)
      .join("; ");
    const prompt = [
      "[IMAGEM] Crie um novo carrossel visual no mesmo estilo das referencias selecionadas.",
      `Referencias: ${referenceMap}.`,
      `Projeto: ${project.brief || "JP Freitas / campanha visual"}.`,
      `Oferta: ${project.offer || ""}.`,
      `Avatar: ${project.avatar || ""}.`,
      `Mecanismo/tese: ${project.mechanism || ""}.`,
      `Formato: ${project.outputSize || "4:5"}.`,
      "Estruture 7 slides com capa forte, dor, falsa causa, mecanismo, exemplo/calculo, nova crenca e CTA.",
      "Preserve a direcao visual das referencias: paleta, layout, ritmo, contraste, estilo de imagem e hierarquia.",
      "Entregue cada slide com texto curto, composicao, elementos visuais, espaco para texto legivel e restricoes."
    ].join(" ");
    return [{ prompt, file: files[0] }];
  }

  return buildVideoQueueFromLocalImages(project, files);
}

async function scheduleProject(project) {
  const [hour, minute] = (project.batchTime || "09:00").split(":").map(Number);
  const now = new Date();
  const next = new Date();
  next.setHours(hour || 9, minute || 0, 0, 0);
  if (next <= now) next.setDate(next.getDate() + 1);

  await chrome.alarms.create(`ai-automator-project:${project.id}`, {
    when: next.getTime(),
    periodInMinutes: 24 * 60
  });
}

function buildAssistantUserPrompt({ mode, count, brief, offer, avatar, mechanism, currentPrompt, format, outputSize, scriptLength, scriptStyle, angleSlug, targetEngine, campaignStage, creativeFramework, skillEngine, copyTemplate, hookTemplate, referenceContext }) {
  const formatInstruction = getFormatInstruction(format, outputSize, scriptLength, scriptStyle);
  const angleInstruction = getAngleInstruction(angleSlug);
  const engineInstruction = getEngineInstruction(targetEngine);
  const stageInstruction = getCampaignStageInstruction(campaignStage);
  const frameworkInstruction = getCreativeFrameworkInstruction(creativeFramework);
  const skillInstruction = getSkillEngineInstruction(skillEngine);
  const copyTemplateInstruction = getCopyTemplateInstruction(copyTemplate);
  const hookInstruction = getHookLabInstruction(hookTemplate, count, campaignStage);
  const referenceInstruction = referenceContext || "Referencias visuais: nenhuma referencia selecionada.";
  const projectContext = [
    `Contexto do projeto: ${brief || "nao informado"}`,
    offer ? `Oferta/produto: ${offer}` : "",
    avatar ? `Avatar: ${avatar}` : "",
    mechanism ? `Mecanismo/tese: ${mechanism}` : ""
  ].filter(Boolean).join("\n");

  if (mode === "queue") {
    return [
      `Crie ${count} prompts independentes para uma fila de geracao.`,
      formatInstruction,
      angleInstruction,
      engineInstruction,
      stageInstruction,
      frameworkInstruction,
      skillInstruction,
      copyTemplateInstruction,
      hookInstruction,
      referenceInstruction,
      projectContext,
      "Formato: uma lista numerada.",
      "Cada item deve comecar com [IMAGEM] ou [VIDEO] e depois conter apenas o prompt pronto, sem explicacao."
    ].join("\n");
  }

  if (mode === "niches") {
    return [
      `Crie ${count} ideias de nichos, subnichos, motivos de compra e angulos criativos.`,
      formatInstruction,
      angleInstruction,
      engineInstruction,
      stageInstruction,
      frameworkInstruction,
      skillInstruction,
      copyTemplateInstruction,
      hookInstruction,
      referenceInstruction,
      projectContext,
      "Para cada item, inclua: nicho, publico, dor/desejo, angulo, sugestao de prompt visual curto."
    ].join("\n");
  }

  if (mode === "campaign") {
    return [
      `Crie uma mini campanha com ${count} pecas.`,
      formatInstruction,
      angleInstruction,
      engineInstruction,
      stageInstruction,
      frameworkInstruction,
      skillInstruction,
      copyTemplateInstruction,
      hookInstruction,
      referenceInstruction,
      projectContext,
      "Misture criativos de descoberta, prova, objecao, desejo e chamada para acao.",
      "Formato: lista numerada. Cada item deve comecar com [IMAGEM] ou [VIDEO], seguido de um nome curto da peca e o prompt pronto.",
      "Para videos, especifique duracao, movimento, primeiro frame, acao principal e ultimo frame.",
      "Para imagens, especifique sujeito, fundo, composicao, luz, lente/estilo e proporcao."
    ].join("\n");
  }

  if (mode === "scripts") {
    return [
      `Crie ${count} roteiros para videos em ${outputSize || "9:16"}, duracao ${scriptLength || "15s"}, estilo ${scriptStyle || "UGC"}.`,
      formatInstruction,
      angleInstruction,
      engineInstruction,
      stageInstruction,
      frameworkInstruction,
      skillInstruction,
      copyTemplateInstruction,
      hookInstruction,
      referenceInstruction,
      projectContext,
      "Cada roteiro deve ter:",
      "1. TITULO curto",
      "2. HOOK de 0-2s",
      "3. CENAS com tempo, visual, fala natural e texto na tela",
      "4. VIRADA/epifania",
      "5. CTA ou proximo passo",
      "6. PROMPT FLOW pronto para colar, resumindo a cena em linguagem visual",
      "Regras: linguagem oral brasileira, sem prometer resultado garantido, sem parecer aula tecnica generica, usar cenas concretas do cotidiano do avatar.",
      "Formato: lista numerada. Cada item deve comecar com [VIDEO] e conter o roteiro completo."
    ].join("\n");
  }

  if (mode === "hookLab") {
    return [
      `Adapte ${count} hooks HookLab para este projeto e transforme cada um em um ativo acionavel.`,
      formatInstruction,
      angleInstruction,
      engineInstruction,
      stageInstruction,
      frameworkInstruction,
      skillInstruction,
      copyTemplateInstruction,
      hookInstruction,
      referenceInstruction,
      projectContext,
      "Para cada item, entregue:",
      "HOOK ADAPTADO: frase curta, em portugues do Brasil, sem placeholders.",
      "POR QUE FUNCIONA: gatilho psicologico em uma frase.",
      "ATIVO: comece com [IMAGEM] ou [VIDEO] e escreva o prompt pronto para colar.",
      "Formato: lista numerada. Nao use markdown pesado."
    ].join("\n");
  }

  if (mode === "carousel") {
    return [
      `Crie uma sequencia de carrossel com ${count} slides para Instagram/LinkedIn, pronta para virar imagens.`,
      "Use o campo Quantidade como numero de slides.",
      "Se o projeto for JP Freitas, mantenha a tese: a cabeleireira ja sabe tecnica, mas cobra pouco por identidade profissional, posicionamento e sindrome do impostor profissional.",
      formatInstruction,
      angleInstruction,
      engineInstruction,
      stageInstruction,
      frameworkInstruction,
      skillInstruction,
      copyTemplateInstruction,
      hookInstruction,
      referenceInstruction,
      projectContext,
      "Estrutura obrigatoria:",
      "SLIDE 1: hook forte baseado no HookLab, com promessa ou tensao clara.",
      "SLIDE 2: reconhecimento da dor especifica do avatar.",
      "SLIDE 3: erro invisivel ou falsa causa.",
      "SLIDE 4: mecanismo/tese proprietaria.",
      "SLIDE 5: exemplo concreto, prova, analogia ou calculo simples.",
      "SLIDE 6: nova crenca ou passo pratico.",
      "SLIDE FINAL: CTA claro e natural.",
      "Para cada slide, entregue nesta ordem:",
      "TEXTO DO SLIDE: headline curta + apoio de ate 18 palavras. Evite texto longo.",
      "NOTA DE COPY: funcao do slide no funil.",
      "PROMPT: comece com [IMAGEM] e descreva arte do slide em 4:5, com hierarquia visual clara, fundo, sujeito/elementos, estilo, cores, espaco para texto legivel e restricoes.",
      "No final, entregue LEGENDA, CTA, e 5 hashtags. Nao use markdown pesado."
    ].join("\n");
  }

  if (mode === "carouselBatch") {
    const carouselCount = Math.max(1, count || 3);
    return [
      `Crie ${carouselCount} carrosseis diferentes para o mesmo projeto, com 7 slides cada.`,
      "Use o campo Quantidade como numero de carrosseis, nao como numero de slides.",
      "Cada carrossel precisa ter um angulo claramente diferente para teste A/B/C.",
      "Se o projeto for JP Freitas, mantenha a tese: a cabeleireira ja sabe tecnica, mas cobra pouco por identidade profissional, posicionamento e sindrome do impostor profissional.",
      formatInstruction,
      angleInstruction,
      engineInstruction,
      stageInstruction,
      frameworkInstruction,
      skillInstruction,
      copyTemplateInstruction,
      hookInstruction,
      referenceInstruction,
      projectContext,
      "Variações obrigatorias:",
      "CARROSSEL A: dor/identidade - foco em reconhecimento emocional.",
      "CARROSSEL B: objecao/reframe - foco em quebrar 'minha cliente nao paga'.",
      "CARROSSEL C: prova/calculo - foco em dinheiro deixado na mesa e valor percebido.",
      "Se gerar mais de 3, continue alternando entre desejo, autoridade, historia e CTA.",
      "Para cada carrossel, entregue primeiro uma linha: CARROSSEL X - NOME DO ANGULO.",
      "Para cada slide, entregue:",
      "SLIDE N: texto curto do slide.",
      "FUNCAO: papel do slide no funil.",
      "PROMPT: comece com [IMAGEM] e descreva uma arte 4:5 pronta para gerar, com estilo visual, layout, sujeito/elementos, espaco para texto legivel, paleta, luz e restricoes.",
      "Todos os prompts [IMAGEM] devem incluir o nome do carrossel e numero do slide para a fila ficar organizada.",
      "No final de cada carrossel, inclua legenda e CTA em texto simples. Nao use markdown pesado."
    ].join("\n");
  }

  if (mode === "campaignPack") {
    return [
      "Crie um pacote de campanha pronto para producao e teste.",
      `Volume alvo: ${count} ativos principais, alem de variações de copy quando fizer sentido.`,
      formatInstruction,
      angleInstruction,
      engineInstruction,
      stageInstruction,
      frameworkInstruction,
      skillInstruction,
      copyTemplateInstruction,
      hookInstruction,
      referenceInstruction,
      projectContext,
      "Estrutura obrigatoria:",
      "1. ESTRATEGIA: promessa operacional, avatar, mecanismo, etapa do funil e angulo dominante.",
      "2. HOOKS: 5 hooks curtos, cada um com motivo emocional e nivel de consciencia.",
      "3. ROTEIROS: 3 itens [VIDEO] prontos para Flow, com duracao, primeiro frame, cenas, fala/acão, movimento de camera e ultimo frame.",
      "4. IMAGENS: 3 itens [IMAGEM] prontos, com sujeito, ambiente, composicao, luz, estilo, proporcao e restricoes.",
      "5. COPYS: 3 itens [COPY] com legenda curta, headline e CTA.",
      "6. CHECKLIST: 7 criterios objetivos para aprovar ou reprovar o pacote antes de enviar.",
      "Regras: os itens [VIDEO] e [IMAGEM] precisam ser diretamente colaveis no site. Nao coloque explicacao dentro desses prompts. Evite texto pequeno dentro da imagem. Evite claims garantidos."
    ].join("\n");
  }

  if (mode === "score") {
    return [
      "Avalie a qualidade do prompt ou campanha atual e proponha melhorias.",
      formatInstruction,
      angleInstruction,
      engineInstruction,
      stageInstruction,
      frameworkInstruction,
      skillInstruction,
      copyTemplateInstruction,
      hookInstruction,
      referenceInstruction,
      projectContext,
      `Material para avaliar: ${currentPrompt || brief}`,
      "Retorne neste formato:",
      "SCORE GERAL: nota de 0 a 100.",
      "CRITERIOS: notas de 0 a 10 para hook, clareza visual, especificidade do avatar, forca do mecanismo, adequacao ao formato, adequacao ao destino, risco de genericidade, potencial de anuncio e facilidade de execucao.",
      "DIAGNOSTICO: 5 problemas concretos.",
      "VERSAO MELHORADA: um prompt final pronto para colar.",
      "VARIACOES: agressiva, elegante, UGC, emocional e prova.",
      "FILA RECOMENDADA: 3 itens começando com [IMAGEM] ou [VIDEO] para testar."
    ].join("\n");
  }

  return [
    "Melhore o prompt atual para ficar mais especifico, visual e adequado para geracao de imagem/video.",
    formatInstruction,
    angleInstruction,
    engineInstruction,
    stageInstruction,
    frameworkInstruction,
    skillInstruction,
    copyTemplateInstruction,
    hookInstruction,
    referenceInstruction,
    projectContext,
    `Prompt atual: ${currentPrompt}`,
    "Retorne somente o prompt melhorado."
  ].filter(Boolean).join("\n");
}

function applyAssistantResult(result, mode) {
  if (mode === "improve") {
    els.prompt.value = result;
    chrome.storage.local.set({ lastPrompt: result });
    return;
  }

  if (mode === "queue" || mode === "scripts" || mode === "hookLab" || mode === "carousel" || mode === "carouselBatch") {
    const tagged = parseTaggedPrompts(result);
    const queue = tagged.length ? tagged : parseNumberedList(result);
    els.queue.value = queue.length ? queue.join("\n") : result;
    queueJobs = [];
    updateQueueUi("Parada");
    setActiveTab("queue");
    if (mode === "carousel" || mode === "carouselBatch") {
      chrome.storage.local.set({ lastCarousel: result });
      setStatus(queue.length ? `Carrossel criado com ${queue.length} slide(s) na fila.` : "Carrossel criado. Revise a fila antes de executar.");
    }
    return;
  }

  if (mode === "campaignPack") {
    const queue = parseTaggedPrompts(result);
    els.queue.value = queue.length ? queue.join("\n") : result;
    queueJobs = [];
    updateQueueUi("Parada");
    setActiveTab("queue");
    setStatus(queue.length ? `Pacote criado com ${queue.length} prompt(s) acionaveis na fila.` : "Pacote criado. Revise a fila antes de executar.");
    chrome.storage.local.set({ lastAssistantPack: result });
    return;
  }

  els.prompt.value = result;
  chrome.storage.local.set({ lastPrompt: result });
}

function parseNumberedList(text) {
  return text
    .split(/\n+/)
    .map((line) => line.replace(/^\s*\d+[\).\-\s]+/, "").trim())
    .filter(Boolean);
}

function parseTaggedPrompts(text) {
  const lines = text
    .split(/\n+/)
    .map((line) => line.replace(/^\s*\d+[\).\-\s]+/, "").trim())
    .filter(Boolean);

  const tagged = [];
  let current = "";

  for (const line of lines) {
    const tagMatch = line.match(/\[(IMAGEM|VIDEO)\]/i);
    if (tagMatch) {
      if (current) tagged.push(current.trim());
      current = line.slice(tagMatch.index).trim();
      continue;
    }

    if (current && !/^\[(COPY)\]/i.test(line) && !/^(ESTRATEGIA|HOOKS|ROTEIROS|IMAGENS|COPYS|CHECKLIST|CRITERIOS|DIAGNOSTICO|VARIACOES)\b/i.test(line)) {
      current = `${current} ${line}`;
    }
  }

  if (current) tagged.push(current.trim());
  return tagged;
}

function getPromptFormat() {
  return [...els.promptFormat].find((input) => input.checked)?.value || "image";
}

function setPromptFormat(value) {
  for (const input of els.promptFormat) {
    input.checked = input.value === value;
  }
}

function getFormatInstruction(format, outputSize = "9:16", scriptLength = "15s", scriptStyle = "ugc") {
  if (format === "image") {
    return [
      "Formato desejado: IMAGEM.",
      `Tamanho/proporcao: ${outputSize}.`,
      "Priorize prompts estaticos: composicao, sujeito, cena, fundo, luz, paleta, lente/estilo, textura e restricoes.",
      "Nao inclua movimentos de camera nem duracao."
    ].join(" ");
  }

  if (format === "video") {
    return [
      "Formato desejado: VIDEO.",
      `Tamanho/proporcao: ${outputSize}. Duracao alvo: ${scriptLength}. Estilo de roteiro: ${scriptStyle}.`,
      "Priorize prompts temporais: duracao, primeiro frame, acao, movimento de camera, transicao, ultimo frame, ritmo, luz, proporcao e restricoes.",
      "Evite prompts que parecam apenas fotografia estatica."
    ].join(" ");
  }

  return [
    "Formato desejado: MISTO.",
    `Tamanho/proporcao principal: ${outputSize}. Duracao dos videos: ${scriptLength}. Estilo de roteiro: ${scriptStyle}.`,
    "Distribua entre imagens e videos conforme fizer sentido para a campanha.",
    "Use [IMAGEM] para pecas estaticas e [VIDEO] para pecas com movimento."
  ].join(" ");
}

function getAngleInstruction(angleSlug) {
  const angle = CREATIVE_ANGLES.find((item) => item.slug === angleSlug) || CREATIVE_ANGLES[0];
  if (angle.slug === "auto") {
    return "Angulo criativo: escolha o melhor entre dor, desejo, prova, autoridade, curiosidade, antes/depois, objecao, controversia, historia emocional e promessa.";
  }

  return [
    `Angulo criativo obrigatorio: ${angle.name}.`,
    `Funcao: ${angle.description}`,
    `Gancho de referencia: ${angle.hook}`,
    `Direcao visual: ${angle.visual}`
  ].join(" ");
}

function getEngineInstruction(engine) {
  const base = {
    generic: "Destino: generico. Evite parametros proprietarios demais.",
    chatgpt: "Destino: ChatGPT. Escreva de forma conversacional e explicita, com restricoes claras.",
    gemini: "Destino: Gemini. Seja direto, descreva cena e criterios de qualidade sem excesso de tags.",
    flow: "Destino: Flow. Foque em video: cena, primeiro frame, acao principal, movimento de camera, ultimo frame, duracao e proporcao.",
    sora: "Destino: Sora. Use linguagem cinematografica natural, continuidade temporal e fisica plausivel.",
    veo: "Destino: Veo. Especifique camera, movimento, ambiente, acao, ritmo, audio ambiente quando fizer sentido e duracao."
  };
  return base[engine] || base.generic;
}

function getCampaignStageInstruction(stageSlug) {
  return CAMPAIGN_STAGES.find((item) => item.slug === stageSlug)?.instruction || CAMPAIGN_STAGES[0].instruction;
}

function getCreativeFrameworkInstruction(frameworkSlug) {
  return CREATIVE_FRAMEWORKS.find((item) => item.slug === frameworkSlug)?.instruction || CREATIVE_FRAMEWORKS[0].instruction;
}

function getSkillEngineInstruction(skillSlug) {
  return SKILL_ENGINES.find((item) => item.slug === skillSlug)?.instruction || SKILL_ENGINES[0].instruction;
}

function getCopyTemplateInstruction(templateSlug) {
  return COPY_TEMPLATES.find((item) => item.slug === templateSlug)?.instruction || COPY_TEMPLATES[0].instruction;
}

function getHookLabInstruction(hookId, count = 8, campaignStage = "auto") {
  if (!HOOKLAB_HOOKS.length) {
    return "HookLab: biblioteca local indisponivel. Crie hooks seguindo principios de direct response.";
  }

  if (hookId && hookId !== "auto") {
    const hook = HOOKLAB_HOOKS.find((item) => String(item.id) === String(hookId));
    if (hook) {
      return [
        "HookLab obrigatorio:",
        `ID: #${hook.id}.`,
        `Template: ${hook.t}`,
        `Gatilho: ${hook.g}.`,
        `Categoria: ${hook.c}.`,
        `Objetivo: ${hook.o}.`,
        "Adapte todos os placeholders ao projeto; nao deixe colchetes no resultado final."
      ].join(" ");
    }
  }

  const preferredObjective = campaignStage === "cta"
    ? "Fechar a venda"
    : campaignStage === "prova" || campaignStage === "objecao"
      ? "Aquecer o lead"
      : campaignStage === "desejo"
        ? "Gerar clique"
        : "Parar o scroll";

  const sample = HOOKLAB_HOOKS
    .filter((hook) => hook.o === preferredObjective)
    .slice(0, Math.max(5, Math.min(12, count)));

  const examples = (sample.length ? sample : HOOKLAB_HOOKS.slice(0, 8))
    .map((hook) => `#${hook.id} ${hook.t} | gatilho: ${hook.g} | categoria: ${hook.c} | objetivo: ${hook.o}`)
    .join("\n");

  return [
    `HookLab automatico: escolha e adapte hooks da biblioteca local para o objetivo "${preferredObjective}".`,
    "Use estes templates como base, sem copiar placeholders:",
    examples
  ].join("\n");
}
