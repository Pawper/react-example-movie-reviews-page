import { useState } from "react";
import "./AddReviewForm.css";

function AddReviewForm({ setReviews, handleClose }) {
  const [movieName, setMovie] = useState("");
  const [rating, setRating] = useState("3");
  const [reviewText, setReviewText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setReviews(prev => prev.concat({ movieName, rating, reviewText, id: Date.now() }));
    setMovie("");
    setRating("3");
    setReviewText("");
    handleClose();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="modal-body">
        <div className="reviewName">
          <label className="formLabel" htmlFor="movieName">
            Movie Name
          </label>
          <input className="form-control" name="movieName" id="movieName" value={movieName} onChange={e => setMovie(e.target.value)} placeholder="Movie" />
        </div>

        <div className="reviewRating">
          <div>
            <label className="formLabel" htmlFor="movieRating">
              Rating
            </label>
            <div>
              <output>{rating}</output>/5 stars
            </div>
          </div>
          <input type="range" min="1" max="5" step="0.5" className="form-range mt-1" name="movieRating" id="movieRating" value={rating} onChange={e => setRating(e.target.value)} />
        </div>

        <div className="review-text">
          <label className="formLabel" htmlFor="reviewText">
            Review Text
          </label>
          <textarea className="form-control" name="reviewText" id="reviewText" rows="5" value={reviewText} onChange={e => setReviewText(e.target.value)}></textarea>
        </div>
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary">Add Review</button>
        <button className="btn btn-secondary" onClick={handleClose}>
          Close
        </button>
      </div>
    </form>
  );
}

export default AddReviewForm;
