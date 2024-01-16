import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
const Card = ({
  img,
  category,
  color,
  company,
  newPrice,
  title,
  star,
  reviews,
  prevPrice,
}) => {
  return (
    <div className='card'>
      <img src={img} alt={title} className='card-img' />
      <div className='card-details'>
        <h3 className='card-title'>{title}</h3>
        <section className='card-reviews'>
          {star}
          {star}
          {star}
          {star}
        </section>
        <section className='card-price'>
          <div className='price'>
            <del>{prevPrice}</del> ${newPrice}
          </div>
          <div className='beg'>
            <BsFillBagHeartFill />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
