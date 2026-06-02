// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      padding: '20px 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
      background: 'rgba(0,0,0,0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255,255,255,0.1)'
    }}>
      <h1 style={{ 
        color: 'white', 
        fontSize: '1.5rem', 
        margin: 0,
        letterSpacing: '2px'
      }}>FUTURE CAR</h1>
      
      <div style={{ 
        display: 'flex', 
        gap: 'clamp(15px, 2vw, 40px)',
        alignItems: 'center'
      }}>
        {['HOME', 'MODELOS', 'TECNOLOGIA', 'SOBRE', 'CONTATO'].map(item => (
          <a 
            key={item} 
            href="#" 
            style={{ 
              color: 'white', 
              textDecoration: 'none', 
              fontSize: '0.9rem',
              fontWeight: '500',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#00b4d8'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
          >
            {item}
          </a>
        ))}
        <button style={{
          background: 'linear-gradient(135deg, #00b4d8, #0096b4)',
          border: 'none',
          color: 'white',
          padding: '10px 25px',
          cursor: 'pointer',
          borderRadius: '30px',
          fontWeight: 'bold',
          transition: 'transform 0.3s, box-shadow 0.3s'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.05)';
          e.target.style.boxShadow = '0 5px 15px rgba(0,180,216,0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = 'none';
        }}>
          TEST DRIVE
        </button>
      </div>
    </nav>
  );
}