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
    valeur: ""
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

  handleClick = () => {
    alert("coucou");
  };

  render() {
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
          <div className="affichageImage">
            {this.state.result.map((e, i) => {
              if (e.show.image != null) {
                return (
                  <div className="card">
                    <h2 key={i}>{e.show.name}</h2>
                    <img
                      className="spaceImage"
                      key={i}
                      src={e.show.image.medium}
                      alt="jacket film"
                    />
                  </div>
                );
              } else {
                return (
                  <div className="card">
                    <h2 key={i}>{e.show.name}</h2>
                    <img
                      className="spaceImage"
                      width="350px"
                      height="492px"
                      src="https://c-lj.gnst.jp/public/img/common/noimage.jpg?20181001050045 "
                      alt=" indisponible"
                    />
                  </div>
                );
              }
            })}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MainPage);
