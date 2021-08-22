import React from "react";
import Card from "../Card/Card";
import { Doughnut } from "react-chartjs";
import PropTypes from "prop-types";

const ChannelData = (props) => {
  const { chartData, categorySelected } = props;
  console.log(chartData);
  return (
    <div>
      <div className="category-details">
        <div className="category-details">
          <div className="deliver-order">
            <Card
              height="13.4rem"
              title="Delivered Orders"
              description={categorySelected === "Swiggy" ? "463" : "573"}
              footer="Total Orders Successfully Delivered by Swiggy"
              customCardClass="category-order-cards"
              customCardContentClass="card-payout"
            />
          </div>
          <div className="cancel-order">
            <Card
              height="13.4rem"
              title="Cancelled Orders"
              description={categorySelected === "Swiggy" ? "1" : "3"}
              footer="Total Orders Cancelled by Merchant"
              customCardClass="category-order-cards"
              customCardContentClass="card-deduction"
            />
          </div>
          <div className="total-sales">
            <Card
              width="18.3rem"
              height="13.4rem"
              title="Total Sales"
              description={
                categorySelected === "Swiggy" ? "₹95,984.75" : "₹105,984.75"
              }
              footer="Inclusive of GST liability of Merchant"
              customCardClass="category-order-cards"
            />
          </div>
          <div className="net-payout">
            <Card
              width="18.3rem"
              height="13.4rem"
              title="Net Payout"
              description={
                categorySelected === "Swiggy" ? "₹66,960.50" : "₹76,960.50"
              }
              footer="Inclusive of TDS TCS Platform Charges &  Deductions (see breakdown)"
              customCardClass="category-order-cards"
              customCardContentClass="card-payout"
            />
          </div>
        </div>
      </div>
      {Object.entries(chartData).length > 0 && (
        <div>
          <h3 className="deduction-header">Deductions</h3>
          <Doughnut
            data={chartData}
            options={{
              legend: {
                display: false
              }
            }}
          />
          <div className="chart-labels">
            {chartData.labels.map((label, index) => {
              return (
                <div className="chart-label-detail">
                  <div className="chart-label-color">
                    <div
                      style={{
                        backgroundColor:
                          chartData.datasets[0].backgroundColor[index],
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%"
                      }}
                    ></div>
                  </div>
                  <div className="chart-label">{label}</div>
                  <div className="chart-label-number">
                    {chartData.datasets[0].data[index]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

ChannelData.propTypes = {
  chartData: PropTypes.object,
  categorySelected: PropTypes.string
};

export default ChannelData;
