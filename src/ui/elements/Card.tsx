import { PropsWithChildren, createContext } from 'react';
import styled from 'styled-components';

type CardProps = {
	color?: string;
};

const StyledCard = styled.div`
	background-color: green;
`;

const StyledHeader = styled.header`
	background-color: red;
`;

const StyledImage = styled.figure`
	background-color: red;
`;

const StyledBody = styled.div`
	background-color: red;
`;

const StyledFooter = styled.footer`
	background-color: red;
`;

const CardContext = createContext<CardProps | null>(null);

function Card({ color, children }: PropsWithChildren<CardProps>) {
	return (
		<CardContext.Provider value={{ color }}>
			<StyledCard>{children}</StyledCard>
		</CardContext.Provider>
	);
}

function Header({ children }: PropsWithChildren) {
	return <StyledHeader>{children}</StyledHeader>;
}
function Image({ children }: PropsWithChildren) {
	return <StyledImage>{children}</StyledImage>;
}
function Body({ children }: PropsWithChildren) {
	return <StyledBody>{children}</StyledBody>;
}
function Footer({ children }: PropsWithChildren) {
	return <StyledFooter>{children}</StyledFooter>;
}
Card.Header = Header;
Card.Image = Image;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
