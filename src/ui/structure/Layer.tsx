import { styled } from 'styled-components';
import { size } from '../../assets/styles';

type LayerSizes =
	| 'xxxs'
	| 'xxs'
	| 'xs'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| 'xxl'
	| 'xxxl'
	| 'xxxxl'
	| '0';

type LayerProps = {
	$margin?: LayerSizes | LayerSizes[];
	$padding?: LayerSizes | LayerSizes[];
};

export const Layer = styled.div<LayerProps>`
	margin: ${(props) => {
		const marginArray = ([] as (keyof typeof size)[]).concat(
			props.$margin || []
		);
		return marginArray.map((marg) => size[marg]).join(' ');
	}};
	padding: ${(props) => {
		const paddingArray = ([] as (keyof typeof size)[]).concat(
			props.$padding || []
		);
		return paddingArray.map((pad) => size[pad]).join(' ');
	}};
`;
