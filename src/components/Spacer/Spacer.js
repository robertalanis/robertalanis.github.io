import React from "react";

import { Container, Col } from "reactstrap";
import "./Spacer.css";

const Spacer = (props) => {
	return (
		<Container fluid className="spacer-wrapper">
			<Col xs="12" sm="8" md="9" lg="8" className="px-0">
				<p className="spacer-text">
					Recently completed a certificate in Full-Stack Development from the University of Texas at
					Austin with newly developed skills in HTML, CSS, JavaScript, Node.js, mySQL, Mongo,
					React.js, and responsive web design.
				</p>
			</Col>
		</Container>
	);
};

export default Spacer;
