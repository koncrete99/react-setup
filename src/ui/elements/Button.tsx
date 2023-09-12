import styled, { css } from 'styled-components';
import {
	colorBase,
	colorPrimary,
	colorSecondary,
	elShadow,
	size,
	font,
} from '../../assets/styles';

type ButtonProps = {
	color?: 'primary' | 'secondary';
	size?: 'xs' | 'sm' | 'lg';
};

const colors = {
	primary: css`
		background-color: ${colorPrimary.default};
		color: ${colorBase[200]};
		&:hover,
		&:focus {
			background-color: ${colorPrimary.dark};
		}
	`,
	secondary: css`
		background-color: ${colorSecondary.default};
		color: ${colorBase[200]};
		&:hover,
		&:focus {
			background-color: ${colorSecondary.dark};
		}
	`,
};

const sizes = {
	xs: css`
		font-size: ${font.xs};
		padding: ${size.xxs} ${size.xs};
	`,
	sm: css`
		font-size: ${font.sm};
		padding: ${size.xxs} ${size.xs};
	`,
	lg: css`
		font-size: ${font.lg};
		padding: ${size.sm} ${size.md};
	`,
};

const Button = styled.button<ButtonProps>`
	font-size: ${font.md};
	background-color: ${colorBase[50]};
	color: ${colorBase[900]};
	padding: ${size.xs} ${size.sm};
	border-radius: ${size.xxs};
	box-shadow: ${elShadow.sm};
	border: none;
	font-weight: 400;
	text-transform: uppercase;
	line-height: 1;
	transition: all 0.3s ease;
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
