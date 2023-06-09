import Image1 from "../../images/h1.webp";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { ImStarFull } from "react-icons/im";

import Gmage1 from "../../images/g1.webp";
import Gmage2 from "../../images/g2.webp";
import Gmage3 from "../../images/g3.webp";
import Gmage4 from "../../images/g4.webp";
import Gmage5 from "../../images/g5.webp";
import Gmage6 from "../../images/g6.webp";

import Umage1 from "../../images/u1.webp";
import Umage2 from "../../images/u2.webp";
import Umage3 from "../../images/u3.webp";
import Umage4 from "../../images/u4.webp";
import Umage5 from "../../images/u5.webp";
import Umage6 from "../../images/u6.webp";

import Rmage1 from "../../images/R1.webp";
import Rmage2 from "../../images/R2.webp";
import Rmage3 from "../../images/R3.webp";
import Rmage4 from "../../images/R4.webp";
import Rmage5 from "../../images/R5.webp";
import Rmage6 from "../../images/R6.webp";

import Pmage1 from "../../images/P1.webp";
import Pmage2 from "../../images/P2.webp";
import Pmage3 from "../../images/P3.webp";
import Pmage4 from "../../images/P4.webp";
import Pmage5 from "../../images/P5.webp";
import Pmage6 from "../../images/P6.webp";

//PLAYS
import Qmage1 from "../../images/Q1.webp";
import Qmage2 from "../../images/Q2.webp";
import Qmage3 from "../../images/Q3.webp";
import Qmage4 from "../../images/Q4.webp";
import Qmage5 from "../../images/Q5.webp";
import Qmage6 from "../../images/Q6.webp";

import Zmage1 from "../../images/Z1.webp";
import Zmage2 from "../../images/Z2.webp";
import Zmage3 from "../../images/Z3.webp";
import Zmage4 from "../../images/Z4.webp";
import Zmage5 from "../../images/Z5.webp";
import Zmage6 from "../../images/Z6.webp";

import Xmage1 from "../../images/X1.webp";
import Xmage2 from "../../images/X2.webp";
import Xmage3 from "../../images/X3.webp";
import Xmage4 from "../../images/X4.webp";
import Xmage5 from "../../images/X5.webp";
import Xmage6 from "../../images/X6.webp";

import Cmage1 from "../../images/C1.webp";
import Cmage2 from "../../images/C2.webp";
import Cmage3 from "../../images/C3.webp";
import Cmage4 from "../../images/C4.webp";
import Cmage5 from "../../images/C5.webp";
import Cmage6 from "../../images/C6.webp";
//PLAYS

//Tiny homes

import Bmage1 from "../../images/B1.webp";
import Bmage2 from "../../images/B2.webp";
import Bmage3 from "../../images/B3.webp";
import Bmage4 from "../../images/B4.webp";
import Bmage5 from "../../images/B5.webp";
import Bmage6 from "../../images/B6.webp";

import Nmage1 from "../../images/N1.webp";
import Nmage2 from "../../images/N2.webp";
import Nmage3 from "../../images/N3.webp";
import Nmage4 from "../../images/N4.webp";
import Nmage5 from "../../images/N5.webp";
import Nmage6 from "../../images/N6.webp";

import Mmage1 from "../../images/M1.webp";
import Mmage2 from "../../images/M2.webp";
import Mmage3 from "../../images/M3.webp";
import Mmage4 from "../../images/M4.webp";
import Mmage5 from "../../images/M5.webp";
import Mmage6 from "../../images/M6.webp";

import Lmage1 from "../../images/L1.webp";
import Lmage2 from "../../images/L2.webp";
import Lmage3 from "../../images/L3.webp";
import Lmage4 from "../../images/L4.webp";
import Lmage5 from "../../images/L5.webp";
import Lmage6 from "../../images/L6.webp";

//Tiny homes

// const today = new Date();
// const currentDate = today.toLocaleDateString();

const startDate = new Date("2023-05-01");
const endDate = new Date("2023-05-06");

const startMonth = startDate.toLocaleString("default", { month: "short" });
const endMonth =
  endDate.getMonth() === startDate.getMonth()
    ? ""
    : endDate.toLocaleString("default", { month: "short" });

