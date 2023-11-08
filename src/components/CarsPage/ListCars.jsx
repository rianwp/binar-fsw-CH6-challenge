import { useContext } from "react"
import { CarContext } from "../../store/car-context"
import Car from "./Car"

const ListCars = () => {
	const { state } = useContext(CarContext)
	return (
		<>
			{state.isLoading ? (
				<p className="w-full text-center py-10">Loading...</p>
			) : null}
			{!state.isLoading && state.error ? (
				<p className="w-full text-center py-10">{state.error}</p>
			) : null}
			<div className="w-[calc(100%+24px)] -ml-3 pb-10 pt-7 flex flex-row flex-wrap">
				{!state.isLoading && !state.error
					? state.filteredCars.map((car, index) => {
							return <Car key={index} car={car} />
					  })
					: null}
			</div>
		</>
	)
}

export default ListCars
