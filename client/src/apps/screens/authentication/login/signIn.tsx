import { TopNavigation } from "../../../shared/components/topNavigation/topNavigation.tsx"
import { AuthCard } from "../components/authCard.tsx"
import { AuthTypes } from "../types/authTypes.ts"
import React from "react"

export const SignIn = () => {
	return (
		<React.Fragment>
			<TopNavigation />
			<div className='flex justify-center items-center h-full w-full'>
				<AuthCard authScreen={AuthTypes.SIGNIN} />
			</div>
		</React.Fragment>
	)
}