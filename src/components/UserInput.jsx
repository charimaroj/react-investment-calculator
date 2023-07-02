import React, { useState } from "react";
import styles from "./UserInput.module.css"

const initialUserInput = {
  "current-savings": null,
  "yearly-contribution": null,
  "expected-return": null,
  duration: null,
};
const UserInput = (props) => {
  const [useInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event) => {
    event.preventDefault();
    //   console.log(useInput);
    props.onCalculate(useInput);
  };
  const resetHanlder = () => {
    //console.log("reset done");
    setUserInput(initialUserInput);
  };

  const changeHandler = (input, value) => {
    //  console.log(input, value);
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };
  return (
    <>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={(e) => changeHandler("current-savings", e.target.value)}
              value={useInput["current-savings"]}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={(e) =>
                changeHandler("yearly-contribution", e.target.value)
              }
              value={useInput["yearly-contribution"]}
            />
          </p>
        </div>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={(e) => changeHandler("expected-return", e.target.value)}
              value={useInput["expected-return"]}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              onChange={(e) => changeHandler("duration", e.target.value)}
              value={useInput["duration"]}
            />
          </p>
        </div>
        <p className={styles.actions}>
          <button
            type="reset"
            className={styles.buttonAlt}
            onClick={resetHanlder}
          >
            Reset
          </button>
          <button type="submit" className={styles.button}>
            Calculate
          </button>
        </p>
      </form>
    </>
  );
};

export default UserInput;
