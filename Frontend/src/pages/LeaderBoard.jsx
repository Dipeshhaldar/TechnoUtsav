// LeaderBoard.jsx

import { Fragment } from "react";
import "./LeaderBoard.css";

const LeaderBoard = () => {
    return (
        <Fragment>
            <div className="home-containers">
                <div className="background-images">
                    <img src="/LeaderBoardPage/wallpaperflare 1.png" alt="Background" />
                    <div className="leaderBoard-container">
                        <h1 className="heading-leader">LEADERBOARD</h1>

                        {/* Container for rows leha yete ata */}
                        <div className="leaderboard-rows">
                            <div className="leaderboard-row">
                                <div className="row-number">1</div>
                                <div className="row-text">COMPUTER SCIENCE & ENGINEERING</div>
                                <div className="row-points">00</div>
                            </div>
                            <div className="leaderboard-row">
                                <div className="row-number">2</div>
                                <div className="row-text">EMERGING TECHNOLOGIES</div>
                                <div className="row-points">00</div>
                            </div>
                            <div className="leaderboard-row">
                                <div className="row-number">3</div>
                                <div className="row-text">ELECTRICAL ENGINEERING</div>
                                <div className="row-points">00</div>
                            </div>
                            <div className="leaderboard-row">
                                <div className="row-number">4</div>
                                <div className="row-text">ELECTRONICS AND TELECOMMUNICATION ENGINEERING</div>
                                <div className="row-points">00</div>
                            </div>
                            <div className="leaderboard-row">
                                <div className="row-number">5</div>
                                <div className="row-text">MECHANICAL ENGINEERING</div>
                                <div className="row-points">00</div>
                            </div>
                            <div className="leaderboard-row">
                                <div className="row-number">6</div>
                                <div className="row-text">MASTER OF BUSINESS ADMINISTRATION</div>
                                <div className="row-points">00</div>
                            </div>
                            <div className="leaderboard-row">
                                <div className="row-number">7</div>
                                <div className="row-text">FIRST YEAR ENGINEERING</div>
                                <div className="row-points">00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default LeaderBoard;
