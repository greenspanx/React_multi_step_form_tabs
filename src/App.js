import React, { Component } from 'react';
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";


class App extends Component {
  constructor(){
    super();
    this.state = {
      city: "",
      country: "",
      accommodates: "",
      rent_price: "",
      type: "",
      good_for: "",
      air_con: "",
      wi_fi: "",
      breakfast: "",
      description: "",
      server_response: "", 
    }
  }



  render() {
    return (
      <div className="image-container set-full-height" style={{backgroundImage: "url('assets/img/wizard-city.jpg')"}}>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
