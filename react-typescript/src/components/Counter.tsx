import { ReactNode } from "react";

type CounterProps = {
	children: ReactNode;
	// get the type from the intellisense
	setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Counter = ({ children, setCount }: CounterProps) => {
	return (
		<div>
			<h1>count is {children}</h1>
			<button
				onClick={() => {
					setCount((prev) => prev + 1);
				}}
			>
				+
			</button>
			<button
				onClick={() => {
					setCount((prev) => prev - 1);
				}}
			>
				-
			</button>
			<button
				onClick={() => {
					setCount(0);
				}}
			>
				Reset
			</button>
		</div>
	);
};

export default Counter;
