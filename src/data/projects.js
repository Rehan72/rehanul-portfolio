export const projects = [
  {
    title: "AssetWorks - EV Charging Management Portal",
    period: "2024 - Present",
    desc: "Enterprise EV Charging Management System with multi-role access for Super Admins, Admins, and Operators.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop&crop=center",
    live: "#",
    code: "#",
    tags: ["Angular 13", "TypeScript", "ECharts", "Google Maps", "Material UI", "RxJS"],
    longDesc: "AssetWorks is a comprehensive Enterprise EV (Electric Vehicle) Charging Management Portal - a multi-role web application for managing electric vehicle charging infrastructure. The platform provides role-based access for Super Admins, Admins, and Operators to manage charging stations, locations, assets, users, subscriptions, and billing.",
    features: [
      "Role-based authentication (Super Admin, Admin, Operator) with JWT tokens and route guards",
      "Interactive dashboards with ECharts (Area, Bar, Line, Stacked, Meter charts)",
      "CRUD operations for Locations, Chargers, Assets, Users, Customers, Subscriptions, and Pricing",
      "Google Maps integration with marker clustering for location visualization",
      "PDF generation and data export using jsPDF and mat-table-exporter",
      "Angular Material responsive UI with custom SCSS styling",
      "Lazy loading modules for performance optimization",
      "HTTP interceptors for API security and token management"
    ],
    tech: ["Angular 13.3.0", "TypeScript 4.6.2", "SCSS", "Angular Material 13.3.9", "ECharts 5.3.3", "Google Maps API", "jsPDF", "JWT Decode", "RxJS 7.5.0", "SweetAlert2", "Sonar Scanner", "Karma", "Jasmine"]
  },
  {
    title: "Sparke - EV Charging Station Management Portal",
    period: "2024 - Present",
    desc: "Enterprise SaaS platform for EV charging infrastructure management with multi-tenant architecture and 7+ user roles.",
    img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=500&h=300&fit=crop&crop=center",
    live: "#",
    code: "#",
    tags: ["React 17", "Redux-Saga", "MUI", "ECharts", "Docker", "Jest"],
    longDesc: "Sparke is an EV Charging Station Management Portal (CPO - Charge Point Operator Platform) - A comprehensive web application for managing electric vehicle charging infrastructure. This is an enterprise-level SaaS platform with multi-tenant architecture supporting different user roles.",
    features: [
      "Multi-role RBAC system supporting 7+ user roles (Super Admin, CPO Admin, Enterprise Admin, Corporate Admin, Operator, Field Operator, Driver)",
      "Dynamic form generation system using React Hook Form for configurable business forms",
      "Google Maps API integration for location-based charging station management",
      "Real-time dashboards with ECharts for monitoring charging sessions, energy consumption, and revenue",
      "Redux + Redux-Saga for complex async state management across the application",
      "80%+ test coverage using Jest and React Testing Library",
      "Containerized application using Docker for production deployment with Nginx",
      "OCPP protocols for charging operations and remote diagnostics"
    ],
    tech: ["React 17", "Redux + Redux-Saga", "Material-UI", "React Hook Form", "ECharts", "Google Maps API", "Docker", "Nginx", "Jest", "Axios", "Storybook", "SASS"]
  },
  {
    title: "LevelUp - EV Charging Management Platform",
    period: "2024 - Present",
    desc: "Multi-tenant SaaS platform supporting multiple EV charging brands (LevelUp, Sparke, Fleete, Roame, Flexe) with roaming capabilities.",
    img: "https://images.unsplash.com/photo-1634767774580-ff51d5d8023e?w=500&h=300&fit=crop&crop=center",
    live: "https://dev-levelup-portal.demoapplication.net",
    code: "#",
    tags: ["React 18", "Redux Toolkit", "MUI", "ECharts", "Docker", "Razorpay", "Nginx"],
    longDesc: "LevelUp is a comprehensive web-based platform for Electric Vehicle (EV) charging network management. Built as a multi-tenant SaaS solution supporting multiple brands (LevelUp, Sparke, Fleete, Roame, Flexe) under one unified system. The platform enables EV roaming between different charging networks and service providers.",
    features: [
      "Multi-tenant SaaS architecture supporting 5+ brands",
      "JWT-based authentication with token refresh mechanism",
      "Role-based access control (RBAC) with 3 main roles: System Admin, Platform Admin, Non-System User",
      "AES password encryption for security",
      "Role-specific dashboards with analytics (Donut charts)",
      "Company profile management with multiple brand support",
      "Payment gateway integration (Razorpay)",
      "Invoice template management",
      "Policy management (Privacy Policy, Terms & Conditions, Refund Policy, FAQ)",
      "System configuration and notification settings",
      "Error boundaries for graceful error handling"
    ],
    tech: ["React 18.2.0", "Redux Toolkit", "Redux Persist", "Material-UI v5.15", "React Router DOM v6", "React Hook Form", "Axios", "ECharts", "Day.js", "Moment.js", "CKEditor", "Docker", "Nginx", "GitLab CI", "SonarQube", "Jest"]
  },
  {
    title: "ITS Smart Card Management System",
    period: "2023 - 2024",
    desc: "Comprehensive web application for managing smart card lifecycle operations including applications, upgrades, and dispatch.",
    img: "https://images.unsplash.com/photo-1621768216002-5ac171876625?w=500&h=300&fit=crop&crop=center",
    live: "#",
    code: "#",
    tags: ["React 18", "Vite", "Tailwind CSS", "Radix UI", "GitLab CI/CD", "Docker"],
    longDesc: "ITS Smart Card Management System is a full-featured web application for managing card lifecycle including card applications, upgrades, lost card tracking, quality control, dispatch, and delivery. It serves as an administrative portal for card management operations with comprehensive workflow management.",
    features: [
      "Complete card lifecycle management workflow (15+ status stages)",
      "Dashboard with real-time card status tracking",
      "Card workflow stages: Initiate → Acknowledge → Download → Receive → Check → Print → QC → Dispatch → Delivery → Complete",
      "Import/Print and Export/Print modules with bulk upload capability",
      "Card Inventory management with bulk upload",
      "Quality Control workflow for card inspection",
      "Lost card application processing and tracking",
      "Reports & Analytics: Payment Reports, Cards Report, Missing Reports, Reconciliation",
      "Multi-environment deployment (Dev, QA, UAT, Prod) with GitLab CI/CD",
      "40+ reusable UI components using Radix UI"
    ],
    tech: ["React 18", "Vite 6", "React Router DOM v7", "Tailwind CSS 3", "Radix UI / Shadcn UI", "Framer Motion", "React Context", "Axios", "React Hook Form", "Zod", "Jest", "GitLab CI/CD", "Docker", "SonarQube", "Trivy"]
  },
  {
    title: "Elaam - Islamic Religious Management System",
    period: "2021 - 2022",
    desc: "Comprehensive Angular-based system for community management with 20+ modules including Niyat tracking, Quran Hifz, and religious activities.",
    img: "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=500&h=300&fit=crop&crop=center",
    live: "#",
    code: "#",
    tags: ["Angular 12", "TypeScript", "ECharts", "Leaflet Maps", "JWT", "Bootstrap"],
    longDesc: "Elaam is a comprehensive Islamic religious management system for community management, tracking Niyat (intentions), Khidmat Ramadaniyah (Ramadan services), Quran Hifz, and various other Islamic religious activities. Features 20+ feature modules with role-based access control.",
    features: [
      "JWT-based authentication with role-based access control for 10+ user roles",
      "Multi-role dashboards (Super Admin, Jamiat Masool, Aamil, Muavin Aamil, Dept Head, Umoor Head, etc.)",
      "Niyat (Intentions) tracking and approval workflow",
      "Khidmat Ramadaniyah (Ramadan services) management",
      "Quran Hifz (memorization) tracking",
      "Qardan Hasanah (Islamic microfinance) management",
      "Catalogue rewards system",
      "Interactive dashboard with ECharts analytics",
      "Map integration with Leaflet",
      "File export (PDF, Excel, CSV) capabilities"
    ],
    tech: ["Angular 12.2.x", "TypeScript 4.3.5", "Angular Material 12.2.12", "SCSS", "Bootstrap 4.3.1", "ECharts", "ngx-echarts", "Leaflet Maps", "ExcelJS", "jsPDF", "JWT Decode", "Karma", "Jasmine", "Sonar Scanner"]
  }
];
