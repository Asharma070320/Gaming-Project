import React, { useState } from "react";
import "./LeftSection.css";

const LeftSection = () => {
  const [showRacingList, setShowRacingList] = useState(false); // State for Racing Sports list
  const [showOthersList, setShowOthersList] = useState(false); // State for Others list
  const [showAllSportsList, setShowAllSportsList] = useState(false); // State for All Sports list
  const[game,setGame] = useState(false);

  const toggleRacingList = () => {
    setShowRacingList((prevState) => !prevState); // Toggle Racing Sports list
  };

  const toggleOthersList = () => {
    setShowOthersList((prevState) => !prevState); // Toggle Others list
  };

  const toggleAllSportsList = () => {
    setShowAllSportsList((prevState) => !prevState); // Toggle All Sports list
  };

  const toggleGame = () => {
    setGame((prevState) => !prevState)
  }
  console.log(game);
  

  return (
    <div className="leftSection_container">
      {/* Racing Sports Section */}
      <div className="racing_sports" onClick={toggleRacingList}>
        <p>Racing Sports</p>
        <i
          className={`ri-arrow-${
            showRacingList ? "up" : "down"
          }-s-line down_arrow`}
        ></i>
      </div>
      <div className={`show_list ${showRacingList ? "show_list_visible" : ""}`}>
        <ul className="list_items">
          <li className="shift">
             Horse Racing
          </li>
          <div className="line"></div>
          <li className="shift">
             Greyhound Racing
          </li>
        </ul>
      </div>

      {/* Others Section */}
      <div className="racing_sports" onClick={toggleOthersList}>
        <p>Others</p>
        <i
          className={`ri-arrow-${
            showOthersList ? "up" : "down"
          }-s-line down_arrow`}
        ></i>
      </div>
      <div className={`show_list ${showOthersList ? "show_list_visible" : ""}`}>
        <ul className="list_items">
          <li className="shift">Our Casino</li>
          <div className="line"></div>
          <li className="shift">Our Virtual</li>
          <div className="line"></div>
          <li className="shift">Live Casino</li>
          <div className="line"></div>
          <li className="shift">Slot Game</li>
          <div className="line"></div>
          <li className="shift">Fantasy Game</li>
        </ul>
      </div>

      {/* All Sports Section */}
      <div className="racing_sports" onClick={toggleAllSportsList}>
        <p>All Sports</p>
        <i
          className={`ri-arrow-${
            showAllSportsList ? "up" : "down"
          }-s-line down_arrow`}
        ></i>
      </div>
      <div
        className={`show_list ${showAllSportsList ? "show_list_visible" : ""}`}
      >
        <ul className="list_items">
          <li onClick={toggleGame} className="shift" >
            <i className="ri-add-box-line add_box"></i> Politics
          </li>
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Cricket
          </li>
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Football
          </li>
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Tennis
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSection;
