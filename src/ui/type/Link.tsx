import { css, styled } from 'styled-components';

type LinkProps = {
	color?: 'primary' | 'secondary';
};

const colors = {
	primary: css`
		color: var(--primary);
		&:hover,
		&:focus {
			background-color: var(--primary-dark);
		}
	`,
	secondary: css`
		color: var(--secondary);
		&:hover,
		&:focus {
			background-color: var(--secondary-dark);
		}
	`,
};

const Link = styled.a<LinkProps>`
	color: var(--font-color);
	${(props) => props.color && colors[props.color]}
`;

export default Link;
