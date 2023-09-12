import { css, styled } from 'styled-components';
import { colorBase, colorPrimary, colorSecondary } from '../../assets/styles';

type LinkProps = {
	color?: 'primary' | 'secondary';
};

const colors = {
	primary: css`
		color: ${colorPrimary.default};
		text-decoration: none;
		&:hover,
		&:focus {
			color: ${colorPrimary.dark};
		}
	`,
	secondary: css`
		color: ${colorSecondary.default};
		text-decoration: none;
		&:hover,
		&:focus {
			color: ${colorSecondary.dark};
		}
	`,
};

const Link = styled.a<LinkProps>`
	color: ${colorBase.default};
	text-decoration: underline;
	&:hover {
		text-decoration: none;
	}
	${(props) => props.color && colors[props.color]}
`;

export default Link;
