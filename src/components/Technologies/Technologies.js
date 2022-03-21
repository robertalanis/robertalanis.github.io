import React from "react";
import { DiFirebase, DiReact, DiCode } from "react-icons/di";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from "./TechnologiesStyles";

const Technologies = () => (
	<Section id="tech">
		<SectionDivider />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>I am a full-stack web developer.</SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML5, CSS3, Boostrap, jQuery, Responisve Design, Styled Components, React.js
          </ListParagraph>
        </ListContainer>
      </ListItem> 
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, MongoDB, MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem> 
      <ListItem>
        <DiCode size="3rem" />
        <ListContainer>
          <ListTitle>Middleware</ListTitle>
          <ListParagraph>
            Experience with <br />
            Heroku, User Authentication, Security and Session Storage
          </ListParagraph>
        </ListContainer>
      </ListItem> 
    </List>
	</Section>
);

export default Technologies;
