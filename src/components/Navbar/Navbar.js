import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiTransfuse } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { RiAccountCircleFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

import "./Navbar.css";
import SearchDate from "../SearchDate/SearchDate";

function Navbar(props) {
  return (
    <header className="nav__header  ">
      <div className="d-none d-md-block">
        <Link to="/" className="link-top">
          <div className="nav__header__logo d-flex ">
            <GiTransfuse />
            <h5 className="mt-4 ">sHost</h5>
          </div>
        </Link>
      </div>
      <nav className="navbar ">
        <div class="input-group">
          <input
            type="text"
            class="input"
            placeholder="Anywhere  |  Any week | Add guests..."
          />

          <button class="btn btn--accent">
            <BiSearch />
          </button>
        </div>
      </nav>
      <div className="d-none d-md-block">
        <div className="nav__account d-flex ">
          <Link to="/" className="link-top">
            <div className="nav__account__home me-2">
              <h5 className="">SoHost your home</h5>
            </div>
          </Link>
          <div className="nav__account__world">
            <TbWorld />{" "}
          </div>
          <div className="nav__account__body ms-3">
            <span className="nav__acount__humb mx-3 ">
              <RxHamburgerMenu />
            </span>{" "}
            <span className="nav__account__avatar">
              <RiAccountCircleFill />{" "}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
