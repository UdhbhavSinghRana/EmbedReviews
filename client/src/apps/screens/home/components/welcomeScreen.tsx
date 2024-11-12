import React from "react"
// Components
import { ScreenCard } from "./screenCard.tsx"

// Icons
import { FiTarget } from "react-icons/fi";
import { FaListCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const descriptions = {
	Collect: 'Effortlessly gather testimonials through our user-friendly designed to maximize customer engagement',
	Manage: 'Organize and filter testimonials with ease, ensuring you always have the right testimonials at your fingertips',
	Display: 'Showcase your testimonials on your website, boosting trust and credibility with potential customers',
}

export const WelcomeScreen = () => {
	return (
		<React.Fragment>
			<div className='w-full flex flex-col justify-center items-center'>
				<div className='w-2/4 flex h-96'>
					<img src='https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/07/Featured-Image-5.jpg' />
				</div>
				<div className='flex flex-col justify-center items-center p-2 gap-2 text-[#5b5b5b]'>
					<div className='text-2xl font-bold text-slate-200'>
						Welcome to EmbedReviews
					</div>
					<div className='flex w-2/4'>
						Your one stop solution for collecting, managing, and displaying authentic customer testimonials. Enhance your credibility and build trust with our easy-to-use platform
					</div>
				</div>
				<div className='flex gap-2 p-10'>
					<div>
						<ScreenCard title={'Collect'} description={descriptions["Collect"]} icon={FiTarget} />
					</div>
					<div>
						<ScreenCard title={'Manage'} description={descriptions["Manage"]} icon={FaListCheck} />
					</div>
					<div>
						<ScreenCard title={'Display'} description={descriptions["Display"]} icon={FaStar} />
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}