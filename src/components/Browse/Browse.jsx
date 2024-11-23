import s from "./Browse.module.scss";
import React from "react";
import Sectiontitle from "../SectionTitle/Sectiontitle";

const Browse = () => {
  return (
    <>
      <section className={s.browse}>
        <div className="container">
          <Sectiontitle>BROWSE BY dress STYLE</Sectiontitle>
          <div className={s.wrapper}>
            <div className={s.browse_g1}>
              <div className={s.casual}>
                <h2>Casual</h2>
              </div>
              <div className={s.formal}>
                <h2>Formal</h2>
              </div>
            </div>
            <div className={s.browse_g2}>
              <div className={s.party}>
                <h2>Party</h2>
              </div>
              <div className={s.gym}>
                <h2>Gym</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Browse;
