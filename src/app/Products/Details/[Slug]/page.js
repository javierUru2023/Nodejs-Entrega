import {ProductsDB} from "../../../Api/Products/Data/Products";

import Link from "next/link";


export default async function DetailsPage({ params }) {

    const { Slug } =  await params;

    const product = ProductsDB.find((product) => product.slug == Slug);

    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center mt-10">
                <h3 className="text-2xl font-bold text-red-600">
                    Producto no encontrado
                </h3>
                <p className="mt-4 text-gray-600">
                    Lo sentimos, el producto que buscas no existe.
                </p>

                <Link href="/Products/all" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                Volver a Productos
                </Link>
            </div> 
        );
    }

    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <h3 className="text-2xl font-bold text-center">
                {product.name} 
            </h3>
            <img
                src={product.image} 
                alt={product.name} 
                className="w-64 h-64 object-cover mt-4 rounded-lg shadow-md" 
            />
            <p className="mt-4 text-gray-600">{product.description}</p>
            <p className="mt-2 text-green-600 font-bold">${product.price}</p>
            <span className="block mt-2">
                Categoría: {product.category}
            </span>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                Comprar Ahora
            </button>    
        </div>
    );
}