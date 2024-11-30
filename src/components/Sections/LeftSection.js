import React, { useState } from "react";
import "./LeftSection.css";

const LeftSection = () => {
  const [showRacingList, setShowRacingList] = useState(true); 
  const [showOthersList, setShowOthersList] = useState(true); 
  const [showAllSportsList, setShowAllSportsList] = useState(true); 
  const [game, setGame] = useState(false);
  const[assembly,setAssembly] = useState(false)

  const toggleRacingList = () => {
    setShowRacingList((prevState) => !prevState); 
  };

  const toggleOthersList = () => {
    setShowOthersList((prevState) => !prevState); 
  };

  const toggleAllSportsList = () => {
    setShowAllSportsList((prevState) => !prevState); 
  };

  const toggleGame = () => {
    setGame((prevState) => !prevState);
  };

  const assemblyBtn = () => {
    setAssembly((prevState) => !prevState)
  }

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
          <li className="shift">Horse Racing</li>
          <div className="line"></div>
          <li className="shift">Greyhound Racing</li>
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
          {/* Politics  */}
          <li onClick={toggleGame} className="shift">
            <i
              className={
                game
                  ? "ri-checkbox-indeterminate-line cancel_box"
                  : "ri-add-box-line add_box"
              }
            ></i>{" "}
            Politics
          </li>
          
          {game && (
            <div className="border_top">
              <li onClick={assemblyBtn} className="shift">
              <span className="set_txt">
              <i
              className={
                assembly
                  ? "ri-checkbox-indeterminate-line cancel_box"
                  : "ri-add-box-line add_box"
              }
            ></i>{" "} Assembly Election 2024</span>
              </li>
              { assembly && <div className="border_top">
                <li onClick={assemblyBtn} className="shift">
                <span style={{paddingLeft:'1.5rem'}} className="set_txt">
                Assembly Election
                2024 </span>
              </li>
              </div>
              
              }
            </div>
          )}

          {/* Cricket */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Cricket
          </li>

          {/* Football */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Football
          </li>

          {/* Tennis */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Tennis
          </li>

          {/* Table Tennis */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Table Tennis
          </li>

          {/* Badminton */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Badminton
          </li>

          {/* Esoccer */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Esoccer
          </li>

          {/* Basketball */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Basketball
          </li>

          {/* Volleyball */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Volleyball
          </li>

          {/* Snooker */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Snooker
          </li>

          {/* Ice Hockey */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Ice Hockey
          </li>

          {/* E Games */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> E Games
          </li>

          {/* Futsal */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Futsal
          </li>

          {/* Handball */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Handball
          </li>

          {/* Kabaddi */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Kabaddi
          </li>

          {/* Golf */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Golf
          </li>

          {/* Rugby League */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Rugby League
          </li>

          {/* Boxing */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Boxing
          </li>

          {/* Beach Volleyball */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Beach Volleyball
          </li>

          {/* Mixed Martial Arts */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Mixed Martial Arts
          </li>

          {/* MotoGP */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> MotoGP
          </li>

          {/* Chess */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Chess
          </li>

          {/* Cycling */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Cycling
          </li>

          {/* Motorbikes */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Motorbikes
          </li>

          {/* Athletics */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Athletics
          </li>

          {/* Basketball 3X3 */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Basketball 3X3
          </li>

          {/* Sumo */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Sumo
          </li>

          {/* Virtual sports */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Virtual sports
          </li>

          {/* Motor Sports */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Motor Sports
          </li>

          {/* Baseball */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Baseball
          </li>

          {/* Rugby Union */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Rugby Union
          </li>

          {/* Darts */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Darts
          </li>

          {/* American Football */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> American Football
          </li>

          {/* Soccer */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Soccer
          </li>

          {/* Esports */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Esports
          </li>

          {/* Boat Racing */}
          <div className="line"></div>
          <li className="shift">
            <i className="ri-add-box-line add_box"></i> Boat Racing
          </li>

        </ul>
      </div>
    </div>
  );
};

export default LeftSection;
