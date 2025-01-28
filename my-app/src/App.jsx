import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/Button";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    comment: "Amazing product! Highly recommend it."
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    comment: "Great quality, but the delivery was a bit slow."
  },
  {
    id: 3,
    name: "Sam Wilson",
    rating: 3,
    comment: "It's okay, meets expectations but nothing extraordinary."
  }
];

const App = () => {
  return (
    <div className="container min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light">
      <Card className="card text-white bg-primary mb-4 w-100">
        <CardContent className="card-body text-center">
          <h1 className="card-title display-5">Welcome to My App</h1>
          <p className="card-text mb-4">This is a simple React app to get started.</p>
          <Button className="btn btn-secondary w-100">Get Started</Button>
        </CardContent>
      </Card>

      <div className="w-100">
        <h2 className="h4">Product Reviews</h2>
        {reviews.map((review) => (
          <Card key={review.id} className="card mb-3">
            <CardContent className="card-body">
              <h3 className="h5">{review.name}</h3>
              <p className="text-warning">{"⭐".repeat(review.rating)}</p>
              <p className="card-text">{review.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default App;
