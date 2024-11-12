import React from 'react';

export const GetStarted = () => {
	return (
		<React.Fragment>
			<div className='text-2xl font-bold'>
				Get Started today!
			</div>
			<div>
				Join EmbedReviews to start collecting powerful customers testimonials
			</div>
			<div className='flex gap-3 pt-2'>
				<div className='bg-[#7f2dcf] py-2 px-3 rounded-2xl'>
					<button>
						Sign Up
					</button>
				</div>
				<div className='bg-[#ffffff] py-2 px-3 rounded-2xl text-gray-800'>
					<button>
						Log In
					</button>
				</div>
			</div>
		</React.Fragment>
	)
}