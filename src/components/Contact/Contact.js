import React from "react";
import { Container, Row, Col } from "reactstrap";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { TiLocationOutline } from "react-icons/ti";

import "./Contact.css";

const Contact = (props) => {
	return (
		<Container fluid id="contact" className="contact-wrapper">
			<Row>
				<Col md="6" className="contact-links text-center p-5">
					<h1 className="display-4 fugaz-one pb-4">Contact</h1>
					<a href="https://github.com/robertalanis" target="blank">
						<h5>
							<AiOutlineGithub style={{ marginBottom: "10px" }} /> GitHub{" "}
							<sup>
								<FiExternalLink />
							</sup>
						</h5>
					</a>
					<a href="https://www.linkedin.com/in/robert-alanis/" target="blank">
						<h5>
							<AiOutlineLinkedin style={{ marginBottom: "5px" }} /> LinkedIn{" "}
							<sup>
								<FiExternalLink />
							</sup>
						</h5>
					</a>
					<a href="mailto:robertxavier@me.com">
						<h5>
							<AiOutlineMail /> robertxavier@me.com
						</h5>
					</a>
				</Col>
				<Col className="contact-div p-5">
					<h3 className="fugaz-one">
						<TiLocationOutline style={{ marginBottom: "5px" }} /> Located in Austin, TX
					</h3>
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;
