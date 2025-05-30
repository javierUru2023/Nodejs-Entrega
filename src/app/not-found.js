import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-400">
            <Image
                src="/notFound.jpg"
                alt="Página No Encontrada"
                className="w-1/10 h-auto mb-6 rounded-lg"
                width={500}
                height={500} 
            />
            <p className="mt-4 text-lg text-gray-700">Lo sentimos, la página que buscas no existe.</p>
            <Link href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Volver al Inicio
            </Link>
        </div>
    );
}
