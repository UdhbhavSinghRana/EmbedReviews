import React from "react"

export const TopNavigation = () => {
	return (
		<React.Fragment>
			<div className='flex justify-between p-2 shadow-2xl bg-gray-950'>
				<div>
					<a className="text-purple-600 hover:text-gray-200 dark:hover:text-gray-200 transition duration-150 ease-in-out"
						 href="/">
						EmbedReviews
					</a>
				</div>
				<div className='flex gap-5'>
					<div>
						<a
							className="text-purple-600 hover:text-gray-200 dark:hover:text-gray-200 transition duration-150 ease-in-out"
							href="/">
							Home
						</a>
					</div>
					<div>
						<a
							className="text-purple-600 hover:text-gray-200 dark:hover:text-gray-200 transition duration-150 ease-in-out">
							Features
						</a>
					</div>
					<div>
						<a
							className="text-purple-600 hover:text-gray-200 dark:hover:text-gray-200 transition duration-150 ease-in-out"
							href="/signup">
							Dashboard
						</a>
					</div>
					<div>
						<a
							className="text-purple-600 hover:text-gray-200 dark:hover:text-gray-200 transition duration-150 ease-in-out"
							href="/signup">
							SignUp
						</a>
					</div>
					<div>
						<a
							className="text-purple-600 hover:text-gray-200 dark:hover:text-gray-200 transition duration-150 ease-in-out"
							href="/signin">
							SignIn
						</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}