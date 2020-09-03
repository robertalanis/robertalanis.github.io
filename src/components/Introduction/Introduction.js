import React from "react";

import { Container } from "reactstrap";
import "./Introduction.css";

const Introduction = (props) => {
	return (
		<Container fluid className="intro-wrapper">
			<mark className="intro-mark">
				<h1 className="intro-text fugaz-one px-3 pt-3 pb-2">
					I'm a full-stack <br />
					web developer.
					<span role="img" aria-label="technologist">
						👨🏽‍💻
					</span>
				</h1>
			</mark>
		</Container>
	);
};

export default Introduction;
