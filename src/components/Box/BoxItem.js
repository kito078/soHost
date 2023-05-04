import React, { useState } from "react";
import Imm from "../../images/h1.webp";
import { AiTwotoneHeart } from "react-icons/ai";
import "./BoxItem.css";
import { Button, Col, Row } from "reactstrap";
import { ImStarFull } from "react-icons/im";
import { Link } from "react-router-dom";

function BoxItem(props) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };
  console.log(liked);

  const price = `$${props.price.toFixed(2)}`;
  const title = props.title.slice(0, 17);
  return (
    <Link to="/details" className="link-top">
      <div>
        <div class="card mx-4 mx-lg-3 my-4 my-md-5">
          <div className="boxItem__header">
            <div
              className={liked ? "love-bage liked" : "love-bage"}
              onClick={handleLike}
            >
              {props.love}
            </div>
            <img src={props.img} alt="Image description" />
          </div>
          <div class="card-content boxItem__body text-start">
            <div>
              <h5 className="boxItem__title mt-4 my-2">{title}</h5>
            </div>
            <div className="star__bage ms-4 ps-4 mt-3 d-none d-lg-block">
              <div className="d-flex">
                <h5 className="star me-2">{props.star}</h5>
                <h5 className="star-review">4.9</h5>
              </div>
            </div>
            <h5 className="boxItem__loc">{props.loc}</h5>
            <h5 className="boxItem__date my-2">{props.date}</h5>
            <div className="d-flex">
              <h5 className="boxItem__price ">${props.price}</h5>
              <h5 className="boxItem__night ms-2">night</h5>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BoxItem;

// import React from "react";
// import Imm from "../../images/h1.webp";
// import "./BoxItem.css";
// import { Button, Col, Row } from "reactstrap";
// import { AiTwotoneHeart } from "react-icons/ai";

// function BoxItem() {
//   return (
//     <div className="boxItem text-start mb-5 pt-4">
//       <div className="boxItem__header">
//         <div className="love-bage">
//           <AiTwotoneHeart />
//         </div>
//         <img src={Imm} alt="" />
//       </div>
//       <div className="boxItem__body text-start ms-">
//         <Row className="boxItem__cont">
//           <Col>
//             <h5 className="boxItem__title mt-4 my-2">Montagu, South Africa</h5>
//           </Col>
//           <Col>50XXX</Col>
//         </Row>

//         <h5 className="boxItem__loc">Montain valley views Lorem ipsu</h5>
//         <h5 className="boxItem__date my-2">May 14 - 19</h5>
//         <div className="d-flex">
//           <h5 className="boxItem__price">$33000</h5>
//           <h5 className="boxItem__night ms-2">night</h5>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BoxItem;
