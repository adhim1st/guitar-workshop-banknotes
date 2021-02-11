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
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    dispatch(pay({ currency, price: data.price, payment: data.payment }));
    history.push("/result");
  };
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="mt-5 w-50 shadow p-3 mb-5 bg-body">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex flex-column justify-content-evenly align-items-center"
        >
          <div className="d-flex justify-content-center align-items-center">
            <h1>Calculate Change</h1>
          </div>
          <div className="w-50 my-2">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              name="price"
              type="number"
              className="form-control"
              ref={register({
                required: "Price Required",
                min: { value: 1, message: "Minimum value is 1 " },
              })}
            />
            {errors.price && (
              <p className="my-2" style={{ color: "red" }}>
                {errors.price.message}
              </p>
            )}
          </div>
          <div className="w-50 my-2">
            <label htmlFor="payment" className="form-label">
              Payment
            </label>
            <input
              name="payment"
              type="number"
              className="form-control"
              ref={register({
                required: "Payment Required",
                min: { value: 1, message: "Minimum value is 1 " },
              })}
            />
            {errors.payment && (
              <p style={{ color: "red" }}>{errors.payment.message}</p>
            )}
          </div>
          <div className="my-2">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
