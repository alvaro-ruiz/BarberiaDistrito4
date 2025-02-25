import Link from "next/link";

export default function BookingCTA() {
  return (
    <div className="bg-gray-800 text-white py-12 px-6 rounded-lg text-center">
      <h2 className="text-3xl font-bold mb-4">¿Preparado para un pelado?</h2>
      <p className="text-xl mb-8">Reserva ya.</p>
      <Link
        href="https://booksy.com/es-es/105454_barberia-distrito4_barberia_29485_malaga#ba_s=sr_1"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-gray-800 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-200 transition duration-300"
      >
        Reservar
      </Link>
    </div>
  );
}
