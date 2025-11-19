import {
      ArrowUpCircle,
      Award,
      BarChart3,
      BellRing,
      CheckCircle2,
      Clock,
      Fingerprint,
      Laptop,
      Lightbulb,
      LineChart as LineChartIcon,
      Lock,
      ShieldCheck,
      Sparkles,
      Users,
      Wallet,
      Zap,
} from "lucide-react";

export const features = [
      {
            title: "AI-Powered Insights",
            description:
                  "Get predictive analytics and actionable recommendations powered by advanced machine learning algorithms.",
            icon: Sparkles,
            gradient: "from-blue-600 to-blue-800",
      },
      {
            title: "Real-time Analytics",
            description:
                  "Monitor your business performance with live dashboards and instant notifications for important events.",
            icon: BarChart3,
            gradient: "from-teal-600 to-teal-800",
      },
      {
            title: "Smart Automation",
            description:
                  "Automate repetitive tasks and workflows with intelligent rules and triggers.",
            icon: Zap,
            gradient: "from-purple-600 to-purple-800",
      },
];

export const security = [
      {
            title: "End-to-End Encryption",
            description:
                  "Your data is encrypted in transit and at rest using industry-standard protocols",
            icon: Lock,
            gradient: "from-blue-600 to-blue-800",
      },
      {
            title: "Biometric Authentication",
            description:
                  "Multi-factor authentication with biometric security options",
            icon: Fingerprint,
            gradient: "from-purple-600 to-purple-800",
      },
      {
            title: "24/7 Monitoring",
            description: "Continuous security monitoring and threat detection",
            icon: ShieldCheck,
            gradient: "from-green-600 to-green-800",
      },
      {
            title: "Compliance Ready",
            description: "Built to meet global financial compliance standards",
            icon: Award,
            gradient: "from-yellow-600 to-yellow-800",
      },
];

export const statistics = [
      {
            title: "Total Revenue",
            value: "₹380000",
            change: "+23.36%",
            icon: Wallet,
            color: "blue",
      },
      {
            title: "Monthly Growth",
            value: "32.19%",
            change: "+7.89%",
            icon: BarChart3,
            color: "teal",
      },
      {
            title: "Active Users",
            value: "1,134",
            change: "+12.45%",
            icon: BellRing,
            color: "purple",
      },
];

export const stats = [
      { label: "Active Users", value: "100,000+", icon: Users },
      { label: "Transactions Processed", value: "₹2B+", icon: LineChartIcon },
      { label: "Data Points Analyzed", value: "500M+", icon: Laptop },
      { label: "Customer Satisfaction", value: "99.9%", icon: CheckCircle2 },
];

export const testimonials = [
      {
            name: "Sarah Johnson",
            role: "CFO, TechCorp",
            content: "FinanceAI has transformed how we handle our financial operations. The AI insights are incredibly accurate.",
            company: "TechCorp Inc.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200",
      },
      {
            name: "Michael Chen",
            role: "CEO, StartupX",
            content: "The automation capabilities have saved us countless hours. It's like having a financial advisor available 24/7.",
            company: "StartupX",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
      },
      {
            name: "Emily Roberts",
            role: "Director of Finance",
            content: "The real-time insights have helped us make better decisions faster. The ROI has been incredible.",
            company: "Global Innovations",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
      },
];

export const howitworks = [
      {
            title: "Connect Your Data",
            description:
                  "Seamlessly integrate with your existing financial tools and systems",
            icon: ArrowUpCircle,
            color: "blue",
      },
      {
            title: "AI Analysis",
            description:
                  "Our AI processes your data to generate actionable insights",
            icon: Lightbulb,
            color: "yellow",
      },
      {
            title: "Real-time Insights",
            description: "Get instant notifications and recommendations",
            icon: Clock,
            color: "green",
      },
];
