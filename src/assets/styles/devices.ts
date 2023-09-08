const breakpoints = {
	mobile: '26em',
	tablet: '47em',
	laptop: '63em',
	desktop: '75em',
};

export const devices = {
	mobile: `(min-width: ${breakpoints.mobile})`,
	tablet: `(min-width: ${breakpoints.tablet})`,
	laptop: `(min-width: ${breakpoints.laptop})`,
	desktop: `(min-width: ${breakpoints.desktop})`,
};
