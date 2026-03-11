import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/map', label: 'Map' },
  { to: '/safety-tips', label: 'Safety Tips' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function SiteFooter() {
  return (
    <footer style={{ background: '#141414', padding: '60px 24px 40px', marginTop: 'auto' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap',
          gap: '32px',
          marginBottom: '40px' 
        }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
             <Shield color="#e8a020" size={28} />
             <span className="font-playfair" style={{ fontWeight: 800, fontSize: '24px', color: '#ffffff' }}>Avaya</span>
          </Link>

          {/* Links */}
          <div style={{ 
            display: 'flex', 
            gap: '24px', 
            flexWrap: 'wrap',
            fontSize: '15px', 
            color: '#a0a0a0', 
            fontWeight: 500 
          }}>
            {footerLinks.map(({ to, label }) => (
              <Link 
                key={to} 
                to={to} 
                style={{ color: '#a0a0a0', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.target.style.color = '#e8a020'}
                onMouseLeave={(e) => e.target.style.color = '#a0a0a0'}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '32px', 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          color: '#6b6b6b', 
          fontSize: '14px' 
        }}>
           <div>© {new Date().getFullYear()} Avaya Women's Safety. All rights reserved.</div>
           <div style={{ color: '#a0a0a0' }}>Emergency: <strong style={{ color: '#e04040' }}>100</strong></div>
        </div>
      </div>
    </footer>
  );
}
