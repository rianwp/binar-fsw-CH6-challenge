import { createContext, useEffect, useReducer } from "react"
import fetchCars from "../lib/fetchCars"

export const CarContext = createContext()

const initialState = {
	error: "",
	isLoading: false,
	cars: [],
	filteredCars: [],
	filter: {
		tipeDriver: null,
		tanggal: null,
		waktuJemput: "",
		jumlahPenumpang: null,
	},
}

const carReducer = (state, action) => {
	switch (action.type) {
		case "SET_ERROR":
			return { ...state, error: action.payload }
		case "SET_LOADING":
			return { ...state, isLoading: action.payload }
		case "SET_CARS":
			return { ...state, cars: action.payload, filteredCars: action.payload }
		case "SET_FILTER":
			return { ...state, filter: action.payload }
		case "FILTER_CARS":
			const filteredCars = state.cars.filter((car) => {
				let filterPenumpang = true
				let filterWaktu = true
				let filterTipeDriver = true

				const dateAvailable = new Date(car.availableAt)
				const dateSewa = state.filter.tanggal
					? new Date(`${state.filter.tanggal} ${state.filter.waktuJemput}`)
					: new Date()
				const isAvailable = state.filter.tipeDriver && car.available
				const isNotAvailable = !state.filter.tipeDriver && !car.available

				if (state.filter.jumlahPenumpang !== null) {
					filterPenumpang = car.capacity >= state.filter.jumlahPenumpang
				}
				if (state.filter.tanggal !== null) {
					filterWaktu = dateAvailable >= dateSewa
				}
				if (state.filter.tipeDriver !== null) {
					filterTipeDriver = isAvailable || isNotAvailable
				}
				return filterPenumpang && filterWaktu && filterTipeDriver
			})
			return { ...state, filteredCars }
	}
}

export const CarProvider = ({ children }) => {
	const [state, dispatch] = useReducer(carReducer, initialState)

	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: "SET_ERROR", payload: "" })
			try {
				const cars = await fetchCars()
				dispatch({ type: "SET_LOADING", payload: true })
				dispatch({ type: "SET_CARS", payload: cars })
			} catch (err) {
				dispatch({ type: "SET_ERROR", payload: err.message })
			} finally {
				dispatch({ type: "SET_LOADING", payload: false })
			}
		}

		fetchData()
	}, [])

	return (
		<CarContext.Provider value={{ state, dispatch }}>
			{children}
		</CarContext.Provider>
	)
}
