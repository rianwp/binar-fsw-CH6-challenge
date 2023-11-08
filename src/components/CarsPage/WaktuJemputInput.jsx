import { useState } from "react"
import clock from "../../assets/clock-input.svg"
import { useContext } from "react"
import { CarContext } from "../../store/car-context"

const waktuJemput = ["08:00", "09:00", "10:00", "11:00", "12:00"]

const WaktuJemputInput = () => {
	const { state, dispatch } = useContext(CarContext)
	const [isOpen, setIsOpen] = useState(false)

	const setWaktuJemput = (waktuJemput) => {
		dispatch({
			type: "SET_FILTER",
			payload: {
				...state.filter,
				waktuJemput: waktuJemput,
			},
		})
	}

	const handleSelect = (waktuJemput) => {
		setWaktuJemput(waktuJemput)
		setIsOpen(false)
	}

	const handleOpen = () => {
		setIsOpen((currentValue) => !currentValue)
		if (isOpen) {
			setWaktuJemput("")
		}
	}

	const waktuJemputText =
		state.filter.waktuJemput === ""
			? "Pilih Waktu"
			: `${state.filter.waktuJemput} WIB`

	return (
		<div className="relative flex flex-col gap-y-1 w-full font-rubik">
			<p className="text-xs font-light leading-[18px] text-[#3C3C3C]">
				Waktu Jemput/Ambil
			</p>
			<button
				onClick={handleOpen}
				className={`w-full flex flex-row justify-between border border-[#D0D0D0] px-3 py-[9px] rounded-sm border-solid transition duration-300 ${
					isOpen ? "hover:bg-[#C9E7CA] hover:text-[#5CB85F]" : ""
				}`}
			>
				<p className="text-xs font-light leading-[18px] text-[#3C3C3C]">
					{isOpen ? "Default" : `${waktuJemputText.replace(":", ".")}`}
				</p>
				<div className="shrink-0 w-[18px] h-[18px]">
					<img src={clock} className="w-full h-full" />
				</div>
			</button>
			{isOpen ? (
				<div className="absolute flex flex-col top-full left-0 z-30 border border-[#D0D0D0] rounded-sm border-solid w-full">
					{waktuJemput.map((data, index) => {
						return (
							<button
								key={index}
								onClick={() => handleSelect(data)}
								className={`${
									data === state.filter.waktuJemput
										? "bg-[#C9E7CA] text-[#5CB85F] font-medium"
										: "text-[#3C3C3C] bg-white font-light"
								} flex flex-row justify-between text-xs leading-[18px] p-2.5 hover:bg-[#C9E7CA] hover:text-[#5CB85F] transition duration-300 w-full text-left`}
							>
								<p>{data}</p>
								<p>WIB</p>
							</button>
						)
					})}
				</div>
			) : null}
		</div>
	)
}

export default WaktuJemputInput
