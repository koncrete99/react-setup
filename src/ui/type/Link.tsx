import { css, styled } from 'styled-components';
import { colorBase, colorPrimary, colorSecondary } from '../../assets/styles';

type LinkProps = {
	color?: 'primary' | 'secondary';
};

const colors = {
	primary: css`
		color: ${colorPrimary.default};
		&:hover,
		&:focus {
			background-color: ${colorPrimary.dark};
		}
	`,
	secondary: css`
		color: ${colorSecondary.default};
		&:hover,
		&:focus {
			background-color: ${colorSecondary.dark};
		}
	`,
};

const Link = styled.a<LinkProps>`
	color: ${colorBase.default};
	${(props) => props.color && colors[props.color]}
`;

export default Link;
