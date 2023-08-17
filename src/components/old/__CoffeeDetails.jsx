

const CoffeeDetails = (props) => {

    return (
        <div>
            <h1>{props.name}</h1>
            <img style = {{height : "200px"}} src={props.pictureUrl} />
            <h2>{props.description}</h2>
        </div>

    )
}

export default CoffeeDetails;