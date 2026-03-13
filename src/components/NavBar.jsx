
function NavBar() {
    return (
        <>
            <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent italic">DB</span>
                    <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest items-center">
                        <a href="#experience" 
                            className="hover:text-blue-400 transition">Trayectoria</a>
                        <a 
                            href="#stack" 
                            className="hover:text-blue-400 transition">
                                Tecnologías
                        </a>
                        <a 
                            href="#projects" 
                            className="hover:text-blue-400 transition">
                                Proyectos
                        </a>
                        <a href="mailto:dbarrueta42@gmail.com" 
                            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
                            target="_blank">
                                Contacto
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar