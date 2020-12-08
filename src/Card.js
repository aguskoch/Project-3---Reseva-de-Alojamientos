import React from "react";

export default function Card(props) {
  return (
    <div className="card" style={{ width: "25em" }}>
      <img className="card-img-top" src={props.photo} alt={props.name} />
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p className="card-text"> {props.description}</p>
        <div className="details">
          <div className="media">
            <i className="fas fa-map-marker mr-3"></i>
            <h5 className="mt-0">
              {props.city}, {props.country}
            </h5>
          </div>
          <div className="media">
            <div className="media mr-3">
              <i className="fas fa-bed mr-3"></i>
              <h5 className="mt-0">{props.rooms} Habitaciones</h5>
            </div>
            <div className="price">
              {Array.from({ length: props.price }).map(() => (
                <i className="fas fa-dollar-sign"></i>
              ))}
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <a href="/FunctionNotWorking" className="btn btn-primary">
            Reservar
          </a>
        </div>
      </div>
    </div>
  );
}
