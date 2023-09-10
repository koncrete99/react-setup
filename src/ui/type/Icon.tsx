import { css, styled } from 'styled-components';
import {
	colorBase,
	colorPrimary,
	colorSecondary,
	typeSize,
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
		font-size: ${typeSize.xxs};
	`,
	xs: css`
		font-size: ${typeSize.xs};
	`,
	sm: css`
		font-size: ${typeSize.sm};
	`,
	md: css`
		font-size: ${typeSize.md};
	`,
	lg: css`
		font-size: ${typeSize.lg};
	`,
	xl: css`
		font-size: ${typeSize.xl};
	`,
	xxl: css`
		font-size: ${typeSize.xxl};
	`,
	xxxl: css`
		font-size: ${typeSize.xxxl};
	`,
	xxxxl: css`
		font-size: ${typeSize.xxxxl};
	`,
};

const Icon = styled.div<IconProps>`
	color: ${colorBase.default};
	font-size: ${typeSize.sm};
	display: inline-block;
	line-height: 0;
	margin: 0;
	padding: 0;
	${(props) => props.color && colors[props.color]}
	${(props) => props.size && sizes[props.size]}
`;

export default Icon;
