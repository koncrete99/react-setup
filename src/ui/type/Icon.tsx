import { css, styled } from 'styled-components';
import {
	colorBase,
	colorPrimary,
	colorSecondary,
	font,
} from '../../assets/styles';

type IconProps = {
	color?: 'primary' | 'secondary';
	size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl';
};

const colors = {
	primary: css`
		color: ${colorPrimary.default};
	`,
	secondary: css`
		color: ${colorSecondary.default};
	`,
};

const sizes = {
	xxs: css`
		font-size: ${font.xxs};
	`,
	xs: css`
		font-size: ${font.xs};
	`,
	sm: css`
		font-size: ${font.sm};
	`,
	md: css`
		font-size: ${font.md};
	`,
	lg: css`
		font-size: ${font.lg};
	`,
	xl: css`
		font-size: ${font.xl};
	`,
	xxl: css`
		font-size: ${font.xxl};
	`,
	xxxl: css`
		font-size: ${font.xxxl};
	`,
	xxxxl: css`
		font-size: ${font.xxxxl};
	`,
};

const Icon = styled.div<IconProps>`
	color: ${colorBase.default};
	font-size: ${font.sm};
	display: inline-block;
	line-height: 0;
	margin: 0;
	padding: 0;
	${(props) => props.color && colors[props.color]}
	${(props) => props.size && sizes[props.size]}
`;

export default Icon;
