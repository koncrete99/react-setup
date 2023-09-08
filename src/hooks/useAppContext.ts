import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

function useAppContext() {
	const context = useContext(AppContext);
	if (context === undefined)
		throw new Error('AppContext was used outside of AppContext.Provider');
	return context;
}

export { useAppContext };
