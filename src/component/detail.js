import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions/exampleAction";

// bootstrap
import { Container, Row, Col } from "react-bootstrap";

function DetailScreen() {
  let { uid } = useParams();

  const { getDetailResult, getDetailLoading, getDetailError } = useSelector(
    (state) => state.ExampleReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(uid));
  }, [dispatch]);

  const removeNum = (e) => {
    const split = e.split(" ");
    let result = "";

    split.forEach((e, i) => {
      if (i != 0) {
        result = result + e + " ";
      }
    });

    return result;
  };

  return (
    <Container className="py-5 px-0 px-lg-5">
      <div className="mx-3 mx-lg-5">
        {getDetailResult ? (
          <>
            <div className="border shadow p-3 p-lg-5 mb-3">
              <h4 className="mb-3">{getDetailResult.results.title}</h4>
              <Row className="mx-2">
                <Col className="col col-lg-4">
                  <i className="bi bi-person-fill me-2"></i>
                  {getDetailResult.results.author.user}
                </Col>
                <Col className="col col-lg-4">
                  <i className="bi bi-calendar3 me-2"></i>
                  {getDetailResult.results.author.datePublished}
                </Col>
              </Row>
              <Row>
                <Col className="col-12 col-lg-7">
                  <img
                    className="mt-3"
                    src={getDetailResult.results.thumb}
                    width="100%"
                  />
                </Col>
              </Row>
              <div className="mt-4">
                <h5 className="mb-3">Informasi</h5>
                <div className="mx-0 mx-md-3">
                  <li>Waktu : {getDetailResult.results.times}</li>
                  <li>Ukuran : {getDetailResult.results.servings}</li>
                  <li>
                    Tingkat Kesulitan : {getDetailResult.results.difficulty}
                  </li>
                </div>
              </div>
              <div className="mt-4">
                <h5 className="mb-3">Deskripsi</h5>
                <div className="mx-0 mx-md-3" style={{ textAlign: "justify" }}>
                  {getDetailResult.results.desc}
                </div>
              </div>
            </div>
            <div className="border shadow p-3 p-lg-5 mb-3">
              <div className="mb-4">
                <h5 className="mb-3">Alat dan Bahan</h5>
                <Row className="px-0 px-md-3">
                  {getDetailResult.results.ingredient.map((e) => {
                    return (
                      <Col className="col-12 col-sm-6">
                        <ul className="my-0">
                          <li>{e}</li>
                        </ul>
                      </Col>
                    );
                  })}
                </Row>
              </div>
              <div className="mb-4">
                <h5 className="mb-3">Langkah-langkah</h5>
                <ol>
                  {getDetailResult.results.step.map((e) => {
                    return (
                      <li style={{ textAlign: "justify" }}>{removeNum(e)}</li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </>
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
      </div>
    </Container>
  );
}

export default DetailScreen;
