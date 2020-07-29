import React from "react";

import { Link } from "react-router-dom";

import styles from "./index.module.css";

export default () => {
  return (
    <div className={styles.component}>
      <nav>
        <button>Categories</button>
        <button>Sign In</button>{" "}
      </nav>
      <h2>This is the memetypes page</h2>
      <br />
      <div className={styles.typeContainer}>
        <Link className={styles.linkMemeTypes} to="/memetypes/funny">
          Memetype funny
          <img
            className={styles.memeTypesImg}
            src="https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk"
            alt="funny"
          ></img>
        </Link>
        <Link className={styles.linkMemeTypes} to="/memetypes/serious">
          Memetype serious
          <img
            className={styles.memeTypesImg}
            src="https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk"
            alt="serious"
          ></img>
        </Link>
        <Link className={styles.linkMemeTypes} to="/memetypes/angry">
          Memetype angry
          <img
            className={styles.memeTypesImg}
            src="https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk"
            alt="angry"
          ></img>
        </Link>
      </div>
    </div>
  );
};