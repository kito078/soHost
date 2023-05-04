import React, { Component, useContext } from "react";
import Slider from "react-slick";
import "./Filters.css";
import { Link } from "react-router-dom";

import {
  FaPiggyBank,
  FaAtlassian,
  FaFirefox,
  FaDungeon,
  FaHotTub,
  FaHouseUser,
  FaMicroscope,
  FaMosque,
  FaPeopleArrows,
  FaPersonBooth,
  FaTruckMonster,
} from "react-icons/fa";
import CartContext from "../../store/cart-context";

const itemsList = [
  {
    id: "sss2",
    title: "Cabins",
    icon: <FaTruckMonster />,
  },
  {
    id: "fs",
    title: "Off-the-grid",
    icon: <FaAtlassian />,
  },
  {
    id: "sxs",
    title: "Camping",
    icon: <FaDungeon />,
  },
  {
    id: "sws",
    title: "Tiny homes",
    icon: <FaHotTub />,
  },

  {
    id: "ssi",
    title: "Play",
    icon: <FaHouseUser />,
  },
  {
    id: "fs",
    title: "Off-the-grid",
    icon: <FaAtlassian />,
  },
  {
    title: "Amazing views",
    icon: <FaMicroscope />,
  },
  {
    id: "ss",
    title: "National parks",
    icon: <FaPiggyBank />,
  },

  {
    id: "sws",
    title: "Tiny homes",
    icon: <FaHotTub />,
  },
  {
    id: "sss2",
    title: "Cabins",
    icon: <FaTruckMonster />,
  },
  {
    id: "ssi",
    title: "Play",
    icon: <FaHouseUser />,
  },

  {
    id: "mss",
    title: "Amazing pools",
    icon: <FaPeopleArrows />,
  },

  {
    id: "sws",
    title: "Tiny homes",
    icon: <FaHotTub />,
  },
  {
    id: "fs",
    title: "Off-the-grid",
    icon: <FaAtlassian />,
  },
  {
    id: "sws",
    title: "Tiny homes",
    icon: <FaHotTub />,
  },
];

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 10,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 8,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 7,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    };

    const filtedItem = (item1) => {
      this.props.onChosen(item1);
      console.log(item1);
    };

    return (
      <div className="win">
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          {itemsList.map((item1) => (
            <div
              className="oneSwiper  text-center"
              onClick={() => {
                filtedItem(item1.title);
              }}
            >
              <span>{item1.icon}</span>
              <h5 className="mt-3">{item1.title}</h5>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
