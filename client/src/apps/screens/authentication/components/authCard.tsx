import { Fragment, useState } from "react"
import { AuthTypes } from "../types/authTypes.ts"
import { signInUserThunkCreator } from "../thunks/signInUser/signInUser.ts"
import { useDispatch } from "react-redux"

export const SignUpCard = () => {
	return (
		<Fragment >
			<div className="flex flex-col items-center justify-between w-2/4 border-2 border-[#242F2B] p-10 rounded-3xl">
				<h1 className='text-white text-4xl'>
					EmbedReviews
				</h1>
				<div className="flex flex-col py-2 px-3 gap-3 rounded-2xl w-full pt-10 text-sm">
					<input placeholder="Name"
								 className="rounded-md bg-inherit border border-[#242F2B] py-2 px-3 text-sm w-full h-10 outline-white outline-offset-2 focus:outline focus:outline-2"
								 type="text" name="name"/>
					<input placeholder="Email"
								 className="rounded-md bg-inherit border border-[#242F2B] py-2 px-3 text-sm w-full h-10 outline-white outline-offset-2 focus:outline focus:outline-2"
								 type="text" name="Email"/>
					<input placeholder="Password"
								 className="rounded-md bg-inherit border border-[#242F2B] py-2 px-3 text-sm w-full h-10 outline-white outline-offset-2 focus:outline focus:outline-2"
								 type="text" name="Password"/>
					<button type="submit"
									className="mx-auto bg-[#f8fafc] font-medium text-[#020205] w-full h-10 rounded-md flex justify-center items-center cursor-pointer transition-colors ease-in-out hover:bg-[#f8fafc]/90 disabled:cursor-progress">
						Sign Up
					</button>
					<div className="text-gray-600 dark:text-gray-400 text-center mt-4 text-sm">
						Already have an account? <a className="text-purple-600 hover:text-gray-600 dark:hover:text-gray-200 transition duration-150 ease-in-out" href="/signin">
							Sign in
						</a>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export const LoginCard = ({ dispatch }: { dispatch: any }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSignIn = () => {
		dispatch(signInUserThunkCreator({email, password}))
	}

	return (
		<Fragment >
			<div className="flex flex-col items-center justify-between w-2/4 border-2 border-[#242F2B] p-10 rounded-3xl">
				<h1 className='text-white text-4xl'>
					EmbedReviews
				</h1>
				<div className="flex flex-col py-2 px-3 gap-3 rounded-2xl w-full pt-10 text-sm">
					<input placeholder="Email"
								 className="rounded-md bg-inherit border border-[#242F2B] py-2 px-3 text-sm w-full h-10 outline-white outline-offset-2 focus:outline focus:outline-2"
								 type="text" name="Email"
								 onChange={(e) => {setEmail(e.target.value)}}
					/>
					<input placeholder="Password"
								 className="rounded-md bg-inherit border border-[#242F2B] py-2 px-3 text-sm w-full h-10 outline-white outline-offset-2 focus:outline focus:outline-2"
								 type="password" name="Password"
								 onChange={(e) => {setPassword(e.target.value)}}
					/>
					<button
									className="mx-auto bg-[#f8fafc] font-medium text-[#020205] w-full h-10 rounded-md flex justify-center items-center cursor-pointer transition-colors ease-in-out hover:bg-[#f8fafc]/90 disabled:cursor-progress"
									onClick={handleSignIn}
					>
						Sign In
					</button>
					<div className="text-gray-600 dark:text-gray-400 text-center mt-4 text-sm">
						Don't have an account? <a className="text-purple-600 hover:text-gray-600 dark:hover:text-gray-200 transition duration-150 ease-in-out" href="/signup">Sign up </a>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export const AuthCard = ({authScreen}: { authScreen: AuthTypes }) => {
	const dispatch = useDispatch()
	return (
		<Fragment>
			{authScreen === AuthTypes.SIGNUP ? <SignUpCard/> : <LoginCard dispatch={dispatch}/>}
		</Fragment>
	)
}