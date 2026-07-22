// Fonte única de verdade para todo o texto e dados de contato do site.
// Nenhum componente deve ter texto hardcoded — tudo vem daqui.

export const site = {
  name: "Marllon Cezar",
  fullName: "Marllon Cezar Silva de Mélo",
  role: "Psicólogo",
  crp: "Psicólogo — CRP 04/68014",
  city: "Campo Belo",
  state: "MG",
  address: {
    street: "Clínica OrtoClimed - Av. Sete de Setembro, 160, Centro",
    cityLine: "Campo Belo - MG",
    mapsUrl: "https://maps.google.com/?q=Avenida+Sete+de+Setembro,+160,+Centro,+Campo+Belo-MG",
    embedQuery: "Avenida Sete de Setembro, 160, Centro, Campo Belo - MG",
  },
  phoneDisplay: "(35) 99808-3666",
  whatsappNumber: "5535998083666",
  whatsappMessage:
    "Olá, Marllon! Encontrei seu site e gostaria de saber mais sobre o acompanhamento psicológico.",
  email: "mcsdemelo@yahoo.com.br",
  instagramHandle: "@marllonpsi.acp",
  instagramUrl: "https://www.instagram.com/marllonpsi.acp/",
  hours: "Horário a confirmar",
  hoursNote: "As consultas precisam ser previamente agendadas.",
  modality: "Presencial em Campo Belo (MG)",
  metaDescription:
    "Marllon Cezar é psicólogo especialista em Abordagem Centrada na Pessoa, com atendimento em Campo Belo (MG) para homens, casais, adultos e jovens.",
} as const;

