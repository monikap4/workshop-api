export const Venue = (props) => {
    const { streetName , street, city } = props;
    return (
        <div className="container-detail">
            <h4>Místo konání:</h4>
            <span>{streetName}</span>
            <span>{street}</span>
            <span>{city}</span>
        </div>
    )
}

