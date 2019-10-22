import React from "react";
import "./header.css";

export default function Header(props) {

    return <div className="header-container">
                <div className="header-overlay">
                    {/* nav will be here */}
                    <div className="header-content">
                        <div>
                            <h1>22% OFF</h1>
                            <h3>On all purchases made</h3>
                            <h3>Through out this week</h3>
                            <div className="header-btn-div">
                                <button>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}