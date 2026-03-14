

function Section(props) {

    const {id , classNames, children} = props;
    return (
        <>
            <section 
                id={id} 
                className={classNames}>
                    {children}
            </section>
        </>

    )
}

function SectionWithTitle(props) {
    
    const {id , classNames, title, classNamesTitle, children} = props;
    
    return (
        <>
            <Section 
                id={id} 
                classNames={classNames}>
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className={`text-3xl font-bold mb-12 ${classNamesTitle}`}>{title}</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {children}
                        </div>
                    </div>
            </Section>
        </>

    )
}


function SectionCard (props) {
    
    const {title, colorTitle, className, array} = props;

    return (
        <>
            <div className={`bg-slate-800 p-6 rounded-xl border ${className}`}>
                <h3 className={`text-xl font-semibold mb-6 ${colorTitle}`}>{title}</h3>
                <div className="flex flex-wrap gap-2">
                    {
                    array.map((item) => (
                        <span key={item.id} 
                        className="bg-slate-900 px-3 py-1 rounded-md text-xs border border-slate-700">
                            {item.text}
                        </span>
                    ))
                    }
                </div>
            </div>
        </>
    )
}

export { Section, SectionWithTitle, SectionCard }
