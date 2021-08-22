import React from "react";
import "./Dialog.css";
import { AiOutlineClose } from "react-icons/ai";
import PropTypes from "prop-types";

const Dialog = ({ data, onClick }) => {
  return (
    <div className="dialog-container">
      <div className="dialog-icon-wrapper">
        <AiOutlineClose className="dialog-close-icon" onClick={onClick} />
      </div>
      <p className="dialog-total-sales">Total Sales</p>
      <p className="dialog-description">
        Descriptions about the Total Sales which we are going to show in this
        bottom sheet
      </p>
      <div>
        {data.map((categoryType) => {
          return (
            <div className="dialog-categoryType">
              <div className="dialog-category">{categoryType.category}</div>
              <div className="dialog-category-price">{categoryType.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Dialog.propTypes = {
  data: PropTypes.array,
  onClick: PropTypes.func
};

export default Dialog;
