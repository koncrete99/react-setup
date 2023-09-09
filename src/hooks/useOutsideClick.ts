import { useEffect, useRef, useCallback } from 'react';

export function useOutsideClick(handler: () => void, listenCapturing = true) {
	const ref = useRef<HTMLElement | null>(null);

	const handleClick = useCallback(
		(e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				handler();
			}
		},
		[handler]
	);

	useEffect(() => {
		document.addEventListener('click', handleClick, listenCapturing);

		return () => {
			document.removeEventListener('click', handleClick, listenCapturing);
		};
	}, [handleClick, listenCapturing]);

	return ref;
}
