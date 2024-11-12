import React from "react"

export const ScreenCard = ({title, description, icon}: {title: string, description: string, icon: any}) => {
	return (
		<React.Fragment>
			<div className='flex flex-col justify-center items-center h-48 rounded-3xl bg-[#2c2c2c] shadow-2xl gap-2'>
				<div className='text-3xl text-[#60348d]'>
					{icon()}
				</div>
				<div className='font-bold'>
					{title}
				</div>
				<div className='w-3/4 text-center'>
					{description}
				</div>
			</div>
		</React.Fragment>
	)
}