import { useState } from "react"
import chevron_down from "../../assets/chevron-down-input.svg"
import { useContext } from "react"
import { CarContext } from "../../store/car-context"

const tipeDriver = [
	{
		name: "Dengan Sopir",
		value: true,
	},
	{
		name: "Tanpa Sopir (Lepas Kunci)",
		value: false,
	},
]

const TipeDriverInput = () => {
	const { state, dispatch } = useContext(CarContext)
	const [isOpen, setIsOpen] = useState(false)

	const setTipeDriver = (tipeDriver) => {
		dispatch({
			type: "SET_FILTER",
			payload: {
				...state.filter,
				tipeDriver: tipeDriver,
			},
		})
	}

	const handleSelect = (tipeDriver) => {
		setTipeDriver(tipeDriver)
		setIsOpen(false)
	}

	const handleOpen = () => {
		setIsOpen((currentValue) => !currentValue)
		if (isOpen) {
			setTipeDriver(null)
		}
	}

	const tipeDriverText =
		state.filter.tipeDriver === null
			? "Pilih Tipe Driver"
			: state.filter.tipeDriver
			? "Dengan Sopir"
			: "Tanpa Sopir (Lepas Kunci)"

	return (
		<div className="relative flex flex-col gap-y-1 w-full font-rubik">
			<p className="text-xs font-light leading-[18px] text-[#3C3C3C]">
				Tipe Driver
			</p>
			<button
				onClick={handleOpen}
				className={`w-full flex flex-row justify-between border border-[#D0D0D0] px-3 py-[9px] rounded-sm border-solid ${
					isOpen ? "hover:bg-[#C9E7CA] hover:text-[#5CB85F]" : ""
				}`}
			>
				<p className="text-xs font-light leading-[18px] text-[#3C3C3C]">
					{isOpen ? "Default" : tipeDriverText}
				</p>
				<div
					className={`shrink-0 w-[18px] h-[18px] ${
						isOpen ? "rotate-180" : ""
					} transition duration-300`}
				>
					<img src={chevron_down} className="w-full h-full" />
				</div>
			</button>
			{isOpen ? (
				<div className="absolute flex flex-col top-full left-0 z-30 border border-[#D0D0D0] rounded-sm border-solid w-full">
					{tipeDriver.map((data, index) => {
						return (
							<button
								key={index}
								onClick={() => handleSelect(data.value)}
								className={`${
									data.value === state.filter.tipeDriver
										? "bg-[#C9E7CA] text-[#5CB85F] font-medium"
										: "text-[#3C3C3C] bg-white font-light"
								} text-xs leading-[18px] p-2.5 hover:bg-[#C9E7CA] hover:text-[#5CB85F] transition duration-300 w-full text-left`}
							>
								{data.name}
							</button>
						)
					})}
				</div>
			) : null}
		</div>
	)
}

export default TipeDriverInput
