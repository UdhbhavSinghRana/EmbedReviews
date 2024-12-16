import React from "react"
import { AuthCard } from "../components/authCard.tsx"
import { TopNavigation } from "../../../shared/components/topNavigation/topNavigation.tsx"
import { AuthTypes } from "../types/authTypes.ts"
import { useDispatch } from "react-redux"

export const SignUp = () => {
	const dispatch = useDispatch()

	return (
		<React.Fragment>
			<TopNavigation />
			<div className='flex justify-center items-center h-full w-full'>
				<AuthCard authScreen={AuthTypes.SIGNUP} dispatch={dispatch} />
			</div>
		</React.Fragment>
	)
}