import { useContext } from "react"
import { CarContext } from "../../store/car-context"

const TanggalInput = () => {
	const { state, dispatch } = useContext(CarContext)

	const setTanggal = (tanggal) => {
		dispatch({
			type: "SET_FILTER",
			payload: {
				...state.filter,
				tanggal: tanggal,
			},
		})
	}

	const handleChange = (tanggal) => {
		if (tanggal === "") {
			setTanggal(null)
			return
		}
		setTanggal(tanggal)
	}

	return (
		<div className="flex flex-col gap-y-1 w-full font-rubik">
			<p className="text-xs font-light leading-[18px] text-[#3C3C3C]">
				Tanggal
			</p>
			<input
				type="date"
				onChange={(e) => handleChange(e.target.value)}
				className="text-xs font-light leading-[18px] text-[#3C3C3C] w-full border border-[#D0D0D0] rounded-sm border-solid px-3 py-[8px] focus:outline-none"
			/>
		</div>
	)
}

export default TanggalInput