const ITEMBOX = [
  //Tiny homes

  {
    id: "yt",
    img: Rmage1,
    img2: Rmage2,
    img3: Rmage3,
    img4: Rmage4,
    img5: Rmage5,
    img6: Gmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "Nature | OceanViews | Pool| Invertor",
    loc: " Western Cape, South Africa",
    hoster: "Entire home hosted by Nandi & Elmarie",
    room: "8 guests4 bedrooms5 beds4 baths",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27677092770",
    name: "Tiny homes",
  },
  //Tiny homes

  //Amazing pools
  {
    id: "yt",
    img: Umage5,
    img2: Umage2,
    img3: Umage3,
    img4: Umage4,
    img5: Umage5,
    img6: Umage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "Kosmos Heights Self Catering Accom. - Unit Two",
    loc: "Hartbeespoort,  South Africa",
    hoster: "Entire rental unit hosted by Ben & Mantoiné",
    room: "4 guests1 bedroom1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27691182967",
    name: "Amazing pools",
  },
  {
    id: "yt",
    img: Pmage1,
    img2: Pmage2,
    img3: Pmage3,
    img4: Pmage4,
    img5: Pmage5,
    img6: Pmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "Big House,swimming pool,hot tub and Netflix",
    loc: "Randburg, Gauteng, South Africa",
    hoster: "Entire home hosted by Antonette",
    room: "8 guests4 bedrooms5 beds2 baths",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27739980547",
    name: "Amazing pools",
  },
  {
    id: "yt",
    img: Rmage1,
    img2: Rmage2,
    img3: Rmage3,
    img4: Rmage4,
    img5: Rmage5,
    img6: Gmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "Nature | OceanViews | Pool| Invertor",
    loc: " Western Cape, South Africa",
    hoster: "Entire home hosted by Nandi & Elmarie",
    room: "8 guests4 bedrooms5 beds4 baths",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27677092770",
    name: "Amazing pools",
  },
  {
    id: "yt",
    img: Umage1,
    img2: Umage2,
    img3: Umage3,
    img4: Umage4,
    img5: Umage5,
    img6: Umage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "Kosmos Heights Self Catering Accom. - Unit Two",
    loc: "Hartbeespoort,  South Africa",
    hoster: "Entire rental unit hosted by Ben & Mantoiné",
    room: "4 guests1 bedroom1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27691182967",
    name: "Amazing pools",
  },
  {
    id: "yt",
    img: Pmage1,
    img2: Pmage2,
    img3: Pmage3,
    img4: Pmage4,
    img5: Pmage5,
    img6: Pmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "Big House,swimming pool,hot tub and Netflix",
    loc: "Randburg, Gauteng, South Africa",
    hoster: "Entire home hosted by Antonette",
    room: "8 guests4 bedrooms5 beds2 baths",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27739980547",
    name: "Amazing pools",
  },
  {
    id: "yt",
    img: Cmage1,
    img2: Cmage2,
    img3: Cmage3,
    img4: Cmage4,
    img5: Cmage5,
    img6: Cmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Amazing pools",
  },
  {
    id: "yt",
    img: Umage5,
    img2: Umage2,
    img3: Umage3,
    img4: Umage4,
    img5: Umage5,
    img6: Umage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "Kosmos Heights Self Catering Accom. - Unit Two",
    loc: "Hartbeespoort,  South Africa",
    hoster: "Entire rental unit hosted by Ben & Mantoiné",
    room: "4 guests1 bedroom1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27691182967",
    name: "Amazing pools",
  },
  {
    id: "yt",
    img: Pmage1,
    img2: Pmage2,
    img3: Pmage3,
    img4: Pmage4,
    img5: Pmage5,
    img6: Pmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "Big House,swimming pool,hot tub and Netflix",
    loc: "Randburg, Gauteng, South Africa",
    hoster: "Entire home hosted by Antonette",
    room: "8 guests4 bedrooms5 beds2 baths",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27739980547",
    name: "Amazing pools",
  },
  //Amazing pools

  //Amazing views
  {
    id: "yt",
    img: Umage5,
    img2: Umage2,
    img3: Umage3,
    img4: Umage4,
    img5: Umage5,
    img6: Umage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "Kosmos Heights Self Catering Accom. - Unit Two",
    loc: "Hartbeespoort,  South Africa",
    hoster: "Entire rental unit hosted by Ben & Mantoiné",
    room: "4 guests1 bedroom1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27691182967",
    name: "Amazing views",
  },
  {
    id: "yt",
    img: Pmage1,
    img2: Pmage2,
    img3: Pmage3,
    img4: Pmage4,
    img5: Pmage5,
    img6: Pmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "Big House,swimming pool,hot tub and Netflix",
    loc: "Randburg, Gauteng, South Africa",
    hoster: "Entire home hosted by Antonette",
    room: "8 guests4 bedrooms5 beds2 baths",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27739980547",
    name: "Amazing views",
  },
  {
    id: "yt",
    img: Rmage1,
    img2: Rmage2,
    img3: Rmage3,
    img4: Rmage4,
    img5: Rmage5,
    img6: Gmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "Nature | OceanViews | Pool| Invertor",
    loc: " Western Cape, South Africa",
    hoster: "Entire home hosted by Nandi & Elmarie",
    room: "8 guests4 bedrooms5 beds4 baths",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27677092770",
    name: "Amazing views",
  },
  {
    id: "yt",
    img: Umage5,
    img2: Umage2,
    img3: Umage3,
    img4: Umage4,
    img5: Umage5,
    img6: Umage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "Kosmos Heights Self Catering Accom. - Unit Two",
    loc: "Hartbeespoort,  South Africa",
    hoster: "Entire rental unit hosted by Ben & Mantoiné",
    room: "4 guests1 bedroom1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27691182967",
    name: "Amazing views",
  },
  {
    id: "yt",
    img: Pmage1,
    img2: Pmage2,
    img3: Pmage3,
    img4: Pmage4,
    img5: Pmage5,
    img6: Pmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "Big House,swimming pool,hot tub and Netflix",
    loc: "Randburg, Gauteng, South Africa",
    hoster: "Entire home hosted by Antonette",
    room: "8 guests4 bedrooms5 beds2 baths",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27739980547",
    name: "Amazing views",
  },
  {
    id: "yt",
    img: Cmage1,
    img2: Cmage2,
    img3: Cmage3,
    img4: Cmage4,
    img5: Cmage5,
    img6: Cmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Amazing views",
  },
  //Amazing views

  //PLAYS
  {
    id: "yt",
    img: Gmage1,
    img2: Gmage2,
    img3: Gmage3,
    img4: Gmage4,
    img5: Gmage5,
    img6: Gmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Play",
  },
  {
    id: "yJt",
    img: Qmage1,
    img2: Qmage2,
    img3: Qmage3,
    img4: Qmage4,
    img5: Qmage5,
    img6: Qmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Play",
  },
  {
    id: "yt",
    img: Zmage1,
    img2: Zmage2,
    img3: Zmage3,
    img4: Zmage4,
    img5: Zmage5,
    img6: Zmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Play",
  },

  {
    id: "yt",
    img: Cmage1,
    img2: Cmage2,
    img3: Cmage3,
    img4: Cmage4,
    img5: Cmage5,
    img6: Cmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Play",
  },
  {
    id: "yt",
    img: Gmage1,
    img2: Gmage2,
    img3: Gmage3,
    img4: Gmage4,
    img5: Gmage5,
    img6: Gmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Play",
  },
  {
    id: "yJt",
    img: Qmage1,
    img2: Qmage2,
    img3: Qmage3,
    img4: Qmage4,
    img5: Qmage5,
    img6: Qmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Play",
  },
  {
    id: "yt",
    img: Zmage1,
    img2: Zmage2,
    img3: Zmage3,
    img4: Zmage4,
    img5: Zmage5,
    img6: Zmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Play",
  },

  {
    id: "yt",
    img: Cmage1,
    img2: Cmage2,
    img3: Cmage3,
    img4: Cmage4,
    img5: Cmage5,
    img6: Cmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Play",
  },

  //PLAYS

  //Off-the-grid
  {
    id: "yt",
    img: Gmage1,
    img2: Gmage2,
    img3: Gmage3,
    img4: Gmage4,
    img5: Gmage5,
    img6: Gmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Off-the-grid",
  },
  {
    id: "yJt",
    img: Qmage1,
    img2: Qmage2,
    img3: Qmage3,
    img4: Qmage4,
    img5: Qmage5,
    img6: Qmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Off-the-grid",
  },
  {
    id: "yt",
    img: Zmage1,
    img2: Zmage2,
    img3: Zmage3,
    img4: Zmage4,
    img5: Zmage5,
    img6: Zmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Off-the-grid",
  },

  {
    id: "yt",
    img: Cmage1,
    img2: Cmage2,
    img3: Cmage3,
    img4: Cmage4,
    img5: Cmage5,
    img6: Cmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Off-the-grid",
  },
  {
    id: "yt",
    img: Gmage1,
    img2: Gmage2,
    img3: Gmage3,
    img4: Gmage4,
    img5: Gmage5,
    img6: Gmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Off-the-grid",
  },
  {
    id: "yJt",
    img: Qmage1,
    img2: Qmage2,
    img3: Qmage3,
    img4: Qmage4,
    img5: Qmage5,
    img6: Qmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Off-the-grid",
  },
  {
    id: "yt",
    img: Zmage1,
    img2: Zmage2,
    img3: Zmage3,
    img4: Zmage4,
    img5: Zmage5,
    img6: Zmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Off-the-grid",
  },

  {
    id: "yt",
    img: Cmage1,
    img2: Cmage2,
    img3: Cmage3,
    img4: Cmage4,
    img5: Cmage5,
    img6: Cmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Off-the-grid",
  },

  //Off-the-grid

  //Tiny homes
  {
    id: "yt",
    img: Bmage1,
    img2: Bmage2,
    img3: Bmage3,
    img4: Bmage4,
    img5: Bmage5,
    img6: Bmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Tiny homes",
  },
  {
    id: "yJt",
    img: Nmage1,
    img2: Nmage2,
    img3: Nmage3,
    img4: Nmage4,
    img5: Nmage5,
    img6: Nmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Tiny homes",
  },
  {
    id: "yt",
    img: Mmage1,
    img2: Mmage2,
    img3: Mmage3,
    img4: Mmage4,
    img5: Mmage5,
    img6: Mmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Tiny homes",
  },

  {
    id: "yt",
    img: Lmage2,
    img2: Lmage2,
    img3: Lmage3,
    img4: Lmage4,
    img5: Lmage5,
    img6: Lmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Tiny homes",
  },
  {
    id: "yt",
    img: Bmage1,
    img2: Bmage2,
    img3: Bmage3,
    img4: Bmage4,
    img5: Bmage5,
    img6: Bmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Tiny homes",
  },
  {
    id: "yJt",
    img: Nmage1,
    img2: Nmage2,
    img3: Nmage3,
    img4: Nmage4,
    img5: Nmage5,
    img6: Nmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Tiny homes",
  },
  {
    id: "yt",
    img: Gmage1,
    img2: Mmage2,
    img3: Mmage3,
    img4: Mmage4,
    img5: Mmage5,
    img6: Mmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Tiny homes",
  },

  //Tiny homes

  //National parks
  {
    id: "yt",
    img: Bmage1,
    img2: Bmage2,
    img3: Bmage3,
    img4: Bmage4,
    img5: Bmage5,
    img6: Bmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "National parks",
  },
  {
    id: "yJt",
    img: Nmage1,
    img2: Nmage2,
    img3: Nmage3,
    img4: Nmage4,
    img5: Nmage5,
    img6: Nmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "National parks",
  },
  {
    id: "yt",
    img: Mmage1,
    img2: Mmage2,
    img3: Mmage3,
    img4: Mmage4,
    img5: Mmage5,
    img6: Mmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "National parks",
  },

  {
    id: "yt",
    img: Lmage1,
    img2: Lmage2,
    img3: Lmage3,
    img4: Lmage4,
    img5: Lmage5,
    img6: Lmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "National parks",
  },
  {
    id: "yt",
    img: Bmage1,
    img2: Bmage2,
    img3: Bmage3,
    img4: Bmage4,
    img5: Bmage5,
    img6: Bmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "National parks",
  },
  {
    id: "yJt",
    img: Nmage1,
    img2: Nmage2,
    img3: Nmage3,
    img4: Nmage4,
    img5: Nmage5,
    img6: Nmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "National parks",
  },
  {
    id: "yt",
    img: Mmage1,
    img2: Mmage2,
    img3: Mmage3,
    img4: Mmage4,
    img5: Mmage5,
    img6: Mmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "National parks",
  },

  {
    id: "yt",
    img: Lmage1,
    img2: Lmage2,
    img3: Lmage3,
    img4: Lmage4,
    img5: Lmage5,
    img6: Lmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "National parks",
  },

  //National parks

  //Cabins

  {
    id: "yJt",
    img: Qmage1,
    img2: Qmage2,
    img3: Qmage3,
    img4: Qmage4,
    img5: Qmage5,
    img6: Qmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Cabins",
  },
  {
    id: "yt",
    img: Zmage1,
    img2: Zmage2,
    img3: Zmage3,
    img4: Zmage4,
    img5: Zmage5,
    img6: Zmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Cabins",
  },

  {
    id: "yt",
    img: Cmage1,
    img2: Cmage2,
    img3: Cmage3,
    img4: Cmage4,
    img5: Cmage5,
    img6: Cmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Cabins",
  },
  {
    id: "yt",
    img: Gmage1,
    img2: Gmage2,
    img3: Gmage3,
    img4: Gmage4,
    img5: Gmage5,
    img6: Gmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Cabins",
  },

  {
    id: "yJt",
    img: Qmage1,
    img2: Qmage2,
    img3: Qmage3,
    img4: Qmage4,
    img5: Qmage5,
    img6: Qmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Cabins",
  },
  {
    id: "yt",
    img: Zmage1,
    img2: Zmage2,
    img3: Zmage3,
    img4: Zmage4,
    img5: Zmage5,
    img6: Zmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Cabins",
  },

  {
    id: "yt",
    img: Cmage1,
    img2: Cmage2,
    img3: Cmage3,
    img4: Cmage4,
    img5: Cmage5,
    img6: Cmage6,
    icon: <FiHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Cabins",
  },
  {
    id: "yt",
    img: Gmage1,
    img2: Gmage2,
    img3: Gmage3,
    img4: Gmage4,
    img5: Gmage5,
    img6: Gmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Cabins",
  },

  //cabins

  //Camping

  {
    id: "yJt",
    img: Qmage1,
    img2: Qmage2,
    img3: Qmage3,
    img4: Qmage4,
    img5: Qmage5,
    img6: Qmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Camping",
  },
  {
    id: "yt",
    img: Zmage1,
    img2: Zmage2,
    img3: Zmage3,
    img4: Zmage4,
    img5: Zmage5,
    img6: Zmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Camping",
  },

  {
    id: "yt",
    img: Cmage1,
    img2: Cmage2,
    img3: Cmage3,
    img4: Cmage4,
    img5: Cmage5,
    img6: Cmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Camping",
  },
  {
    id: "yt",
    img: Gmage1,
    img2: Gmage2,
    img3: Gmage3,
    img4: Gmage4,
    img5: Gmage5,
    img6: Gmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Camping",
  },

  {
    id: "yJt",
    img: Qmage1,
    img2: Qmage2,
    img3: Qmage3,
    img4: Qmage4,
    img5: Qmage5,
    img6: Qmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Camping",
  },
  {
    id: "yt",
    img: Zmage1,
    img2: Zmage2,
    img3: Zmage3,
    img4: Zmage4,
    img5: Zmage5,
    img6: Zmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Camping",
  },

  {
    id: "yt",
    img: Cmage1,
    img2: Cmage2,
    img3: Cmage3,
    img4: Cmage4,
    img5: Cmage5,
    img6: Cmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Camping",
  },
  {
    id: "yt",
    img: Gmage1,
    img2: Gmage2,
    img3: Gmage3,
    img4: Gmage4,
    img5: Gmage5,
    img6: Gmage6,
    icon: <FaHeart />,
    star: <ImStarFull />,
    title: "City Penthouse in Central Cape Town",
    loc: "Mountain view",
    hoster: "Entire rental unit hosted by Mike",
    room: "2 guestsStudio1 bed1 bath",
    date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
    price: 5000,
    link: " https://wa.me/+27849614484",
    name: "Camping",
  },

  //cabins

  // {
  //   id: "ytx",
  //   img: Image1,
  //   icon: <FiHeart />,
  //   title: "Cap Town, South Africe",
  //   loc: "Montain valley views",
  //   date: `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`,
  //   price: 5000,
  // },
];

export default ITEMBOX;
