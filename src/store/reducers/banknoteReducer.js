const initialState = {
  current_currency: "idr",
  result: "",
};

export default function banknoteReducer(state = initialState, action) {
  switch (action.type) {
    case "currency/setCurrency":
      return { ...state, current_currency: action.payload };
    case "result/setResult":
      return { ...state, result: action.payload };
    default:
      return state;
  }
}
