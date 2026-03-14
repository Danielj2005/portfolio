

const Badge = (props) => {

    
    const {
        badgeClass,
        array
    } = props;

    return (
        <>
            {
                array.map((item) => (
                    <span key={item.id} 
                        className={`${badgeClass}`}>
                        {item.text}
                    </span>
                ))
            }
        </>
    )
}

export default Badge