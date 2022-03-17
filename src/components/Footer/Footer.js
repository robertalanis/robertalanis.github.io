import React from "react";
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href="mailto:robertxavier@me.com">robertxavier@me.com</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Innovationg on project at a time </Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href="https://github.com/robertalanis" target="_blank">
						<AiFillGithub size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://linkedin.com/in/robert-alanis/" target="_blank">
						<AiFillLinkedin size="3rem" />
					</SocialIcons>
					{/* <SocialIcons href="https://twitter.com/robertxavier" target="_blank">
						<AiFillTwitterCircle size="3rem" />
					</SocialIcons> */}
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
