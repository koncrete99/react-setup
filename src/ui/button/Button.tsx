import styled, { css } from 'styled-components';

type ButtonProps = {
	color?: 'primary' | 'secondary';
	size?: 'sm' | 'md' | 'lg';
};

const colors = {
	primary: css`
		background-color: var(--color-primary);
		color: var(--grey-0);
		&:hover {
			background-color: var(--color-primary-dark);
		}
	`,
	secondary: css`
		background: var(--color-secondary);
		color: var(--grey-0);
		&:hover {
			background-color: var(--color-secondary-dark);
		}
	`,
};

const sizes = {
	sm: css`
		font-size: var(--size-font-sm);
	`,
	md: css`
		font-size: var(--size-font-md);
	`,
	lg: css`
		font-size: var(--size-font-lg);
	`,
};

const Button = styled.button<ButtonProps>`
	font-size: var(--size-font-xs);
	background-color: var(--grey-0);
	color: var(--grey-900);
	padding: var(--sp-10) var(--sp-20);
	border-radius: var(--border-radius-xs);
	box-shadow: var(--shadow-sm);
	border: none;
	font-weight: 600;
	text-transform: uppercase;
	line-height: 1;
	transition: all 0.5s ease;
	&:hover {
		background-color: var(--grey-100);
		transform: translateY(0.1rem);
	}
	${(props) => props.color !== undefined && colors[props.color]}
	${(props) => props.size !== undefined && sizes[props.size]}
`;

export default Button;
