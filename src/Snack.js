import React from "react";
import { Link } from "react-router-dom";

const Snack = ({name}) => {
    return (
        <div>
            <h1>Hungry for a {name}?</h1>
            <Link to={`/`}>Choose another item.</Link>
        </div>
    )
}

export default Snack;