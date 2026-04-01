import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const C = {
  black:      '#9d9faa',
  blackLift:  '#adb0ba',
  maroon:     '#3a020a',
  warmWhite:  '#ffffff',
  grey:       '#000000',
} as const;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { name: 'Home',     href: '/#home'     },
    { name: 'About',    href: '/#about'    },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact',  href: '/#contact'  },
  ];

  const isSubPage = location.pathname !== '/';
  const solid = scrolled || isSubPage;

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 300,
        transition: 'all 0.4s ease',
        background: solid ? 'rgba(255, 255, 255, 0.97)' : 'transparent',
        borderBottom: solid ? '1px solid #8a8c96' : '1px solid transparent',
        backdropFilter: solid ? 'blur(16px)' : 'none',
        padding: solid ? '14px 0' : '22px 0',
      }}
    >
      <div className="container mx-auto px-6">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Link
            to="/"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.4rem',
              fontWeight: 700,
              color: solid ? C.maroon : '#EDEBDD',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'color 0.4s ease',
            }}
          >
            <span style={{ color: C.maroon, fontSize: '1.6rem', lineHeight: 1 }}>✦</span>
            Tiara Shalma
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex" style={{ gap: '2.5rem', alignItems: 'center' }}>
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: solid ? C.maroon : '#EDEBDD',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = solid ? '#5a0310' : C.warmWhite)}
                onMouseLeave={e => (e.currentTarget.style.color = solid ? C.maroon : '#EDEBDD')}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(p => !p)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: solid ? C.maroon : '#EDEBDD', padding: '4px', transition: 'color 0.4s ease' }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            style={{
              marginTop: '1rem',
              background: '#adb0ba',
              border: '1px solid #8a8c96',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'block',
                  padding: '0.875rem 1.25rem',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: C.grey,
                  textDecoration: 'none',
                  borderBottom: '1px solid #8a8c96',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#3a020a';
                  e.currentTarget.style.color = C.warmWhite;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = C.warmWhite;
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;