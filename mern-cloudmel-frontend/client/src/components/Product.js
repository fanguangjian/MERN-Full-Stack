import React from "react";
import { Money } from "react-format";
import { Link } from "react-router-dom";
import Rating from "react-rating";

export default function Product({ pro }) {
  return (
    <div className="col-md-3 m-5 card p-2 text-start">
      <div>
        <Link to={`product/${pro.id}`}>
            <img src={pro.image} alt="" className="img-fluid" />
            <h1 style={{ "font-size": "18px" }}>{pro.name}</h1>        
            <Rating
                style={{color:'orange'}}
                initialRating={pro.rating}
                emptySymbol="far fa-star fa-1x"
                fullSymbol="fas fa-star fa-1x"
                readonly={true}
                />

            {/* <h1>Price: ${pro.price }</h1> */}
            {/* <Money currency="AUD">{pro.price }</Money> */}
            <h1>
            Price:<Money>{pro.price}</Money>
            </h1>
        </Link>
      </div>
    </div>
  );
}
