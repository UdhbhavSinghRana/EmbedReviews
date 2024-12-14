import React from "react"
import { AuthCard } from "../components/authCard.tsx"
import { TopNavigation } from "../../../shared/components/topNavigation/topNavigation.tsx"
import { AuthTypes } from "../types/authTypes.ts"

export const SignUp = () => {
	return (
		<React.Fragment>
			<TopNavigation />
			<div className='flex justify-center items-center h-full w-full'>
				<AuthCard authScreen={AuthTypes.SIGNUP} />
			</div>
		</React.Fragment>
	)
}