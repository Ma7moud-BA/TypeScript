import Counter from "./components/Counter";
import Heading from "./components/Heading";
import List from "./components/List";
import Section from "./components/Section";
import { useState } from "react";
function App() {
	const [count, setCount] = useState<number>(1);

	return (
		<>
			<Heading title="hi" />
			<Section>
				<h1>section child</h1>
			</Section>
			<Counter setCount={setCount}>{count}</Counter>
			<List
				items={["gg", "ez"]}
				render={(item: string) => <span>{item}</span>}
			></List>
		</>
	);
}

export default App;
