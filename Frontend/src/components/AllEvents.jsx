import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AllEvents.css";

const AllEvents = () => {
  const navigate = useNavigate();

  const [varchasvaActive, setVarchasvaActive] = useState(false);
  const [centerActive, setCenterActive] = useState(false);
  const [departmentActive, setDepartmentActive] = useState(false);

  const handleVarchasvaClick = () => {
    setVarchasvaActive(!varchasvaActive);
    setCenterActive(false);
    setDepartmentActive(false);
  };

  const handleCenterActive = () => {
    setCenterActive(!centerActive);
    setVarchasvaActive(false);
    setDepartmentActive(false);
  };

  const handleDepartmentActive = () => {
    setDepartmentActive(!departmentActive);
    setVarchasvaActive(false);
    setCenterActive(false);
  };

  const imageRoutes = [
    "/event/thugOfWar",
    "/event/volleyBall",
    "/event/chess",
    "/event/kabAdi",
    "/event/cricket",
    "/event/football",
    "/event/futSal",
  ];

  const handleImageClick = (index) => {
    navigate(imageRoutes[index]);
  };

  useEffect(() => {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 130,
        },
        color: {
          value: [
            "#ff0000",
            "#00ff00",
            "#0000ff",
            "#33ff66",
            "#ffff00",
            "#00ffff",
            "#ff00ff",
          ],
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 10,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 5,
          random: true,
        },
        move: {
          enable: true,
          speed: 10,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
        },
      },
    });
  }, []);

  const imageUrls = [
    "/EventsPage/image1.jpg",
    "/EventsPage/image2.jpg",
    "/EventsPage/image3.jpg",
    "/EventsPage/image4.jpg",
    "/EventsPage/image5.jpg",
    "/EventsPage/image6.jpg",
    "/EventsPage/image7.jpg",
  ];

  const imageUrlsDepartment = [
    {
      heading: "CSE",
      images: [
        "/EventsPage/image1.jpg",
        "/EventsPage/image2.jpg",
        "/EventsPage/image3.jpg",
        "/EventsPage/image4.jpg",
        "/EventsPage/image5.jpg",
        "/EventsPage/image6.jpg",
      ],
    },
    {
      heading: "AIML",
      images: [
        "/EventsPage/image4.jpg",
        "/EventsPage/image5.jpg",
        "/EventsPage/image6.jpg",
      ],
    },
  ];

  const imageUrlsCenter = [
    "/EventsPage/image1.jpg",
    "/EventsPage/image2.jpg",
    "/EventsPage/image3.jpg",
    "/EventsPage/image4.jpg",
    "/EventsPage/image5.jpg",
  ];

  return (
    <Fragment>
      <div id="particles-js" className="outer-container-all_events">
        <div className="container-event">
          <div
            className="center-event"
            style={{
              backgroundColor: centerActive ? "#1D3C9B" : "",
              border: centerActive ? "1px solid #D9D9D9" : "",
              color: centerActive ? "#D9D9D9" : "",
            }}
            onClick={handleCenterActive}
          >
            CenterStage Event
          </div>
          <div
            className="department-event"
            style={{
              backgroundColor: departmentActive ? "#1D3C9B" : "",
              border: departmentActive ? "1px solid #D9D9D9" : "",
              color: departmentActive ? "#D9D9D9" : "",
            }}
            onClick={handleDepartmentActive}
          >
            Department Event
          </div>
          <div
            className="varchasva-event"
            style={{
              backgroundColor: varchasvaActive ? "#1D3C9B" : "",
              border: varchasvaActive ? "1px solid #D9D9D9" : "",
              color: varchasvaActive ? "#D9D9D9" : "",
            }}
            onClick={handleVarchasvaClick}
          >
            Varchasva (Sports)
          </div>
        </div>
        {varchasvaActive && (
          <div className="image-container">
            {imageUrls.map((url, index) => (
              <Link key={index} to={imageRoutes[index]}>
                <img
                  src={url}
                  alt={`Image ${index + 1}`}
                  onClick={() => handleImageClick(index)}
                />
              </Link>
            ))}
          </div>
        )}

        {/* for department */}

        {departmentActive && (
          <div className="image-container-another">
            {imageUrlsDepartment.map((department, index) => (
              <Fragment key={index}>
                <div className="department-heading">{department.heading}</div>
                {department.images.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt={`Image ${imageIndex + 1}`}
                  />
                ))}
              </Fragment>
            ))}
          </div>
        )}

        {/* for center */}

        {centerActive && (
          <div className="image-container">
            {imageUrlsCenter.map((url, index) => (
              <img key={index} src={url} alt={`Image ${index + 1}`} />
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default AllEvents;