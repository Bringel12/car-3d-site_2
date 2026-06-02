import { Canvas } from "@react-three/fiber";

export default function Hero() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)",
        overflow: "hidden",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[0, 2, 2]} intensity={0.5} />
      </Canvas>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "100vh",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "40px",
          gap: "30px",
        }}
      >
        {/* Texto */}
        <div
          style={{
            flex: "1 1 400px",
            color: "white",
            maxWidth: "600px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              margin: 0,
              letterSpacing: "3px",
            }}
          >
            FUTURE CAR
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 3vw, 1.5rem)",
              marginTop: "10px",
            }}
          >
            Experiência automotiva em 3D
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              color: "#ccc",
            }}
          >
            Explore o futuro dos automóveis com tecnologia,
            design e performance em um só lugar.
          </p>

          <button
            style={{
              marginTop: "30px",
              padding: "15px 40px",
              background: "#00b4d8",
              border: "none",
              color: "white",
              fontSize: "1rem",
              cursor: "pointer",
              borderRadius: "40px",
              fontWeight: "bold",
            }}
          >
            EXPLORAR MODELOS →
          </button>
        </div>

        {/* Carro */}
        <div
          style={{
            flex: "1 1 350px",
            textAlign: "center",
          }}
        >
          {/* <img
            src="/models/c785fa0d-4bfd-4ab5-9b26-ac0c5617a745.png"
            alt="Carro"
            style={{
              width: "100%",
              maxWidth: "700px",
              height: "auto",
            }}
          /> */}
          <img
  src="/models/c785fa0d-4bfd-4ab5-9b26-ac0c5617a745.png"
  alt="Carro"
  style={{
    width: "100%",
    maxWidth: "700px",
    height: "auto",
    animation: "spin 10s linear infinite",
  }}
/>
<style>
  {`
    @keyframes spin {
      from {
        transform: rotateY(0deg);
      }
      to {
        transform: rotateY(360deg);
      }
    }
  `}
</style>
        </div>
      </div>
    </div>
  );
}