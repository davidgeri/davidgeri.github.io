import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div>
        <Row className="mb-5 pb-5" style={{ marginBottom: "5rem" }}>
          <Col lg="8">
            <p>To see more, download my portfolio.</p>
            <a
              href="/PortfolioDavidGeri.pdf"
              download
              className="btn download-btn"
              style={{
                backgroundColor: "white",
                color: "black",
                border: "1px solid black",
                padding: "0.5rem 1rem",
                boxShadow: "0 0 0 2px white",
              }}
            >
              Download Portfolio
            </a>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
