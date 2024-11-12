import React from 'react';

// Icons
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";


export const Footer = () => {
	return (
		<React.Fragment>
			<div className='flex justify-between p-5'>
				<div className='flex flex-col items-center justify-center gap-2'>
					<div className='text-sm'>
						Follow us
					</div>
					<div className='flex gap-2 text-lg'>
						<FaFacebook/>
						<FaTwitter/>
						<FaLinkedinIn/>
					</div>
				</div>
				<div className='flex flex-col items-center justify-center gap-2'>
					<div className='text-sm'>
						Contact us
					</div>
					<div className='text-xs'>
						Email: 21889udbhav@gmail.com
					</div>
				</div>
				<div className='flex flex-col items-center justify-center gap-2'>
					<div className='text-sm'>
						Resources
					</div>
					<div className='text-xs'>
						Privacy Policy
					</div>
					<div className='text-xs'>
						Terms & Conditions
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}