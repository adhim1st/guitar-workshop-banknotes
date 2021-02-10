import React from "react";
import { useSelector } from "react-redux";

export default function Result() {
  const change = useSelector((state) => state.banknoteReducer.result);
  console.log(typeof change);
  return (
    <div className="container">
      <h1>Result</h1>
      {typeof change === "string" ? (
        <div>{change}</div>
      ) : (
        <div>
          {Object.keys(change)
            .reverse()
            .map((value, index) => {
              return (
                <div>
                  <p>{value}</p>
                  <p> {change[value]}</p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
