import {
  Bot,
  BriefcaseBusiness,
  Code2,
  Globe2,
  Image,
  Languages,
  LineChart,
  Mail,
  MonitorSmartphone,
  Rocket,
  ScrollText,
  Sparkles,
  WandSparkles,
  Workflow
} from "lucide-react";

export const profile = {
  name: "崔中行",
  englishName: "Cui Zhongxing",
  role: "Student · AI Builder · Digital Learner",
  avatar: "/images/avatar.png",
  email: "yucui5750@gmail.com",
  douyin: "2007077Q",
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Focus", href: "#focus" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Goals", href: "#goals" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    headline:
      "一个正在用 AI、Codex、跨境电商、语言学习和投资认知构建未来收入系统的学生。",
    subheadline:
      "A student building future income systems through AI, Codex, cross-border e-commerce, language learning, and market understanding.",
    primaryCta: "查看我的项目 / View Projects",
    secondaryCta: "联系合作 / Contact Me"
  },
  about: {
    eyebrow: "About Me",
    title: "把学习、工具和商业认知，变成可以长期复利的能力。",
    paragraphs: [
      "我是崔中行，目前是一名学生，也是一名 AI 工具实践者、Codex 学习者、跨境电商学习者和个人成长记录者。",
      "我正在系统学习 Codex、AI 工具、英语、韩语、跨境电商、投资、加密货币、经济、设计和编程。我希望通过持续实践，把学习能力、工具能力和商业认知结合起来，逐步建立属于自己的数字收入系统。"
    ],
    english: [
      "I am Cui Zhongxing, a student focused on AI tools, Codex, cross-border e-commerce, language learning, investment, crypto, economics, design, and programming.",
      "My goal is to turn learning, execution, and digital tools into practical projects, useful skills, and sustainable income opportunities."
    ]
  },
  focus: [
    {
      title: "AI & Codex",
      description:
        "学习使用 Codex 和 AI 工具完成网站开发、自动化任务、内容生成、数据整理和项目执行。",
      icon: Bot
    },
    {
      title: "Language Learning",
      description: "学习英语和韩语，打开更多信息渠道、商业机会和全球化视野。",
      icon: Languages
    },
    {
      title: "Cross-border E-commerce",
      description: "学习选品、平台规则、内容营销、资料整理和 AI 辅助运营。",
      icon: Globe2
    },
    {
      title: "Investment & Market Learning",
      description: "学习投资、加密货币和经济知识，建立市场认知和风险意识。",
      icon: LineChart
    },
    {
      title: "Design & Programming",
      description: "学习设计和编程，独立完成网站、工具、作品集和自动化项目。",
      icon: Code2
    }
  ],
  projects: [
    { title: "个人自我介绍网站", icon: MonitorSmartphone },
    { title: "AI 学习助手", icon: Sparkles },
    { title: "Codex 项目实践记录", icon: ScrollText },
    { title: "跨境电商资料整理工具", icon: BriefcaseBusiness },
    { title: "AI 内容生成工作流", icon: Workflow },
    { title: "PPT 与视觉内容制作案例", icon: Image },
    { title: "自动化脚本与效率工具", icon: WandSparkles },
    { title: "AI 赚钱实验记录", icon: Rocket }
  ],
  services: [
    "PPT 制作",
    "简单网站制作",
    "AI 图片生成",
    "AI 视频生成",
    "跨境电商资料整理",
    "自动化脚本",
    "AI 工具使用与工作流搭建"
  ],
  goals: [
    {
      label: "30-Day Goal",
      title: "建立稳定学习节奏",
      description:
        "快速学习 AI 工具、Codex、投资基础和英语学习方法，建立稳定的学习与实践节奏。"
    },
    {
      label: "3-Month Goal",
      title: "完成可展示案例",
      description:
        "通过 AI、跨境电商、内容制作和数字技能，探索初步变现机会，完成可展示的项目案例。"
    },
    {
      label: "3-Year Goal",
      title: "形成长期复利系统",
      description:
        "建立可持续的数字收入系统，让 AI 工具、商业认知、投资学习和个人品牌形成长期复利。"
    }
  ],
  contact: {
    title: "Let's build useful digital work.",
    copy:
      "For collaboration, project discussion, or digital work inquiries, feel free to contact me.",
    emailLabel: "邮箱",
    douyinLabel: "抖音",
    icon: Mail
  },
  footer: "© 2026 Cui Zhongxing. Building with AI, learning, and execution."
} as const;
