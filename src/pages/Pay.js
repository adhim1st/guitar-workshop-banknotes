import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { pay } from "../store/actions/banknoteAction";

export default function Pay() {
  const history = useHistory();
  const dispatch = useDispatch();
  const currency = useSelector(
    (state) => state.banknoteReducer.current_currency
  );
  const { register, handleSubmit } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    dispatch(pay({ currency, price: data.price, payment: data.payment }));
    history.push("/result");
  };
  return (
    <div>
      <h1>Pay</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
