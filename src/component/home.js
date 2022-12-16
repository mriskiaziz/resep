import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExample } from "../actions/exampleAction";
import { useNavigate } from "react-router-dom";

// bootstrap
import { Row, Col, Card, Container, Pagination } from "react-bootstrap";

function HomeScreen() {
  const [page, setpage] = useState(1);
  const navigate = useNavigate();
  // eslint-disable-next-line
  const { getExampleResult, getExampleLoading, getExampleError } = useSelector(
    (state) => state.ExampleReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExample());
  }, [dispatch]);

  return (
    <Container className="my-5">
      <Row>
        {getExampleResult ? (
          getExampleResult.results.map((e, i) => {
            return (
              <Col
                className="my-2 px-2 col-6 p-0 d-flex justify-content-center"
                xl={3}
                md={4}
                sm={6}
                key={i}
              >
                <Card
                  className="shadow box"
                  style={{ width: "18rem", cursor: "pointer" }}
                  onClick={() => {
                    navigate("/detail/" + e.key);
                  }}
                >
                  <Card.Img variant="top" src={e.thumb} />
                  <Card.Body>
                    <div className="d-flex mb-3 mx-2">
                      <div>
                        <i className="bi bi-clock-fill me-1"></i>
                        {e.times}
                      </div>
                      <div className="ms-auto">
                        <i className="bi bi-suit-diamond-fill me-1"></i>
                        {e.serving}
                      </div>
                    </div>
                    <Card.Title>{e.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <div className="d-flex flex-column align-items-center p-5 pt-5">
            <div
              className="spinner-border text-primary"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            ></div>

            <h2 id="content" className="text-center pt-4">
              Loading...
            </h2>
          </div>
        )}
      </Row>
    </Container>
  );
}

export default HomeScreen;
