class CampSite extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div>
                <Camper/>
            </div>
        );
    }
};

const Camper = (props) => {
    return(
        <div>
            <p>{props.name}</p>
        </div>
    )
}

//default value for a prop
Camper.defaultProps = {
    name : "CamperBot"
};

//specifying the particular types that prop wants
Camper.propTypes = {
    name : PropTypes.string.isRequired
};
