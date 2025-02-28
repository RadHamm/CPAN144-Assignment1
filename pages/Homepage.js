import { useState } from "react";

// Displays welcome message based on button click
const Homepage = () => {
  const [isClicked, setIsClicked] = useState(false);

  // function to toggle states
  const toggleClick = () => {
    setIsClicked(!isClicked);
  };

  // returns conditionally rendered messaged based on toggle state function
  return (
    <div>
      <h1>{isClicked ? "Thanks for visiting!" : "Assignment 1"}</h1>
      <button onClick={toggleClick}>Click me</button>
    </div>
  );
};

export default Homepage;
