import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ScopeGenerator.css';

function ScopeGenerator() {
  return (
    <div className="feature-page">
      <div className="feature-container">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          <span>Back to Dashboard</span>
        </Link>

        <div className="feature-header">
          <div className="feature-icon" style={{ color: '#539e71' }}>
            <FileText size={48} strokeWidth={2} />
          </div>
          <h1 className="feature-title">Scope Generator</h1>
          <p className="feature-description">
            Generate comprehensive project scopes and proposals for renovation projects using AI
          </p>
        </div>

        <div className="feature-content">
          <div className="placeholder-content">
            <h2>Coming Soon</h2>
            <p>This feature is currently under development.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScopeGenerator;
