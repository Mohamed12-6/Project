
import React, { useContext, useState } from "react";
import menu from "../assests_img/download (5).png"
import chat from "../assests_img/download (4).png"
import enter from "../assests_img/download.png"
import que from "../assests_img/download (3).png"
import act from "../assests_img/download (2).png"
import set from "../assests_img/download (1).png"
import { Context } from "../context/Content";

const Sidebar = () => {

    const [show, setshow] = useState(false);
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

    const loadPreviousPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    };
    return (
        <div className="sidebar">
            <div className="top">
                <img className="menu" src={menu} alt=""
                onClick={() => {
                    setshow((prev) => !prev);
                }}/>
                <div className="new-chat">
                    <img src={chat} alt="" onClick={() => {
                        newChat()
                    }} />
                    {show ? <p>New Chat</p> : null}
                </div>
                {show ? (
                    <div className="recent">
                        <p className="recent_chat">Recent</p>
                        {prevPrompts.map((item, index) => {
                            return (
                                <div onClick={() => {
                                    loadPreviousPrompt(item)
                                }} className="recent-enter">
                                    <img src={enter} alt="" />
                                    <p>{item.slice(0, 18)}...</p>
                                </div>
                            );
                        })}
                    </div>
                ) : null}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-enter">
                    <img src={que} alt="" />
                    {show ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-enter">
                    <img src={act} alt="" />
                    {show ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-enter">
                    <img src={set} alt="" />
                    {show ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
        
    );
};

export default Sidebar;





