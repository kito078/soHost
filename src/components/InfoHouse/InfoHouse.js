import React, { useContext, useEffect, useRef } from "react";
import "./InfoHouse.css";
import Image from "../../images/h1.webp";
import { ImStarFull } from "react-icons/im";
import { AiOutlineDownload, AiTwotoneHeart } from "react-icons/ai";
import { BsBuildingCheck, BsFileEarmarkCheck } from "react-icons/bs";
import { Button } from "reactstrap";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";

const InfoHouse = (props) => {
  const cartCtx = useContext(CartContext);

  const objectLength = Object.keys(cartCtx.items).length < 1;
  console.log(objectLength);

  return (
    <div className="house-one mb-5 pb-5">
      <div className={objectLength && "d-none "}>
        <div className="house container px-md-5 px-md-5 ">
          <div className=" ">
            <div className="d-none d-md-block">
              <div className="house__container  ms-md-2 my-5">
                <div>
                  <h2 className="house__private mt-3">
                    {cartCtx.items.item && cartCtx.items.item.title}
                    {/* {cartCtx.items.item.title} */}
                  </h2>
                  <h5 className="house__reviews d-flex mt-3">
                    <ImStarFull />
                    4.88 · 8 reviews · Terlingua, Texas, United States
                  </h5>
                </div>
                <div className="">
                  <div className="house__body d-flex me-5 ">
                    <div className="house__down d-flex me-5">
                      <AiOutlineDownload />
                      <h5 className="mt-1 ms-2">Share</h5>
                    </div>
                    <div className="house__down d-flex">
                      <AiTwotoneHeart />
                      <h5 className="mt-1 ms-2">Save</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-grid">
              <img
                // src={cartCtx.items.item.img}
                src={cartCtx.items.item && cartCtx.items.item.img}
                alt="Image 1"
                className="first-image "
              />
              <img
                // src={cartCtx.items.item.img2}
                src={cartCtx.items.item && cartCtx.items.item.img2}
                alt="Image 2"
                className="second-image d-none d-md-block"
              />
              <img
                // src={cartCtx.items.item.img3}
                src={cartCtx.items.item && cartCtx.items.item.img3}
                alt="Image 3"
                className="third-image d-none d-md-block"
              />
              <img
                // src={cartCtx.items.item.img4}
                src={cartCtx.items.item && cartCtx.items.item.img4}
                alt="Image 4"
                className="forth-image d-none d-md-block"
              />
              <img
                // src={cartCtx.items.item.img5}
                src={cartCtx.items.item && cartCtx.items.item.img5}
                alt="Image 5"
                className="firth-image d-none d-md-block"
              />
            </div>
          </div>
          <div className="house__bed mt-4 mt-md-5 pt-md-3 ms-md-2 mx-4">
            <div className="house__bed__list ">
              <div className="">
                <h2 className="house__private">
                  {cartCtx.items.item && cartCtx.items.item.hoster}
                </h2>
                <p className="house__reviews">
                  {cartCtx.items.item && cartCtx.items.item.room}
                </p>
              </div>
              <div className="house__avatar d-flex mt-5 mt-md-0 mb-5">
                <img
                  src={cartCtx.items.item && cartCtx.items.item.img6}
                  alt=""
                />
                <div className="d-block d-md-none">
                  <div className="house__check mt-2 ms-3">
                    <h5 className="">Natalie Scott.</h5>
                    <p className="">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="check mb-md-5 ">
              <div>
                <div className="d-flex mt-5 mb-4">
                  <div className="house__check mt-2">
                    <BsBuildingCheck />
                  </div>
                  <div className="house__check ms-4">
                    <h5>Self check-in</h5>
                    <p>Check yourself in with the lockbox.</p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div className="house__check mt-2">
                    <ImStarFull />
                  </div>
                  <div className="house__check ms-4">
                    <h5>Experienced host</h5>
                    <p>Natalie And Scott has 108 reviews for other places..</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="house__check mt-2">
                    <BsFileEarmarkCheck />
                  </div>
                  <div className="house__check ms-4">
                    <h5>Free cancellation for 48 hours.</h5>
                    <p>Check yourself in with the lockbox.</p>
                  </div>
                </div>
              </div>
              <div className="">
                <a
                  href={cartCtx.items.item && cartCtx.items.item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <button className="btn-reverse " color="success">
                    Book Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {objectLength && (
        <div className="plans text-ceneter d-flex flex-column align-items-center justify-content-center my-5 pt-5 pb-5  px-3">
          <h5>7 nights in Murter</h5>
          <h1 className="mt-4 text-center">
            Where you'll sleep, What this place offers
          </h1>
          <p className="mt-4 text-center">
            residential and summer property, covering 2,500 m² and offering
            luxurious
          </p>
          <Link to="/" className="mb-5 mb-md-0">
            <button className="btn-reverse " color="success">
              Your Home
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default InfoHouse;
