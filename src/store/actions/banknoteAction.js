export const setCurrency = (payload) => {
  return {
    type: "currency/setCurrency",
    payload: payload,
  };
};
const setResult = (payload) => {
  return {
    type: "result/setResult",
    payload: payload,
  };
};

export const pay = (payload) => {
  return (dispatch, getState) => {
    const idr = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
    const yen = [10000, 5000, 2000, 1000, 500, 100, 50, 10, 5, 1];
    const usd = [100, 50, 20, 10, 5, 2, 1];
    const won = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1];
    const ruble = [5000, 1000, 500, 100, 50, 10, 5, 2, 1];
    let change = payload.payment - payload.price;
    let currency;
    switch (payload.currency) {
      case "yen":
        currency = yen;
        break;
      case "usd":
        currency = usd;
        break;
      case "won":
        currency = won;
        break;
      case "ruble":
        currency = ruble;
        break;
      default:
        currency = idr;
        break;
    }

    if (change < 0) {
      dispatch(setResult("Error"));
    } else if (change === 0) {
      dispatch(setResult("Thank You"));
    } else {
      let result = {};
      for (let i = 0; change > 0 && i < currency.length; i++) {
        let value = currency[i];
        if (value <= change) {
          result[value] = Math.floor(change / value);
          change -= value * result[value];
        } else {
          if (i == currency.length - 1) {
            result["remainder"] = change;
          }
        }
      }
      dispatch(setResult(result));
    }
  };
};
