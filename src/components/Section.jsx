

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
    
    const {idSection , classSection, title, classTitle, children} = props;
    
    return (
        <>
            <Section 
                id={idSection} 
                classNames={classSection}>
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className={`text-3xl font-bold mb-12 ${classTitle}`}>{title}</h2>
                        <div className={`grid gap-8 md:grid-cols-3`}>
                            {children}
                        </div>
                    </div>
            </Section>
        </>

    )
}


export { Section, SectionWithTitle }
