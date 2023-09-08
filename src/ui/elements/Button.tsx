import styled, { css } from 'styled-components';

type ButtonProps = {
	color?: 'primary' | 'secondary';
	size?: 'xs' | 'sm' | 'lg';
};

const colors = {
	primary: css`
		background-color: var(--primary);
		color: var(--black-50);
		&:hover {
			background-color: var(--primary-light);
		}
		&:focus {
			background-color: var(--primary-dark);
		}
	`,
	secondary: css`
		background-color: var(--secondary);
		color: var(--black-50);
		&:hover {
			background-color: var(--secondary-light);
		}
		&:focus {
			background-color: var(--secondary-dark);
		}
	`,
};

const sizes = {
	xs: css`
		font-size: var(--font-xs);
		padding: var(--xxs) var(--xs);
	`,
	sm: css`
		font-size: var(--font-sm);
		padding: var(--xxs) var(--xs);
	`,
	lg: css`
		font-size: var(--font-lg);
		padding: var(--sm) var(--md);
	`,
};

const Button = styled.button<ButtonProps>`
	font-size: var(--size-font-md);
	background-color: var(--black-50);
	color: var(--black-900);
	padding: var(--xs) var(--sm);
	border-radius: var(--xxs);
	box-shadow: var(--shadow-sm);
	border: none;
	font-weight: 400;
	text-transform: uppercase;
	line-height: 1;
	transition: all 300ms ease;
	&:hover {
		background-color: var(--black-0);
	}
	&:focus {
		background-color: var(--black-100);
	}
	${(props) => props.color !== undefined && colors[props.color]}
	${(props) => props.size !== undefined && sizes[props.size]}
`;

export default Button;
