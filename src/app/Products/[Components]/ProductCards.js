import Link from "next/link";

export function ProductCards({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 px-4">
                {products.map((product) => (
                    <div key={product.id} className="bg-blue-200 p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold mt-2">{product.name}</h4>
                        <p className="text-gray-600 mt-1">{product.description}</p>
                        <p className="text-green-600 font-bold mt-2">${product.price.toFixed(2)}</p>

                        <span className="block mt-2">
                            Categoría: {product.category}
                        </span>

                        <Link href={`/Products/Details/${product.slug}`} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                            Ver Detalles
                        </Link>
                    </div>
                ))}
            </div>
  );
}