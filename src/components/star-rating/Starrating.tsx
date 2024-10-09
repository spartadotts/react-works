import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './style.css'

type StarRatingProps = {
    input : number;
}

export default function StarRating({ input } : StarRatingProps) {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  function onClickHandler(currentIndex: number) {
    setRating(currentIndex);
  }

  function onMouseMoveHandler(currentIndex: number) {
    setHover(currentIndex);
  }

  function onMouseLeaveHandler() {
    setHover(rating);
  }
  return (
    <div className="star-rating">
      {[...Array(input)].map((_,index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              className = {index <= (hover || rating) ? "active": "inactive"} 
              onClick={() => onClickHandler(index)}
              onMouseMove={() => onMouseMoveHandler(index)}
              onMouseLeave={() => onMouseLeaveHandler()}
              size={30}
            ></FaStar>
          );
        })}
    </div>
  );
}
