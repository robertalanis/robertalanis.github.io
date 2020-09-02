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
			style={{
				backgroundImage: `url(${process.env.PUBLIC_URL}/img/monstera.jpg)`,
				backgroundSize: "cover",
				backgroundPositionX: "center",
				backgroundPositionY: "bottom",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "fixed",
			}}
		>
			<Row>
				<Col md="8" className="contact-links text-center p-5">
					<div className="link-box">
						<h1 className="display-4 fugaz-one pb-4">CONTACT ME</h1>
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
						<br />
						<h3 className="fugaz-one">
							<TiLocationOutline style={{ marginBottom: "5px" }} /> Located in Austin, TX
						</h3>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;
