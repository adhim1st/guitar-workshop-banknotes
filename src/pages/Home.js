import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { pay } from "../store/actions/banknoteAction";

export default function Home() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    mode: "onBlur",
    defaultValues: "idr",
  });

  const onSubmit = (data) => {
    dispatch(pay(data));
    history.push("/result");
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
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          name="price"
          type="number"
          className="form-control"
          ref={register}
        />
        <label htmlFor="payment" className="form-label">
          Payment
        </label>
        <input
          name="payment"
          type="number"
          className="form-control"
          ref={register}
        />
        <button className="btn btn-secondary">Submit</button>
      </form>
    </div>
  );
}
