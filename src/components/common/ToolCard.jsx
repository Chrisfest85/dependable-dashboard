import { Link } from 'react-router-dom';
import './ToolCard.css';

function ToolCard({ icon: Icon, title, description, link, comingSoon = false, iconColor = 'var(--color-accent)' }) {
  const CardContent = () => (
    <>
      {comingSoon && <span className="tool-card-badge">Coming Soon</span>}
      <div className="tool-card-icon" style={{ color: iconColor }}>
        <Icon size={32} strokeWidth={2} />
      </div>
      <h3 className="tool-card-title">{title}</h3>
      <p className="tool-card-description">{description}</p>
    </>
  );

  if (comingSoon) {
    return (
      <div className="tool-card tool-card-disabled">
        <CardContent />
      </div>
    );
  }

  return (
    <Link to={link} className="tool-card tool-card-link">
      <CardContent />
    </Link>
  );
}

export default ToolCard;
