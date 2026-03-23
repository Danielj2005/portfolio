

const Card = (props) => {

    const {
        title, 
        titleClass, 
        cardClass,
        children
    } = props;

    return (
        <>
            <div className={`${cardClass}`}>
                <h3 className={`${titleClass}`}>{title}</h3>
                <div className="flex flex-wrap gap-2 justify-between">
                    {children}
                </div>
            </div>
        </>
    )
}

const CardProject = (props) => {

    const {
        title,
        titleClass, 
        subtitle, 
        subtitleClass, 
        cardClass,
        imgSrc,
        imgClass,
        imgAlt,
        array = []
    } = props;

    return (
        <>
            <div className={cardClass}>
                <div className="flex items-center justify-center border-b border-slate-700 overflow-hidden">
                    <img 
                        src={imgSrc}
                        alt={imgAlt}
                        className={imgClass} />
                </div>
                <div className="p-6">
                    <h4 className={titleClass}>{title}</h4>
                    <p className={subtitleClass}>{subtitle}</p>
                    <div className="flex gap-2 flex-wrap">
                        {
                            array.map((item) => (

                                <span 
                                    key={item.id}
                                    className="font-mono bg-slate-900 px-3 py-1 rounded-md text-xs border border-slate-700">
                                        {item.text}
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )

}


export {Card, CardProject}
