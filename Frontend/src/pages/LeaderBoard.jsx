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
                                <div className="row-text">Computer Science & Engineering</div>
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
