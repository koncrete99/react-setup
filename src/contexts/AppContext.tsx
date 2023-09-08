import { createContext, useReducer } from 'react';

enum ActionType {
	CountIncrease = 'count/increase',
}

type State = {
	counter: number;
};

type Action = { type: ActionType };

interface AppProviderProps {
	children: React.ReactNode;
}

const initialState: State = {
	counter: 0,
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
		case ActionType.CountIncrease:
			return { ...state, counter: state.counter++ };
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
