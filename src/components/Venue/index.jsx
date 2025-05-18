export const Venue = (props) => {
    return (
        <div className="container-detail">
            <h4>Místo konání:</h4>
            <span>{props.workshopInfo.data.venue.name}</span>
            <span>{props.workshopInfo.data.venue.street}</span>
            <span>{props.workshopInfo.data.venue.city}</span>
        </div>
    )
}

