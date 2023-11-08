import users from "../../assets/users-input.svg"
import { useContext } from "react"
import { CarContext } from "../../store/car-context"

const JumlahPenumpangInput = () => {
	const { state, dispatch } = useContext(CarContext)

	const setJumlahPenumpang = (jumlahPenumpang) => {
		dispatch({
			type: "SET_FILTER",
			payload: {
				...state.filter,
				jumlahPenumpang: jumlahPenumpang,
			},
		})
	}

	const handleChange = (jumlahPenumpang) => {
		if (jumlahPenumpang === "") {
			setJumlahPenumpang(null)
			return
		}
		if (jumlahPenumpang * 1 < 0) {
			setJumlahPenumpang(0)
			return
		}
		setJumlahPenumpang(jumlahPenumpang * 1)
	}

	return (
		<div className="flex flex-col gap-y-1 w-full font-rubik">
			<p className="text-xs font-light leading-[18px] text-[#3C3C3C]">
				Jumlah Penumpang
			</p>
			<div className="w-full flex flex-row justify-between border border-[#D0D0D0] px-3 py-[9px] rounded-sm border-solid transition duration-300">
				<input
					type="number"
					placeholder="Jumlah Penumpang"
					value={state.filter.jumlahPenumpang ?? ""}
					onChange={(e) => handleChange(e.target.value)}
					className="text-xs font-light leading-[18px] text-[#3C3C3C] focus:outline-none placeholder:text-[#3C3C3C]"
				/>
				<div className="shrink-0 w-[18px] h-[18px]">
					<img src={users} className="w-full h-full" />
				</div>
			</div>
		</div>
	)
}

export default JumlahPenumpangInput
