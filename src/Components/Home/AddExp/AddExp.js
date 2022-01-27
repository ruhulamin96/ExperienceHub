import axios from "axios";
import React, { useRef, useState } from "react";
import StarRatings from "react-star-ratings";

function AddExp() {
  const dateRef = useRef();
  const emailRef = useRef();
  const timeRef = useRef();
  const locationRef = useRef();
  const imageRef = useRef();
  const expenseRef = useRef();
  const [rating, setRating] = useState("3");
  const descRef = useRef();
  const setNewRating = (rating) => {
    setRating(rating);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const date = dateRef.current.value;
    dateRef.current.value = "";
    const time = timeRef.current.value;
    timeRef.current.value = "";
    const location = locationRef.current.value;
    locationRef.current.value = "";
    const expense = expenseRef.current.value;
    expenseRef.current.value = "";
    const img = imageRef.current.value;
    imageRef.current.value = "";
    const desc = descRef.current.value;
    descRef.current.value = "";
    const isApproved = false;
    const newData = {
      date,
      time,
      location,
      expense,
      desc,
      rating,
      img,
      isApproved,
    };
    axios
      .post("https://glacial-basin-60167.herokuapp.com/experience", newData)
      .then(() => {
        alert("Blog Post Success and Wait for Approve");
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h1 className="text-center text-color fw-bold  my-3">
        Add Your Experience
      </h1>
      <form action="" onSubmit={handleSubmit}>
        <div class="form-floating mb-3">
          <input
            type="date"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            ref={dateRef}
            required
          />
          <label for="floatingInput">Date</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="Time"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            ref={timeRef}
            required
          />
          <label for="floatingPassword">Time</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            ref={locationRef}
            required
          />
          <label for="floatingPassword">Location</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="number"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            ref={expenseRef}
            required
          />
          <label for="floatingPassword">Expense</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="url"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            ref={imageRef}
            required
          />
          <label for="floatingPassword">Image Url</label>
        </div>
        <div class="form-floating mb-3">
          <textarea
            style={{ height: "100%" }}
            rows="5"
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            ref={descRef}
            required
          ></textarea>
          <label for="floatingTextarea">Experience</label>
        </div>
        <StarRatings
          rating={3}
          starRatedColor="#130f40"
          changeRating={setNewRating}
          numberOfStars={6}
          name="rating"
        />
        <button className="btn-card w-100">Submit</button>
      </form>
    </div>
  );
}

export default AddExp;
