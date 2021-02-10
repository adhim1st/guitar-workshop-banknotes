import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Result() {
  const history = useHistory();
  const change = useSelector((state) => state.banknoteReducer.result);

  function retry() {
    history.push("/");
  }

  return (
    <div className="container">
      <h1>Result</h1>
      {change && typeof change === "string" ? (
        <div>{change}</div>
      ) : (
        <div>
          {Object.keys(change)
            .reverse()
            .map((value, index) => {
              return (
                <div key={index}>
                  <p>{value}</p>
                  <p>{change[value]}</p>
                </div>
              );
            })}
        </div>
      )}
      <button className="btn btn-secondary" onClick={() => retry()}>
        Again
      </button>
    </div>
  );
}
