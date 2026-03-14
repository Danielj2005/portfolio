
// data
import data from "../data/data.json"

function Hero () {

    return (
        <> 
            <header className="pt-32 pb-20 px-4">
                <div className="max-w-6xl mx-auto text-center md:text-left md:flex items-center justify-between">
                    <div className="md:w-2/3">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                            Daniel Barrueta <br/>
                            <span className="text-blue-400">Software Engineer & AI Enthusiast</span>
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl mb-8">
                            Performance-oriented Software Engineer with 5 years of hands-on experience in backend architecture (PHP/MySQL) and the AI/ML ecosystem. Specialized in implementing robust IAM frameworks, including Role-Based Access Control (RBAC) and advanced security policies (session management, password complexity, and MFA). Experienced in developing comprehensive audit logs (bitácoras) and security hardening to ensure compliance with industry standards. Enthusiastic about MERN stack and secure-by-design development. 
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            {
                                data.badgeHero.map((item)=>(
                                    <span
                                        key={item.id} 
                                        className={`px-3 py-1 bg-slate-800 rounded-full text-xs font-mono ${item.textColor}`}>
                                            {item.text}
                                    </span>
                                ))
                            }

                        </div>
                    </div>
                    <div className="hidden md:block w-1/3">
                        <div className="relative bg-slate-800 p-6 rounded-xl border border-slate-700">
                            <div className="flex space-x-2 mb-4">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <code className="text-sm font-mono leading-relaxed">
                                <p className="gap-1 flex items-center">
                                    <span className="text-pink-400"> class</span>
                                    <span className="text-blue-300 inline">Developer</span>
                                    {`{`}
                                </p> 
                                    &nbsp;&nbsp;exp: <span className="text-yellow-300">"5 Years PHP"</span>,<br/>
                                    &nbsp;&nbsp;current: <span className="text-yellow-300">"AI/ML Focus"</span>,<br/>
                                    &nbsp;&nbsp;status: <span className="text-emerald-400">"Ready to scale"</span><br/>
                                {`}`}
                            </code>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Hero