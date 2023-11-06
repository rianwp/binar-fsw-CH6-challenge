import { CarProvider } from "../store/car-context"

const CarsPage = () => {
	return (
		<CarProvider>
			<div className="w-9/12 mx-auto"></div>
		</CarProvider>
	)
}

export default CarsPage
