import { useState, useRef } from "react";
import "./RightSection.css";

const RightSection = () => {
  const [selected, setSelected] = useState("Cricket"); // Default selected item is "Cricket"
  const listRef = useRef(null); // Reference to the list container

  const items = [
    "Politics", "Cricket", "Football", "Tennis", "Kabaddi", "Esoccer",
    "Horse Racing", "Greyhound Racing", "Table Tennis", "Basketball",
    "Boxing", "Mixed Martial Arts", "American Football", "Volleyball",
    "Badminton", "Snooker", "Ice Hockey", "E Games", "Futsal",
    "Handball", "Motor Sports",
  ];

  const handleItemClick = (item, index) => {
    setSelected(item); // Update the selected item

    // Scroll logic
    const listElement = listRef.current;
    const listItem = listElement.children[index];

    // Calculate the scroll position to bring the clicked item into view
    const itemLeft = listItem.offsetLeft; // Left position of the item
    const itemWidth = listItem.offsetWidth; // Width of the item
    const containerWidth = listElement.offsetWidth; // Width of the container

    // Scroll the list to ensure the item is fully visible
    if (itemLeft + itemWidth > listElement.scrollLeft + containerWidth) {
      // Scroll right to make the item fully visible
      listElement.scrollLeft = itemLeft + itemWidth - containerWidth;
    } else if (itemLeft < listElement.scrollLeft) {
      // Scroll left to make the item fully visible
      listElement.scrollLeft = itemLeft;
    }
  };

  return (
    <div className="rightSection_container">
      <div className="right_highlights">
        <div className="highlight_box">
          <a className="blink_me" href="">
            <p>New Zealand v England</p>
          </a>
        </div>
        <div className="highlight_box">
          <a className="blink_me" href="">
            <p>South Africa Women v Eng...</p>
          </a>
        </div>
        <div className="highlight_box">
          <a className="blink_me" href="">
            <p>AC Milan v Empoli</p>
          </a>
        </div>
        <div className="highlight_box">
          <a className="blink_me" href="">
            <p>West Ham v Arsenal</p>
          </a>
        </div>
        <div className="highlight_box">
          <a className="blink_me" href="">
            <p>Dortmund v Bayern Munich</p>
          </a>
        </div>
      </div>

      {/* Game list bar */}
      <div className="game_bar">
        <ul className="boxes" ref={listRef}>
          {items.map((item, index) => (
            <li
              key={index}
              className={selected === item ? "selected" : ""}
              onClick={() => handleItemClick(item, index)} // Handle click
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightSection;
