import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setCurrency } from "../store/actions/banknoteAction";

export default function Home() {
  const history = useHistory();
  const dispatch = useDispatch();
  const currency = useSelector(
    (state) => state.banknoteReducer.current_currency
  );
  const [selectcurrency, setSelectCurrency] = useState(currency);

  const onSubmit = (data) => {
    dispatch(setCurrency(data.currency));
    history.push("/pay");
  };

  function handleNext() {
    dispatch(setCurrency(selectcurrency));
    history.push("/pay");
  }

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="mt-5 w-75 shadow p-3 mb-5 bg-body">
        <form className="d-flex flex-column justify-content-evenly bor">
          <div className="my-2 d-flex justify-content-center">
            <h1>Choose Currency Payment</h1>
          </div>
          <div className="my-2 d-flex justify-content-center">
            <input
              type="radio"
              className="btn-check"
              name="idr"
              id="idr"
              checked={selectcurrency === "idr"}
              value="idr"
              onChange={(e) => {
                setSelectCurrency(e.target.value);
              }}
            />
            <label className="btn btn-outline-secondary w-50" htmlFor="idr">
              Indonesia (Rupiah)
            </label>
          </div>
          <div className="my-2 d-flex justify-content-center">
            <input
              type="radio"
              className="btn-check"
              name="yen"
              id="yen"
              checked={selectcurrency === "yen"}
              value="yen"
              onChange={(e) => {
                setSelectCurrency(e.target.value);
              }}
            />
            <label className="btn btn-outline-secondary w-50" htmlFor="yen">
              Japan (Yen)
            </label>
          </div>
          <div className="my-2 d-flex justify-content-center">
            <input
              type="radio"
              className="btn-check"
              name="usd"
              id="usd"
              checked={selectcurrency === "usd"}
              value="usd"
              onChange={(e) => {
                setSelectCurrency(e.target.value);
              }}
            />
            <label className="btn btn-outline-secondary w-50" htmlFor="usd">
              United State of America (Dollar)
            </label>
          </div>
          <div className="my-2 d-flex justify-content-center">
            <input
              type="radio"
              className="btn-check"
              name="won"
              id="won"
              checked={selectcurrency === "won"}
              value="won"
              onChange={(e) => {
                setSelectCurrency(e.target.value);
              }}
            />
            <label className="btn btn-outline-secondary w-50" htmlFor="won">
              South Korea (Won)
            </label>
          </div>
          <div className="my-2 d-flex justify-content-center">
            <input
              type="radio"
              className="btn-check"
              name="ruble"
              id="ruble"
              checked={selectcurrency === "ruble"}
              value="ruble"
              onChange={(e) => {
                setSelectCurrency(e.target.value);
              }}
            />
            <label className="btn btn-outline-secondary w-50" htmlFor="ruble">
              Russia (Rubble)
            </label>
          </div>
          <div className="d-flex flex-row justify-content-center align-content-center mt-2">
            <button
              className="btn btn-primary w-20"
              onClick={() => handleNext()}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
