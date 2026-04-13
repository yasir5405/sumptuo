import {
  IconAlertTriangle,
  IconBell,
  IconBolt,
  IconBook,
  IconChartBar,
  IconEye,
  IconHelpCircle,
  IconLayoutDashboard,
  IconMail,
  IconMapPin,
  IconPlayerPlay,
  IconPlug,
  IconScanEye,
  IconShieldBolt,
  IconShoppingBag,
  IconTrendingUp,
  IconUser,
  IconUserOff,
  type TablerIcon,
} from "@tabler/icons-react";

export const featuresSections = [
  {
    title: "Ad Analysis",
    items: [
      {
        name: "Performance Scanner",
        description: "Instantly identify your underperforming ads",
        href: "/features/scanner",
      },
      {
        name: "Waste Detection",
        description: "Find exactly where your budget is being drained",
        href: "/features/waste",
      },
    ],
  },
  {
    title: "Insights",
    items: [
      {
        name: "AI Recommendations",
        description: "Get actionable steps to improve your ROAS",
        href: "/features/recommendations",
      },
      {
        name: "Spend Analysis",
        description: "See which campaigns are worth keeping",
        href: "/features/analysis",
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        name: "Campaign Dashboard",
        description: "All your Google and Meta campaigns in one place",
        href: "/dashboard",
      },
      {
        name: "Budget Controls",
        description: "Set rules to pause or cap underperforming ads",
        href: "/features/controls",
      },
      {
        name: "Alerts",
        description: "Get notified before ad spend goes to waste",
        href: "/features/alerts",
      },
    ],
  },
];

export const integrationsSections = [
  {
    title: "Ad Platforms",
    items: [
      {
        name: "Google Ads",
        description: "Connect your Google Ads account in seconds",
        href: "/integrations/google-ads",
      },
      {
        name: "Meta Ads",
        description: "Sync Facebook and Instagram ad data",
        href: "/integrations/meta-ads",
      },
    ],
  },
  {
    title: "Data",
    items: [
      {
        name: "Export Reports",
        description: "Download campaign insights as CSV or PDF",
        href: "/integrations/export",
      },
      {
        name: "API Access",
        description: "Plug Sumptuo data into your own tools",
        href: "/integrations/api",
      },
    ],
  },
];

export const caseStudiesSections = [
  {
    title: "By Industry",
    items: [
      {
        name: "E-commerce",
        description: "How DTC brands cut wasted ad spend by 40%",
        href: "/case-studies/ecommerce",
      },
      {
        name: "SaaS",
        description: "Improving ROAS for subscription businesses",
        href: "/case-studies/saas",
      },
      {
        name: "Agencies",
        description: "Managing ad spend across multiple clients",
        href: "/case-studies/agencies",
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        name: "About",
        description: "Why Sumptuo exists",
        href: "/about",
      },
      {
        name: "Contact",
        description: "Reach out for support or feedback",
        href: "/contact",
      },
    ],
  },
];

export const pricingSections = [
  {
    title: "Plans",
    items: [
      {
        name: "Free Audit",
        description: "Scan your ads and see waste for free",
        href: "/pricing#free",
      },
      {
        name: "Pro",
        description: "Full access to controls, alerts, and AI insights",
        href: "/pricing#pro",
      },
      {
        name: "Agency",
        description: "Manage multiple ad accounts under one roof",
        href: "/pricing#agency",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        name: "Documentation",
        description: "How to get the most out of Sumptuo",
        href: "/docs",
      },
      {
        name: "Changelog",
        description: "See what's new and what's improved",
        href: "/changelog",
      },
    ],
  },
];

