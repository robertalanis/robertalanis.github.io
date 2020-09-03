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
		<Container
			fluid
			id="contact"
			className="contact-wrapper"
		>
			<Row>
				<Col sm="12" md="10" className="contact-links text-center p-5">
					<div className="link-box">
						<h1 className="contact-title fugaz-one pt-3">CONTACT ME</h1>
						<p>I look forward to hearing from you. Please reach out to me using the links below.</p>
						<div className="contact-buttons text-center pt-3 pb-4">
							<a
								class="font-weight-bold btn btn-lg btn-dark mx-2"
								href="https://github.com/robertalanis"
								target="blank"
							>
								GitHub
							</a>
							<a
								class="font-weight-bold btn btn-lg btn-dark mx-2"
								href="https://www.linkedin.com/in/robert-alanis/"
								target="blank"
							>
								LinkedIn
							</a>
						</div>
						<div className="contact-buttons text-center">
							<a
								class="font-weight-bold btn btn-lg btn-outline-dark mx-2"
								href="mailto:robertxavier@me.com"
								target="blank"
							>
								Send Me an Email
							</a>
						</div>
						<br />
						<h3 className="contact-location fugaz-one">
							<TiLocationOutline style={{ marginBottom: "5px" }} /> Located in Austin, TX
						</h3>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;
