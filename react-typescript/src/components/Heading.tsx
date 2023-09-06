import { ReactElement } from "react";

type HeadingProps = { title: string };
const Heading = ({ title }: HeadingProps): ReactElement => {
	return <div>{title}</div>;
};

export default Heading;
