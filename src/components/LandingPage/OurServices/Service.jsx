import check from "../../../assets/check.svg"

const Service = ({ children }) => {
	return (
		<div className="flex flex-row gap-x-4 items-center">
			<img className="w-6 h-6" src={check} />
			<p className="font-light text-sm">{children}</p>
		</div>
	)
}

export default Service
