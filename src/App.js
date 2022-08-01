import "./App.css";
import { useState, useEffect } from "react";
import Title from "./components/Title";
import Reviews from "./components/Reviews";
import Modal from "./components/Modal";
import AddReviewForm from "./components/AddReviewForm";

// Material UI imports
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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

  const bull = (
    <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
      •
    </Box>
  );

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
      <h2>Material UI</h2>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4}>
          <Button variant="text">Hello World</Button>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Button variant="contained">Hello World</Button>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Button variant="outlined">Hello World</Button>
        </Grid>
      </Grid>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default App;
