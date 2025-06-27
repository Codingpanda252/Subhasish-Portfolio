export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  difficulty: DifficultyLevel;
  status: ProjectStatus;
  category: ProjectCategory;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  dateCompleted?: string;
  features: string[];
  techStack: TechStack;
}

export type DifficultyLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'EXPERT' | 'MASTER';
export type ProjectStatus = 'PLANNING' | 'IN_PROGRESS' | 'BETA' | 'COMPLETE' | 'ACTIVE' | 'ARCHIVED';
export type ProjectCategory = 'WEB_APP' | 'MOBILE_APP' | 'GAME' | 'AI_ML' | 'BLOCKCHAIN' | 'IOT' | 'AR_VR';

export interface TechStack {
  frontend: string[];
  backend: string[];
  database: string[];
  cloud: string[];
  tools: string[];
}

export const projects: Project[] = [
  {
    id: "serenehub-ai-companion",
    title: "SereneHub AI Mood Companion",
    description: "AI-powered dashboard with OpenCV, TensorFlow, and Spotify API, featuring MetaHuman avatars for mood analysis and virtual companionship.",
    longDescription: "A comprehensive AI mood companion that uses computer vision and machine learning to analyze user emotions in real-time. Features include personalized music recommendations via Spotify API, interactive MetaHuman avatars, and advanced mood tracking algorithms for mental wellness support.",
    tags: ["AI/ML", "OpenCV", "TensorFlow", "Unreal Engine", "Spotify API"],
    difficulty: "EXPERT",
    status: "ACTIVE",
    category: "AI_ML",
    githubUrl: "https://github.com/user/serenehub-ai",
    liveUrl: "https://serenehub-demo.com",
    imageUrl: "/images/serenehub.png",
    dateCompleted: "2024-02-20",
    features: [
      "Real-time emotion detection via OpenCV",
      "AI-powered mood analysis and insights",
      "MetaHuman avatar integration",
      "Spotify music recommendations",
      "Personalized wellness dashboard",
      "Voice interaction capabilities"
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Three.js", "Tailwind CSS"],
      backend: ["Python", "FastAPI", "TensorFlow", "OpenCV"],
      database: ["PostgreSQL", "Redis", "Vector DB"],
      cloud: ["AWS", "Docker", "Kubernetes"],
      tools: ["Unreal Engine", "Spotify API", "WebRTC", "Socket.io"]
    }
  },
  {
    id: "maitaverse-virtual-campus",
    title: "MAITAVERSE Virtual Campus",
    description: "VR MAIT campus in Unity + WebGL supporting multiplayer collaboration and NFT-based experience sharing in an immersive virtual environment.",
    longDescription: "A fully immersive virtual reality recreation of MAIT campus built with Unity and WebGL. Features real-time multiplayer collaboration, NFT-based achievement system, virtual classrooms, and social interaction spaces. Students can attend virtual lectures, participate in group projects, and explore campus facilities in VR.",
    tags: ["VR", "Unity", "Blender", "WebGL", "Multiplayer", "NFT"],
    difficulty: "MASTER",
    status: "BETA",
    category: "AR_VR",
    githubUrl: "https://github.com/user/maitaverse",
    liveUrl: "https://maitaverse.edu",
    imageUrl: "/images/maitaverse.png",
    dateCompleted: "2024-01-15",
    features: [
      "Photorealistic campus recreation",
      "Real-time multiplayer collaboration",
      "NFT-based achievement system",
      "Virtual classrooms and labs",
      "Cross-platform VR/WebGL support",
      "Social interaction and events"
    ],
    techStack: {
      frontend: ["Unity", "WebGL", "React", "JavaScript"],
      backend: ["Node.js", "Socket.io", "WebRTC", "Express"],
      database: ["MongoDB", "IPFS", "Blockchain"],
      cloud: ["AWS", "CloudFront", "S3"],
      tools: ["Blender", "Photon Unity", "MetaMask", "VR SDKs"]
    }
  },
  {
    id: "agribot-farming-insights",
    title: "AgriBot Real-time Farming Insights",
    description: "Voice-based farming assistant using Google Cloud Speech, Alexa, and Azure Cognitive Services for AI-powered agricultural guidance.",
    longDescription: "An intelligent farming assistant that provides real-time agricultural insights through voice interaction. Integrates weather data, crop monitoring, pest detection, and market prices. Uses advanced AI to offer personalized farming recommendations based on soil conditions, weather patterns, and historical yield data.",
    tags: ["AI", "Voice Recognition", "Cloud Services", "Agriculture", "IoT"],
    difficulty: "ADVANCED",
    status: "COMPLETE",
    category: "IOT",
    githubUrl: "https://github.com/user/agribot",
    liveUrl: "https://agribot-insights.com",
    imageUrl: "/images/agribot.jpg",
    dateCompleted: "2023-12-10",
    features: [
      "Voice-activated farming queries",
      "Real-time weather and soil monitoring",
      "AI-powered crop recommendations",
      "Pest and disease identification",
      "Market price predictions",
      "Multi-language support"
    ],
    techStack: {
      frontend: ["React Native", "Flutter", "Web Dashboard"],
      backend: ["Python", "Django", "Machine Learning APIs"],
      database: ["PostgreSQL", "InfluxDB", "Time Series"],
      cloud: ["Google Cloud", "Azure", "AWS IoT"],
      tools: ["Alexa Skills Kit", "Google Speech API", "TensorFlow", "IoT Sensors"]
    }
  }
];