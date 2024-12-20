import React from 'react';
import { HomeScreenContextType } from "../../shared/HomeScreenContext.ts"
import { WelcomeScreen } from "./components/welcomeScreen.tsx"
import { WelcomeScreenWrapper } from "./styles.ts"
import { Provider } from "react-redux"
import { store } from "./store/store.ts"

export const HomeScreen: React.FC<HomeScreenContextType> = ({}) => {
	return (
		<Provider store={store()}>
			<React.Fragment>
				<WelcomeScreenWrapper>
					<WelcomeScreen />
				</WelcomeScreenWrapper>
			</React.Fragment>
		</Provider>
	)
}

export default HomeScreen
