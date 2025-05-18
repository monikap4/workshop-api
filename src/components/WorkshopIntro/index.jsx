export const WorkshopIntro = (props) => {
    return (
        <div className="container-detail">
            <h1>Workshop</h1>
            <h2>{props.workshopInfo.data.title}</h2>
            <p>{props.workshopInfo.data.description}</p>
        </div>
    )
}
