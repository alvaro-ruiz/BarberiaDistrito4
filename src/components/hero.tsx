import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-gray-900 text-white py-20">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/fondo.jpg')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      ></div>

      {/* Contenido del Hero */}
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl font-bold mb-4 text-shadow">
          Bienvenido a Barberia Distrito4
        </h1>
        <p className="text-xl mb-8 text-shadow">
          Donde la tradición y las tendencias se unen para realzar tu estilo.
        </p>
        <Link
          href="https://booksy.com/es-es/105454_barberia-distrito4_barberia_29485_malaga#ba_s=sr_1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
        >
          Reservar
        </Link>
      </div>
    </div>
  );
}
