import { css, styled } from 'styled-components';

type IconProps = {
	color?: 'primary' | 'secondary';
	size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl';
};

const colors = {
	primary: css`
		color: var(--primary);
	`,
	secondary: css`
		color: var(--secondary);
	`,
};

const sizes = {
	xxs: css`
		font-size: var(--font-xxs);
	`,
	xs: css`
		font-size: var(--font-xs);
	`,
	sm: css`
		font-size: var(--font-sm);
	`,
	md: css`
		font-size: var(--font-md);
	`,
	lg: css`
		font-size: var(--font-lg);
	`,
	xl: css`
		font-size: var(--font-xl);
	`,
	xxl: css`
		font-size: var(--font-xxl);
	`,
	xxxl: css`
		font-size: var(--font-xxxl);
	`,
	xxxxl: css`
		font-size: var(--font-xxxxl);
	`,
};

const Icon = styled.div<IconProps>`
	color: var(--font-color);
	font-size: var(--font-sm);
	display: inline-block;
	line-height: 0;
	margin: 0;
	padding: 0;
	${(props) => props.color && colors[props.color]}
	${(props) => props.size && sizes[props.size]}
`;

export default Icon;
