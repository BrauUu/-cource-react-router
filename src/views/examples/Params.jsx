import React from "react";
import { useParams } from 'react-router-dom'

const Params = props => {
    const { param } = useParams()
    return (
        <div className="Params">
        <p><b>Parâmetro passado:</b> {param}</p>
        </div>
    )
}

export default Params;