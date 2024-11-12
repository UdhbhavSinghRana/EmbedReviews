import React from 'react';
import { ScreenCard } from "./screenCard.tsx"
import { FiTarget } from "react-icons/fi"
import { FaListCheck } from "react-icons/fa6"
import { FaStar } from "react-icons/fa"

const descriptions = {
	Collect: 'Effortlessly gather testimonials through our user-friendly designed to maximize customer engagement',
	Manage: 'Organize and filter testimonials with ease, ensuring you always have the right testimonials at your fingertips',
	Display: 'Showcase your testimonials on your website, boosting trust and credibility with potential customers',
}

export const Cards = () => {
	return (
		<React.Fragment>
				<div>
					<ScreenCard title={'Collect'} description={descriptions["Collect"]} icon={FiTarget}/>
				</div>
				<div>
					<ScreenCard title={'Manage'} description={descriptions["Manage"]} icon={FaListCheck}/>
				</div>
				<div>
					<ScreenCard title={'Display'} description={descriptions["Display"]} icon={FaStar}/>
				</div>
		</React.Fragment>
	)
}