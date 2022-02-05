import "./App.css";
import { useState, useEffect } from "react";
import Title from "./components/Title";
import Reviews from "./components/Reviews";
import Modal from "./components/Modal";
import AddReviewForm from "./components/AddReviewForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [reviews, setReviews] = useState([
    { movieName: "Rare Exports", rating: 4.5, reviewText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis dolorum numquam earum unde soluta eveniet, libero molestias sapiente autem.", id: 1 },
    { movieName: "Tomb Raider", rating: 3.5, reviewText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis dolorum numquam earum unde soluta eveniet, libero molestias sapiente autem.", id: 2 },
    { movieName: "Spider-Man: No Way Home", rating: 5, reviewText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis dolorum numquam earum unde soluta eveniet, libero molestias sapiente autem.", id: 3 }
  ]);

  useEffect(() => {
    if (localStorage.getItem("exampleReviewsData")) {
      setReviews(JSON.parse(localStorage.getItem("exampleReviewsData")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("exampleReviewsData", JSON.stringify(reviews));
  }, [reviews]);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleDelete = id => {
    setReviews(prevReviews => {
      return prevReviews.filter(review => {
        return id !== review.id;
      });
    });
  };

  return (
    <div className="App container border rounded my-md-5 pb-3">
      <Title title="My Movie Reviews" />
      <Reviews reviews={reviews} handleDelete={handleDelete} />
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>
        Add Review
      </button>
      {showModal && (
        <Modal title="Add New Review" handleClose={handleClose}>
          <AddReviewForm setReviews={setReviews} handleClose={handleClose} />
        </Modal>
      )}
    </div>
  );
}

export default App;
