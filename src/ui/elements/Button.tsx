import styled, { css } from 'styled-components';
import {
	colorBase,
	colorPrimary,
	colorSecondary,
	elShadow,
	size,
	typeSize,
} from '../../assets/styles';

type ButtonProps = {
	color?: 'primary' | 'secondary';
	size?: 'xs' | 'sm' | 'lg';
};

const colors = {
	primary: css`
		background-color: ${colorPrimary.base};
		color: ${colorBase[200]};
		&:hover,
		&:focus {
			background-color: ${colorPrimary.dark};
		}
	`,
	secondary: css`
		background-color: ${colorSecondary.base};
		color: ${colorBase[200]};
		&:hover,
		&:focus {
			background-color: ${colorSecondary.dark};
		}
	`,
};

const sizes = {
	xs: css`
		font-size: ${typeSize.xs};
		padding: ${size.xxs} ${size.xs};
	`,
	sm: css`
		font-size: ${typeSize.sm};
		padding: ${size.xxs} ${size.xs};
	`,
	lg: css`
		font-size: ${typeSize.lg};
		padding: ${size.sm} ${size.md};
	`,
};

const Button = styled.button<ButtonProps>`
	font-size: ${typeSize.md};
	background-color: ${colorBase[50]};
	color: ${colorBase[900]};
	padding: ${size.xs} ${size.sm};
	border-radius: ${size.xxs};
	box-shadow: ${elShadow.sm};
	border: none;
	font-weight: 400;
	text-transform: uppercase;
	line-height: 1;
	transition: all 300ms ease;
	&:hover {
		background-color: ${colorBase[0]};
	}
	&:focus {
		background-color: ${colorBase[100]};
	}
	${(props) => props.color && colors[props.color]}
	${(props) => props.size && sizes[props.size]}
`;

export default Button;
