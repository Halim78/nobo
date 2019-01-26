import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/Header.css";
import "../css/Footer.css";
import "../css/Details.css";

const DetailsPage = () => {
  return (
    <div>
      <Header />
      <div className="bodye2">
        <p>Page details</p>
      </div>
      <Footer />
    </div>
  );
};

export default DetailsPage;
