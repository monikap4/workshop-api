export const WorkshopIntro = (props) => {
    const { title, description } = props;
    return (
        <div className="container-detail">
            <h1>Workshop</h1>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}
