import React, { useState } from "react";
import "./Footer.css";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { Button, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

function Footer() {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
  };
  return (
    <div className="footer pt-2 pt-md-4">
      <footer className="footer__content container">
        <div className="content">
          <Row className="footer__content__header align-items-center justify-content-center text-center d-md-none">
            <Col>
              <Link className="link-top" to="/">
                <Col className="footer__icon d-flex flex-column align-items-center justify-content-center mx-4 text-center">
                  <BiSearch />
                  <h5 className="mt-2">Home</h5>
                </Col>
              </Link>
            </Col>
            <Col className="footer__icon d-flex flex-column align-items-center justify-content-center text-center">
              {status ? (
                <span className="heart__icon">
                  <AiFillHeart onClick={toggle} />
                </span>
              ) : (
                <AiOutlineHeart onClick={toggle} />
              )}

              <h5 className="mt-2">Whishlist</h5>
            </Col>
            <Col className="footer__icon d-flex flex-column align-items-center justify-content-center mx-4">
              <MdOutlineAccountCircle />
              <h5 className="mt-2">LogIn</h5>
            </Col>
          </Row>
          <div className="d-none d-md-block ms-">
            <Row className="align-items-start justify-content-center ">
              <Col>
                <div className="d-flex align-items-center justify-content-centers ">
                  <h5 className="text-nowrap ms-4">&copy; 2023 soHost, Inc.</h5>
                  <h5>Privacy</h5>
                  <h5 className="mx-4">Terms</h5>
                  <h5>Sitemap</h5>
                  <h5 className="mx-4">Destinations</h5>
                </div>
              </Col>
              <Col className="">
                <div className="d-flex align-items-center justify-content-centers">
                  <h5 className="footer-world d-flex mx-4 align-items-center justify-content-center">
                    <TbWorld />
                    English
                  </h5>
                  <h5 className="text-nowrap">currency R ZAR</h5>
                  <h5 className="text-nowrap ms-4">Cancellation options</h5>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
