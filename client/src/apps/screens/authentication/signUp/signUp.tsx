import React, { useMemo } from "react"
import { AuthCard } from "../components/authCard.tsx"
import { TopNavigation } from "../../../shared/components/topNavigation/topNavigation.tsx"
import { AuthTypes } from "../types/authTypes.ts"
import { Provider } from "react-redux"
import { store } from "../store/store.ts"

export const SignUp = () => {
	const storeInstance = useMemo(() => store(), [])
	return (
		<React.Fragment>
			<Provider store={storeInstance} >
				<TopNavigation />
				<div className='flex justify-center items-center h-full w-full'>
					<AuthCard authScreen={AuthTypes.SIGNUP}  />
				</div>
			</Provider>
		</React.Fragment>
	)
}