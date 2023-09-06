import { useState, useEffect, useCallback, useMemo, useRef } from "react";

import "./App.css";
import Counter from "./Counter";

interface User {
	id: number;
	username: string;
}

const myNum = 37;

type fibFunc = (n: number) => number;
const fib: fibFunc = (n) => {
	if (n < 2) return n;
	return fib(n - 1) + fib(n - 2);
};
function App() {
	const [count, setCount] = useState<number>(0);
	const [users, setUsers] = useState<User[] | null>(null);

	const inputRef = useRef<HTMLInputElement>(null);

	console.log(inputRef?.current);
	console.log(inputRef?.current?.value);
	const addTwo = useCallback((e: MouseEvent<HTMLButtonElement>) => {
		setCount((prev) => prev + 2);
	}, []);
	useEffect(() => {
		console.log("mounting");

		console.log("Users", users);

		return () => {
			console.log("  unmounting");
		};
	}, [users]);

	// the point here of using useMemo if you have an expensive calculation it takes time to calculate it the first time but
	// after that it memoized the result so it takes no time to get the result every rerender
	const result = useMemo<number>(() => fib(myNum), [myNum]);
	return (
		<div>
			<h2>count:{count}</h2>
			<button onClick={addTwo}>+</button>
			<h2>result:{result}</h2>
			<input type="text" ref={inputRef}></input>
			////
			<Counter></Counter>
		</div>
	);
}

export default App;
