import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import "../css/Header.css";
import "../css/Footer.css";
import "../css/Details.css";
import { Button } from "@material-ui/core";

class DetailsPage extends React.Component {
  state = {
    newResult: [],
    viewImage: ""
  };

  componentDidMount = () => {
    const id = this.props.match.params.id;
    axios.get(`https://api.tvmaze.com/search/shows?q=${id}`).then(res =>
      this.setState({
        newResult: res.data[0].show,
        viewImage: res.data[0].show.image.original
      })
    );
    // console.log(res.data[0].show.image.original)
  };

  handleClick = () => {
    this.props.history.push("/");
  };

  render() {
    //  if (this.state.newResult.image === null) {
    //   return "https://c-lj.gnst.jp/public/img/common/noimage.jpg?20181001050045 ";
    // }
    return (
      <div>
        <div className="previous">
          <Button color="secondary" onClick={this.handleClick}>
            Accueil
          </Button>
        </div>
        <Header />
        <div>
          <h3>{this.state.newResult.name}</h3>
          <img src={this.state.viewImage} alt="jacket du film" />
          <h4>{this.state.newResult.summary}</h4>
        </div>
        <div className="bodye2">
          <Footer />
        </div>
      </div>
    );
  }
}
export default DetailsPage;
