import { ProductCards } from "../[Components]/ProductCards";
import { ProductsDB } from "@/app/api/Products/Data/Products";

/*
export async function generateMetadata({ params }) {
    const { Category } = params; // No es necesario el await aquí

    return {
        title: `Productos de ${Category}`,
        description: `Explora nuestra amplia gama de productos en la categoría ${Category}. Encuentra lo que necesitas para tu vehículo.`,
        keywords: `productos, ${Category}, autopartes, automóviles, vehículos`,   
    };
}
*/


export default async function CategoryPage({ params }) {
    const { Category } = await params;

    try {
        const res = await fetch("http://192.168.1.5:3000/api/Products");

        if (!res.ok) {
            throw new Error(`Error en la API: ${res.status}`);
        }

        const data = await res.json();
        const ProductsDB = data || [];

        const products = Category === "all"
            ? ProductsDB
            : ProductsDB.filter((product) => product.Category === Category);

        return (
            <div className="flex flex-col items-center justify-center mt-10">
                <h3 className="text-2xl font-bold text-center">Lista de Productos</h3>
                <ProductCards key={Category} products={products} />
            </div>
        );
    } catch (error) {
        return (
            <div className="flex flex-col items-center justify-center mt-10 text-red-500">
                <h3 className="text-2xl font-bold text-center">Error al cargar los productos</h3>
                <p>{error.message}</p>
            </div>
        );
    }
}

