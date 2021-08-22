import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = (props) => {
  const {
    title,
    description,
    footer,
    customCardClass,
    customCardTitleClass,
    customCardContentClass,
    customCardFooterClass,
    height,
    onClick
  } = props;
  return (
    <div
      className={`card-container ${customCardClass}`}
      style={{ height: height }}
      onClick={(e) => onClick && onClick(e)}
    >
      <div className={`card-title ${customCardTitleClass}`}>{title}</div>
      <div className={`card-content ${customCardContentClass}`}>
        {description}
      </div>
      <div className={`card-footer ${customCardFooterClass}`}>{footer}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  footer: PropTypes.string,
  customCardClass: PropTypes.string,
  customCardTitleClass: PropTypes.string,
  customCardContentClass: PropTypes.string,
  customCardFooterClass: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func
};

export default Card;
