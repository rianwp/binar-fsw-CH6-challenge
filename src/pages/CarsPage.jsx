import ListCars from "../components/CarsPage/ListCars"
import Search from "../components/CarsPage/Search"
import { CarProvider } from "../store/car-context"

const CarsPage = () => {
	return (
		<CarProvider>
			<div className="xl:w-9/12 lg:w-10/12 md:w-10/12 w-full md:px-0 px-4 mx-auto">
				<Search />
				<ListCars />
			</div>
		</CarProvider>
	)
}

export default CarsPage
