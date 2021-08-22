import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import "./Dashboard.css";
import { swiggyData, zomatoData } from "../../data/chartData";
import ChannelData from "../../components/ChannelData/ChannelData";
import Dialog from "../../components/Dialog/Dialog";
import { dialogData } from "../../data/chartData";

const Dashboard = () => {
  const [categorySelected, setCategorySelected] = useState("Swiggy");
  const [isOpenSalesDialog, setIsOpenSalesDialog] = useState(false);

  return (
    <div className="dashboard-container">
      <div className="voosh-header">
        <div className="voosh-vgn-header">
          <span className="voosh-heading">Voosh VGN</span>
          <Button label="This Month" color="#4F4F4F" />
          <Button label="Log out" color="#EB5757" />
        </div>
        <div className="voosh-cards">
          <div className="voosh-vgn-header-cards">
            <Card
              customCardClass="card-w"
              height="13.4rem"
              title="Total Sales"
              description="1,03,847.68"
              footer="Total Sales inclusive of taxes"
              onClick={() => setIsOpenSalesDialog(true)}
            />
            <div className="deduction-card">
              <Card
                customCardClass="card-w"
                height="13.4rem"
                title="Deductions"
                description="31, 183.37"
                footer="Inclusive of commisions"
                customCardContentClass="card-deduction"
              />
            </div>
          </div>
          <div className="payout-card">
            <Card
              height="10.3rem"
              title="Total Payout"
              description="1,03,847.68"
              footer="Calculated for total sales after deductions"
              customCardContentClass="card-payout"
            />
          </div>
        </div>
      </div>
      <div className="dashboard-content-container">
        <div className="channel-breakdown-header"></div>
        <div className="channel-category">
          <div
            className={`channel-category-text ${
              categorySelected === "Swiggy" ? "selected-category" : null
            }`}
            onClick={() => setCategorySelected("Swiggy")}
          >
            Swiggy
          </div>
          <div
            className={`channel-category-text zomato-text ${
              categorySelected === "Zomato" ? "selected-category" : ""
            }`}
            onClick={() => setCategorySelected("Zomato")}
          >
            Zomato
          </div>
        </div>
        <ChannelData
          chartData={
            categorySelected === "Swiggy"
              ? { ...swiggyData }
              : { ...zomatoData }
          }
          categorySelected={categorySelected}
        />
      </div>
      {isOpenSalesDialog && (
        <Dialog data={dialogData} onClick={() => setIsOpenSalesDialog(false)} />
      )}
    </div>
  );
};

export default Dashboard;
