import React from "react";
import "./styles.css";
import Filters from "./Filters";
import Header from "./Header"


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filters: {
        dateTo: "",
        dateFrom: "",
        country: "",
        price: "",
        size: "",
        wrongDates: false
      }
    }
    this.handleFilters = this.handleFilters.bind(this)
  }

  handleFilters(filtersState) {
    this.setState({
      filters: filtersState
    })
  }

  resetFilters(){
    this.setState({
      filters: {
        dateTo: "",
        dateFrom: "",
        country: "",
        price: "",
        size: ""
      }
    })
  }

  render() {
    return (
      <div>
        <Header filters={this.state.filters}/>
        <Filters filters={this.state.filters} onFilterChange={this.handleFilters} resetFilters={this.resetFilters}/>
      </div>
    )
  }


}
