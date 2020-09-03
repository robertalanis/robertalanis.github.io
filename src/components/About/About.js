import React from "react";
import {
	Container,
	Row,
	Col,
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
} from "reactstrap";

import "./About.css";

const About = (props) => {
	return (
		<Container fluid className="about-wrapper">
			<Row
				className="p-3"
				id="about"
				/*style={{
					backgroundImage: `url(${process.env.PUBLIC_URL}/img/cactus.jpg)`,
					backgroundSize: "cover",
					backgroundPositionX: "right",
					backgroundRepeat: "no-repeat",
					//backgroundAttachment: "fixed",
				}}*/
			>
				<Col className="large-profile-photo p-0 d-none d-md-block">
					<img
						src={process.env.PUBLIC_URL + "/profile.jpg"}
						class="img-fluid profile-photo"
						alt="Robert"
					></img>
				</Col>
				<Col md="6">
					<h1 className="display-4 fugaz-one text-center pt-4 about-title">ABOUT</h1>
					<Col className="small-profile-photo d-md-none d-lg-none pb-4">
						<img
							src={process.env.PUBLIC_URL + "/profile.jpg"}
							class="img-fluid profile-photo"
							alt="Robert"
						></img>
					</Col>
					<p>
						Full-Stack Web Developer leveraging a background in education to build a more intuitive
						user experience on the web.
					</p>
					<p>
						Recently completed a certificate in Full-Stack Development from the University of Texas
						at Austin with newly developed skills in HTML, CSS, JavaScript, Node.js, mySQL, Mongo,
						React.js, and responsive web design.
					</p>
					<div className="about-buttons text-center pt-3">
						<a
							class="font-weight-bold btn btn-lg btn-dark mx-2"
							href="https://github.com/robertalanis"
							target="blank"
						>
							GitHub
						</a>
						<a
							class="font-weight-bold btn btn-lg btn-outline-dark mx-2"
							href="https://www.linkedin.com/in/robert-alanis/"
							target="blank"
						>
							LinkedIn
						</a>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default About;
