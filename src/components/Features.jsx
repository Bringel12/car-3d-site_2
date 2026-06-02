// src/components/Features.jsx
export default function Features() {
  const features = [
    {
      title: 'PERFORMANCE',
      description: 'Motores elétricos de alta performance e eficiência.',
      icon: '⚡'
    },
    {
      title: 'SEGURANÇA',
      description: 'Tecnologias avançadas para sua proteção e conforto.',
      icon: '🛡️'
    },
    {
      title: 'SUSTENTABILIDADE',
      description: 'Compromisso com um futuro mais sustentável.',
      icon: '🌱'
    },
    {
      title: 'CONECTIVIDADE',
      description: 'Conecte-se com o que há de mais moderno.',
      icon: '📡'
    }
  ];

  return (
    <section style={{
      padding: '80px 5%',
      background: '#0f0f1a',
      color: 'white',
      width: '100%'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {features.map((feature, index) => (
          <div key={index} style={{
            padding: '40px 30px',
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '15px',
            textAlign: 'center',
            transition: 'all 0.3s',
            border: '1px solid rgba(255,255,255,0.05)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
            e.currentTarget.style.borderColor = 'rgba(0,180,216,0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{feature.icon}</div>
            <h3 style={{ marginBottom: '15px', letterSpacing: '1px' }}>{feature.title}</h3>
            <p style={{ color: '#aaa', lineHeight: '1.6' }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}