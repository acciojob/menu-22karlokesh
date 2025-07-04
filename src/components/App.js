// <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>\

import React, { useState } from "react";
import ReactDOM from "react-dom";
import Menu from "./Menu";
import "./styles.css";

const App = () => {
  const allMenuItems = [
    { id: 1, name: "Pancakes", category: "Breakfast", price: "$5", image: "https://via.placeholder.com/100" },
    { id: 2, name: "Omelette", category: "Breakfast", price: "$4", image: "https://via.placeholder.com/100" },
    { id: 3, name: "Burger", category: "Lunch", price: "$7", image: "https://via.placeholder.com/100" },
    { id: 4, name: "Pizza", category: "Lunch", price: "$8", image: "https://via.placeholder.com/100" },
    { id: 5, name: "Chocolate Shake", category: "Shakes", price: "$3", image: "https://via.placeholder.com/100" },
    { id: 6, name: "Vanilla Shake", category: "Shakes", price: "$3", image: "https://via.placeholder.com/100" },
  ];

  const [menuItems, setMenuItems] = useState(allMenuItems);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setMenuItems(allMenuItems);
    } else {
      setMenuItems(allMenuItems.filter(item => item.category === category));
    }
  };

  return (
    <div id="main" className="container">
      <h1>Menu</h1>
      <div className="buttons">
        <button id="filter-btn-1" onClick={() => handleFilter("Breakfast")}>Breakfast</button>
        <button id="filter-btn-2" onClick={() => handleFilter("Lunch")}>Lunch</button>
        <button id="filter-btn-3" onClick={() => handleFilter("Shakes")}>Shakes</button>
      </div>
      <Menu items={menuItems} />
      <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));


