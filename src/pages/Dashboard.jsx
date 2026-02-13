import { Globe, Calculator, FileText, ClipboardList, PenTool, BookOpen, Share2, Bot } from 'lucide-react';
import ToolCard from '../components/common/ToolCard';
import './Dashboard.css';

function Dashboard() {
  const tools = [
    {
      icon: Globe,
      title: 'Website Clone',
      description: 'Analyze and clone website structures for inspiration and reference',
      link: '/website-clone',
      iconColor: '#e8b835', // Tulip Tree
      comingSoon: false
    },
    {
      icon: Calculator,
      title: 'Budget Calculator',
      description: 'Generate preliminary budget ranges for Calgary luxury renovations based on project parameters',
      link: '/budget-calculator',
      iconColor: '#539e71', // Aqua Forest
      comingSoon: false
    },
    {
      icon: FileText,
      title: 'Proposal Generator',
      description: 'Create polished preliminary proposals from site visit notes in your voice',
      link: '/proposal-generator',
      iconColor: '#434a4c', // Cape Cod
      comingSoon: false
    },
    {
      icon: ClipboardList,
      title: 'Detailed Scope Generator',
      description: 'Generate trade-ready scopes of work with built-in gap checking to reduce warranty exposure',
      link: '/scope-generator',
      iconColor: '#7c6b63', // Sand Dune
      comingSoon: false
    },
    {
      icon: PenTool,
      title: 'Blog Post Generator',
      description: 'Create SEO-optimized blog content targeting Calgary homeowner search queries',
      link: '/blog-generator',
      iconColor: '#539e71', // Aqua Forest
      comingSoon: true
    },
    {
      icon: BookOpen,
      title: 'Case Study Generator',
      description: 'Transform completed projects into compelling narrative case studies',
      link: '/case-study-generator',
      iconColor: '#e8b835', // Tulip Tree
      comingSoon: true
    },
    {
      icon: Share2,
      title: 'Social Media Manager',
      description: 'Generate social media content and captions from project photos',
      link: '/social-media-manager',
      iconColor: '#434a4c', // Cape Cod
      comingSoon: true
    },
    {
      icon: Bot,
      title: 'JobTread Assistant',
      description: 'Automate POs, change orders, budget tracking, and project administration',
      link: '/jobtread-assistant',
      iconColor: '#7c6b63', // Sand Dune
      comingSoon: true
    }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1 className="dashboard-title">AI Tools</h1>
          <p className="dashboard-subtitle">
            Powerful tools to streamline your renovation business
          </p>
        </div>

        <div className="tools-grid">
          {tools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
