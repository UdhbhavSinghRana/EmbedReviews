import React from 'react';
import { HomeScreenContextType } from "../../shared/HomeScreenContext.ts"
import { TopNavigation } from "../../shared/components/topNavigation/topNavigation.tsx"

const HomeScreen: React.FC<HomeScreenContextType> = ({}) => {
	return (
		<React.Fragment>
			<TopNavigation />
		</React.Fragment>
	)
}

export default HomeScreen
