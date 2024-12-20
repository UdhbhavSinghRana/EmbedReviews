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
					<div className='flex justify-center items-center h-full w-full'>
						<AuthCard authScreen={AuthTypes.SIGNIN} />
					</div>
			</React.Fragment>
		</Provider>
	)
}