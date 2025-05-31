import { NextResponse } from "next/server";


// Obtener todos los productos
export async function GET(request, { params }) {
    
    const { id } = await params;

    const productDetails = {
        message: `Hello from Product API for product:`,
        id,
        
    };
}

//Actualizar

export async function PUT(request, { params }) {
    const { id } = await params;
    
    const productDetails = {
        message: `Product with ID ${id} updated successfully`,
        id,
    };

    return NextResponse.json(productDetails);
}

// Eliminar

export async function DELETE(request, { params }) {{
    const { id } = await params;
    
    const productDetails = {
        message: `Product with ID ${id} deleted successfully`,
        id,
    };

    return NextResponse.json(productDetails);   
}
}