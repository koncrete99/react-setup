const breakpoint = {
	mobile: '26em',
	tablet: '47em',
	laptop: '63em',
	desktop: '75em',
};

export const device = {
	mobile: `(min-width: ${breakpoint.mobile})`,
	tablet: `(min-width: ${breakpoint.tablet})`,
	laptop: `(min-width: ${breakpoint.laptop})`,
	desktop: `(min-width: ${breakpoint.desktop})`,
};
