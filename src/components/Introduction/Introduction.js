import React from "react";

import { Container } from "reactstrap";
import "./Introduction.css";

const Introduction = (props) => {
	return (
		<Container
			fluid
			className="intro-wrapper"
			style={{
				backgroundImage: `url(${process.env.PUBLIC_URL}/img/monstera5.jpg)`,
				backgroundSize: "cover",
				backgroundPositionX: "right",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "fixed",
			}}
		>
				<mark className="intro-mark">
				<h1 className="display-2 d-none d-md-block fugaz-one px-5">
					I'm a full-stack <br />
					web developer.{" "}
					<span role="img" aria-label="technologist">
						👨🏽‍💻
					</span>
				</h1>
				<h1 className="display-3 d-block d-md-none fugaz-one px-1">
					I'm a full-stack
					<br />
					web developer.{" "}
					<span role="img" aria-label="technologist">
						👨🏽‍💻
					</span>
					
				</h1>
				</mark>

		</Container>
	);
};

export default Introduction;
