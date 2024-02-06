import React, { Component } from "react";
import $ from "jquery";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";
// import Experience from "../components/Experience/Experience";
import Review from "../components/Review/Review";
class Home extends Component {

  constructor(props) {
    super();
    this.state = {
      resumeData: {},
    };
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      <>
        <Hero />
        <Projects />
        <About />
        {/* <Experience
          resumeExperience={this.state.resumeData.experience}
        /> */}
        <Contact />
        <Review />
        <FixSocialIcon />
        <Footer />
        <ScrollToTop />
      </>
    );
  }
}

export default Home;
