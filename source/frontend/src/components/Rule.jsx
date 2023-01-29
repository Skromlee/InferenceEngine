const Rule = ({ rule }) => {

    const { id, fact1, operator1, fact2, operator2, fact3, conclude} = rule

    // create response string
    let response = "";

    // check fact and display
    if (rule.operator1 !== null && rule.operator2 !== null) {
        response = `${fact1} ${operator1} ${fact2} ${operator2} ${fact3} THEN ${conclude}`
    } else if (rule.operator1 !== null) {
        response = `${fact1} ${operator1} ${fact2} THEN ${conclude}`
    } else {
        response = `${fact1} THEN ${conclude}`
    }

    return <li key={id}>{response}</li>
}

export default Rule