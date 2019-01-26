import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "../css/Main.css";
import "../css/Header.css";
import "../css/Footer.css";

const styles = theme => ({
  button: {
    marginLeft: "20px"
  }
});

class MainPage extends Component {
  state = {
    result: [],
    valeur: "",
    images: []
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

  handleChange = e => {
    this.setState({
      valeur: e.target.value
    });
  };

  render() {
    this.state.result.map(e => {
      if (e.show.image.medium === null) {
        return "pas d'url disponible";
      } else {
        return e.show.image.medium;
      }
    });

    const { classes } = this.props;
    return (
      <div>
        <Header />
        <div className="bodye">
          <form onSubmit={this.handleSubmit}>
            <label>Taper votre recherche </label>
            <input
              placeholder="titre ..."
              type="text"
              onChange={this.handleChange}
              value={this.state.valeur}
            />
            <Button className={classes.button} color="secondary" type="submit">
              GO
            </Button>
          </form>
        </div>
        <div>
          {this.state.result.map((e, i) => (
            <div key={i}>
              <p>{e.show.name}</p>
              <img src={e.show.image.medium} alt="jacket film" />
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(MainPage);
