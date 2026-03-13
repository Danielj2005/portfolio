
function Footer() {
    const socialNetwork = [
        { 
            name: "GitHub", 
            icon: "github", 
            url: "https://github.com/Danielj2005",
            bgColor: "",
            textColor: "",
        },
        { 
            name: "LinkedIn", 
            icon: "linkedin", 
            url: "https://www.linkedin.com/in/daniel-barrueta",
            bgColor: "",
            textColor: "",
        }
    ];

    return (
        <>
            <footer id="contact" className="py-20 px-4 text-center border-t border-slate-800">
                <h2 className="text-3xl font-bold mb-4 italic">Daniel Barrueta</h2>
                <a href="mailto:barruetadaniel87@gmail.com" 
                    className="text-blue-400 hover:text-blue-300 transition text-lg block mb-8 font-mono">
                        barruetadaniel87@gmail.com
                </a>
                <div className="flex justify-center items-center space-x-6 text-2xl mb-12">
                    {
                        socialNetwork.map((item) => (
                            <a
                                key={item.name}
                                href={item.url}
                                className="hover:bg-slate-800 transition p-3 rounded-full"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    backgroundColor: item.bgColor || undefined,
                                    color: item.textColor || undefined,
                                }}
                            >
                                <i className={`bi bi-${item.icon} text-3xl`}></i>
                                <span className="block text-lg">{item.name}</span>
                            </a>
                        ))
                    }
                </div>
                <p className="text-slate-600 text-1xl uppercase tracking-widest">© 2026 - Ingeniero Informático | Daniel Barrueta</p>
            </footer>
        </>
    )
}

export default Footer