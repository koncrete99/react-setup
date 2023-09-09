import { createContext, useReducer } from 'react';

type State = {
	counter: number;
	dispatch: React.Dispatch<Action>;
};

type Action =
	| { type: 'counter/increase' }
	| { type: 'counter/decrease' }
	| { type: 'counter/set'; payload: number };

type AppProviderProps = {
	children: React.ReactNode;
};

const initialState: State = {
	counter: 0,
	dispatch: () => undefined,
};

const AppContext = createContext<{
	state: State;
	dispatch: React.Dispatch<Action>;
}>({
	state: initialState,
	dispatch: () => undefined,
});

function reducer(state: State, action: Action): State {
	switch (action.type) {
		case 'counter/increase':
			return { ...state, counter: state.counter + 1 };
		case 'counter/decrease':
			return { ...state, counter: state.counter - 1 };
		case 'counter/set':
			return { ...state, counter: action.payload };
		default:
			throw new Error('Action type unknown');
	}
}

function AppProvider({ children }: AppProviderProps) {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
}

export { AppContext, AppProvider };
