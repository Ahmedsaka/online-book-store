
type PersonListProp = {
    names: {
        first: string,
        last: string
    }[]
}

const PersonList = (props: PersonListProp) => {
    return (
        <div>
            {props.names.map(name => <h2>{name.first} {name.last}</h2>)}
        </div>
    )
}

export default PersonList;