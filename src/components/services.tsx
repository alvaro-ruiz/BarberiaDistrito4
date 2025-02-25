import Link from "next/link";
import Script from "next/script";

export default function Services() {
  const services = [
    {
      name: "Corte de Caballero",
      price: "10€",
      image: "/images/cortedeCaballero.jpg",
    },
    {
      name: "Corte + Barba maquina",
      price: "13€",
      image: "/images/corteBarba.jpg",
    },
    {
      name: "Rapado + Barba",
      price: "13€",
      image: "/images/rapadoBarba.jpg",
    },
    {
      name: "Corte niños de primaria",
      price: "8 €",
      image: "/images/corteNiño.jpg",
    },
    {
      name: "Rapado Normal",
      price: "8€",
      image: "/images/rapado.jpg",
    },
  ];

  return (
    <>
      <div className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Servicios Frecuentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    className="w-full h-full object-cover cursor-pointer service-image"
                    data-full-image={service.image}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-bold text-gray-800">
                      {service.price}
                    </p>
                    <Link
                      href={`https://booksy.com/es-es/105454_barberia-distrito4_barberia_29485_malaga#ba_s=sr_1`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                      Reservar
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        id="imageModal"
        className="fixed inset-0 bg-black bg-opacity-50 hidden justify-center items-center z-50"
      >
        <div className="max-w-4xl max-h-full p-4">
          <img
            id="modalImage"
            src="/placeholder.svg"
            alt="Full size image"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      </div>
      <Script id="image-modal-script">{`
        document.addEventListener('click', function(event) {
          if (event.target.classList.contains('service-image')) {
            var modal = document.getElementById('imageModal');
            var modalImg = document.getElementById('modalImage');
            modalImg.src = event.target.getAttribute('data-full-image');
            modal.style.display = 'flex';
          }
        });

        document.getElementById('imageModal').addEventListener('click', function(event) {
          if (event.target === this) {
            this.style.display = 'none';
          }
        });
      `}</Script>
    </>
  );
}
