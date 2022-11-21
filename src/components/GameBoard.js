import React, { useEffect, useState } from "react";
import Food from "./Food";
import Snake from "./Snake";

const GameBoard = () => {
  // default position for the snake
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);

  // generating the snake food at random positions
  const [food, setFood] = useState({
    x: Math.ceil(Math.random() * 20),
    y: Math.ceil(Math.random() * 20),
  });

  // for storing the direction of the user input to move the snake
  const [direction, setDirection] = useState({ x: 0, y: 0 });

  // getting the input of direction from the user
  const userInput = async (event) => {
    switch (event.key) {
      case "ArrowUp":
        if (direction.x !== 1) {
          let newDirection = { ...direction };
          newDirection.x = -1;
          newDirection.y = 0;
          setDirection(newDirection);
        }
        break;
      case "ArrowDown":
        if (direction.x !== -1) {
          let newDirection = { ...direction };
          newDirection.x = 1;
          newDirection.y = 0;
          setDirection(newDirection);
        }
        break;
      case "ArrowLeft":
        if (direction.y !== 1) {
          let newDirection = { ...direction };
          newDirection.y = -1;
          newDirection.x = 0;
          setDirection(newDirection);
        }
        break;
      case "ArrowRight":
        if (direction.y !== -1) {
          let newDirection = { ...direction };
          newDirection.y = 1;
          newDirection.x = 0;
          setDirection(newDirection);
        }
        break;
    }
  };

  // for handling the user direction input
  useEffect(() => {
    window.addEventListener("keydown", userInput);

    return () => {
      window.removeEventListener("keydown", userInput);
    };
  }, [userInput]);

  useEffect(() => {
    const id = setInterval(() => {
      let newSnake = [...snake];
      newSnake[0].x += direction.x;
      newSnake[0].y += direction.y;
      setSnake(newSnake);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [snake]);

  return (
    <div className="gameBoard">
      <Snake body={snake[0]} />
      <Food food={food} />
    </div>
  );
};

export default GameBoard;
