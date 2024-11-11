import React from "react"

export const TopNavigation = () => {
	return (
		<React.Fragment>
			<div className='flex justify-between p-2 shadow-2xl bg-gray-950'>
				<div>
					EmbedReviews
				</div>
				<div className='flex gap-5'>
					<div>
						Home
					</div>
					<div>
						Features
					</div>
					<div>
						Dashboard
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}