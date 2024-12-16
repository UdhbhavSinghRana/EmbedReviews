import { TopNavigation } from "../../../shared/components/topNavigation/topNavigation.tsx"
import { AuthCard } from "../components/authCard.tsx"
import { AuthTypes } from "../types/authTypes.ts"
import React, { useMemo } from "react"
import { Provider } from "react-redux"
import { store } from "../store/store.ts"

export const SignIn = () => {
	const storeInstance = useMemo(() => store(), [])
	return (
		<Provider store={storeInstance}>
			<React.Fragment>
					<TopNavigation />
					<div className='flex justify-center items-center h-full w-full'>
						<AuthCard authScreen={AuthTypes.SIGNIN} />
					</div>
			</React.Fragment>
		</Provider>
	)
}