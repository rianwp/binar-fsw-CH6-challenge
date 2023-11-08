import { useContext } from "react"
import { CarContext } from "../../store/car-context"
import Button from "../Button"
import JumlahPenumpangInput from "./JumlahPenumpangInput"
import TanggalInput from "./TanggalInput"
import TipeDriverInput from "./TipeDriverInput"
import WaktuJemputInput from "./WaktuJemputInput"

const Search = () => {
	const { dispatch } = useContext(CarContext)
	const handleSearch = () => {
		dispatch({ type: "FILTER_CARS" })
	}
	return (
		<div className="relative flex xl:flex-row flex-col justify-start items-end bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] rounded-lg p-4 lg:-mt-[20px] mt-[20px]">
			<div className="flex flex-row flex-wrap items-end w-full ">
				<div className="xl:w-1/4 lg:w-1/2 w-full p-2">
					<TipeDriverInput />
				</div>
				<div className="xl:w-1/4 lg:w-1/2 w-full p-2">
					<TanggalInput />
				</div>
				<div className="xl:w-1/4 lg:w-1/2 w-full p-2">
					<WaktuJemputInput />
				</div>
				<div className="xl:w-1/4 lg:w-1/2 w-full p-2">
					<JumlahPenumpangInput />
				</div>
			</div>
			<div className="shrink-0 p-2">
				<Button onClick={handleSearch}>Cari Mobil</Button>
			</div>
		</div>
	)
}

export default Search
