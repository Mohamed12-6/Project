import React, { useContext } from "react";
import per from "../assests_img/profile.png"
import icon1 from "../assests_img/download (7).png"
import icon2 from "../assests_img/download (6).png"
import icon3 from "../assests_img//download.png"
import icon4 from "../assests_img/img.png"

import icon5 from "../assests_img/gallery_icon-DX7cOO5y.png"
import icon6 from "../assests_img/download (8).png"
import icon7 from "../assests_img/download (9).png"

import icon8 from "../assests_img/download (10).png"

import { Context } from "../context/Content";

const Main = () => {

    const {
        onSent,
        recentPrompt,
        showResults,
        loading,
        resultData,
        setInput,
        input,
    } = useContext(Context);

    const handleCardClick = (promptText) => {
        setInput(promptText);
    };
    return (
        <div className="main-page">
            <div className="nav">
                <p>Gemini</p>
                <img src={per} alt="" width={50} height={50} />
            </div>
            <div className="main-container">
                {!showResults ? (
                    <>
                        <div className="text">
                            <p>
                                <span>Hello , Sohil </span>
                            </p>
                            <p>How Can i Help You Today?</p>
                        </div>
                        <div className="cards">
                            <div className="card" onClick={() => handleCardClick("Suggest Some Place To Visit In Kerala")}>
                                <p>Suggest Some Place To Visit In Kerala </p>
                                <img src={icon1} alt="" />
                            </div>

                            <div className="card" onClick={() =>
                                    handleCardClick(
                                        "Brainstorm team bonding activities for our work retreat"
                                    )
                                }
                            >
                                <p>Brainstorm team bonding activities for our work retreat </p>
                                <img src={icon2} alt="" />
                            </div>
                            <div className="card"  onClick={() =>
                                    handleCardClick("How to Create a Gyroscope using Disc?")
                                }
                            >
                                <p>How to Create a Gyroscope using Disc?</p>
                                <img src={icon3} alt="" />
                            </div>
                            <div className="card" onClick={() => {
                                    handleCardClick(
                                        "Create a Script for the youtube video about coding "
                                    );
                                }}
                            >
                                <p>Create a Script for the youtube video about coding </p>
                                <img src={icon4} alt="" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="result">
                        <div className="result-title">
                            <img src={per} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img className="result-data-img" src={icon8} alt="" />
                            {loading ? (
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}
                        </div>
                    </div>
                )}

                <div className="footer">
                    <div className="search">
                        <input onChange={(e) => {
                                setInput(e.target.value);
                            }} value={input} type="text" placeholder="Enter the Prompt Here"
                        />
                        <div className="footimg">
                            <img src={icon5} alt="" />
                            <img src={icon6} alt="" />
                            <img onClick={() => onSent()} src={icon7} alt="" />
                        </div>
                    </div>
                    <div className="bottom-info">
                        <p>
                            Gemini may display inaccurate info, including about people, so
                            double-check its responses. Your privacy & Gemini Apps
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;


