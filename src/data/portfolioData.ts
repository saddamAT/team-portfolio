import type {
  PortfolioData,
  PersonalInfo,
  MetricItem,
  CaseStudy,
  ProjectGalleryItem,
  TeamMember,
  ExperienceItem,
  SkillCategory,
  EducationItem,
  CertificationItem,
  EngineeringPhilosophyItem,
  ArchitectureBlueprint,
} from "../types";

/* =====================================================================
   DEVELOPER 1: Syed Farhan Saeed (Provided CV / Target Developer)
   Role: Senior Unity Game Developer & AI Systems Engineer
   ===================================================================== */

export const SYED_FARHAN_SAEED_PORTFOLIO: PortfolioData = {
  id: "farhan-saeed",
  personal: {
    name: "Syed Farhan Saeed",
    initials: "FS",
    role: "Business Development Executive | B2B Lead Generation",
    secondaryTitle: "Business Development Executive | Xoraix Technology",
    headline:
      "Business Development Executive driving qualified B2B pipeline growth for digital and AI technology services.",
    shortBio:
      "Business development professional with experience in B2B lead generation, client acquisition, sales pipeline management, and strategic outreach across LinkedIn, Upwork, Crunchbase, and other global platforms. Skilled at converting opportunities into revenue and building long-term client relationships in IT and technology services.",
    aboutText: [
      "Business Development Executive focused on B2B lead generation and revenue growth across IT services, AI automation, full-stack development, cloud, and digital transformation solutions.",
      "Experienced in outbound outreach, partner engagement, proposal development, and client relationship management for international technology projects.",
      "Strong track record in driving qualified pipelines, closing projects, and aligning business development goals with delivery capacity and product growth.",
    ],
    email: "faani912@gmail.com",
    phone: "+92-323-6310483",
    location: "Lahore, Pakistan",
    status: "Open to Business Development & Growth Roles",
    hireable: true,
    avatarUrl: "/assets/farhan-avatar.jpg",
    resumeUrl: "/resumes/Syed-Farhan-Saeed.pdf",
    highlights: [
      "B2B Lead Generation",
      "Client Acquisition & Sales Pipeline",
      "Outreach Strategy & Conversion",
      "Account Management & Retention",
    ],
    socials: {
      linkedin: "https://www.linkedin.com/in/syed-farhan-saeed-438599142",
      twitter: "https://twitter.com/faani912",
      website: "https://www.alsyedart.com/",
      email: "faani912@gmail.com",
      phone: "+92-323-6310483",
    },
  },
  metrics: [
    {
      value: "4+ Years",
      label: "Production Game Dev",
      subtext: "PC, Console & Mobile",
    },
    {
      value: "60 FPS",
      label: "Cross-Platform Target",
      subtext: "Strict Frame Budget",
    },
    {
      value: "5+ Titles",
      label: "Commercial Games Shipped",
      subtext: "Featured Gameplay",
    },
    {
      value: "Switch & PC",
      label: "Console Authorized Studio",
      subtext: "Nintendo Certified",
    },
    {
      value: "-40%",
      label: "Defect Reduction",
      subtext: "Architecture Refactors",
    },
  ],
  caseStudies: [
    {
      id: "temple-rezort",
      title: "Temple Rezort — High-Throughput 3D Endless Runner",
      role: "Lead Gameplay Engineer",
      company: "Game Chaser Studio",
      period: "2025",
      category: "Endless Runner / 3D Action",
      flagshipBadge: "Flagship 60 FPS Title (Game Chaser Studio • 2025)",
      techStack: [
        "Unity",
        "C#",
        "Procedural Generation",
        "Object Pooling",
        "Custom Shaders",
        "Profiler",
      ],
      problem:
        "Continuous generation of complex 3D environments caused frequent Garbage Collector spikes, hitching frame rates below 40 FPS on mid-range mobile and console hardware.",
      contributions: [
        "Designed a zero-allocation object pooling architecture for terrain chunks, obstacles, and particle effects, maintaining steady 60 FPS on both mobile and PC targets.",
        "Engineered dynamic procedural path generation with 3+ varied biomes and seamless level chunk transitions.",
        "Created custom lightweight shaders for water, foliage, and lighting to drastically reduce draw calls and GPU memory overhead.",
        "Implemented responsive gyroscope, swipe, and gamepad controls with fine-tuned acceleration physics.",
      ],
      architectureFlow: [
        {
          step: "1. Procedural Chunk Streamer",
          description: "Predictive Segment Spawning",
          subtext:
            "Pre-instantiates chunk pools based on player velocity and distance thresholds.",
        },
        {
          step: "2. Zero-GC Memory Management",
          description: "Ring Buffers & Structs",
          subtext:
            "Eliminates runtime heap allocations during high-speed traversal gameplay.",
        },
        {
          step: "3. Responsive Kinematics",
          description: "C# Physics Controller",
          subtext:
            "Deterministic collision detection preventing clipping on high-velocity turns.",
        },
        {
          step: "4. Render Batching",
          description: "GPU Instancing & Occlusion",
          subtext:
            "Reduces mobile draw calls from 300+ down to <45 per camera frame.",
        },
      ],
      impact: [
        { metric: "60 FPS", label: "Rock-Solid Framerate" },
        { metric: "0 GC Spikes", label: "Smooth Continuous Traversal" },
      ],
      githubUrl: "https://github.com/faani912/GamingPortfolio",
      liveUrl: "https://www.alsyedart.com/",
    },
    {
      id: "rolling-boll",
      title: "Rolling Boll — Physics-Based Precision Mini-Game",
      role: "Core Unity Developer & Level Designer",
      company: "Hazel Mobile",
      period: "2023 – 2024",
      category: "Physics Simulation",
      flagshipBadge: "Player Retention Engineering (Hazel Mobile • 2023–2024)",
      techStack: [
        "Unity",
        "C#",
        "RigidBody Physics",
        "Level Design",
        "UI/UX",
        "Player Analytics",
      ],
      problem:
        "Physics-driven mini-games often suffer from unpredictable trajectory calculations and poor early level retention due to abrupt difficulty curves.",
      contributions: [
        "Architected custom continuous collision physics and angular drag curves to achieve tactile, intuitive ball control.",
        "Designed and balanced 5+ progressive stages with dynamic moving platforms, gravity fields, and interactive puzzles.",
        "Streamlined the onboarding UX flow and visual checkpoint cues, lifting estimated day-7 player retention by ~20%.",
        "Implemented audio-visual feedback loops (haptic triggers, dynamic audio pitch shifting according to momentum).",
      ],
      architectureFlow: [
        {
          step: "1. Physics Sub-Stepping",
          description: "Custom FixedUpdate Kinematics",
          subtext:
            "Predictable angular momentum and restitution across differing refresh rates.",
        },
        {
          step: "2. Dynamic Level Puzzles",
          description: "ScriptableObject Level Architecture",
          subtext:
            "Rapid iteration of puzzle parameters, traps, and velocity boosts.",
        },
        {
          step: "3. Analytics Integration",
          description: "Telemetry & Difficulty Scaling",
          subtext:
            "Identified player drop-off bottlenecks to calibrate obstacle timings.",
        },
      ],
      impact: [
        { metric: "+20%", label: "Estimated Retention Boost" },
        { metric: "5+ Stages", label: "Balanced Progression" },
      ],
      githubUrl: "https://github.com/faani912/GamingPortfolio",
      liveUrl: "https://www.alsyedart.com/",
    },
    {
      id: "fps-shooting-game",
      title: "Tactical Combat Simulator — 3D First-Person Shooter",
      role: "Unity Systems & AI Engineer",
      company: "Penandweb (PVT) Limited",
      period: "2023",
      category: "FPS / Combat Simulation",
      flagshipBadge: "Combat AI & Rendering Pipeline (Penandweb • 2023)",
      techStack: [
        "Unity URP",
        "C#",
        "Enemy AI Behavior Trees",
        "NavMesh",
        "Inverse Kinematics",
        "Audio Spatialization",
      ],
      problem:
        "Enemy combatants in dense 3D urban environments exhibited robotic pathfinding and unnatural aiming behavior that broke player immersion.",
      contributions: [
        "Programmed sophisticated AI behavior trees featuring cover evaluation, flanking routes, suppression fire, and alert states via NavMesh.",
        "Built a realistic ballistics system with bullet drop, surface penetration coefficients, and particle ricochet dynamics.",
        "Implemented Inverse Kinematics (IK) for precise procedural weapon aiming and dynamic foot placement on uneven terrain.",
        "Configured Unity Universal Render Pipeline (URP) post-processing with bloom, color grading, and ambient occlusion.",
      ],
      architectureFlow: [
        {
          step: "1. Perception & Sensing",
          description: "Raycast Vision & Noise Auditing",
          subtext:
            "Enemies detect player flashlight, footprints, and gunfire origins dynamically.",
        },
        {
          step: "2. Behavior Tree Evaluation",
          description: "Hierarchical State Evaluation",
          subtext:
            "Squad tactics: cover seeking, grenade flushing, and retreating under fire.",
        },
        {
          step: "3. Ballistics & VFX",
          description: "Raycast + Physics Hybrid Projectiles",
          subtext:
            "Decal projection, muzzle flashes, and accurate surface hit impacts.",
        },
      ],
      impact: [
        { metric: "<2ms", label: "AI Compute Budget" },
        { metric: "Tactical Squads", label: "Coordinated Combat AI" },
      ],
      githubUrl: "https://github.com/faani912/GamingPortfolio",
      liveUrl: "https://www.alsyedart.com/",
    },
    {
      id: "ground-booking-app",
      title: "Ground Booking — Realtime Venue Reservation Mobile App",
      role: "Mobile & Cloud Developer",
      company: "Independent Production",
      period: "2024",
      category: "Android Mobile Application",
      flagshipBadge: "Mobile Engineering & Realtime Sync",
      techStack: [
        "Android (Java/Kotlin)",
        "Firebase Firestore",
        "Firebase Auth",
        "Cloud Messaging",
        "Material Design",
      ],
      problem:
        "Local sports arenas and turf grounds relied on handwritten logbooks causing double bookings and manual payment reconciliations.",
      contributions: [
        "Built a native Android application enabling athletes to discover sports venues, check live slot availability, and reserve grounds in real time.",
        "Integrated Firebase Firestore for synchronized live booking statuses with optimistic UI updates.",
        "Configured Firebase Cloud Messaging for automatic match reminders, schedule changes, and weather alerts.",
        "Designed an intuitive Material 3 UI with dark mode support and responsive slot calendar pickers.",
      ],
      architectureFlow: [
        {
          step: "1. Venue Search & Geofencing",
          description: "Slot Discovery Interface",
          subtext:
            "Filter grounds by turf type, illumination, amenities, and hourly pricing.",
        },
        {
          step: "2. Atomic Reservation Transaction",
          description: "Firestore Batch Operations",
          subtext:
            "Guarantees zero double-booking even under concurrent simultaneous checkouts.",
        },
        {
          step: "3. Cloud Notification Dispatch",
          description: "FCM Push Engine",
          subtext:
            "Immediate confirmation with calendar ICS export and SMS receipt.",
        },
      ],
      impact: [
        { metric: "Zero", label: "Scheduling Conflicts" },
        { metric: "Real-Time", label: "Live Slot Synchronization" },
      ],
      githubUrl: "https://github.com/faani912",
    },
  ],
  projectGallery: [
    {
      id: "temple-rezort-game",
      title: "Temple Rezort",
      projectTitle: "Temple Rezort — High-Throughput 3D Endless Runner",
      category: "Game Dev",
      imageUrl: "/images/farhan-projects-images/xoraix-fav.svg",
      description:
        "A high-performance 3D endless runner built with Unity and C#, optimized for solid 60 FPS on Nintendo Switch and mobile devices using zero-allocation ring buffer object pooling.",
      techStack: [
        "Unity",
        "C#",
        "Procedural Generation",
        "Object Pooling",
        "URP Shaders",
        "Profiler",
      ],
      role: "Lead Gameplay Engineer",
      challenges: [
        "Eliminating Garbage Collection hitching during fast endless terrain streaming.",
      ],
      solutions: [
        "Engineered pre-allocated object pools and low-draw-call lightweight shaders.",
      ],
      featured: true,
      liveUrl: "https://www.alsyedart.com/",
      githubUrl: "https://github.com/faani912/GamingPortfolio",
    },
    {
      id: "rolling-boll-game",
      title: "Rolling Boll",
      projectTitle: "Rolling Boll — Physics-Based Precision Mini-Game",
      category: "Game Dev",
      imageUrl: "/images/farhan-projects-images/xoraix-fav.svg",
      description:
        "A tactile physics-based puzzle arcade title engineered with continuous collision detection, customized drag curves, and progressive stage mechanics.",
      techStack: [
        "Unity",
        "C#",
        "RigidBody Physics",
        "Level Design",
        "Analytics",
      ],
      role: "Core Unity Developer",
      challenges: [
        "Ensuring deterministic angular physics across variable mobile frame rates.",
      ],
      solutions: [
        "Designed FixedUpdate sub-stepping and ScriptableObject obstacle tuning.",
      ],
      featured: true,
      liveUrl: "https://www.alsyedart.com/",
      githubUrl: "https://github.com/faani912/GamingPortfolio",
    },
    {
      id: "tactical-combat-sim",
      title: "Tactical Combat Simulator",
      projectTitle: "Tactical Combat Simulator — 3D First-Person Shooter",
      category: "Game Dev",
      imageUrl: "/images/laptop-bg.jpg",
      description:
        "3D first-person shooter featuring sophisticated squad AI behavior trees, procedural weapon recoil, bullet ballistics, and spatialized audio.",
      techStack: [
        "Unity URP",
        "C#",
        "NavMesh",
        "Behavior Trees",
        "Inverse Kinematics",
      ],
      role: "Unity Systems & AI Engineer",
      challenges: [
        "Simulating tactical squad flanking and cover evaluation in under 2ms CPU budget.",
      ],
      solutions: [
        "Programmed raycast perception auditing and hierarchical decision trees.",
      ],
      liveUrl: "https://www.alsyedart.com/",
      githubUrl: "https://github.com/faani912/GamingPortfolio",
    },
    {
      id: "ground-booking-venue",
      title: "Ground Booking Mobile App",
      projectTitle: "Ground Booking — Realtime Venue Reservation Mobile App",
      category: "Web app",
      imageUrl: "/images/laptop-bg.jpg",
      description:
        "Android reservation platform with real-time slot synchronization, automated notification dispatch, and conflict-free booking via Firebase Firestore.",
      techStack: [
        "Android",
        "Kotlin",
        "Firebase Firestore",
        "Cloud Messaging",
        "Material 3",
      ],
      role: "Mobile & Cloud Developer",
      challenges: [
        "Preventing simultaneous double-bookings during peak match scheduling.",
      ],
      solutions: [
        "Implemented atomic Firestore transaction batches and instant push notifications.",
      ],
      githubUrl: "https://github.com/faani912",
    },
  ],
  experiences: [
    {
      title: "Business Development Executive",
      company: "Xoraix Technology",
      location: "Lahore, Pakistan",
      period: "Jan 2026 – Present",
      active: true,
      employmentType: "Full-time / Remote",
      summary:
        "Driving B2B lead generation and client acquisition across international technology markets with a focus on AI, cloud, and software delivery services.",
      bulletPoints: [
        "Drive B2B lead generation across multiple platforms, including LinkedIn Sales Navigator, Upwork, and targeted cold outreach campaigns, consistently building a qualified sales pipeline.",
        "Generate $5,000+ in monthly revenue for the company through new client acquisition and ongoing account management, with a focus on scaling further.",
        "Pitch and close projects across a broad technology stack, including Python/Django, JavaScript/TypeScript, React.js, Next.js, Node.js, MERN Stack, AWS, Azure, GCP, and AI/Automation solutions including n8n, Voice Agents, and MCP Integrations.",
        "Conduct daily resource interviews and manage internal talent pipeline to align delivery capacity with incoming project demand.",
        "Develop and execute outreach strategies for Full Stack, Front-End, Back-End, and Cloud & DevOps services, positioning Xoraix as a go-to tech partner for international clients.",
      ],
      technologies: [
        "B2B Lead Generation",
        "LinkedIn Sales Navigator",
        "Cold Outreach",
        "Upwork",
        "Client Acquisition",
        "AI Automation",
        "Python",
        "Django",
        "React.js",
        "Next.js",
        "Node.js",
        "AWS",
        "Azure",
        "GCP",
      ],
    },
    {
      title: "Business Development Executive",
      company: "Game Chaser Studio",
      location: "Lahore, Pakistan",
      period: "Feb 2025 – Dec 2025",
      active: false,
      employmentType: "Full-time",
      summary:
        "Spearheaded client acquisition strategy and improved the studio's active client base through targeted outreach and prospect management.",
      bulletPoints: [
        "Spearheaded client acquisition strategy, securing 5+ new project contracts and driving a 30% expansion in the studio's active client base within 14 months.",
        "Built and managed a high-quality B2B lead pipeline through targeted outreach via LinkedIn Sales Navigator, Upwork, Crunchbase, and event-based platforms.",
        "Aligned cross-functional teams with business development goals, ensuring on-time delivery and 100% client satisfaction across active projects.",
      ],
      technologies: [
        "B2B Lead Generation",
        "LinkedIn Sales Navigator",
        "Upwork",
        "Crunchbase",
        "Client Acquisition",
        "Sales Strategy",
      ],
    },
    {
      title: "Associate Business Developer",
      company: "Dev Console",
      location: "Lahore, Pakistan",
      period: "Feb 2024 – Jan 2025",
      active: false,
      employmentType: "Full-time",
      summary:
        "Generated qualified technology prospects for the US IT market and expanded the company’s freelance client pipeline through strategic outreach.",
      bulletPoints: [
        "Generated a consistent pipeline of qualified US IT market prospects via LinkedIn Premium, Sales Navigator, and 10+ platforms including Crunchbase, G2.com, AppSumo, Y Combinator, Pitch Ground, Merchant Circle, AllEvents.in, 10Times.com, Eventbrite, and Yelp.",
        "Managed end-to-end Upwork bidding, crafting tailored proposals and identifying high-value freelance projects, growing the company's freelance client base quarter-over-quarter.",
        "Drove brand awareness through strategic social media management across LinkedIn, Facebook, and Instagram, including content creation, job campaigns, and promotional posts.",
        "Conducted competitor and market research to sharpen outreach messaging, improving lead-to-meeting conversion rates through data-driven sales strategies.",
        "Maintained long-term client relationships via consistent professional communication, contributing to high retention and repeat referral business.",
      ],
      technologies: [
        "Sales Navigator",
        "LinkedIn Premium",
        "Upwork",
        "Outreach Strategy",
        "CRM/Prospecting",
        "Market Research",
      ],
    },
  ],
  skillCategories: [
    {
      name: "Game Engines & Core Languages",
      icon: "server",
      skills: [
        "Unity Engine",
        "C#",
        "C++",
        "3ds Max",
        "Object-Oriented Programming (OOP)",
        "ScriptableObjects",
        "Memory Profiling",
        "Shader Graph",
      ],
      featuredSkills: ["Unity Engine", "C#", "C++", "Shader Graph"],
    },
    {
      name: "Game Design & Specializations",
      icon: "sparkles",
      skills: [
        "FPS Games",
        "Endless Runners",
        "Physics Simulation",
        "Level Design",
        "Cinematic Cutscenes",
        "Enemy AI Behavior Trees",
        "Combat Mechanics",
      ],
      featuredSkills: [
        "FPS Games",
        "Physics Simulation",
        "Enemy AI Behavior Trees",
      ],
    },
    {
      name: "Cross-Platform & Deployment",
      icon: "cloud",
      skills: [
        "Nintendo Switch (Console)",
        "PC (Windows / Steam)",
        "Mobile (Android & iOS)",
        "WebGL (Browser)",
        "AR / VR (Spatial)",
      ],
      featuredSkills: [
        "Nintendo Switch (Console)",
        "PC (Windows / Steam)",
        "Mobile (Android & iOS)",
      ],
    },
    {
      name: "Mobile & Cloud Services",
      icon: "database",
      skills: [
        "Java",
        "Kotlin",
        "Android Studio",
        "Firebase Firestore",
        "Firebase Auth",
        "Cloud Messaging (FCM)",
        "REST APIs",
      ],
      featuredSkills: ["Kotlin", "Android Studio", "Firebase Firestore"],
    },
    {
      name: "UI/UX & Digital Design",
      icon: "layout",
      skills: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Canva",
        "Game HUD & Menu Systems",
        "Motion Feedback",
        "Texture Mapping",
      ],
      featuredSkills: ["Adobe Photoshop", "Game HUD & Menu Systems"],
    },
    {
      name: "Workflow, Tools & Architecture",
      icon: "shield-check",
      skills: [
        "Git & GitHub",
        "Agile / Scrum",
        "Trello",
        "Slack",
        "Microsoft Teams",
        "Zero-Allocation Pooling",
        "CI/CD Automation",
      ],
      featuredSkills: [
        "Git & GitHub",
        "Agile / Scrum",
        "Zero-Allocation Pooling",
      ],
    },
  ],
  education: [
    {
      degree: "B.Sc. Computer Science",
      institution: "Allama Iqbal Open University (AIOU)",
      location: "Islamabad, Pakistan",
      period: "2018 – 2022",
      details:
        "Focused on computer science fundamentals, software development, and technical problem-solving within a business and digital environment.",
    },
  ],
  certifications: [
    {
      title: "Game Development",
      issuer: "Professional Training Program",
      period: "Feb 2022 – Aug 2022",
    },
    {
      title: "Basics of 3D Animation",
      issuer: "Training Program",
      period: "Jan 2019 – Jun 2019",
    },
    {
      title: "Graphic Designing",
      issuer: "Training Program",
      period: "Jan 2018 – Jun 2018",
    },
  ],
  philosophies: [
    {
      number: "01",
      title: "60 FPS or Bust",
      tag: "Performance",
      description:
        "Strict frame-budget discipline. Zero-allocation memory architectures that eliminate Garbage Collector hitching across low-spec and console hardware.",
    },
    {
      number: "02",
      title: "Responsive Kinematics",
      tag: "Game Feel",
      description:
        "Crisp tactile feedback, precise collision meshes, and predictable physical momentum. Great games succeed on the immediate joy of player controls.",
    },
    {
      number: "03",
      title: "Modular Decoupling",
      tag: "Architecture",
      description:
        "Leveraging ScriptableObjects and event-driven patterns. Subsystems remain independent, testable, and reusable without spaghetti dependencies.",
    },
    {
      number: "04",
      title: "Multi-Platform Portability",
      tag: "Delivery",
      description:
        "Architecting clean input and rendering abstractions so titles seamlessly deploy across PC, Nintendo Switch, Android, iOS, and WebGL.",
    },
  ],
  blueprint: {
    badge: "Console & Gameplay Engine Architecture",
    title: "High-Throughput 60 FPS Game Loop & AI Pipeline",
    description:
      "How I architect scalable game systems: separating physics simulation, predictive enemy perception trees, zero-allocation memory pools, and multi-threaded rendering.",
    steps: [
      {
        stepNumber: "01",
        title: "Zero-Allocation Pooling",
        tech: "Pre-Warmed Ring Buffers",
        description:
          "Recycles particles, projectile instances, and audio sources to eradicate Garbage Collection hitching.",
      },
      {
        stepNumber: "02",
        title: "Hierarchical Enemy AI",
        tech: "NavMesh & Behavior Trees",
        description:
          "Squad tactics: cover-seeking, flanking trajectories, and dynamic suppression states in <2ms CPU budget.",
      },
      {
        stepNumber: "03",
        title: "Deterministic Kinematics",
        tech: "Physics Sub-Stepping",
        description:
          "Continuous collision detection preventing clipping at high speeds regardless of variable display refresh rates.",
      },
      {
        stepNumber: "04",
        title: "Universal Render Pipeline",
        tech: "GPU Instancing & URP",
        description:
          "Batch draw calls and LOD meshes calibrated for Nintendo Switch, PC, and mobile thermal ceilings.",
        highlight: true,
      },
    ],
    codeSnippets: [
      {
        language: "csharp",
        label: "C# (Unity Engine)",
        filename: "EnemyAIBrain.cs",
        code: `using UnityEngine;
using UnityEngine.AI;

[RequireComponent(typeof(NavMeshAgent))]
public class TacticalCombatAI : MonoBehaviour
{
    [SerializeField] private LayerMask visionMask;
    [SerializeField] private float combatRadius = 18f;
    private NavMeshAgent agent;
    private Transform playerTarget;
    private bool inFlankPosition;

    void Awake()
    {
        agent = GetComponent<NavMeshAgent>();
        agent.updateRotation = true;
    }

    public void EvaluateCombatTactics(Vector3 targetPos)
    {
        float dist = Vector3.Distance(transform.position, targetPos);
        if (dist > combatRadius)
        {
            agent.SetDestination(targetPos);
            return;
        }

        // Evaluate flanking vector to prevent bottleneck grouping
        Vector3 flankOffset = Vector3.Cross(Vector3.up, (targetPos - transform.position).normalized) * 6f;
        agent.SetDestination(targetPos + flankOffset);
    }
}`,
      },
      {
        language: "csharp",
        label: "C# (Object Pooling)",
        filename: "ZeroGCPool.cs",
        code: `using System.Collections.Generic;
using UnityEngine;

public class ProjectilePoolManager : MonoBehaviour
{
    public static ProjectilePoolManager Instance { get; private set; }
    [SerializeField] private GameObject projectilePrefab;
    [SerializeField] private int initialCapacity = 64;

    private readonly Queue<GameObject> pool = new Queue<GameObject>();

    void Awake()
    {
        Instance = this;
        for (int i = 0; i < initialCapacity; i++)
        {
            var obj = Instantiate(projectilePrefab, transform);
            obj.SetActive(false);
            pool.Enqueue(obj);
        }
    }

    public GameObject Spawn(Vector3 position, Quaternion rotation)
    {
        var projectile = pool.Count > 0 ? pool.Dequeue() : Instantiate(projectilePrefab, transform);
        projectile.transform.SetPositionAndRotation(position, rotation);
        projectile.SetActive(true);
        return projectile;
    }

    public void Despawn(GameObject obj)
    {
        obj.SetActive(false);
        pool.Enqueue(obj);
    }
}`,
      },
    ],
    simulationConfig: {
      buttonLabel: "Run 60 FPS Physics Simulation",
      sampleData: {
        engine: "Unity 2023.3 LTS",
        targetPlatform: "Nintendo Switch / PC",
        fpsTarget: 60,
      },
    },
  },
  contactConfig: {
    headline: "Let's Build Something Immersive",
    subtext:
      "Looking for an experienced Senior Unity Game Developer for your next PC, console, or mobile project? Open to full-time roles and high-impact studio contracts.",
    availableNotice: "Available for Full-time Roles & Studio Contracts",
    projectTypes: [
      "Unity 3D/2D Game Development",
      "Nintendo Switch / Console Porting",
      "FPS / Combat AI Systems Architecture",
      "Performance Optimization & 60 FPS Tuning",
      "Android / Mobile Game & App Engineering",
    ],
    budgetOptions: [
      "Studio Full-Time Role",
      "Contract: $10,000 – $25,000",
      "Contract: $25,000 – $50,000+",
      "Consulting / Profiling Audit",
    ],
  },
};

