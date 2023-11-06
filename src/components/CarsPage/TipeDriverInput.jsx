import { useState } from "react"
import chevron_down from "../../assets/chevron-down-input.jsx"
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

	const tipeDriverText =
		tipeDriver.find((data) => data.value === state.filter.tipeDriver).value ??
		"Pilih Tipe Driver"

	return (
		<div className="flex flex-col gap-y-1">
			<p className="text-xs font-light leading-[18px] text-[#3C3C3C]">
				Tipe Driver
			</p>
			<div className="w-full flex flex-row justify-between px-3 py-[9px]">
				<p className="text-xs font-light leading-[18px] text-[#3C3C3C]">
					{tipeDriverText}
				</p>
				<div className="shrink-0 w-[18px] h-[18px]">
					<img src={chevron_down} className="w-full h-full" />
				</div>
			</div>
			<div className="flex flex-col">
				{tipeDriver.map((data, index) => {
					return (
						<button
							key={index}
							onClick={() => setTipeDriver(data.value)}
							className="text-xs font-light leading-[18px] text-[#3C3C3C] p-2.5"
						>
							{data.name}
						</button>
					)
				})}
			</div>
		</div>
	)
}

export default TipeDriverInput
