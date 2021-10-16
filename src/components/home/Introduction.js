import React from "react";
import { Row, Container} from "react-bootstrap";
import "./homeStyle.css";

const Introduction = (props) => {
    const { theme } = props;
    return (
      <section className="intro-section">
        <Container>
          <Row>
            <h1 className="title">Our Values</h1>
            <div className="values">
            <div className="card">
              <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            </div>
          </Row>
        </Container>
      </section>
    );
  };
  
  export default Introduction;
  