import { ReactNode, ReactElement } from "react";

type SectionProps = {
	children: ReactNode;
	title?: string;
};
const Section = ({
	title = "My Subheading",
	children,
}: SectionProps): ReactElement => {
	return (
		<section>
			<h2>{title}</h2>
			<p>{children}</p>
		</section>
	);
};

export default Section;
