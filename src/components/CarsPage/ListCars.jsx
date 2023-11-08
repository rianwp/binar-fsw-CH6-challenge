import { useContext } from "react"
import { CarContext } from "../../store/car-context"
import Car from "./Car"

const ListCars = () => {
	const { state } = useContext(CarContext)
	return (
		<div className="w-[calc(100%+24px)] -ml-3 py-[40px] flex flex-row flex-wrap">
			{state.filteredCars.map((car, index) => {
				return <Car key={index} car={car} />
			})}
		</div>
	)
}

export default ListCars
