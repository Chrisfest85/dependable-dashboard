import { Globe, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../scope-generator/ScopeGenerator.css';

function WebsiteClone() {
  return (
    <div className="feature-page">
      <div className="feature-container">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          <span>Back to Dashboard</span>
        </Link>

        <div className="feature-header">
          <div className="feature-icon" style={{ color: '#e8b835' }}>
            <Globe size={48} strokeWidth={2} />
          </div>
          <h1 className="feature-title">Website Clone</h1>
          <p className="feature-description">
            Analyze and clone website structures for inspiration and reference
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

export default WebsiteClone;
