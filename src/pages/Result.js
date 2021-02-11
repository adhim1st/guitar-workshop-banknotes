import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AiOutlineDollarCircle, AiOutlineCarryOut } from "react-icons/ai";

export default function Result() {
  const history = useHistory();
  const change = useSelector((state) => state.banknoteReducer.result);
  const currency = useSelector(
    (state) => state.banknoteReducer.current_currency
  );
  let prefix = "";
  switch (currency) {
    case "yen":
      prefix = "¥ ";
      break;
    case "usd":
      prefix = "$ ";
      break;
    case "won":
      prefix = "₩ ";
      break;
    case "ruble":
      prefix = "₽ ";
      break;
    default:
      prefix = "Rp ";
      break;
  }

  function retry() {
    history.push("/");
  }

  return (
    <div className="container d-flex justify-content-center">
      <div className="mt-5 w-75 shadow p-3 mb-5 bg-body">
        <div className="d-flex justify-content-center align-items-center">
          <h1>Payment Change </h1>
        </div>
        {change && typeof change === "string" ? (
          <div className="d-flex justify-content-center align-items-center my-2">
            <h3>{change}</h3>
          </div>
        ) : (
          <div className="row">
            {Object.keys(change)
              .reverse()
              .map((value, index) => {
                return (
                  <div key={index} className="card col-md-5 m-3">
                    <div className="card-body d-flex flex-column justify-content-center align-items-start">
                      <div className=" d-flex flex-row align-items-center ">
                        <AiOutlineDollarCircle size="30" />
                        <h4 className="card-text mx-2">
                          {prefix}
                          {new Intl.NumberFormat("de-DE").format(value)}
                        </h4>
                      </div>
                      <div className=" d-flex flex-row align-items-center my-1">
                        <AiOutlineCarryOut size="30" />
                        <h4 className="card-text align-items-center mx-2">
                          x {change[value]}
                        </h4>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary" onClick={() => retry()}>
            Again
          </button>
        </div>
      </div>
    </div>
  );
}
