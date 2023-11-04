import chevron_down from "../../../assets/fi_chevron-down.svg"

const Accordion = ({ title, description, isActive, onShow }) => {
	return (
		<div className="w-full rounded border border-neutral-300 border-solid">
			<button
				onClick={onShow}
				className="py-[18px] px-6 flex flex-row justify-between hover:bg-neutral-300 w-full transition duration-200 text-left"
			>
				<p className="text-sm font-light">{title}</p>
				<div
					className={`shrink-0 w-6 h-6 ${
						isActive ? "rotate-180" : ""
					} transition duration-300`}
				>
					<img src={chevron_down} className="w-full h-full" />
				</div>
			</button>
			{isActive ? (
				<div className="p-6 text-sm font-light border-t border-neutral-300">
					{description}
				</div>
			) : null}
		</div>
	)
}

export default Accordion
