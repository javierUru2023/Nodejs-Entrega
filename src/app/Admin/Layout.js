
export default function AdminLayout({ children }) {{
    return (
        <div className="flex flex-col min-h-screen bg-gray-400">
            <header className="bg-gray-800 text-white p-4">
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            </header>
            <main className="flex-grow p-4">
                {children}
            </main>
        </div>
    );
};
}