import React, { Component } from "react";
import axios from "axios";

class MainPage extends Component {
  state = {
    result: [],
    valeur: "",
    images: []
  };

  handleChange = e => {
    this.setState({
      valeur: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.componentDidMount();
  };

  componentDidMount = () => {
    const test = this.state.valeur;
    axios.get(`https://api.tvmaze.com/search/shows?q=${test}`).then(res =>
      this.setState({
        result: res.data
      })
    );
  };

  //   url() {
  //     this.state.result.map(e => {
  //       if (e.show.image === null) {
  //         return "pas d'url disponible";
  //       } else {
  //         return this.state.images.push(e.show.image.medium);
  //       }
  //     });
  //   }

  render() {
    this.state.result.map(e => {
      if (e.show.image === null) {
        return "pas d'url disponible";
      } else {
        return this.state.images.push(e.show.image.medium);
      }
    });
    // this.url();
    // console.log(this.state.images);

    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Taper votre recherche</label>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.valeur}
            />
            <button type="submit">GO</button>
          </form>
        </div>
        <div>
          {this.state.result.map((e, i) => (
            <p key={i}>{e.show.name}</p>
          ))}
          {/* </div>
        <div> */}
          {this.state.images.map((e, i) => (
            <img key={i} src={e} alt="jacket film" />
          ))}
        </div>
      </div>
    );
  }
}

export default MainPage;