export function whatsappLink(customMessage?: string) {
  const message = encodeURIComponent(customMessage ?? site.whatsappMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${message}`;
}

export const nav = [
  { label: "Início", href: "#hero" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Sobre mim", href: "#sobre" },
  { label: "Consultório", href: "#consultorio" },
  { label: "Como funciona", href: "#processo" },
  { label: "FAQ", href: "#faq" },
] as const;

export const header = {
  ctaLabel: "Vamos conversar?",
} as const;

export const hero = {
  eyebrow: site.crp,
  greeting: "Olá, sou",
  name: "Marllon Cezar",
  subtitle:
    "Disponibilizo um espaço de escuta acolhedora e sem julgamento, com base na Abordagem Centrada na Pessoa, para você se compreender melhor e caminhar com mais leveza.",
  checklist: [
    "Homens, casais, adultos e jovens",
    "Abordagem Centrada na Pessoa",
    "Presencial em Campo Belo (MG)",
  ],
  ctaLabel: "Vamos conversar?",
  ctaSecondaryLabel: "Conhecer as especialidades",
  ctaSecondaryHref: "#especialidades",
  image: {
    src: "/images/jadi-hero-full.png",
    alt: "Marllon Cezar, psicólogo, em um ambiente acolhedor",
  },
} as const;

export const heroStat = {
  value: "+200",
  label: "pessoas acompanhadas",
} as const;

export const heroMobile = {
  eyebrow: "PSICÓLOGO",
  title: "Marllon Cezar",
  tagline: "UM ESPAÇO DE ESCUTA PARA VOCÊ SE ENCONTRAR.",
  subtitle:
    "Um espaço de escuta acolhedora e sem julgamentos para você se compreender melhor e caminhar com mais leveza.",
  ctaLabel: "Mais informações",
  image: {
    src: "/images/jadi-hero-mobile-2.png",
    alt: "Marllon Cezar, psicólogo, em um ambiente acolhedor",
  },
} as const;

export const specialties = {
  items: [
    {
      icon: "Flower2",
      title: "Terapia individual para homens",
      description:
        "Através de sessões semanais, acompanho homens em momentos de sobrecarga emocional, ansiedade ou dificuldade em lidar com sentimentos, construindo um espaço seguro para o autoconhecimento.",
    },
    {
      icon: "Sparkle",
      title: "Terapia de casal",
      description:
        "Relações passam por fases de desgaste, dificuldade de comunicação e conflitos recorrentes. Através do acompanhamento psicológico, é possível construir um espaço seguro para o casal se escutar, entender os próprios padrões e fortalecer o vínculo.",
    },
    {
      icon: "Rainbow",
      title: "Terapia para adultos e jovens",
      description:
        "Adultos e jovens podem enfrentar dificuldades como ansiedade, insegurança e conflitos nas relações. Por meio do acompanhamento psicológico, é possível desenvolver autoconhecimento, fortalecer a autoestima e lidar melhor com os desafios emocionais do dia a dia.",
    },
  ],
} as const;

export const about = {
  eyebrow: "SOBRE MIM",
  greeting: "Olá, sou",
  title: "Marllon Cezar",
  paragraphs: [
    "Sou psicólogo especialista em Abordagem Centrada na Pessoa, e acredito que a psicologia é, antes de tudo, um exercício de escuta genuína e acolhimento. Disponibilizo um espaço de cuidado e compromisso com a singularidade de cada pessoa que acompanho.",
    "Atendo homens em momentos de sobrecarga emocional e dificuldade em lidar com sentimentos; acompanho casais que buscam fortalecer a comunicação e o vínculo; e caminho ao lado de adultos e jovens em busca de autoconhecimento e mais qualidade de vida.",
    "Hoje eu quero abrir meu coração e compartilhar com você um pouco da minha trajetória, desde a infância, passando pelos desafios da adolescência até o momento em que escolhi a Psicologia para ser a minha profissão.",
  ],
  formationCard: {
    label: "Formação",
    text: "Psicólogo, Especialista em Abordagem Centrada na Pessoa.",
  },
  image: {
    src: "/images/jadi-sobre.png",
    alt: "Retrato de Marllon Cezar, psicólogo",
  },
} as const;

export const gallery = {
  id: "consultorio",
  eyebrow: "AMBIENTE SEGURO E DE FÁCIL ACESSO",
  title: "Um espaço pensado para você se sentir acolhido(a) e confortável",
  images: [
    {
      src: "/images/jadi-consultorio-01.png",
      alt: "Sala de espera do consultório, com sofá, poltrona e ambiente aconchegante",
    },
    {
      src: "/images/jadi-consultorio-02.png",
      alt: "Ambiente do consultório com iluminação natural e decoração acolhedora",
    },
    {
      src: "/images/jadi-consultorio-03.png",
      alt: "Cantinho de leitura do consultório com estante de livros e poltrona",
    },
  ],
} as const;

export const testimonials = {
  eyebrow: "DEPOIMENTOS",
  title: "O que dizem sobre o meu trabalho",
  isPlaceholder: false,
  items: [
    {
      name: "Paciente no Google",
      rating: 5,
      text: "Ótimo profissional, muito competente, altamente capacitado e além de tudo uma pessoa do bem. Recomendo muito!",
    },
    {
      name: "Paciente no Google",
      rating: 5,
      text: "O Marllon é uma excelente profissional, bastante competente e dedicado no trabalho que realiza. Possui conhecimento em diversas áreas. Eu indico e recomendo seu trabalho!",
    },
    {
      name: "Paciente no Google",
      rating: 5,
      text: "Ótimo profissional. Muito atencioso e dedicado!",
    },
  ],
} as const;

export const process = {
  eyebrow: "COMO FUNCIONA MEU TRABALHO",
  title: "Um processo claro para sua evolução",
  paragraphs: [
    "Meu trabalho começa com um primeiro contato acolhedor, onde você tira suas dúvidas e escolhe o melhor horário para a sua primeira sessão. A partir daí, seguimos com uma escuta atenta e sem julgamento sobre a sua história e o que te trouxe até aqui.",
    "Com base nesse acolhimento inicial, construímos juntos um direcionamento terapêutico alinhado às suas necessidades. O acompanhamento segue com sessões regulares, sempre respeitando o seu tempo e a sua singularidade.",
  ],
  progressBars: [
    { label: "Ambiente acolhedor", value: 100 },
    { label: "Compromisso com o processo", value: 97 },
  ],
  ctaLabel: "Vamos conversar?",
  stat: {
    value: "+200",
    label: "Atendimentos realizados",
  },
  image: {
    src: "/images/jadi-processo.png",
    alt: "Marllon Cezar sentado, anotando durante uma sessão de atendimento",
  },
} as const;

export const reasons = {
  eyebrow: "ALGUNS BENEFÍCIOS DA TERAPIA",
  title: "Benefícios do acompanhamento psicológico",
  subtitle:
    "O acompanhamento psicológico traz benefícios reais para o dia a dia, como maior controle emocional, relações mais saudáveis e mais qualidade de vida.",
  items: [
    {
      number: "01",
      title: "Controle das emoções",
      description:
        "Uma pessoa com mais controle emocional consegue lidar com os desafios do dia a dia de forma mais equilibrada e positiva.",
    },
    {
      number: "02",
      title: "Melhora nas relações",
      description:
        "As relações que vivemos influenciam diretamente nossa motivação, produtividade e satisfação com a vida.",
    },
    {
      number: "03",
      title: "Diminuição da agressividade",
      description:
        "Compreender melhor o que sente ajuda a construir formas mais leves e saudáveis de se relacionar com os outros.",
    },
    {
      number: "04",
      title: "Diminuição da insônia",
      description:
        "Dormir melhor faz diferença em tudo — no humor, na disposição e na forma como encaramos o dia a dia.",
    },
  ],
} as const;

export const faq = {
  eyebrow: "DÚVIDAS FREQUENTES",
  title: "Ainda tem dúvidas?",
  featured: {
    eyebrow: "DÚVIDAS FREQUENTES",
    title: "Por que buscar acompanhamento psicológico?",
    paragraphs: [
      "A terapia é um espaço para encontrar mais clareza diante dos seus conflitos e dificuldades, com o apoio de um profissional. No acompanhamento psicológico, existem técnicas que ajudam cada pessoa a reconhecer o que a tem incomodado no dia a dia.",
      "Esse processo acontece a partir da relação de confiança entre psicólogo e paciente — por isso, é importante encontrar um profissional qualificado, ético e responsável, com quem você se sinta à vontade.",
    ],
    ctaLabel: "Mais informações",
  },
  items: [
    {
      question: "Vocês atendem casais?",
      answer:
        "Sim! Além do atendimento individual, também realizo terapia de casal, focada em melhorar a comunicação e fortalecer o vínculo entre vocês.",
    },
    {
      question: "Quanto tempo dura cada sessão?",
      answer:
        "As sessões de acompanhamento psicológico costumam durar cerca de 50 minutos, com frequência combinada de acordo com a sua necessidade.",
    },
    {
      question: "Você faz diagnóstico ou passa medicação?",
      answer:
        "Não. Como psicólogo, meu trabalho é de acompanhamento psicológico, escuta clínica e avaliação psicológica — não realizo diagnóstico médico nem prescrevo medicação. Quando necessário, oriento o encaminhamento para acompanhamento psiquiátrico em conjunto.",
    },
    {
      question: "Como sei se preciso de acompanhamento psicológico?",
      answer:
        "Não é preciso esperar uma crise. Se você sente sobrecarga, ansiedade, dificuldade nas relações ou vontade de se entender melhor, esse já é um bom motivo para buscar apoio.",
    },
    {
      question: "Como faço para agendar minha primeira sessão?",
      answer:
        "É só me chamar no WhatsApp. Vamos conversar sobre o que te trouxe até aqui e encontrar o melhor horário para começar.",
    },
  ],
} as const;

export const footer = {
  about:
    "Espaço de escuta psicológica com ética, acolhimento e compromisso com a sua singularidade.",
  quickLinksTitle: "Links rápidos",
  hoursTitle: "Horário de atendimento",
  ctaLabel: "Agendar consulta",
  rightsText: `© ${new Date().getFullYear()} ${site.name} — ${site.role}. Todos os direitos reservados.`,
} as const;