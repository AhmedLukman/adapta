import React, { useState } from "react";
import classes from "./Dashboard.module.css";
import Form from "./Form";
import Map from "./Map";
import CompositeCard from "./CompositeCard";
import ReportCard from "./ReportCard";
import ReportModal from "./ReportModal";
import { useSelector } from "react-redux";
import { FormSliceI } from "../../data/interfaces";
import FormPrime from "./FormPrime";
import StatsCard from "./StatsCard/StatsCard";
import StatsCardPrime from "./StatsCard/StatsCardPrime";

const Home: React.FC = () => {
  const hasComputed = useSelector(
    (state: FormSliceI) => state.form.hasComputed
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <ReportModal onClose={closeModalHandler} />}
      <main className={classes.main}>
        <div className={classes.container}>
          <section className={classes.topSection}>
            <div>
              <div className={classes.formContainer}>
                {hasComputed ? <FormPrime /> : <Form />}
              </div>
              <div className={classes.mapContainer}>
                <Map />
              </div>
              <div className={classes.compositeContainer}>
                <CompositeCard />
              </div>
              <div className={classes.reportContainer}>
                <ReportCard onOpen={openModalHandler} />
              </div>
            </div>
          </section>
          <section className={classes.statsSection}>
            <div>
              <div className={classes.statsContainer}>
                {hasComputed ? (
                  <StatsCardPrime scoreText="Climate Score" />
                ) : (
                  <StatsCard score="50" value={.5} riskText="High Risk" scoreText="Climate Score" />
                )}
              </div>
              <div className={classes.statsContainer}>
                {hasComputed ? (
                  <StatsCardPrime scoreText="Water Score" />
                ) : (
                  <StatsCard score="50" value={0} riskText="Medium Risk" scoreText="Water Score" />
                )}
              </div>
              <div className={classes.statsContainer}>
                {hasComputed ? (
                  <StatsCardPrime scoreText="Soil Suitability Score" />
                ) : (
                  <StatsCard
                  score="100" value={1}
                    riskText="Low Risk"
                    scoreText="Soil Suitability Score"
                  />
                )}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
