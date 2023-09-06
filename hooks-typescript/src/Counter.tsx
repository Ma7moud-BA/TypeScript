import { useReducer } from "react";

const initialState = { count: 0 };
const enum REDUCER_ACTION_TYPE {
	INCREMENT,
	DECREMENT,
	RESET,
}

const reducer = (
	state: typeof initialState,
	action: REDUCER_ACTION_TYPE
): typeof initialState => {
	switch (action) {
		case REDUCER_ACTION_TYPE.INCREMENT:
			return { ...state, count: state.count + 1 };
		case REDUCER_ACTION_TYPE.DECREMENT:
			return { ...state, count: state.count - 1 };
		case REDUCER_ACTION_TYPE.RESET:
			return { ...state, count: 0 };
		default:
			throw new Error();
	}
};
const Counter = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const increment = () => {
		dispatch(REDUCER_ACTION_TYPE.INCREMENT);
	};
	const decrement = () => {
		dispatch(REDUCER_ACTION_TYPE.DECREMENT);
	};
	const reset = () => {
		dispatch(REDUCER_ACTION_TYPE.RESET);
	};
	return (
		<>
			<h1>{state.count}</h1>
			<div>
				<button onClick={increment}>+</button>
				<button onClick={reset}>0</button>
				<button onClick={decrement}>-</button>
			</div>
		</>
	);
};

export default Counter;
