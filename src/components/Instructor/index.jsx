export const Instructor = (props) => {
    const { name } = props;
    return (
        <div className="container-detail">
            <h4>Instruktor:</h4>
            <span>{name}</span>
        </div>
    )
}
