import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { setCurrency } from "../store/actions/banknoteAction";

export default function Home() {
  const history = useHistory();
  const dispatch = useDispatch();
  const currency = useSelector(
    (state) => state.banknoteReducer.current_currency
  );
  const { register, handleSubmit } = useForm({
    mode: "onBlur",
    defaultValues: { currency },
  });

  const onSubmit = (data) => {
    dispatch(setCurrency(data.currency));
    history.push("/pay");
  };
  return (
    <div className="container">
      <h1>Home</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select
          name="currency"
          id="currency"
          className="form-select"
          ref={register}
        >
          <option value="idr">Indonesia (Rupiah)</option>
          <option value="yen">Japan (Yen)</option>
          <option value="usd">United State of America (Dollar)</option>
          <option value="won">South Korea (Won)</option>
          <option value="ruble">Russia (Rubble)</option>
        </select>
        <button className="btn btn-secondary">Next</button>
      </form>
    </div>
  );
}
