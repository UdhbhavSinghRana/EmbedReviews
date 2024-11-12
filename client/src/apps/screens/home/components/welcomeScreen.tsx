import React from "react"
// Components
import { Footer } from "./footer.tsx"
import { Cards } from "./cards.tsx"
import { GetStarted } from "./getStarted.tsx"

export const WelcomeScreen = () => {
	return (
		<React.Fragment>
			<div className='w-full flex flex-col justify-center items-center'>
				<div className='w-2/4 flex h-96'>
					<img src='https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/07/Featured-Image-5.jpg'/>
				</div>
				<div className='flex flex-col justify-center items-center p-2 gap-2 text-[#5b5b5b]'>
					<div className='text-2xl font-bold text-slate-200'>
						Welcome to EmbedReviews
					</div>
					<div className='flex w-2/4'>
						Your one stop solution for collecting, managing, and displaying authentic customer testimonials. Enhance
						your credibility and build trust with our easy-to-use platform
					</div>
				</div>
				<div className='flex gap-2 p-10'>
					<Cards/>
				</div>
				<div className='flex flex-col justify-center items-center gap-2'>
					<GetStarted />
				</div>
				<div className='w-full bg-[#2c2c2c] mt-10'>
					<Footer/>
				</div>
			</div>
		</React.Fragment>
	)
}