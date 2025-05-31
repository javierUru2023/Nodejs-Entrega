import { NextResponse } from "next/server";
import { ProductsDB } from "./Data/Products";

export async function GET(request) {
    
   for(let i = 0; i < 1000e6; i++) {
       return NextResponse.json(ProductsDB, {
           products: ProductsDB,
       });
    }

}

export async function POST(request) {}
