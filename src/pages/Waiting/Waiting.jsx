import React, { useEffect } from "react";
import "./Waiting.css";
import Button from "../../components/Button/Button";
import { IoFolderOpenOutline } from "react-icons/io5";
import Ellipse from "../../assets/Ellipse7.png";
import check_24px from "../../assets/check_24px.png";
import { useHistory } from "react-router";

const Waiting = () => {
  const history = useHistory();
  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      history.push("/dashboard");
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="waiting-container">
      <div className="waiting-logout-btn">
        <Button label="Log out" color="#EB5757" customClass="waiting-logout" />
      </div>
      <div className="waiting-title">
        <div className="waiting-welldone">Well Done Naveen,</div>
        <div className="waiting-welcome">Welcome to Voosh</div>
      </div>
      <div className="waiting-fetch-data">
        Please be patient. Your account statistics are getting ready in an hour
      </div>
      <div className="folder-icon">
        <div className="wait-icons">
          <img src={Ellipse} alt="Ellipse" className="wait-elipse" />
          <img src={check_24px} alt="Ellipse" className="wait-done" />
        </div>
        <IoFolderOpenOutline />
      </div>
      <div className="voosh-partners">
        Meanwhile you can learn more about{" "}
        <span className="voosh-partner-link">Voosh Partner</span>
      </div>
    </div>
  );
};

export default Waiting;
