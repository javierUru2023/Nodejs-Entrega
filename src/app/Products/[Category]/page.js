import { ProductCards } from "../[Components]/ProductCards";
import { ProductsDB } from "../Data/Products";

export function generateMetadata ({ params, searchParams }, parents) {

    const { Category } =   params;

  return {
    title: `Productos de ${Category}`,
    description: `Explora nuestra amplia gama de productos en la categoría ${params.Category}. Encuentra lo que necesitas para tu vehículo.`,
    keywords: `productos, ${params.Category}, autopartes, automóviles, vehículos`,   
    }
}

export default async function CategoryPage ({ params }) {

    const { Category } =  await params;

    const products = Category === "all" ? ProductsDB : ProductsDB.filter((product) => product.category === Category);

    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <h3 className="text-2xl font-bold text-center">
                Lista de Productos
            </h3>
            <ProductCards key={Category} products={products} />
        </div>
    )
}