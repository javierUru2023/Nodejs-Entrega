
export function generateMetadata ({ params, searchParams, }, parent) {
  return {
    title: "Karros Autopartes - Contacto",
    description: "Póngase en contacto con Karros Autopartes para consultas, soporte y más información sobre nuestros productos.",
    keywords: ["Spare Parts", "Autopartes", "Repuestos", "Car Parts", "Contacto"],
    domain: "https://KarrosAutopartes.com",
  };
}

export default function ContactPage () {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
      <h1 className="text-4xl font-bold mb-4">Contáctenos</h1>
      <p className="text-lg text-gray-700 max-w-2xl justify-center text-center">
        Para consultas, soporte o más información sobre nuestros productos, no dude en ponerse en contacto con nosotros. Estamos aquí para ayudarle a encontrar las mejores autopartes para su vehículo.
      </p>
      <a href="#" className="text-amber-100 justify-center">Contacto@KarrosAutopartes.com</a>
    </div>
  );
}