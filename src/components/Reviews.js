import Review from "./Review";
import "./Reviews.css";

function Reviews({ reviews, handleDelete }) {
  return (
    <div className="reviews">
      {reviews.map(review => (
        <Review review={review} key={review.id} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default Reviews;
