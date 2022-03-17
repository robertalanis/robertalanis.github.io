import React from "react";

import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				{/* I am a Full-Stack Web Developer */}
				Hello, I'm Robert
			</SectionTitle>
			<SectionText>
				I am a Full-Stack Web Developer based in Austin, Texas
			</SectionText>
			<Button onClick={() => (window.location = "#about")}>Learn More</Button>
		</LeftSection>
	</Section>
);

export default Hero;
