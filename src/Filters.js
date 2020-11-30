import React from "react";
import Card from "./Card.js";
import "./styles.css";
import WholeData from "./data/data";
import IncorrectDates from "./IncorrectDates"


class Filter extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   dateTo: this.today.valueOf(),
    //   dateFrom: this.today.valueOf(),
    //   country: "",
    //   price: "",
    //   size: ""
    // }
    this.updateState = this.updateState.bind(this)
  }



  updateState(event) {
    let filtersState = this.props.filters
    filtersState[event.target.name] = event.target.value

    this.props.onFilterChange(filtersState)

  }

  size(info) {
    if (this.props.filters.size === "Pequeño") {
      return info.rooms <= 10
    } else if (this.props.filters.size === "Mediano") {
      return info.rooms <= 20 && info.rooms > 10
    } else if (this.props.filters.size === "Grande") {
      return info.rooms > 20
    } else {
      return true
    }
  }

  price(info) {
    if (this.props.filters.price == "1") {
      return info.price == 1
    } else if (this.props.filters.price == "2") {
      return info.price == 2
    } else if (this.props.filters.price == "3") {
      return info.price == 3
    } else if (this.props.filters.price == "4") {
      return info.price == 4
    } else {
      return true
    }
  }

  date(info) {
    const dateTo = new Date(this.props.filters.dateTo).getTime()
    const dateFrom = new Date(this.props.filters.dateFrom).getTime()
    if (this.props.filters.dateFrom == "" || this.props.filters.dateTo == "") {
      return true
    }
    return dateFrom <= info.availabilityFrom && dateTo <= info.availabilityTo

  }

  render() {
    let filteredInfo = WholeData.filter((info) => {
      return info.country.indexOf(this.props.filters.country) !== -1 && this.size(info) && this.price(info) && this.date(info);
    });
    return (
      <div>
        <form className="filters">
          <div className="input-group">
            <div className="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend2">
                <i class="fas fa-sign-in-alt"></i>
              </span>
            </div>
            <input
              type="date"
              class="form-control"
              id="exampleFormControlSelect1"
              name="dateFrom"
              value={this.props.filters.dateFrom}
              onChange={this.updateState} />
          </div>
          <div className="input-group dateTo">
            <div className="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend2">
                <i class="fas fa-sign-out-alt"></i>
              </span>
            </div>
            <input
              type="date"
              class="form-control"
              id="exampleFormControlSelect1"
              name="dateTo"
              value={this.props.filters.dateTo}
              onChange={this.updateState} />
          </div>
          <div className="input-group">
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              value={this.props.filters.country}
              onChange={this.updateState}
              name="country"
            >
              <option value="">Todos los Paises </option>
              <option value="Argentina"> Argentina </option>
              <option value="Brasil"> Brasil </option>
              <option value="Chile"> Chile </option>
              <option value="Uruguay"> Uruguay </option>
              {/* {WholeData.map(item => (
                <option 
                value={this.state.countrySearch}
                onChange={this.updateSearch.bind(this)}
                >
                  {item.country}
                </option>
              ))} */}
            </select>
          </div>
          <div className="input-group">
            {/* <div className="input-group-prepend">
                        <span class="input-group-text" id="inputGroupPrepend2">
                            <i class="fas fa-bed"></i>
                        </span>
                    </div> */}
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              value={this.props.filters.size}
              name="size"
              onChange={this.updateState}
            >
              <option value="">Todos los Tamaños </option>
              <option value="Pequeño"> Hotel Pequeño </option>
              <option value="Mediano"> Hotel Mediano </option>
              <option value="Grande"> Hotel Grande </option>
            </select>
          </div>
          <div className="input-group">
            <select class="form-control"
              id="exampleFormControlSelect1"
              value={this.props.filters.price}
              name="price"
              onChange={this.updateState}
            >
              <option value=""> Cualquier Precio </option>
              <option value="1"> $ </option>
              <option value="2"> $$ </option>
              <option value="3"> $$$ </option>
              <option value="4"> $$$$ </option>
            </select>
          </div>
          <div className="input-group">
            <button class="form-control" onClick={this.props.resetFilters}>
              Resetear Filtros
            </button>
          </div>


        </form>
        {/* <input
          type="dropdown"
          value={this.state.countrySearch}
          onChange={this.updateSearch.bind(this)}
        /> */}
          {this.props.filters.dateFrom > this.props.filters.dateTo && this.props.filters.dateFrom != "" && this.props.filters.dateTo != "" ?
              <div>
                <h1  className="display-4 wrongDates" > Fechas incorrectas! </h1>
                <p className="lead p wrongDates"> No puede seleccionarse una fecha de salida anterior a la fecha de entrada. Intente nuevamente. </p>
              </div> : 
              <div className="cards">
                {filteredInfo != "" ? filteredInfo.map((data, index) => {
                  return <Card key={index} {...data} />;
                }) :
                  <div>
                    <h1 className="display-4"> No se encontraron coincidencias </h1>
                    <p className="lead p"> Por favor, intenta nuevamente  </p>
                  </div>}
              </div>}
      </div>
    );
  }
}

export default Filter;