export const products: {
  icon: TablerIcon;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: IconShieldBolt,
    title: "Wasted Spend Detector",
    description: "Find budget leaks",
    href: "/features/waste",
  },
  {
    icon: IconBell,
    title: "Alerts",
    description: "Real-time warnings",
    href: "/features/alerts",
  },
  {
    icon: IconLayoutDashboard,
    title: "Campaign Dashboard",
    description: "All campaigns",
    href: "/dashboard",
  },
  {
    icon: IconChartBar,
    title: "Spend Analysis",
    description: "What's working",
    href: "/features/analysis",
  },
  {
    icon: IconMail,
    title: "Weekly Reports",
    description: "Inbox insights",
    href: "/features/reports",
  },
  {
    icon: IconScanEye,
    title: "Performance Scanner",
    description: "Spot weak ads",
    href: "/features/scanner",
  },
];

export const platform: {
  icon: TablerIcon;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: IconShoppingBag,
    title: "For D2C Brands",
    description: "Scale profitably",
    href: "/solutions/d2c",
  },
  {
    icon: IconMapPin,
    title: "For Local Businesses",
    description: "Get more leads",
    href: "/solutions/local",
  },
  {
    icon: IconUser,
    title: "For Beginners",
    description: "No ads experience",
    href: "/solutions/beginners",
  },
  {
    icon: IconBolt,
    title: "Quick Setup",
    description: "Connect in minutes",
    href: "/features/connect",
  },
];

export const solutions = [
  {
    icon: IconShieldBolt,
    title: "Reduce Wasted Spend",
    description: "Stop budget leaks",
    href: "/solutions/wasted-spend",
  },
  {
    icon: IconTrendingUp,
    title: "Improve Performance",
    description: "Fix weak ads",
    href: "/solutions/performance",
  },
  {
    icon: IconEye,
    title: "Understand Your Ads",
    description: "Simple insights",
    href: "/solutions/insights",
  },
  {
    icon: IconUserOff,
    title: "No Agency Needed",
    description: "Self-serve clarity",
    href: "/solutions/no-agency",
  },
];

export const useCases = [
  {
    icon: IconShoppingBag,
    title: "D2C Brands",
    description: "Scale profitably",
    href: "/solutions/d2c",
  },
  {
    icon: IconMapPin,
    title: "Local Businesses",
    description: "Get more leads",
    href: "/solutions/local",
  },
  {
    icon: IconUser,
    title: "Beginners",
    description: "No ads experience",
    href: "/solutions/beginners",
  },
];

export const resources = [
  {
    icon: IconBook,
    title: "Guides",
    description: "Learn Google Ads basics",
    href: "/guides",
  },
  {
    icon: IconAlertTriangle,
    title: "Common Mistakes",
    description: "Why ads waste money",
    href: "/mistakes",
  },
  {
    icon: IconMail,
    title: "Weekly Insights",
    description: "Real ad breakdowns",
    href: "/insights",
  },
  {
    icon: IconHelpCircle,
    title: "Help Center",
    description: "FAQs & support",
    href: "/help",
  },
];

export const learn = [
  {
    icon: IconBook,
    title: "Guides",
    description: "Ads basics",
    href: "/guides",
  },
  {
    icon: IconAlertTriangle,
    title: "Common Mistakes",
    description: "Avoid wasted spend",
    href: "/mistakes",
  },
  {
    icon: IconChartBar,
    title: "Benchmarks",
    description: "CTR, CPC standards",
    href: "/benchmarks",
  },
];

export const explore = [
  {
    icon: IconMail,
    title: "Weekly Insights",
    description: "Real ad breakdowns",
    href: "/insights",
  },
  {
    icon: IconTrendingUp,
    title: "Case Studies",
    description: "Before & after",
    href: "/case-studies",
  },
  {
    icon: IconBolt,
    title: "How It Works",
    description: "See product flow",
    href: "/how-it-works",
  },
];

export const getStarted = [
  {
    icon: IconPlug,
    title: "Connect Google Ads",
    description: "Setup in minutes",
    href: "/connect",
  },
  {
    icon: IconHelpCircle,
    title: "Help Center",
    description: "FAQs & answers",
    href: "/help",
  },
  {
    icon: IconPlayerPlay,
    title: "Quick Demo",
    description: "See it in 2 mins",
    href: "/demo",
  },
];
