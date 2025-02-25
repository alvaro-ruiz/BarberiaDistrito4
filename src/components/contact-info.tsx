export default function ContactInfo() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
      <h2 className="text-3xl font-bold mb-6">Contactanos</h2>
      <div className="space-y-4">
        <div>
          <p className="font-semibold">Dirección:</p>
          <p>Camino Castillejos, Local 6, Málaga</p>
        </div>
        <div>
          <p className="font-semibold">Instagram:</p>
          <p>@barberia_distrito_4</p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Horario</h3>
        <p className="mb-2">Abierto de Lunes a Viernes</p>
        <ul className="space-y-1">
          <li>
            <strong>Lunes - Viernes:</strong> 9:30 - 2:00 / 16:30 - 20:30
          </li>
          <li>
            <strong>sabados y Domingos:</strong> Cerrados.
          </li>
        </ul>
      </div>
    </div>
  );
}
