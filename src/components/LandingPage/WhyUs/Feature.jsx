const Feature = ({ image, title, description }) => {
	return (
		<div className="p-4 w-1/4">
			<div className="flex flex-col h-full items-start gap-4 border border-[color:var(--neutral-02,#D0D0D0)] p-6 rounded-lg border-solid">
				<img className="w-8 h-8" src={image} />
				<p className="text-base font-bold">{title}</p>
				<p className="text-sm font-light">{description}</p>
			</div>
		</div>
	)
}

export default Feature
