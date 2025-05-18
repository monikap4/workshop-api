export const Instructor = (props) => {
    return (
        <div className="container-detail">
            <h4>Instruktor:</h4>
            <span>{props.workshopInfo.data.instructor.name}</span>
        </div>
    )
}
