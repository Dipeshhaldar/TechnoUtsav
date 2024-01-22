import { Fragment, useEffect } from "react";
import "./Volley.css";

const Cricket = () => {
  useEffect(() => {
    particlesJS("particles-jss", {
      particles: {
        number: {
          value: 600,
          density: {
            enable: true,
            value_area: 1000,
          },
        },
        color: {
          value: [
            "#1a1a1a",
            "#333333",
            "#4d4d4d",
            "#666666",
            "#808080",
            "#b30000",
            "#cc0000",
            "#e60000",
            "#ff0000",
            "#004d00",
            "#006600",
            "#008000",
            "#009900",
            "#00cc00",
            "#0066cc",
            "#0080ff",
            "#3399ff",
            "#cccc00",
            "#ffff00",
            "#ffcc00",
          ],
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 2,
          },
        },
        opacity: {
          value: 0.8,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#000000",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 10,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 800,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  }, []);

  return (
    <Fragment>
      <div id="particles-jss">
        <h1 className="heading-cricket">VOLLEY BALL TOURNAMENT</h1>
        <div className="team-list">
          <div className="all-team">
            <div className="team-box">Team 1</div>
            <p className="line"></p>
            <div className="team-box">Team 2</div>
            <p className="line2"></p>
            <p className="line-next"></p>
            <p className="line-next-next"></p>
            <p className="prev-next"></p>
            <div className="team-box">Team 3</div>
            <p className="line3"></p>
            <div className="team-box">Team 4</div>
            <p className="line4"></p>
            <p className="line-next2"></p>
            <p className="line-next-next2"></p>
            <p className="prev-next2"></p>
            <div className="team-box">Team 5</div>
            <p className="line5"></p>
            <div className="team-box">Team 6</div>
            <p className="line6"></p>
            <p className="line-next3"></p>
            <p className="prev-next3"></p>
            <div className="team-box">Team 7</div>
            <p className="line7"></p>
            <div className="team-box">Team 8</div>
            <p className="line8"></p>
            <p className="line-next4"></p>
            <p className="prev-next4"></p>
          </div>
          <div className="additional-container">
            <div className="team-box">Box 1</div>
            <p className="box-next"></p>
            <div className="team-box">Box 2</div>
            <p className="box-next2"></p>
            <div className="team-box">Box 3</div>
            <p className="box-next3"></p>
            <div className="team-box">Box 4</div>
            <p className="box-next4"></p>
          </div>
          <div className="semi-finals">
            <div className="team-box">Box 5</div>
            <div className="team-box">Box 6</div>
          </div>
          <div className="finals">
            <div className="team-box">Box 7</div>
          </div>
          {/* some new line very critical */}
          <p className="box-next-box1"></p>
          <p className="box-next-box2"></p>
          <p className="box-next-box3"></p>
          <p className="box-next-box4"></p>
          <p className="box-next-box5"></p>
          <p className="box-next-box6"></p>
        </div>
      </div>
    </Fragment>
  );
};

export default Cricket;