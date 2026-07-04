export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  techStack: string[];
  githubUrl: string;
  thumbnail?: string;
}

export const projects: Project[] = [
  {
    id: "llms-from-scratch",
    title: "Building a Language Model From Scratch",
    shortDescription:
      'Followed Sebastian Raschka\'s "Build a Large Language Model (From Scratch)" to implement a transformer, attention mechanism, and training loop in raw PyTorch.',
    techStack: ["PyTorch", "Python", "Transformers", "Deep Learning"],
    githubUrl: "https://github.com/ksbisht941/LLMs-from-scratch",
    thumbnail: "/projects/llms-from-scratch.png",
  },
  {
    id: "mlops-pipeline",
    title: "From Notebook to Production",
    shortDescription:
      "An automated pipeline handling CI/CD, monitoring, and version control so model deployment is never the bottleneck.",
    techStack: ["AWS", "Docker", "CI/CD", "MLOps"],
    githubUrl: "https://github.com/ksbisht941/mlops-pipeline",
    thumbnail: "/projects/mlops-pipeline.png",
  },
  {
    id: "production-rag",
    title: "Giving LLMs a Memory That Scales",
    shortDescription:
      "A production-grade Retrieval-Augmented Generation system combining vector search and generative AI for enterprise-scale data retrieval.",
    techStack: ["Python", "LangChain", "Pinecone", "Generative AI"],
    githubUrl: "https://github.com/ksbisht941/production-rag",
    thumbnail: "/projects/production-rag.png",
  },
  {
    id: "animal-faces",
    title: "Teaching a CNN to Tell Faces Apart",
    shortDescription:
      "A convolutional neural network trained to classify animal species from facial images alone.",
    techStack: ["PyTorch", "CNN", "Computer Vision"],
    githubUrl: "https://github.com/ksbisht941/pytorch-projects/tree/main/animal-faces",
    thumbnail: "/projects/animal-faces.png",
  },
  {
    id: "bean-leafs-lesions-classification",
    title: "Spotting Disease Before It Spreads",
    shortDescription:
      "A CNN-based classifier identifying lesion patterns on bean plant leaves to support early agricultural disease detection.",
    techStack: ["PyTorch", "CNN", "Agritech"],
    githubUrl: "https://github.com/ksbisht941/pytorch-projects/tree/main/bean-leafs-lesions-classification",
    thumbnail: "/projects/bean-leafs-lesions-classification.png",
  },
  {
    id: "news-headlines-dataset-for-sarcasm-detection",
    title: "Can a Model Catch Sarcasm?",
    shortDescription:
      "An NLP classifier trained on a news headlines dataset to detect sarcastic intent in short text.",
    techStack: ["PyTorch", "NLP", "Text Classification"],
    githubUrl:
      "https://github.com/ksbisht941/pytorch-projects/tree/main/news-headlines-dataset-for-sarcasm-detection",
    thumbnail: "/projects/sarcasm-detection.png",
  },
  {
    id: "quran-recitations-for-audio-classification",
    title: "Classifying Sound, Not Just Sight",
    shortDescription:
      "An audio classification model trained to distinguish Quran recitation styles from raw audio data.",
    techStack: ["PyTorch", "Audio ML", "Signal Processing"],
    githubUrl:
      "https://github.com/ksbisht941/pytorch-projects/tree/main/quran-recitations-for-audio-classification",
    thumbnail: "/projects/audio-classification.png",
  },
  {
    id: "rice-type-classification",
    title: "Sorting Grain by the Pixel",
    shortDescription:
      "A classification model distinguishing rice varieties from image data, exploring feature engineering on fine-grained visual differences.",
    techStack: ["PyTorch", "Computer Vision", "Classification"],
    githubUrl: "https://github.com/ksbisht941/pytorch-projects/tree/main/rice-type-classification",
    thumbnail: "/projects/rice-type.png",
  },
  // {
  //   id: "whatsapp-chat-history",
  //   title: "What Your Chat History Says About You",
  //   shortDescription:
  //     "Exploratory analysis of WhatsApp chat data — surfacing patterns in messaging frequency, sentiment, and activity over time.",
  //   techStack: ["Python", "Data Analysis", "NLP"],
  //   githubUrl: "https://github.com/ksbisht941/pytorch-projects/whatsapp-chat-history",
  //   thumbnail: "/projects/whatsapp-chat.png",
  // },
  {
    id: "price-prediction-ml-models",
    title: "Forecasting Numbers That Move",
    shortDescription:
      "A set of regression and ML models experimenting with feature engineering and algorithm selection for price prediction tasks.",
    techStack: ["Python", "Scikit-learn", "Regression", "ML"],
    githubUrl: "https://github.com/ksbisht941/price-prediction-ml-models",
    thumbnail: "/projects/price-prediction.png",
  },
  {
    id: "v2f-travel-document-intelligence",
    title: "Verifying Travel Documents at Scale",
    shortDescription:
      "Production computer vision systems for photograph similarity matching, passport validation, and embassy-specific document preprocessing — built and shipped at Visa2Fly.",
    techStack: ["Computer Vision", "Production ML", "Document AI"],
    githubUrl: "https://www.linkedin.com/in/kuldeep-s-bisht/",
    thumbnail: "/projects/v2f-travel.png",
  },
];

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: "rn-dev",
    company: "V2F Technology",
    role: "React Native Developer",
    period: "May 2025 - Present",
    description:
      "Leading development of Visa2Fly's mobile application, bridging product goals with technical execution to deliver the travel and visa experience.",
    skills: ["React Native", "Mobile UX", "Product Strategy"],
  },
  {
    id: "senior-fe",
    company: "V2F Technology",
    role: "Senior Frontend Developer",
    period: "Jan 2022 - Present",
    description:
      "Owned the frontend roadmap for Visa2Fly's B2C website and internal platforms, turning technical constraints into user-focused product decisions.",
    skills: ["Angular", "System Architecture", "Leadership"],
  },
  {
    id: "fe-dev",
    company: "V2F Technology",
    role: "Frontend Developer",
    period: "Dec 2019 - Apr 2022",
    description:
      "Worked with product and design to evolve Visa2Fly's core platform from MVP to a scalable consumer product supporting thousands of users.",
    skills: ["Frontend Dev", "UI/UX", "Feature Shipping"],
  },
  {
    id: "intern",
    company: "V2F Technology",
    role: "Web Developer Intern",
    period: "Jul 2019 - Dec 2019",
    description:
      "Contributed to the company's first product build, working directly with the founding team to build initial layouts and user flows.",
    skills: ["Web Dev", "Prototyping", "Startups"],
  },
];
