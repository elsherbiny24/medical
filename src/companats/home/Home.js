import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import home from "../../aswets/1.png07.png";
import "./Home.css";
import moslas from "../../aswets/1.png08.png";
import squre from "../../aswets/1.png09.png";
import plus from "../../aswets/1.png11.png";
import circle from "../../aswets/1.png10.png";
import doc1 from "../../aswets/1.png13.jpg";
import doc2 from "../../aswets/1.png14.jpg";
import doc3 from "../../aswets/1.png15.jpg";
import mobile from "../../aswets/1.png23.png";
import girl from "../../aswets/1.png24.png";


const Home = () => {
 
  return (
    <>
      <section className="min-sec-1">
        <img src={moslas} className="moslas" />
        <Container>
          <Row className="d-flex align-items-center row-home">
            <Col lg={6} md={6} sm={12} className="home-text">
              <img src={circle} className="circle" />
              <h4>We Provide All Health Care Solution</h4>
              <h2>Protect Your Health And Take Care To Of Your Health</h2>
              <a href="#">Read more</a>
              <img src={plus} className="plus" />
            </Col>
            <Col lg={6} md={6} sm={12} className="img-home">
              <img src={home} className="min-img" />
              <img src={squre} className="squre" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="min-sec-2">
        <Container>
          <Row className="">
            <Col lg={6} md={6} sm={12} className="img-sec-2">
              <div className="boxs-images">
                <div className="shap"></div>
                <img src={doc1} className="doc1" />
                <img src={doc2} className="doc2" />
                <img src={doc3} className="doc3" />
                <div className="text-img-sec-2">
                  <h3>20</h3>
                  <h4>Year Experience</h4>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className="text-sec-2">
              <h5 className="h5">About Us</h5>
              <h2>The Great Place Of Medical Hospital Center</h2>
              <p>
                We provide the special tips and advice’s of heath care treatment
                and high level of best technology involve in the our hospital.
              </p>
              <div className="box-1 d-flex">
                <div className="box-1-1 box-1-2">
                  <span></span>
                  <h5>Emergency Help</h5>
                </div>
                <div className="box-1-1 box-1-3">
                  <span></span>
                  <h5>Qualified Doctors</h5>
                </div>
              </div>
              <div className="box-1 d-flex">
                <div className="box-1-1 box-1-4">
                  <span></span>
                  <h5>Best Professionals</h5>
                </div>
                <div className="box-1-1 box-1-5">
                  <span></span>
                  <h5>Medical Treatment</h5>
                </div>
              </div>
              <Link to="/" className="more">
                Read more
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="min-sec-3">
        <Container className="container">
          <div className="head-sec-3">
           
          <h5>Working Process</h5>            
          <h4>How we works?</h4>
            
          </div>
          <Row>
            <Col lg={4} md={6} sm={12} className="col-sec-3">
              <div className="side">
              <span></span>
                <h1>01</h1>
                <h2 className="h2">01</h2>
                <h3>Make Appointmnet</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of.
                  <Link className="link" to='/'>view more</Link>
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="col-sec-3">
            <div className="side side-2">
            <span></span>
                <h1>02</h1>
                <h2 className="h2">02</h2>
                <h3>Make Appointmnet</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of.
                  <Link className="link" to='/'>view more</Link>
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="col-sec-3">
            <div className="side">
               <span></span>
                <h1>03</h1>
                <h2 className="h2">03</h2>
                <h3>Make Appointmnet</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of.
                  <Link className="link" to='/'>view more</Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="min-sec-4">
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg={5} md={6} sm={12}>
              <div className="form-box">
                <span></span>
                <h2>Book Appointment</h2>
               <form>
               <input type="text" placeholder="select debrement"/>
               <input type="text" placeholder="select debrement"/>
               <input type="text" placeholder="your name"/>
               <input type="number" placeholder="phone number" />
               <input type="date" className="date"/>
               <Link to='/' className="link">appointment now</Link>
               </form>
              </div>
            </Col>
            <Col lg={7} md={6} sm={12}>
              <div className="box-imges">
                <img src={mobile} className="mobile"/>
                <img src={girl} className="girl"/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
