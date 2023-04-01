import React from "react";
import styles from "./Banner.module.css";

function HomePage() {
  return (
    <>
      <div className="align-sef-center text-center">
        <h1 className={styles.h1}>Joel Hilton Movie Club - Home</h1>
      </div>
      <br />
      <div className="text-center">
        <img src="./Joel.jpg" alt="companyLogo" />
        <br />
        <br />
        <h2 className="text-bold">
          This is a website to show off Joel Hilton's awesome movie collection
        </h2>
      </div>
    </>
  );
}

export default HomePage;
