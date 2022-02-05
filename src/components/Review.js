import "./Review.css";

const Review = ({ review, handleDelete }) => (
  <div className="card">
    <div className="card-body">
      <div className="headings">
        <h5 className="card-title">{review.movieName}</h5>
        <h6 className="card-subtitle text-muted">{review.rating} stars</h6>
      </div>
      <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(review.id)}>
        Delete
      </button>
      <p className="card-text">{review.reviewText}</p>
    </div>
  </div>
);

export default Review;
