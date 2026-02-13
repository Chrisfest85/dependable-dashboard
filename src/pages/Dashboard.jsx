import { FileText, Globe } from 'lucide-react';
import ToolCard from '../components/common/ToolCard';
import './Dashboard.css';

function Dashboard() {
  const tools = [
    {
      icon: FileText,
      title: 'Scope Generator',
      description: 'Generate comprehensive project scopes and proposals for renovation projects',
      link: '/scope-generator',
      iconColor: '#539e71', // Aqua Forest
      comingSoon: false
    },
    {
      icon: Globe,
      title: 'Website Clone',
      description: 'Analyze and clone website structures for inspiration and reference',
      link: '/website-clone',
      iconColor: '#e8b835', // Tulip Tree
      comingSoon: false
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