/* =====================================================================
   DEVELOPER 2: Arslan Syed (Senior Full Stack Engineer)
   ===================================================================== */

export const ARSLAN_SYED_PORTFOLIO: PortfolioData = {
  id: "arslan-syed",
  personal: {
    name: "Arslan Syed",
    initials: "AS",
    role: "Senior Full Stack & AI Engineer",
    secondaryTitle: "Agentic AI & Workflow Automation",
    headline:
      "Building Agentic AI, AI Automation, and Intelligent SaaS Workflows.",
    shortBio:
      "Senior Full Stack Engineer with 7+ years of experience building web applications, APIs, and cloud services. Recent work includes multi-agent accounts-payable automation and invoice OCR at Aimyable, team leadership at Inner Machinations, and full-stack roles at Meshlogix Solutions, Banyo Ltd, and Bright Byte Solutions. Experienced with Django REST Framework, Next.js, TypeScript, Node.js, React, PostgreSQL, AWS, and MapBox.",
    aboutText: [
      "Senior Full Stack Engineer working across TypeScript, Next.js, Node.js, and Python backend services, with recent experience building AI-powered accounts-payable automation at Aimyable.",
      "Led a five-developer team at Inner Machinations on Udu.com. Previously built full-stack products at Meshlogix Solutions, Banyo Ltd, and Bright Byte Solutions, including mapping features with MapBox and satellite data.",
      "Passionate about clean modular software design, zero-defect CI/CD pipelines, high-conversion UI dashboards, and resilient cloud infrastructure.",
    ],
    email: "arslan2591@gmail.com",
    location: "Remote (Worldwide) / Pakistan",
    status: "Available for Senior Roles & High-Impact Contracts",
    hireable: true,
    avatarUrl: "/assets/Arslan.jpeg",
    resumeUrl: "/resumes/Arslan-Syed.pdf",
    highlights: [
      "Agentic AI & AI Engineering",
      "AI Automation & Workflow Automation",
      "Forward Deployed Engineering (FDE)",
      "Full-Stack Modernization (TypeScript, Next.js & React)",
      "High-Throughput GraphQL & REST API Gateways",
      "Geospatial Intelligence & MapBox Satellite Integration",
      "PostgreSQL Optimization, Docker & Automated CI/CD Pipelines",
    ],
    socials: {
      github: "https://github.com/Arslan2591",
      linkedin: "https://www.linkedin.com/in/arslan-syed/",
      website: "https://arslansyed.com",
      email: "arslan2591@gmail.com",
    },
  },
  metrics: [
    {
      value: "7+ Years",
      label: "Production Engineering",
      subtext: "Full Stack & Cloud",
    },
    {
      value: "24+",
      label: "GitHub Repositories",
      subtext: "Open Source & Tools",
    },
    { value: "<120ms", label: "P95 API Latency", subtext: "GraphQL & REST" },
    {
      value: "-35%",
      label: "Bundle Size Reduction",
      subtext: "Next.js App Router",
    },
    { value: "99.9%", label: "Container Uptime", subtext: "Docker & CI/CD" },
  ],
  caseStudies: [
    {
      id: "enterprise-saas-platform",
      title: "Enterprise Multi-Tenant SaaS Platform & Dashboard",
      role: "Lead Full Stack Architect",
      period: "2024 – 2025",
      category: "SaaS Architecture & Analytics",
      flagshipBadge: "Flagship Full Stack Architecture (2024–2025)",
      techStack: [
        "Next.js App Router",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Tailwind CSS",
        "Redis",
      ],
      problem:
        "Complex administrative dashboards suffered from sluggish page loads, redundant client-side re-renders, and fragmented API queries across distributed multi-tenant customer accounts.",
      contributions: [
        "Built an end-to-end full stack architecture using Next.js App Router and TypeScript, reducing client-side bundle size by 35% with Server Components.",
        "Implemented normalized PostgreSQL database schemas and query caching layers with Redis, improving P95 response latency on dense analytics tables.",
        "Engineered reusable UI component systems with Tailwind CSS, strict form validations, and role-based permissions.",
      ],
      impact: [
        { metric: "-35%", label: "Bundle Size" },
        { metric: "<120ms", label: "P95 Query Latency" },
        { metric: "99.9%", label: "SLA Availability" },
      ],
      githubUrl: "https://github.com/Arslan2591",
      liveUrl: "https://arslansyed.com",
    },
    {
      id: "geospatial-mapping-dashboard",
      title: "Geospatial Intelligence & Satellite Mapping Engine",
      company: "Bright Byte Solutions",
      role: "Senior Full Stack Engineer",
      period: "2023 – 2024",
      category: "Geospatial & High-Resolution Telemetry",
      flagshipBadge: "Bright Byte Solutions • 2023–2024",
      techStack: [
        "React",
        "Redux-Saga",
        "MapBox GL",
        "Satellite Imagery",
        "Node.js",
        "GraphQL",
        "PostgreSQL",
        "PostGIS",
      ],
      problem:
        "Displaying millions of live coordinate telemetry points and high-resolution satellite raster tiles caused severe browser thread blocking and slow viewport panning.",
      contributions: [
        "Integrated MapBox GL and vector tile servers with custom satellite imagery overlays, enabling seamless 60 FPS viewport panning and zooming across worldwide coordinates.",
        "Designed GraphQL subscription and polling APIs to deliver low-latency telemetry updates without page reloads.",
        "Architected deterministic state management using Redux-Saga to prevent race conditions during rapid map clustering updates.",
      ],
      impact: [
        { metric: "60 FPS", label: "Smooth Map Pan & Zoom" },
        { metric: "1M+", label: "Coordinates Rendered" },
        { metric: "<180ms", label: "Tile Stream Latency" },
      ],
      githubUrl: "https://github.com/Arslan2591",
    },
    {
      id: "high-throughput-api-gateway",
      title: "High-Throughput GraphQL & Microservices Gateway",
      role: "Backend Architect",
      period: "2022 – 2023",
      category: "Backend & Cloud Infrastructure",
      techStack: [
        "Node.js",
        "TypeScript",
        "GraphQL",
        "Docker",
        "PostgreSQL",
        "GitHub Actions CI/CD",
      ],
      problem:
        "Disparate backend endpoints led to API payload over-fetching, high mobile latency, and lengthy deployment cycles requiring manual server intervention.",
      contributions: [
        "Unified disjointed REST microservices into a cohesive, strongly-typed GraphQL API Gateway with schema stitching.",
        "Containerized all backend services with Docker and built automated GitHub Actions CI/CD pipelines, slashing deployment time by 60%.",
        "Implemented database connection pooling and optimized indexes in PostgreSQL to handle high concurrent traffic.",
      ],
      impact: [
        { metric: "-60%", label: "Deployment Time" },
        { metric: "42%", label: "Fewer Runtime Bugs" },
      ],
      githubUrl: "https://github.com/Arslan2591",
    },
  ],
  projectGallery: [
    {
      id: "aimyable-arslan",
      title: "Aimyable",
      projectTitle: "Aimyable - AI-Powered Accounts Payable Automation SaaS",
      category: "AI SaaS",
      imageUrl: "/images/arslan-projects-images/aimyable.png",
      description:
        "An AI-powered accounts-payable automation SaaS built with Django DRF, Next.js, TypeScript, PostgreSQL, and AWS. Combines multi-agent invoice processing, OCR parsing, and desktop automation.",
      techStack: ["TypeScript", "Next.js", "PostgreSQL", "Docker", "AWS"],
      role: "Lead Full Stack Architect",
      challenges: [
        "Optimizing large document rendering pipelines and enterprise multi-tenant auth workflows.",
      ],
      solutions: [
        "Built server-rendered Next.js workflows with Server Actions and automated database caching.",
      ],
      featured: true,
    },
    {
      id: "udu-arslan",
      title: "UDU",
      projectTitle:
        "UDU - Community Platform for Creating, Connecting & Contributing",
      category: "Social Platform",
      imageUrl: "/images/arslan-projects-images/udu.png",
      description:
        "A social platform designed for collaborative community creation, user networking, and knowledge contribution with rich interactive dashboards.",
      techStack: [
        "TypeScript",
        "React",
        "Next.js App Router",
        "Node.js",
        "Clerk Auth",
        "Tailwind CSS",
      ],
      role: "Senior Full Stack Engineer / Team Lead",
      challenges: [
        "Reducing client bundle sizes and accelerating sub-second dynamic feed rendering.",
      ],
      solutions: [
        "Streamlined client bundles by 25% and implemented Clerk organization auth.",
      ],
      featured: true,
    },
    {
      id: "geospatial-mapping",
      title: "Geospatial Intelligence Dashboard",
      projectTitle: "Geospatial Intelligence & Satellite Mapping Engine",
      category: "Web app",
      imageUrl: "/images/saddam-projects-images/Halo.jpg",
      description:
        "Real-time vehicle telemetry and satellite coordinate mapping engine using MapBox GL, GraphQL, and PostGIS.",
      techStack: ["React", "Redux-Saga", "MapBox GL", "GraphQL", "PostGIS"],
      role: "Senior Full Stack Engineer",
      featured: true,
    },
    {
      id: "banyo-pos-arslan",
      title: "Banyo POS System",
      projectTitle: "Banyo POS - Point of Sale System",
      category: "Web app",
      imageUrl: "/images/saddam-projects-images/POS.jpg",
      description:
        "Production retail point-of-sale platform with offline inventory synchronization and automated AWS EC2 deployments.",
      techStack: [
        "Django REST Framework",
        "Next.js",
        "MongoDB",
        "AWS EC2",
        "GitHub Actions",
      ],
      role: "Full Stack Developer",
    },
  ],
  experiences: [
    {
      title: "Senior Full Stack Engineer",
      company: "Aimyable, Inc.",
      location: "Remote",
      period: "Apr 2025 – Present",
      active: true,
      bulletPoints: [
        "Build an AI-powered accounts-payable SaaS with Django REST Framework, Next.js, TypeScript, PostgreSQL, Docker, and AWS.",
        "Implemented a multi-agent invoice workflow with orchestration, database-query, and RPA agents for end-to-end task automation.",
        "Built invoice ingestion and structured data extraction using Google Cloud Vision OCR, and connected workflow orchestration to a Windows RPA client over WebSockets.",
        "Designed PostgreSQL schemas and REST APIs for onboarding, invitations, business management, subscriptions, and invoice workflows; contributed to authentication, tenant provisioning, and the Next.js admin experience.",
      ],
      technologies: [
        "Django REST Framework",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Google Cloud Vision",
        "WebSockets",
        "Docker",
        "AWS",
      ],
    },
    {
      title: "Senior Full Stack Engineer / Team Lead",
      company: "Inner Machinations (Silicon Valley)",
      location: "Remote",
      period: "Mar 2024 – Apr 2025",
      active: false,
      bulletPoints: [
        "Led a team of five senior developers building Udu.com, a topic-based communication platform, using an Agile process.",
        "Developed the TypeScript and React (Next.js) frontend, improving page load times by around 25% through component and API improvements.",
        "Developed Node.js APIs, moved critical operations to Next.js Server Actions, and customized Clerk authentication for users and organizations.",
        "Built posting and interaction features for text, image and PDF attachments, comments, and topic search.",
      ],
      technologies: [
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Clerk",
        "Server Actions",
      ],
    },
    {
      title: "Senior Full Stack Developer",
      company: "Meshlogix Solutions",
      location: "Remote",
      period: "Nov 2023 – Nov 2024",
      active: false,
      bulletPoints: [
        "Integrated the Bland AI voice agent into the backend to automate review collection.",
        "Worked across Node.js and Django backend services, integration workflows, and data processing.",
        "Implemented server-side web authentication with NextAuth.js and improved reliability using caching, load balancing, and Docker containerization.",
      ],
      technologies: [
        "Node.js",
        "Python",
        "Django",
        "Bland AI",
        "NextAuth.js",
        "Docker",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Banyo Ltd",
      location: "UK Remote",
      period: "Apr 2023 – Mar 2024",
      active: false,
      bulletPoints: [
        "Built a point-of-sale and inventory web application with a Django backend and Next.js frontend, covering REST APIs across product modules.",
        "Implemented real-time inventory management with Django REST Framework and MongoDB, and built a server-rendered POS interface.",
        "Configured AWS EC2 infrastructure and a GitHub Actions CI/CD pipeline to automate deployments.",
      ],
      technologies: [
        "Django REST Framework",
        "Next.js",
        "MongoDB",
        "AWS EC2",
        "GitHub Actions",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Bright Byte Solutions",
      location: "Lahore",
      period: "Jan 2018 – Apr 2023",
      active: false,
      bulletPoints: [
        "Built TypeScript backend services in Node.js, improving maintainability and type safety while reducing recurring production bugs.",
        "Worked on full-stack projects using GraphQL, REST APIs, React, and Redux-Saga, improving data retrieval for key queries.",
        "Integrated MapBox and satellite mapping features, and set up PostgreSQL deployment and GitHub-based CI/CD.",
      ],
      technologies: [
        "Node.js",
        "TypeScript",
        "React",
        "Redux-Saga",
        "GraphQL",
        "MapBox",
        "PostgreSQL",
        "GitHub Actions",
      ],
    },
  ],
  skillCategories: [
    {
      name: "Frontend Engineering",
      icon: "layout",
      skills: [
        "React",
        "Next.js (App Router)",
        "TypeScript",
        "Redux-Saga",
        "Tailwind CSS",
        "JavaScript (ESNext)",
        "HTML5 & Modern CSS",
      ],
      featuredSkills: [
        "React",
        "Next.js (App Router)",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      name: "Backend & APIs",
      icon: "server",
      skills: [
        "Node.js",
        "Express",
        "GraphQL",
        "Python",
        "Django",
        "RESTful APIs",
        "Microservices Architecture",
      ],
      featuredSkills: ["Node.js", "Express", "GraphQL", "Python"],
    },
    {
      name: "AI & Workflow Automation",
      icon: "cpu",
      skills: [
        "Agentic AI",
        "AI Automation",
        "AI Engineering",
        "Forward Deployed Engineering (FDE)",
        "Workflow Automation",
        "Multi-Agent Systems",
        "OCR Pipelines",
      ],
      featuredSkills: [
        "Agentic AI",
        "AI Automation",
        "AI Engineering",
        "Workflow Automation",
      ],
    },
    {
      name: "Databases, Cloud & Geospatial",
      icon: "database",
      skills: [
        "PostgreSQL",
        "PostGIS",
        "MapBox GL",
        "MongoDB",
        "Redis",
        "Docker",
        "GitHub Actions CI/CD",
        "Linux",
      ],
      featuredSkills: [
        "PostgreSQL",
        "MapBox GL",
        "Docker",
        "GitHub Actions CI/CD",
      ],
    },
    {
      name: "Architecture & Tooling",
      icon: "terminal",
      skills: [
        "System Design",
        "Git & GitHub",
        "Agile / Scrum",
        "End-to-End Testing",
        "Webpack & Vite",
        "Code Reviews",
      ],
      featuredSkills: ["System Design", "Git & GitHub", "Agile / Scrum"],
    },
  ],
  education: [
    {
      degree: "MS Computer Science",
      institution: "UET, Taxila",
      location: "Taxila, Pakistan",
      period: "2019",
      details:
        "Graduate-level study in advanced computer science, software systems, and research-driven technical problem solving.",
    },
    {
      degree: "Master in Computer Science",
      institution: "University of Lahore",
      location: "Lahore, Pakistan",
      period: "2016",
      details:
        "Advanced academic work in computer science foundations and applied software engineering practices.",
    },
  ],
  certifications: [
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp.org",
      period: "2023",
    },
    {
      title: "Certified Artificial Intelligence Developer",
      issuer: "PIAIC",
      period: "2023",
    },
    {
      title: "Google Cloud Skills",
      issuer: "Google",
      period: "2020",
    },
  ],
  philosophies: [
    {
      number: "01",
      title: "Autonomous by Default",
      tag: "Automation",
      description:
        "Eliminating repetitive human manual entry through robust AI automation pipelines and deterministic validation safeguards.",
    },
    {
      number: "02",
      title: "Resilient Cloud Foundations",
      tag: "Cloud & Scale",
      description:
        "Stateless microservices, pooled database connections, and graceful circuit breakers guarantee high availability during unpredictable traffic spikes.",
    },
    {
      number: "03",
      title: "Zero Financial Data Loss",
      tag: "Integrity",
      description:
        "Strict transaction atomicity, idempotent operations, and detailed audit trails ensure complete compliance and precision across accounting ledgers.",
    },
    {
      number: "04",
      title: "Velocity Through Clean Architecture",
      tag: "Craft",
      description:
        "Clear domain boundaries, strong type contracts, and comprehensive test coverage allow teams to ship fast without creating crippling tech debt.",
    },
  ],
  blueprint: {
    badge: "Production AI & Workflow Architecture",
    title: "Autonomous Accounts Payable OCR & RPA Pipeline",
    description:
      "How I architect production AI document workflows: extracting entities from unstructured PDF invoices, running schema validation, and dispatching audited instructions via WebSocket RPA desktop bridges.",
    steps: [
      {
        stepNumber: "01",
        title: "Cloud Vision OCR Ingestion",
        tech: "Google Cloud Vision & PDF Parser",
        description:
          "Converts unstructured multipage invoices into raw text blocks and coordinates in <180ms.",
      },
      {
        stepNumber: "02",
        title: "Entity Resolution & Pydantic Validation",
        tech: "Pydantic Models & Regex Rules",
        description:
          "Validates line items, sub-totals, tax IDs, and vendor bank codes against ERP schemas.",
      },
      {
        stepNumber: "03",
        title: "Persistent WebSocket RPA Bridge",
        tech: "FastAPI WebSockets & Desktop Client",
        description:
          "Dispatches validated keystrokes and button actions to legacy Windows ERP software.",
      },
      {
        stepNumber: "04",
        title: "Audited ERP Reconciliation",
        tech: "PostgreSQL Ledger Sync",
        description:
          "Stores immutable execution traces with full rollback safety and email approval audits.",
        highlight: true,
      },
    ],
    codeSnippets: [
      {
        language: "python",
        label: "Python (Django DRF / OCR Parser)",
        filename: "invoice_pipeline.py",
        code: `from rest_framework import status, views
from rest_framework.response import Response
from google.cloud import vision
from .services import validate_invoice_schema, dispatch_to_rpa_bridge

class InvoiceIngestionView(views.APIView):
    def post(self, request, *args, **kwargs):
        invoice_file = request.FILES.get('document')
        if not invoice_file:
            return Response({'error': 'Document file required'}, status=status.HTTP_400_BAD_REQUEST)

        # 1. OCR Extraction using Google Cloud Vision
        client = vision.ImageAnnotatorClient()
        content = invoice_file.read()
        image = vision.Image(content=content)
        annotation = client.document_text_detection(image=image)

        # 2. Extract & Validate structured schema
        entities, is_valid = validate_invoice_schema(annotation.full_text_annotation.text)
        if not is_valid:
            return Response({'status': 'FLAGGED_FOR_HUMAN_REVIEW', 'data': entities})

        # 3. Dispatch to WebSocket RPA Bridge for automated entry
        rpa_job_id = dispatch_to_rpa_bridge(entities)

        return Response({
            'status': 'DISPATCHED_AUTONOMOUSLY',
            'job_id': rpa_job_id,
            'confidence': 0.994,
            'vendor': entities.get('vendor_name')
        })`,
      },
      {
        language: "python",
        label: "Python (FastAPI WebSocket RPA Bridge)",
        filename: "rpa_bridge.py",
        code: `from fastapi import FastAPI, WebSocket, WebSocketDisconnect
import json

app = FastAPI()
active_connections: dict[str, WebSocket] = {}

@app.websocket("/ws/rpa/{client_id}")
async def rpa_websocket_endpoint(websocket: WebSocket, client_id: str):
    await websocket.accept()
    active_connections[client_id] = websocket
    try:
        while True:
            data = await websocket.receive_text()
            payload = json.loads(data)
            if payload.get("action") == "HEARTBEAT":
                await websocket.send_json({"status": "CONNECTED", "latency_ms": 12})
    except WebSocketDisconnect:
        active_connections.pop(client_id, None)`,
      },
    ],
    simulationConfig: {
      buttonLabel: "Run AI OCR & RPA Autonomous Pipeline",
      diagnosticTitle: "Autonomous AI Workflow Diagnostic",
      diagnosticSubtext:
        "Verify OCR entity extraction, validation confidence, and RPA dispatch latency",
      benchmarkHeader: "[BENCHMARK TRACE] Autonomous Workflow Status",
      benchmarkValue: "Confidence: 99.4% • End-to-End: <450ms",
      stepStatusSuccess: "✓ Validated",
      summaryText:
        "OCR entities extracted and reconciled into JSON payload. RPA execution dispatched successfully via WebSocket.",
      statusText: "COMPLETED_AUTONOMOUSLY",
      totalLatencyMs: 442,
      sampleData: {
        vendor: "Apex Solutions Corp",
        invoiceNumber: "INV-2025-8849",
        amount: 14850.0,
        ocrEngine: "Google Cloud Vision API",
      },
    },
  },
  contactConfig: {
    headline: "Let's Build Exceptional Web Applications",
    subtext:
      "Looking for a Senior Full Stack Engineer with proven production experience in TypeScript, Node.js, Next.js, and Cloud APIs? Available for senior roles and high-impact contracts.",
    availableNotice: "Open for Senior Roles & Remote Opportunities",
    projectTypes: [
      "Full Stack Next.js / TypeScript Web App",
      "High-Throughput GraphQL & REST API Architecture",
      "Geospatial & MapBox Interactive Dashboards",
      "Legacy System Modernization & Microservices",
    ],
    budgetOptions: [
      "Full-Time Role",
      "Contract Project",
      "Technical Consultation",
    ],
  },
};

/* =====================================================================
   DEVELOPER 3: Saddam Hussain (Senior Full Stack & AI Architect)
   ===================================================================== */

export const SADDAM_HUSSAIN_PORTFOLIO: PortfolioData = {
  id: "saddam-hussain",
  personal: {
    name: "Saddam Hussain",
    initials: "SH",
    role: "Senior Full Stack Engineer & AI Systems Architect",
    secondaryTitle: "Production AI Pipelines & Resilient Cloud Systems",
    headline: "Senior Full-Stack Engineer Building Production AI SaaS.",
    shortBio:
      "8+ years building and shipping high-throughput production web applications, specializing in Python (Django DRF, FastAPI), TypeScript (Next.js, React), and Production AI Automations. Proven track record designing OCR document pipelines, WebSocket RPA bridges, and resilient cloud architectures.",
    aboutText: [
      "8+ years of production experience scaling SaaS products from zero to one and beyond.",
      "Specializing in Python (Django DRF, FastAPI), TypeScript (Next.js, React), and Production AI Automations.",
      "Proven track record designing OCR document pipelines, WebSocket RPA bridges, and resilient cloud architectures.",
    ],
    email: "saddamhussainuos04@gmail.com",
    phone: "+92 317 4016016",
    location: "Lahore, Pakistan (Open to Global Remote)",
    status: "Open for Senior Roles & Strategic Consulting",
    hireable: true,
    resumeUrl: "/resumes/Saddam-Hussain.pdf",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDUXj0YyXL2kNfqhE40wIbhZEajbpBCBmk0afk46ERZD3sW4VUmlCFbn9LTJoVDp7zjMOEk37r9JS4sZjh2YUZlMGal6vEvbA8Go-Z5oUtwoemXirPVH9HDBaUVNQOufN8zcfgvz92tTAW1wghyT_kw1BQAbLIxK9tiK5nolqUlt95imv40Gc1ZlzS59KfQxyK5uzUbXZ1ohH-uXD62CqFXiz22EA6OKm-wMYF8gfSDG7Ejfhkvw68VkhpkQCo8wmM8Ug",
    highlights: [
      "Python (Django DRF, FastAPI)",
      "TypeScript (Next.js App Router, React)",
      "Production AI Pipelines & LLM Evals",
      "Docker Containerization & AWS Cloud Infrastructure",
    ],
    socials: {
      linkedin: "https://www.linkedin.com/in/senior-full-stack-developer/",
      email: "saddamhussainuos04@gmail.com",
      phone: "+92 317 4016016",
    },
  },
  metrics: [
    {
      value: "8+",
      label: "Years Production Exp",
      subtext: "Full Stack & AI SaaS",
    },
    { value: "5+", label: "Companies Scaled", subtext: "Zero to One & Beyond" },
    {
      value: "AI & Cloud",
      label: "Production Architectures",
      subtext: "OCR & RPA Pipelines",
    },
    {
      value: "AWS & Docker",
      label: "Production Cloud Deployments",
      subtext: "High Availability",
    },
    {
      value: "0 to 1 & Scale",
      label: "Architecture to Launch",
      subtext: "Enterprise Delivery",
    },
  ],
  caseStudies: [
    {
      id: "aimyable",
      title: "Aimyable — Intelligent Accounts Payable Automation SaaS",
      role: "Core Full-Stack Engineer / AI Architect",
      company: "Stech Experts LTD",
      period: "Apr 2025 – Present",
      flagshipBadge:
        "Flagship AI Architecture (Stech Experts LTD • 2025–Present)",
      techStack: [
        "Python (DRF)",
        "Next.js",
        "PostgreSQL",
        "Docker on AWS",
        "Google Cloud Vision",
        "WebSockets",
      ],
      problem:
        "Corporate accounts-payable workflows require tedious manual invoice data entry, verification against ERP databases, approval routing, and repetitive manual UI execution into legacy Windows accounting applications.",
      contributions: [
        "Workflow Orchestration Engine: Designed an intelligent routing engine with specialized components for multi-step invoice review and approval workflows.",
        "Automated Invoice Ingestion: Built OCR pipelines utilizing Google Cloud Vision API to convert raw unstructured PDF invoices into validated JSON entities.",
        "WebSocket RPA Bridge: Developed an orchestration layer linking backend database actions with a Windows RPA desktop client via persistent WebSockets.",
      ],
      impact: [
        { metric: "100%", label: "Zero Manual Handoff" },
        { metric: "Autonomous", label: "Self-Serve Onboarding" },
        { metric: "<450ms", label: "End-to-End Dispatch" },
      ],
    },
    {
      id: "distributed-invoice-queue",
      title: "High-Throughput Distributed Document Processing Pipeline",
      role: "AI Systems Architect",
      period: "2024 – 2025",
      category: "Distributed Systems & Queues",
      techStack: [
        "Python",
        "FastAPI",
        "Celery",
        "Redis",
        "PostgreSQL",
        "AWS SQS",
        "Docker",
      ],
      problem:
        "Month-end accounting spikes flooded backend servers with thousands of concurrent multipart PDF uploads, creating memory spikes and timeout errors.",
      contributions: [
        "Engineered an asynchronous Celery and Redis task queue decoupling HTTP invoice uploads from intensive OCR computing.",
        "Implemented chunked streaming directly to AWS S3 with signed temporary access tokens.",
        "Added automated retries with exponential backoff and dead-letter queues to prevent data loss.",
      ],
      impact: [
        { metric: "15,000+", label: "Invoices / Hour" },
        { metric: "0%", label: "Packet Drop Rate" },
      ],
    },
  ],
  projectGallery: [
    {
      id: "aimyable-dashboard",
      title: "Aimyable",
      projectTitle: "Aimyable - AI-Powered Accounts Payable Automation SaaS",
      category: "AI SaaS",
      imageUrl: "/images/arslan-projects-images/aimyable.png",
      description:
        "An AI-powered accounts-payable automation SaaS built with Django DRF, Next.js, TypeScript, PostgreSQL, Docker, and AWS. The platform combines multi-agent orchestration, invoice OCR and document parsing with Google Cloud Vision, and persistent WebSocket RPA automation.",
      techStack: [
        "Python",
        "Django DRF",
        "Next.js",
        "Google Cloud Vision",
        "WebSockets",
        "PostgreSQL",
        "Docker",
        "AWS",
      ],
      role: "Core Full-Stack Engineer / AI Architect",
      challenges: [
        "Multi-Agent Workflow Orchestration: Coordinating autonomous validation, database verification, and desktop RPA execution steps without race conditions.",
        "High-Accuracy Financial Data Extraction: Normalizing inconsistent invoice schemas from heterogeneous multipage PDF documents.",
        "Low-Latency Desktop Integration: Maintaining persistent WebSocket connections to legacy Windows ERP accounting software.",
      ],
      solutions: [
        "Engineered an intelligent Google Cloud Vision OCR pipeline with regex validators and confidence score thresholds.",
        "Built a persistent bidirectional WebSocket bridge between cloud API servers and Windows RPA desktop clients.",
        "Implemented enterprise multi-tenant RBAC permissions, audit trail logging, and ledger reconciliation.",
      ],
      featured: true,
    },
    {
      id: "udu-platform",
      title: "UDU",
      projectTitle:
        "UDU - Community Platform for Creating, Connecting & Contributing",
      category: "Social Platform",
      imageUrl: "/images/arslan-projects-images/udu.png",
      description:
        "UDU is a community-driven social platform designed around three core experiences: Create, Connect, and Contribute. Users can create topic hubs, connect with peers, and contribute resources with dynamic feeds and workspace organization.",
      techStack: [
        "TypeScript",
        "React",
        "Next.js App Router",
        "Node.js",
        "Clerk Auth",
        "Tailwind CSS",
      ],
      role: "Senior Full Stack Engineer / Team Lead",
      challenges: [
        "Optimizing heavy interactive social feed component trees and state re-renders across nested contribution threads.",
        "Configuring multi-tenant organization workspaces with granular role-based access controls.",
      ],
      solutions: [
        "Migrated data loading to Next.js Server Components and Server Actions, reducing page load times by 25%.",
        "Built customized Clerk authentication for multi-organization workspaces, invite tokens, and user profiles.",
      ],
      featured: true,
    },
    {
      id: "sweet-celebrationz",
      title: "Sweet Celebrationz",
      projectTitle: "Sweet Celebrationz - Ecommerce Bakery Website",
      category: "Ecommerce",
      imageUrl: "/images/saddam-projects-images/Sweet-Calbration.png",
      description:
        "An ecommerce storefront focused on responsive, user-friendly shopping experiences, with product browsing, category-based listings, promotions, cart management, and seamless payment checkout.",
      techStack: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Node.js",
        "Stripe",
        "Responsive UI",
      ],
      role: "Full Stack Engineer",
      challenges: [
        "Creating high-conversion mobile browsing experiences with immediate cart synchronization across diverse product categories.",
      ],
      solutions: [
        "Engineered modular UI components, instant cart state management, and optimized high-resolution product image delivery.",
      ],
    },
    {
      id: "halo-system",
      title: "HALO System",
      projectTitle: "HALO System - Event Operations Platform",
      category: "Web app",
      imageUrl: "/images/saddam-projects-images/Halo.jpg",
      description:
        "An event operations platform for incident management and real-time coordination, with dashboards, activity tracking, task workflows, live monitoring, and map-based operational views.",
      techStack: [
        "React",
        "TypeScript",
        "MapBox",
        "REST APIs",
        "WebSockets",
        "PostgreSQL",
      ],
      role: "Full Stack Developer",
      challenges: [
        "Providing real-time situational awareness and rapid incident escalation for operational event teams in high-density venues.",
      ],
      solutions: [
        "Engineered dynamic MapBox coordinate overlays, live incident triage queues, and sub-second socket notification streams.",
      ],
      featured: true,
    },
    {
      id: "traxidy",
      title: "Traxidy",
      projectTitle: "Traxidy - Project Management System",
      category: "Web app",
      imageUrl: "/images/arslan-projects-images/Tarxidy-1.webp",
      description:
        "A project management and tracking platform designed around structured issue and action workflows, RAID logs, progress tracking, notifications, and reporting dashboards.",
      techStack: [
        "React",
        "Next.js",
        "PostgreSQL",
        "Node.js",
        "RAID Logs",
        "Data Visualization",
      ],
      role: "Full Stack Engineer",
      challenges: [
        "Balancing complex project management controls with intuitive, responsive user workflows and data export capabilities.",
      ],
      solutions: [
        "Designed customizable kanban and table views, automated progress rollups, and downloadable reporting dashboards.",
      ],
    },
    {
      id: "ready-hire",
      title: "Ready Hire",
      projectTitle: "Ready Hire - Candidate Screening Platform",
      category: "Web app",
      imageUrl: "/images/saddam-projects-images/Ready-Hire.jpg",
      description:
        "A candidate screening and evaluation platform with job tryouts, candidate profiles, structured assessments, recruiter dashboards, and secure handling of HR data.",
      techStack: [
        "React",
        "TypeScript",
        "PostgreSQL",
        "Django DRF",
        "Candidate Evaluations",
      ],
      role: "Full Stack Developer",
      challenges: [
        "Processing confidential applicant submissions, video assessments, and scoring rubric rubrics at scale.",
      ],
      solutions: [
        "Implemented encrypted document pipelines, automated candidate grading workflows, and real-time recruiter analytics.",
      ],
    },
    {
      id: "banyo-pos",
      title: "Banyo POS",
      projectTitle: "Banyo POS - Point of Sale System",
      category: "Web app",
      imageUrl: "/images/saddam-projects-images/POS.jpg",
      description:
        "A production POS and inventory web application built with a Django backend and Next.js frontend, real-time inventory management with MongoDB, and AWS EC2 deployment.",
      techStack: [
        "Django DRF",
        "Next.js",
        "MongoDB",
        "AWS EC2",
        "GitHub Actions CI/CD",
      ],
      role: "Full Stack Developer",
      challenges: [
        "Synchronizing offline retail POS cash register terminals with cloud inventory catalogs during intermittent internet outages.",
      ],
      solutions: [
        "Built reliable REST APIs with offline queue caching and automated background synchronization when reconnecting.",
      ],
    },
  ],
  experiences: [
    {
      title: "Senior Full Stack Engineer",
      company: "Stech Experts LTD",
      location: "Remote",
      period: "Apr 2025 – Present",
      active: true,
      employmentType: "Full-time / Remote",
      bulletPoints: [
        "Core full stack engineer on Aimyable; an AI-powered accounts payable automation SaaS, built using Django DRF, Next.js, TypeScript, and PostgreSQL, containerized with Docker and deployed on AWS.",
        "Contributed to system design alongside the CTO and owning implementation across backend services, data modeling, and frontend workflows.",
        "Built a multi-agent workflow engine that routes tasks across specialized agents, including a Step Agent for orchestration, a DB Agent for data queries, and an RPA agent for UI actions, to run multi-step invoice automation.",
        "Develop day to day with AI (Claude Code) for scaffolding, refactoring, and debugging across a multi-repo codebase, reviewing every diff and backing changes with type checks before merge.",
        "Worked on invoice ingestion system and data extraction using the Google Cloud Vision API (Python SDK) to run OCR over invoice documents and parse them into structured fields, so invoice data flows into the system automatically instead of being keyed in by hand.",
        "Built an orchestration layer that ties database operations together with RPA-driven UI actions and talks to the Windows RPA client over WebSockets for real-time task dispatch and status. As a result, a single workflow can complete an accounts-payable task from start to finish with no manual handoff between steps.",
        "Built authentication and provisioning: invitation-based registration, token validation and acceptance, RBAC, user–tenant linkage, onboarding and password gating, custom session-refresh logic, and token based machine to machine auth for the RPA client.",
        "Designed normalized PostgreSQL schemas and core REST APIs for onboarding, invitations, business management, subscriptions, and invoice workflows, with service-layer separation, serializer validation, and static type checking via basedpyright to catch errors before they reach runtime.",
        "Contributed to the multi-step onboarding and admin experience in Next.js with Material UI and React Hook Form. This enabled new businesses to sign up and configure their account autonomously reducing workload on account managers.",
        "Integrated the Bland AI voice agent into the backend to automate the review-collection feature.",
        "Worked across a hybrid backend in Node.js and Python (Django) with integration workflows, data processing, and core services.",
        "Set up NextAuth.js for web-app authentication, keeping auth logic server-side.",
        "Improved reliability and performance with caching, load balancing, and Docker-based containerization.",
      ],
      technologies: [
        "Python",
        "Django (DRF)",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Google Cloud Vision",
        "WebSockets",
        "Docker",
        "AWS",
        "Node.js",
        "NextAuth.js",
      ],
    },
    {
      title: "Senior Full Stack Engineer / Team Lead",
      company: "Inner Machinations (Silicon Valley)",
      location: "Remote",
      period: "Mar 2024 – Apr 2025",
      active: false,
      employmentType: "Full-time / Remote",
      bulletPoints: [
        "Led development of Udu.com, a topic-based communication platform, heading a team of 5 senior developers in an Agile process.",
        "Built and optimized the front end in TypeScript and React (Next.js), cutting page load times by around 25% through component and API improvements.",
        "Developed APIs in Node.js restructuring parts of the application architecture for separation and performance.",
        "Moved critical operations to Next.js Server Actions, removing round-trips to external services and noticeably speeding up data-intensive flows.",
        "Customized a Clerk integration for user and organization auth, simplifying the admin and user-management workflows the product owner relied on.",
        "Built posting and interaction features along with text content, media attachments (images/PDFs), commenting, and topic/discussion search.",
      ],
      technologies: [
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Clerk",
        "REST APIs",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Banyo Ltd",
      location: "Lahore",
      period: "Apr 2023 – Mar 2024",
      active: false,
      employmentType: "Full-time",
      bulletPoints: [
        "Built a POS and inventory web app with a Django backend and Next.js frontend, covering a broad set of REST APIs across the product's modules.",
        "Implemented real-time inventory management with Django REST Framework and MongoDB, improving stock and sales sync latency and accuracy.",
        "Built a responsive POS UI in Next.js using server-side rendering.",
        "Set up AWS infrastructure (EC2) for the application, supporting growth in the user base as the product scaled.",
        "Set up a CI/CD pipeline with Git and GitHub Actions, removing manual deployment steps.",
      ],
      technologies: [
        "Django DRF",
        "Next.js",
        "MongoDB",
        "AWS EC2",
        "GitHub Actions",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "One Clout",
      location: "Lahore",
      period: "Jul 2022 - Aug 2023",
      active: false,
      employmentType: "Full-time",
      bulletPoints: [
        "Built TypeScript backend services in Node.js, improving maintainability and reducing recurring production bugs.",
        "Worked across full-stack projects with GraphQL and REST APIs, improving data-retrieval performance for key queries.",
        "Integrated MapBox and satellite mapping into the product's mapping features.",
        "Built web apps with React and Redux-Saga.",
        "Set up PostgreSQL deployment and GitHub-based CI/CD, shortening deployment time and tightening the release process.",
      ],
      technologies: [
        "TypeScript",
        "Node.js",
        "GraphQL",
        "REST APIs",
        "MapBox",
        "React",
        "Redux-Saga",
        "PostgreSQL",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Smart Venture Technologies",
      location: "Lahore",
      period: "Jul 2020 - Aug 2022",
      active: false,
      employmentType: "Full-time",
      bulletPoints: [
        "Carried out full-stack development, boosting project efficiency by 38% and team collaboration.",
        "Mastered diverse technologies and APIs, augmenting application functionality by 26% and user experience by 20%.",
        "Utilized advanced development frameworks such as Antd, Material UI, SQL, PostgreSQL, Docker, and GitHub CI/CD, accelerating project completion pace by 25%.",
      ],
      technologies: [
        "Antd",
        "Material UI",
        "SQL",
        "PostgreSQL",
        "Docker",
        "GitHub CI/CD",
      ],
    },
    {
      title: "Web Developer",
      company: "Linked Matrix",
      location: "Lahore",
      period: "Dec 2018 - Aug 2020",
      active: false,
      employmentType: "Full-time",
      bulletPoints: [
        "Developed a robust PostgreSQL database that efficiently managed large volumes of sensitive HR data, ensuring rapid data access and secure transactions, which enhanced data retrieval by 40%.",
        "Carried out frontend development using React and building responsive and intuitive UI.",
      ],
      technologies: [
        "React",
        "PostgreSQL",
        "Responsive UI",
        "Frontend Development",
      ],
    },
  ],
  skillCategories: [
    {
      name: "Backend & Languages",
      icon: "server",
      skills: [
        "Python",
        "Django (DRF)",
        "FastAPI",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
      ],
      featuredSkills: ["Python", "Django (DRF)", "FastAPI", "PostgreSQL"],
    },
    {
      name: "Frontend Architecture",
      icon: "layout",
      skills: [
        "Next.js (App Router)",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Responsive Design",
      ],
      featuredSkills: ["Next.js (App Router)", "React", "Tailwind CSS"],
    },
    {
      name: "Cloud, DevOps & Queues",
      icon: "database",
      skills: [
        "Docker",
        "AWS",
        "Redis",
        "Celery",
        "CI/CD Automation",
        "Linux",
        "Microservices",
      ],
      featuredSkills: ["Docker", "AWS", "Redis", "Celery"],
    },
    {
      name: "AI & Workflow Automation",
      icon: "terminal",
      skills: [
        "Google Cloud Vision OCR",
        "LLM Evals",
        "WebSocket RPA",
        "Prompt Engineering",
        "Document Pipelines",
      ],
      featuredSkills: [
        "Google Cloud Vision OCR",
        "WebSocket RPA",
        "Document Pipelines",
      ],
    },
  ],
  education: [
    {
      degree: "BS Computer Science",
      institution: "University of the Punjab",
      location: "Lahore, Pakistan",
      period: "2014 - 2018",
      details:
        "Study of core computer science foundations, software engineering practices, and applied systems design.",
    },
  ],
  philosophies: [
    {
      number: "01",
      title: "Autonomous by Default",
      tag: "Automation",
      description:
        "Eliminating repetitive human manual entry through robust AI automation pipelines and deterministic validation safeguards.",
    },
    {
      number: "02",
      title: "Resilient Cloud Foundations",
      tag: "Cloud & Scale",
      description:
        "Stateless microservices, pooled database connections, and graceful circuit breakers guarantee high availability during unpredictable traffic spikes.",
    },
    {
      number: "03",
      title: "Zero Financial Data Loss",
      tag: "Integrity",
      description:
        "Strict transaction atomicity, idempotent operations, and detailed audit trails ensure complete compliance and precision across accounting ledgers.",
    },
    {
      number: "04",
      title: "Velocity Through Clean Architecture",
      tag: "Craft",
      description:
        "Clear domain boundaries, strong type contracts, and comprehensive test coverage allow teams to ship fast without creating crippling tech debt.",
    },
  ],
  blueprint: {
    badge: "Production AI & Workflow Architecture",
    title: "Autonomous Accounts Payable OCR & RPA Pipeline",
    description:
      "How I architect production AI document workflows: extracting entities from unstructured PDF invoices, running schema validation, and dispatching audited instructions via WebSocket RPA desktop bridges.",
    steps: [
      {
        stepNumber: "01",
        title: "Cloud Vision OCR Ingestion",
        tech: "Google Cloud Vision & PDF Parser",
        description:
          "Converts unstructured multipage invoices into raw text blocks and coordinates in <180ms.",
      },
      {
        stepNumber: "02",
        title: "Entity Resolution & Pydantic Validation",
        tech: "Pydantic Models & Regex Rules",
        description:
          "Validates line items, sub-totals, tax IDs, and vendor bank codes against ERP schemas.",
      },
      {
        stepNumber: "03",
        title: "Persistent WebSocket RPA Bridge",
        tech: "FastAPI WebSockets & Desktop Client",
        description:
          "Dispatches validated keystrokes and button actions to legacy Windows ERP software.",
      },
      {
        stepNumber: "04",
        title: "Audited ERP Reconciliation",
        tech: "PostgreSQL Ledger Sync",
        description:
          "Stores immutable execution traces with full rollback safety and email approval audits.",
        highlight: true,
      },
    ],
    codeSnippets: [
      {
        language: "python",
        label: "Python (Django DRF / OCR Parser)",
        filename: "invoice_pipeline.py",
        code: `from rest_framework import status, views
from rest_framework.response import Response
from google.cloud import vision
from .services import validate_invoice_schema, dispatch_to_rpa_bridge

class InvoiceIngestionView(views.APIView):
    def post(self, request, *args, **kwargs):
        invoice_file = request.FILES.get('document')
        if not invoice_file:
            return Response({'error': 'Document file required'}, status=status.HTTP_400_BAD_REQUEST)

        # 1. OCR Extraction using Google Cloud Vision
        client = vision.ImageAnnotatorClient()
        content = invoice_file.read()
        image = vision.Image(content=content)
        annotation = client.document_text_detection(image=image)

        # 2. Extract & Validate structured schema
        entities, is_valid = validate_invoice_schema(annotation.full_text_annotation.text)
        if not is_valid:
            return Response({'status': 'FLAGGED_FOR_HUMAN_REVIEW', 'data': entities})

        # 3. Dispatch to WebSocket RPA Bridge for automated entry
        rpa_job_id = dispatch_to_rpa_bridge(entities)

        return Response({
            'status': 'DISPATCHED_AUTONOMOUSLY',
            'job_id': rpa_job_id,
            'confidence': 0.994,
            'vendor': entities.get('vendor_name')
        })`,
      },
      {
        language: "python",
        label: "Python (FastAPI WebSocket RPA Bridge)",
        filename: "rpa_bridge.py",
        code: `from fastapi import FastAPI, WebSocket, WebSocketDisconnect
import json

app = FastAPI()
active_connections: dict[str, WebSocket] = {}

@app.websocket("/ws/rpa/{client_id}")
async def rpa_websocket_endpoint(websocket: WebSocket, client_id: str):
    await websocket.accept()
    active_connections[client_id] = websocket
    try:
        while True:
            data = await websocket.receive_text()
            payload = json.loads(data)
            if payload.get("action") == "HEARTBEAT":
                await websocket.send_json({"status": "CONNECTED", "latency_ms": 12})
    except WebSocketDisconnect:
        active_connections.pop(client_id, None)`,
      },
    ],
    simulationConfig: {
      buttonLabel: "Run AI OCR & RPA Autonomous Pipeline",
      diagnosticTitle: "Autonomous AI Workflow Diagnostic",
      diagnosticSubtext:
        "Verify OCR entity extraction, validation confidence, and RPA dispatch latency",
      benchmarkHeader: "[BENCHMARK TRACE] Autonomous Workflow Status",
      benchmarkValue: "Confidence: 99.4% • End-to-End: <450ms",
      stepStatusSuccess: "✓ Validated",
      summaryText:
        "OCR entities extracted and reconciled into JSON payload. RPA execution dispatched successfully via WebSocket.",
      statusText: "COMPLETED_AUTONOMOUSLY",
      totalLatencyMs: 442,
      sampleData: {
        vendor: "Apex Solutions Corp",
        invoiceNumber: "INV-2025-8849",
        amount: 14850.0,
        ocrEngine: "Google Cloud Vision API",
        bridge: "Persistent WebSocket (12ms RTT)",
      },
    },
  },
  contactConfig: {
    headline: "Let's Build Production AI SaaS",
    subtext:
      "Looking for a Senior Full-Stack Engineer and AI Systems Architect with 8+ years scaling production SaaS? Open to senior full-time roles and high-impact contracts.",
    availableNotice: "Open for Senior Roles & Strategic Consulting",
    projectTypes: [
      "Production AI SaaS Architecture",
      "Intelligent OCR & Document Automation",
      "Python (Django/FastAPI) Microservices",
      "Next.js Full-Stack Web Applications",
    ],
    budgetOptions: [
      "Senior Full-Time Role",
      "Contract Architecture",
      "Technical Advisory",
    ],
  },
};

/* =====================================================================
   TEAM MEMBER 4: Abu Bakar Saddique (Software Engineer)
   ===================================================================== */

export const ABU_BAKAR_PORTFOLIO: PortfolioData = {
  id: "abu-bakar-saddique",
  personal: {
    name: "Abu Bakar Saddique",
    initials: "AB",
    role: "Senior Full Stack Engineer",
    secondaryTitle: "Full Stack Engineer + AI Engineer",
    headline: "Senior Full Stack Engineer Building AI-Powered SaaS & Modern Web Apps.",
    shortBio:
      "Senior full-stack software engineer with experience building AI-powered SaaS products, responsive Next.js interfaces, Django APIs, and workflow automation systems across remote and product-focused teams.",
    aboutText: [
      "Experienced in building end-to-end SaaS products with modern frontend frameworks and backend APIs.",
      "Passionate about responsive design, clean modular components, and reliable RESTful service integrations.",
      "Active contributor to AI-driven engineering initiatives, multi-tenant product experiences, and scalable operational workflows.",
    ],
    email: "abu.bakar041295@gmail.com",
    location: "Lahore, Pakistan (Remote)",
    status: "Available for Engineering Projects",
    hireable: true,
    resumeUrl: "/resumes/Abu-Bakar-Saddique.pdf",
    avatarUrl: "/assets/AbuBakar.png",
    highlights: [
      "React & Next.js Frontend",
      "TypeScript & Node.js",
      "Python REST APIs",
      "Tailwind CSS Design Systems",
    ],
    socials: {
      linkedin: "https://www.linkedin.com/in/abu-bakar-saddique-034231167/",
      email: "abu.bakar041295@gmail.com",
    },
  },
  metrics: [
    { value: "4+ Years", label: "Software Engineering" },
    { value: "Modern Web", label: "React & Next.js" },
    { value: "Full Stack", label: "APIs & Databases" },
    { value: "AI Ready", label: "LLM Integrations" },
  ],
  caseStudies: [
    {
      id: "modern-web-portal",
      title: "Modern Web Application Platform",
      role: "Full Stack Engineer",
      techStack: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
      problem:
        "Building high-conversion responsive client portals with streamlined data fetching.",
      contributions: [
        "Engineered accessible UI component systems and optimized state management workflows.",
      ],
      impact: [
        { metric: "99.9%", label: "Uptime" },
        { metric: "<200ms", label: "Page Load" },
      ],
    },
  ],
  projectGallery: [
    {
      id: "modern-web-portal-proj",
      title: "Modern Web Portal",
      projectTitle: "Modern Web Application Platform",
      category: "Web app",
      imageUrl: "/images/arslan-projects-images/about.jpg",
      description:
        "Responsive web platform built with React, Next.js, and TypeScript delivering sub-second navigation and real-time state caching.",
      techStack: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "REST APIs",
      ],
      role: "Full Stack Engineer",
      featured: true,
    },
    {
      id: "ai-workflow-assistant-proj",
      title: "AI Workflow Assistant",
      projectTitle: "AI Workflow & Knowledge Assistant",
      category: "AI SaaS",
      imageUrl: "/images/arslan-projects-images/aimyable.png",
      description:
        "Intelligent AI assistant platform utilizing vector search and LLM completion pipelines for automated team summaries.",
      techStack: ["Python", "FastAPI", "React", "TypeScript", "LLM Evals"],
      role: "Full Stack & AI Engineer",
      featured: true,
    },
    {
      id: "ticksy-ticketing-system",
      title: "Ticksy",
      projectTitle: "Ticksy - Customer Support Ticketing System",
      category: "SaaS / Support Platform",
      imageUrl: "/images/Ticksy.png",
      description:
        "Ticksy is a ticketing system for customer support and after-sales service for company products like website projects and ready-made themes.",
      techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      role: "Frontend Engineer",
      challenges: [
        "Complex User Management: Implementing a system that could handle multiple user roles and permissions effectively.",
        "Scalable Ticketing System: Designing a ticketing system that could scale with increasing support requests and users.",
        "Real-time Communication: Ensuring real-time updates and notifications for support agents and customers.",
        "Responsive UI/UX Design: Creating an intuitive interface that was responsive across all devices and screen sizes.",
      ],
      featured: true,
    },
    {
      id: "banyo-pos",
      title: "Banyo POS",
      projectTitle: "Banyo POS - Point of Sale System",
      category: "Web app",
      imageUrl: "/images/saddam-projects-images/POS.jpg",
      description:
        "A production POS and inventory web application built with a Django backend and Next.js frontend, real-time inventory management with MongoDB, and AWS EC2 deployment.",
      techStack: [
        "Django DRF",
        "Next.js",
        "MongoDB",
        "AWS EC2",
        "GitHub Actions CI/CD",
      ],
      role: "Full Stack Developer",
      challenges: [
        "Synchronizing offline retail POS cash register terminals with cloud inventory catalogs during intermittent internet outages.",
      ],
      solutions: [
        "Built reliable REST APIs with offline queue caching and automated background synchronization when reconnecting.",
      ],
    },
  ],
  experiences: [
    {
      title: "Senior Full Stack Engineer",
      company: "Stech Experts Ltd",
      location: "Remote",
      period: "Jan 2024 – Present",
      active: true,
      bulletPoints: [
        "Project: Aimyable (US – Remote) — Developed frontend features for an AI-powered multi-tenant SaaS platform using Next.js, TypeScript, Material UI, React Hook Form, and NextAuth.",
        "Delivered a polished multi-step onboarding and admin UX with React, Material UI, React Hook Form, and Yup, including plan selection, terms acceptance, typed payload construction, branch management flows, and optimized parent-child data fetching.",
        "Built onboarding, registration, invitation, and email verification flows integrated with Django REST APIs.",
        "Refined process-builder interfaces with validations, modal flows, step management, and execution monitoring.",
        "Implemented business and tenant management UI, including dynamic forms, branch selection, and session-aware workflows.",
        "Project: WhatsApp Ecom Bot (Germany – Remote) — Created an Ecommerce AI bot for Adroit Tech, connecting WhatsApp and Meta APIs to streamline order processing for local vendors.",
        "Built scalable frontend modules in Next.js, React, TypeScript, and Material UI for order management, return orders, appointments, invoicing, and admin workflows.",
        "Integrated complex REST API workflows with Django backends, handling nested payloads, validation, authentication, and real-time UI synchronization.",
        "Resolved critical Next.js SSR, App Router, and TypeScript build issues, improving production stability, routing correctness, and developer productivity.",
        "Developed reusable, type-safe components and data models that reduced prop mismatches, improved maintainability, and aligned frontend contracts with backend APIs.",
        "Implemented WhatsApp dashboard features including QR generation, webhook-based order flows, and dynamic rendering of real-time message and cart data.",
        "Improved UX through responsive design, loading/error states, toast feedback, and robust handling of edge cases in pricing, booking, and order flows.",
        "Project: Point of Sale System — Spearheaded the development of a Python web-based app using Django backend and Next.js frontend with over 500 custom APIs.",
        "Performed real-time inventory management with Django REST Framework and MongoDB, reducing latency by 30% and enhancing the accuracy of stock and sales data synchronization.",
        "Developed a responsive UI of the POS system using Next.js, significantly increasing user satisfaction through seamless server-side rendering.",
        "Configured a scalable and secure AWS architecture (EC2 instances), bolstering transaction security and system reliability and supporting a 50% user base growth without performance loss.",
        "Set up a CI/CD pipeline using Git and GitHub Actions, removing the need for manual deployment efforts."
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Material UI",
        "React Hook Form",
        "Yup",
        "Django REST Framework",
        "PostgreSQL",
        "MongoDB",
        "AWS",
        "GitHub Actions",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Glixen Technologies",
      location: "Lahore",
      period: "Feb 2021 – Dec 2023",
      active: false,
      bulletPoints: [
        "Engineered a scalable React.js and TypeScript frontend for a multi-role helpdesk platform that streamlined customer issue tracking, support communication, and ticket resolution workflows.",
        "Delivered role-specific interfaces for admins, support managers, agents, developers, and customers, enabling secure and efficient access to operational features.",
        "Built core ticket management modules covering creation, assignment, escalation, priority handling, status transitions, and issue resolution tracking.",
        "Designed and implemented reusable UI architecture for data tables, filters, forms, modals, and conversation panels, improving development speed and interface consistency.",
        "Integrated REST APIs for ticket operations, user management, department configuration, permissions, comments, and attachments.",
        "Applied TypeScript-based type safety and component-driven development practices to improve code quality, maintainability, and frontend stability.",
        "Added frontend testing and quality checks using React Testing Library for key screens and components, improving reliability of the ticketing platform."
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "REST APIs",
        "React Testing Library",
        "UI Architecture",
      ],
    },
  ],
  skillCategories: [
    {
      name: "Frontend",
      icon: "layout",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
      featuredSkills: ["React", "Next.js", "TypeScript"],
    },
    {
      name: "Backend & Tools",
      icon: "server",
      skills: ["Node.js", "Python", "REST APIs", "Git & GitHub"],
      featuredSkills: ["Node.js", "Python", "REST APIs"],
    },
  ],
  education: [
    {
      degree: "BS SE",
      institution: "PUCIT • Lahore",
      location: "Lahore, Pakistan",
      period: "2015 - 2019",
      details:
        "Bachelor of Science in Software Engineering with focus on modern web technologies, application architecture, and frontend reliability.",
    },
  ],
  certifications: [
    {
      title: "Meta Certified Frontend Developer",
      issuer: "Coursera / Meta",
      period: "2023",
    },
    {
      title: "Modern React & TypeScript Architecture",
      issuer: "Udemy",
      period: "2022",
    },
  ],
  philosophies: [
    {
      number: "01",
      title: "Component Reusability",
      tag: "Frontend",
      description:
        "Design clean, isolated component systems that accelerate feature velocity without UI regressions.",
    },
    {
      number: "02",
      title: "Performance by Design",
      tag: "Web",
      description:
        "Minimize re-renders, optimize asset bundles, and ensure accessible experiences for all users.",
    },
  ],
};

/* =====================================================================
   TEAM MEMBER 5: Kamran Maqbool (Python Developer)
   ===================================================================== */

export const KAMRAN_MAQBOOL_PORTFOLIO: PortfolioData = {
  id: "kamran-maqbool",
  personal: {
    name: "Kamran Maqbool",
    initials: "KM",
    role: "Python Developer",
    secondaryTitle: "Python Backend Developer",
    headline: "Detail-oriented Python developer with 5+ years of backend and AI integration experience.",
    shortBio:
      "Detail-oriented and results-driven Python developer with over 5 years of experience in web development, primarily focused on backend development using Django and Django Rest Framework. Proven expertise in building scalable, maintainable APIs and services, integrating third-party tools, and working in agile environments. Passionate about integrating AI/ML solutions into backend systems.",
    aboutText: [
      "Experienced Python developer with a strong focus on backend systems, API design, and automation using Django, Django REST Framework, FastAPI, and related tools.",
      "Worked across scalable system integrations, cron-based automation, third-party API integrations, and AI/ML workflows for data processing and predictive analytics.",
      "Comfortable in Agile environments, collaborating with cross-functional teams and delivering maintainable backend solutions for business-critical tools.",
    ],
    email: "kamranmaqbool37@gmail.com",
    phone: "+92 3436744420",
    location: "Lahore, Pakistan",
    status: "Available for Backend & AI Integration Roles",
    hireable: true,
    resumeUrl: "/resumes/Kamran-Maqbool.pdf",
    avatarUrl: "/assets/Kamran.png",
    highlights: [
      "Python Backend & API Development",
      "Django & Django Rest Framework",
      "AI/ML Integration & Data Processing",
      "Celery, Redis & Background Tasks",
      "PostgreSQL, MySQL & MongoDB",
    ],
    socials: {
      github: "https://github.com/KamranMaqbool",
      linkedin: "https://www.linkedin.com/in/kamran-maqbool-209971164/",
      email: "kamranmaqbool37@gmail.com",
      phone: "+92 3436744420",
    },
  },
  metrics: [
    { value: "5+ Years", label: "Python Backend Experience" },
    { value: "Django", label: "Enterprise API Development" },
    { value: "AI + ML", label: "Backend Integrations" },
    { value: "Celery", label: "Background Task Automation" },
  ],
  caseStudies: [
    {
      id: "title-assistant-ai",
      title: "Title Assistant AI",
      role: "Python Developer",
      techStack: ["Python", "Django", "Django REST Framework"],
      problem:
        "Need for secure title and settlement processing APIs to support real-estate transactions in the U.S.",
      contributions: [
        "Developed secure backend APIs for title and settlement processing using Django and DRF.",
        "Built business logic to support transaction workflows in a reliable and maintainable architecture.",
      ],
      impact: [
        { metric: "Secure", label: "Transaction APIs" },
        { metric: "U.S.", label: "Real Estate Workflow" },
      ],
    },
    {
      id: "federation-ai",
      title: "Federation AI",
      role: "Python Developer",
      techStack: ["Python", "Django", "DRF", "Slack", "Jira", "MindsDB"],
      problem:
        "Need to integrate Slack and Jira data with predictive analytics and reporting workflows.",
      contributions: [
        "Integrated Slack and Jira data fetches for analytics and report generation.",
        "Worked with MindsDB for predictive analytics and managed OAuth-based integrations.",
      ],
      impact: [
        { metric: "AI + BI", label: "Predictive Reporting" },
        { metric: "OAuth", label: "Third-Party Integration" },
      ],
    },
    {
      id: "werp-keyword-search-tool",
      title: "WERP (Keyword Search Tool)",
      role: "Python Developer",
      techStack: ["Python", "Django", "Django REST Framework", "PyTest"],
      problem:
        "Need to fetch trending data from multiple sources and provide search-driven insights through reliable APIs and automation.",
      contributions: [
        "Built REST APIs for keyword search and data retrieval from Twitter, Google, YouTube, and Reddit.",
        "Implemented cron jobs and automated workflows for trend collection and analysis.",
        "Added test coverage using PyTest to improve reliability and maintainability.",
      ],
      impact: [
        { metric: "PyTest", label: "Coverage Included" },
        { metric: "Cron Jobs", label: "Automation" },
      ],
    },
  ],
  projectGallery: [
    {
      id: "title-assistant-ai-proj",
      title: "Title Assistant AI",
      projectTitle: "Title Assistant AI — Secure Real Estate Transaction APIs",
      category: "AI SaaS",
      imageUrl: "/images/laptop-bg.jpg",
      description:
        "Secure backend solution supporting title and settlement processing for U.S. real-estate transactions using Django-based APIs.",
      techStack: ["Python", "Django", "DRF"],
      role: "Python Developer",
      featured: true,
    },
    {
      id: "federation-ai-proj",
      title: "Federation AI",
      projectTitle: "Federation AI — Slack/Jira Reporting & Predictive Analytics",
      category: "AI SaaS",
      imageUrl: "/images/about1.jpg",
      description:
        "Workflow intelligence platform integrating Slack and Jira data with predictive analytics, OAuth-based access, and reporting logic.",
      techStack: ["Python", "Django", "DRF", "Slack", "Jira", "MindsDB"],
      role: "Python Developer",
      featured: true,
    },
    {
      id: "werp-proj",
      title: "WERP",
      projectTitle: "WERP — Keyword Search & Trend Analysis Tool",
      category: "Data & Search",
      imageUrl: "/images/arslan-projects-images/about.jpg",
      description:
        "Keyword search tool collecting trend data across social and search platforms and exposing it through APIs and automation jobs.",
      techStack: ["Python", "Django", "DRF", "PyTest"],
      role: "Python Developer",
    },
  ],
  experiences: [
    {
      title: "Python Developer",
      company: "Transdata",
      location: "Lahore, Pakistan",
      period: "October 2022 – Present",
      active: true,
      bulletPoints: [
        "Developed and maintained scalable backend systems using Django and Django Rest Framework.",
        "Collaborated with AI teams to integrate machine learning models into Django-based applications.",
        "Integrated AI/ML components and handled background task processing using Celery and RabbitMQ.",
        "Implemented cron jobs for keyword crawling and automation."
      ],
      technologies: [
        "Python",
        "Django",
        "Django REST Framework",
        "Celery",
        "RabbitMQ",
        "AI/ML Integration",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Linked Matrix",
      location: "Lahore, Pakistan",
      period: "September 2020 – September 2022",
      active: false,
      bulletPoints: [
        "Focused on backend using Django and Django Rest Framework.",
        "Developed background workers and integrated external APIs.",
        "Participated in design discussions and deployment automation.",
        "Explored AI concepts for keyword searching tools, including basic data analysis and trend prediction."
      ],
      technologies: [
        "Python",
        "Django",
        "Django REST Framework",
        "Background Workers",
        "API Integration",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Geekinn",
      location: "Lahore, Pakistan",
      period: "August 2018 – August 2020",
      active: false,
      bulletPoints: [
        "Developed web applications including HRMS, Autoshine, and an Upwork-style freelancing platform.",
        "Worked with Laravel, AngularJS, React.js, and Vue.js.",
        "Contributed to frontend and backend development using agile methods."
      ],
      technologies: [
        "Laravel",
        "AngularJS",
        "React.js",
        "Vue.js",
        "PHP",
        "JavaScript",
      ],
    },
  ],
  skillCategories: [
    {
      name: "Backend & APIs",
      icon: "server",
      skills: [
        "Python",
        "Django",
        "Django REST Framework",
        "Flask",
        "FastAPI",
        "RESTful APIs",
        "Third-Party API Integration",
      ],
      featuredSkills: ["Python", "Django", "Django REST Framework", "FastAPI"],
    },
    {
      name: "AI / ML & Data",
      icon: "cpu",
      skills: [
        "Pandas",
        "NumPy",
        "Langchain",
        "TensorFlow (Basic)",
        "Scikit-learn (Basic)",
        "Machine Learning Integration",
      ],
      featuredSkills: ["Pandas", "NumPy", "Langchain", "Machine Learning Integration"],
    },
    {
      name: "DevOps & Infrastructure",
      icon: "database",
      skills: [
        "Docker",
        "Git",
        "GitHub Actions",
        "Redis",
        "Celery",
        "RabbitMQ",
        "CRON Jobs",
        "Amazon S3",
        "DigitalOcean Spaces",
        "AWS",
        "Azure",
      ],
      featuredSkills: ["Docker", "GitHub Actions", "Redis", "Celery"],
    },
    {
      name: "Databases & Testing",
      icon: "terminal",
      skills: [
        "PostgreSQL",
        "MySQL",
        "SQLite",
        "MongoDB",
        "PyTest",
        "Unit Testing",
      ],
      featuredSkills: ["PostgreSQL", "MySQL", "PyTest"],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Sargodha (Lahore campus)",
      location: "Lahore, Pakistan",
      period: "2013 - 2017",
      details:
        "Bachelor of Science in Computer Science with a focus on software engineering, databases, and applied computing principles.",
    },
  ],
  certifications: [
    {
      title: "DeepLearning.AI — AI for Everyone",
      issuer: "Coursera",
      period: "Ongoing",
    },
    {
      title: "100 Days of Machine Learning",
      issuer: "Ongoing learning",
      period: "Continue",
    },
  ],
  philosophies: [
    {
      number: "01",
      title: "Scalable API Design",
      tag: "Backend",
      description:
        "Design Django and DRF services with maintainability, modular structure, and predictable scalability in mind.",
    },
    {
      number: "02",
      title: "Automation & AI Integration",
      tag: "AI",
      description:
        "Connect machine learning workflows and automation tasks into reliable production systems with clear operational boundaries.",
    },
  ],
};

/* =====================================================================
   TEAM MEMBER 6: Taha Bin Imran (Software Engineer)
   ===================================================================== */

export const TAHA_BIN_IMRAN_PORTFOLIO: PortfolioData = {
  id: "taha-bin-imran",
  personal: {
    name: "Taha Bin Imran",
    initials: "TI",
    role: "Software Engineer",
    secondaryTitle: "Full Stack Engineer + AI Engineer",
    headline: "Software Engineer Building Modern Web Apps & Resilient Systems.",
    shortBio:
      "Software engineer building resilient cloud web applications, frontend component architectures, and scalable API pipelines across modern JavaScript, TypeScript, and Python.",
    aboutText: [
      "Building robust web platforms that combine modern user experiences with dependable backend services.",
      "Passionate about AI-assisted development, clean code patterns, and automated delivery pipelines.",
      "Active developer at Xoraix Technologies specializing in Next.js, React, and Python integrations.",
    ],
    email: "taha@xoraixtechnologies.com",
    location: "Lahore, Pakistan (Remote)",
    status: "Available for Engineering Projects",
    hireable: true,
    avatarUrl: "/assets/Taha.png",
    highlights: [
      "Next.js & React",
      "TypeScript & Python",
      "Full Stack Architecture",
      "Cloud Services",
    ],
    socials: {
      github: "https://github.com/xoraix",
      linkedin: "https://www.linkedin.com/in/taha-bin-imran",
      email: "taha@xoraixtechnologies.com",
    },
  },
  metrics: [
    { value: "3+ Years", label: "Software Engineering" },
    { value: "Next.js", label: "App Router & SSR" },
    { value: "TypeScript", label: "Type-Safe Stack" },
    { value: "Cloud", label: "Modern Deployments" },
  ],
  caseStudies: [
    {
      id: "cloud-saas-platform",
      title: "Scalable Cloud Application Architecture",
      role: "Software Engineer",
      techStack: ["Next.js", "React", "TypeScript", "Python", "Tailwind CSS"],
      problem:
        "Building modern cloud-native web applications with real-time state and responsive layouts.",
      contributions: [
        "Engineered responsive frontend layouts and integrated typed API schemas.",
      ],
      impact: [
        { metric: "60 FPS", label: "UI Responsiveness" },
        { metric: "100%", label: "Type Coverage" },
      ],
    },
  ],
  projectGallery: [
    {
      id: "cloud-saas-proj",
      title: "Cloud SaaS Platform",
      projectTitle: "Scalable Cloud Application Architecture",
      category: "Web app",
      imageUrl: "/images/laptop-bg.jpg",
      description:
        "High-availability web application built with Next.js App Router, TypeScript, and Tailwind CSS.",
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Python"],
      role: "Full Stack Engineer",
      featured: true,
    },
    {
      id: "nextjs-analytics-proj",
      title: "Analytics Command Center",
      projectTitle: "Next.js App Router Analytics Hub",
      category: "AI SaaS",
      imageUrl: "/images/saddam-projects-images/Halo.jpg",
      description:
        "Real-time telemetry and metrics analytics dashboard with customizable charts and automated alerts.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      role: "Full Stack Developer",
      featured: true,
    },
    {
      id: "responsive-commerce-proj",
      title: "Modern Retail Storefront",
      projectTitle: "Responsive Retail & Checkout Storefront",
      category: "Ecommerce",
      imageUrl: "/images/saddam-projects-images/Sweet-Calbration.png",
      description:
        "Fast ecommerce experience with instant product search, optimized media delivery, and smooth checkout flow.",
      techStack: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      role: "Frontend Engineer",
    },
  ],
  experiences: [
    {
      title: "Software Engineer",
      company: "Xoraix Technologies",
      location: "Remote",
      period: "2023 – Present",
      active: true,
      bulletPoints: [
        "Developing full-stack web applications with Next.js, React, and Python.",
        "Implementing clean UI designs with Tailwind CSS and responsive principles.",
        "Building type-safe API communication layers between frontend and backend microservices.",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Python",
        "Tailwind CSS",
      ],
    },
  ],
  skillCategories: [
    {
      name: "Full Stack Engineering",
      icon: "layout",
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "Python",
        "Tailwind CSS",
        "REST APIs",
      ],
      featuredSkills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Data & Cloud",
      icon: "database",
      skills: ["PostgreSQL", "Docker", "AWS", "Git & GitHub"],
      featuredSkills: ["PostgreSQL", "Docker", "Git & GitHub"],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      institution: "University of Central Punjab",
      location: "Lahore, Pakistan",
      period: "2019 – 2023",
      details:
        "Study of Software Engineering, Modern Web Development, and Distributed Systems.",
    },
  ],
  certifications: [
    {
      title: "Full Stack Next.js Specialist",
      issuer: "Vercel Academy",
      period: "2023",
    },
    {
      title: "Docker Essentials & Container Operations",
      issuer: "Linux Foundation",
      period: "2022",
    },
  ],
  philosophies: [
    {
      number: "01",
      title: "Type Safety Everywhere",
      tag: "TypeScript",
      description:
        "End-to-end type safety from server models to UI props eliminates silent runtime bugs before they occur.",
    },
    {
      number: "02",
      title: "Lean & Accessible UI",
      tag: "UX",
      description:
        "Deliver semantic, high-performance web applications that load under 1 second on any device.",
    },
  ],
};

/* =====================================================================
   XORAIX TECHNOLOGIES TEAM DIRECTORY
   ===================================================================== */

export const TEAM_MEMBERS: TeamMember[] = [
  {
    slug: "saddam-hussain",
    name: "Saddam Hussain",
    role: "Co Founder",
    subTitle: "Full Stack Engineer + AI Engineer",
    description:
      "Senior Full Stack Engineer with 8+ years building production AI SaaS, Django DRF/FastAPI backend architectures, Next.js frontend systems, and automated OCR RPA pipelines.",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDUXj0YyXL2kNfqhE40wIbhZEajbpBCBmk0afk46ERZD3sW4VUmlCFbn9LTJoVDp7zjMOEk37r9JS4sZjh2YUZlMGal6vEvbA8Go-Z5oUtwoemXirPVH9HDBaUVNQOufN8zcfgvz92tTAW1wghyT_kw1BQAbLIxK9tiK5nolqUlt95imv40Gc1ZlzS59KfQxyK5uzUbXZ1ohH-uXD62CqFXiz22EA6OKm-wMYF8gfSDG7Ejfhkvw68VkhpkQCo8wmM8Ug",
    hireable: true,
    portfolioId: "saddam-hussain",
    featuredSkills: [
      "Python (DRF)",
      "Next.js",
      "Production AI",
      "FastAPI",
      "PostgreSQL",
      "Docker",
    ],
    colorTheme: { bg: "#c8f3f7", ring: "#9fe8ef" },
  },
  {
    slug: "arslan-syed",
    name: "Arslan Syed",
    role: "CEO Senior Full Stack + AI Engineer",
    subTitle: "Senior Full Stack Engineer",
    description:
      "Lead Full Stack Architect specializing in modern TypeScript, Next.js App Router, GraphQL APIs, MapBox geospatial satellite mapping, and distributed cloud microservices.",
    avatarUrl: "/assets/Arslan.jpeg",
    hireable: true,
    portfolioId: "arslan-syed",
    featuredSkills: [
      "Next.js App Router",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "MapBox GL",
      "PostgreSQL",
    ],
    colorTheme: { bg: "#dedbff", ring: "#c7c2ff" },
  },
  {
    slug: "abu-bakar-saddique",
    name: "Abu Bakar Saddique",
    role: "Software Engineer",
    subTitle: "Full Stack Engineer + AI Engineer",
    description:
      "Full-stack software engineer delivering modern responsive web applications, API integrations, and AI-assisted workflows with React, TypeScript, and Python.",
    avatarUrl: "/assets/AbuBakar.png",
    hireable: true,
    portfolioId: "abu-bakar-saddique",
    featuredSkills: [
      "React",
      "TypeScript",
      "Python",
      "Node.js",
      "REST APIs",
      "Tailwind CSS",
    ],
    colorTheme: { bg: "#ffd7dc", ring: "#ffc0c9" },
  },
  {
    slug: "kamran-maqbool",
    name: "Kamran Maqbool",
    role: "Python Developer",
    subTitle: "Python Backend Developer",
    description:
      "Python backend developer specializing in Django, FastAPI, database query optimization, asynchronous job workers with Celery & Redis, and Docker deployment.",
    avatarUrl: "/assets/Kamran.png",
    hireable: true,
    portfolioId: "kamran-maqbool",
    featuredSkills: [
      "Python",
      "Django DRF",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    colorTheme: { bg: "#d2f6df", ring: "#ace9c2" },
  },
  {
    slug: "taha-bin-imran",
    name: "Taha Bin Imran",
    role: "Software Engineer",
    subTitle: "Full Stack Engineer + AI Engineer",
    description:
      "Software engineer building resilient cloud web applications, frontend component architectures, and scalable API pipelines across modern JavaScript and Python.",
    avatarUrl: "/assets/Taha.png",
    hireable: true,
    portfolioId: "taha-bin-imran",
    featuredSkills: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "Tailwind CSS",
      "SQL",
    ],
    colorTheme: { bg: "#dedbff", ring: "#c7c2ff" },
  },
  {
    slug: "syed-farhan-saeed",
    name: "Syed Farhan Saeed",
    role: "Business Development Executive & Game Dev",
    subTitle: "B2B Lead Generation · Senior Unity Game Developer",
    description:
      "Senior Unity Game Developer with 4+ years shipping 60 FPS titles for PC, mobile, and Nintendo Switch, alongside strategic B2B technology partnerships and growth.",
    avatarUrl: "/assets/farhan-avatar.jpg",
    hireable: true,
    portfolioId: "farhan-saeed",
    featuredSkills: [
      "Unity 3D",
      "C#",
      "60 FPS Optimization",
      "Nintendo Switch",
      "B2B Growth",
    ],
    colorTheme: { bg: "#c8f3f7", ring: "#9fe8ef" },
  },
];

/* =====================================================================
   ACTIVE PORTFOLIO SELECTION & UTILITIES
   ===================================================================== */

export const ALL_PROFILES: PortfolioData[] = [
  SADDAM_HUSSAIN_PORTFOLIO,
  ARSLAN_SYED_PORTFOLIO,
  ABU_BAKAR_PORTFOLIO,
  KAMRAN_MAQBOOL_PORTFOLIO,
  TAHA_BIN_IMRAN_PORTFOLIO,
  SYED_FARHAN_SAEED_PORTFOLIO,
];

/**
 * Resolves a portfolio by ID or commonly used alias.
 * Supports:
 * - 'saddam' | 'saddam-hussain' | 'saddamhussain' -> Saddam Hussain
 * - 'arslan' | 'arslan-syed' | 'arslansyed' -> Arslan Syed
 * - 'abu-bakar' | 'abu-bakar-saddique' | 'bakar' -> Abu Bakar Saddique
 * - 'kamran' | 'kamran-maqbool' -> Kamran Maqbool
 * - 'taha' | 'taha-bin-imran' -> Taha Bin Imran
 * - 'farhan' | 'farhan-saeed' | 'syed-farhan-saeed' -> Syed Farhan Saeed
 */
export function getPortfolioById(
  idOrAlias: string | null | undefined,
): PortfolioData {
  if (!idOrAlias) return SADDAM_HUSSAIN_PORTFOLIO; // Saddam Hussain as default
  const cleaned = idOrAlias
    .toLowerCase()
    .trim()
    .replace(/[-_\s]/g, "");

  if (cleaned.includes("saddam")) {
    return SADDAM_HUSSAIN_PORTFOLIO;
  }
  if (cleaned.includes("arslan")) {
    return ARSLAN_SYED_PORTFOLIO;
  }
  if (cleaned.includes("bakar") || cleaned.includes("abubakar")) {
    return ABU_BAKAR_PORTFOLIO;
  }
  if (cleaned.includes("kamran")) {
    return KAMRAN_MAQBOOL_PORTFOLIO;
  }
  if (cleaned.includes("taha")) {
    return TAHA_BIN_IMRAN_PORTFOLIO;
  }
  if (cleaned.includes("farhan") || cleaned.includes("saeed")) {
    return SYED_FARHAN_SAEED_PORTFOLIO;
  }

  const found = ALL_PROFILES.find(
    (p) =>
      p.id === idOrAlias || p.personal.name.toLowerCase().includes(cleaned),
  );
  return found || SADDAM_HUSSAIN_PORTFOLIO;
}

/**
 * DEFAULT ACTIVE PORTFOLIO:
 * Saddam Hussain by default (from user request), seamlessly switchable.
 */
export const DEFAULT_PORTFOLIO: PortfolioData = SADDAM_HUSSAIN_PORTFOLIO;

// Compatibility exports derived from active portfolio
export const PROFILE: PersonalInfo = DEFAULT_PORTFOLIO.personal;
export const METRICS: MetricItem[] = DEFAULT_PORTFOLIO.metrics;
export const CASE_STUDIES: CaseStudy[] = DEFAULT_PORTFOLIO.caseStudies;
export const EXPERIENCES: ExperienceItem[] = DEFAULT_PORTFOLIO.experiences;
export const SKILL_CATEGORIES: SkillCategory[] =
  DEFAULT_PORTFOLIO.skillCategories;
export const ENGINEERING_PHILOSOPHIES: EngineeringPhilosophyItem[] =
  DEFAULT_PORTFOLIO.philosophies || [];
