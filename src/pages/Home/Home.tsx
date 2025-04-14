import React from "react";
import styles from "./Home.module.css";
import pecherskImg from "../../assets/pechersk_administration.jpg";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Irena Yastremska</h1>
      <img
        src={pecherskImg}
        alt="Pechersk Administration"
        className={styles.pecherskImg}
      />
    </div>
  );
};

export default Home;
