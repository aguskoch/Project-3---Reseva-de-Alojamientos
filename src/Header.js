import React from "react"
import "./styles.css"

export default function Header (props){

    return (
        <div className="jumbotron">
            <div className="header">
                <i className="fas fa-globe-americas display-2"></i>
                <h1 className="display-3 title">Hoteles</h1>
            </div>
            <p className="lead"> {props.filters.dateFrom ? `desde el ${new Date(props.filters.dateFrom).toISOString().slice(0,10)} ` : ""} 
            {props.filters.dateTo ? `hasta el ${new Date(props.filters.dateTo).toISOString().slice(0,10)} ` : ""}
            {props.filters.country ? `en ${props.filters.country}, ` : "" }
            {props.filters.size ? `de ${props.filters.size} Tamaño, ` : "" }
            {props.filters.price ? `de ${Array.from({ length: props.filters.price }).map(() => ("$")).join("")}` : "" }</p>
        </div>
    )
    
}

