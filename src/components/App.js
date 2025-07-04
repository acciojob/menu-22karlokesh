// <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>\

import React, { useState } from "react";
import "./App.css";

function App() {
  const allMenuItems = [
    { id: 1, name: "Pancakes", category: "Breakfast", price: "$5", image: "https://via.placeholder.com/100" },
    { id: 2, name: "Omelette", category: "Breakfast", price: "$4", image: "https://via.placeholder.com/100" },
    { id: 3, name: "Burger", category: "Lunch", price: "$7", image: "https://via.placeholder.com/100" },
    { id: 4, name: "Pizza", category: "Lunch", price: "$8", image: "https://via.placeholder.com/100" },
    { id: 5, name: "Chocolate Shake", category: "Shakes", price: "$3", image: "https://via.placeholder.com/100" },
    { id: 6, name: "Vanilla Shake", category: "Shakes", price: "$3", image: "https://via.placeholder.com/100" },
  ];

  const [menuItems, setMenuItems] = useState(allMenuItems);

  const handleFilter = (category) => {
    if (category === "All") {
      setMenuItems(allMenuItems);
    } else {
      setMenuItems(allMenuItems.filter(item => item.category === category));
    }
  };

  return (
    <div id="main" style={{ textAlign: "center", margin: "20px" }}>
      <h1>Menu</h1>
      <div style={{ marginBottom: "20px" }}>
        <button id="filter-btn-1" onClick={() => handleFilter("Breakfast")}>Breakfast</button>
        <button id="filter-btn-2" onClick={() => handleFilter("Lunch")}>Lunch</button>
        <button id="filter-btn-3" onClick={() => handleFilter("Shakes")}>Shakes</button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {menuItems.map(item => (
          <div
            key={item.id}
            data-test-id={
              item.category === "Breakfast"
                ? "menu-item-breakfast"
                : item.category === "Lunch"
                ? "menu-item-lunch"
                : "menu-item-shakes"
            }
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              margin: "10px",
              width: "150px"
            }}
          >
            <img src={item.image} alt={item.name} style={{ width: "100px", height: "100px" }} />
            <h3>{item.name}</h3>
            <p>{item.category} - {item.price}</p>
          </div>
        ))}
      </div>
      <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
    </div>
  );
}

export default App;
