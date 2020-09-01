import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
} from "reactstrap";
import { FiExternalLink } from "react-icons/fi";
import "./NavigationBar.css";

const NavigationBar = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar fixed="top" color="light" light expand="sm">
				<NavbarBrand href="/react-portfolio">
					Robert X. Alanis
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href="#about">About</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#projects">Projects</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#contact">Contact</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								More
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>
									<NavLink href="https://github.com/robertalanis" target="blank">
										GitHub <FiExternalLink style={{ paddingBottom: "4px" }} />
									</NavLink>
								</DropdownItem>
								<DropdownItem divider />
								<DropdownItem>
									<NavLink href="https://www.linkedin.com/in/robert-alanis/" target="blank">
										LinkedIn <FiExternalLink style={{ paddingBottom: "4px" }} />
									</NavLink>
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
					<NavbarText>Portfolio</NavbarText>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default NavigationBar;
