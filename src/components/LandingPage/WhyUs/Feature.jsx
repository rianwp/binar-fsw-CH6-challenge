const Feature = ({ image, title, description }) => {
	return (
		<div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
			<div className="flex flex-col h-full items-start gap-4 border border-[color:var(--neutral-02,#D0D0D0)] p-6 rounded-lg border-solid">
				<img className="w-8 h-8" src={image} />
				<p className="text-base font-bold">{title}</p>
				<p className="text-sm font-light">{description}</p>
			</div>
		</div>
	)
}

export default Feature
