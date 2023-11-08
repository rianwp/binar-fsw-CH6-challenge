import { useContext } from "react"
import { CarContext } from "../../store/car-context"
import Car from "./Car"

const ListCars = () => {
	const { state } = useContext(CarContext)
	return (
		<div className="w-[calc(100%+24px)] -ml-3 pb-[40px] pt-[28px] flex flex-row flex-wrap">
			{state.isLoading ? <p>Loading...</p> : null}
			{!state.isLoading && state.error ? <p>{state.error}</p> : null}

			{!state.isLoading && !state.error
				? state.filteredCars.map((car, index) => {
						return <Car key={index} car={car} />
				  })
				: null}
		</div>
	)
}

export default ListCars
