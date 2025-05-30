
export function generateMetadata({ params, searchParams, }, parent){
    return {
        title: "Karros Autopartes - Acerca de Nosotros",
        description: "Conozca más sobre Karros Autopartes, su destino confiable para todas las necesidades de autopartes.",
        keywords: ["Spare Parts", "Autopartes", "Repuestos", "Car Parts"],
        domain: "https://KarrosAutopartes.com",
    }; 
}

export default function AboutPage () {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
      <h1 className="text-4xl font-bold mb-4">Acerca de Nosotros</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center">
        Bienvenido a Karros Autopartes, su destino confiable para todas las necesidades de autopartes. Nos especializamos en ofrecer una amplia gama de repuestos de alta calidad para vehículos, asegurando que su automóvil funcione sin problemas y de manera eficiente.
      </p>
    </div>
  );
}