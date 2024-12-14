import React from 'react';
import { HomeScreenContextType } from "../../shared/HomeScreenContext.ts"
import { TopNavigation } from "../../shared/components/topNavigation/topNavigation.tsx"
import { WelcomeScreen } from "./components/welcomeScreen.tsx"
import { WelcomeScreenWrapper } from "./styles.ts"

export const HomeScreen: React.FC<HomeScreenContextType> = ({}) => {
	return (
		<React.Fragment>
			<TopNavigation />
			<WelcomeScreenWrapper>
				<WelcomeScreen />
			</WelcomeScreenWrapper>
		</React.Fragment>
	)
}

export default HomeScreen
