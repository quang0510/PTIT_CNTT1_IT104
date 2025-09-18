
type CounterAction = 
  | { type: "INCREMENT" } 
  | { type: "DECREMENT" };

const initState: number = 0;

const counterReducer = (state: number = initState, action: CounterAction): number => {

  switch (action.type) {

    case "INCREMENT":

      return state + 1;
      
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
