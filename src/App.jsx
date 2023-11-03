import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import CarsPage from "./pages/CarsPage"
import LandingPage from "./pages/LandingPage"
import Header from "./components/Header"

const App = () => {
	return (
		<>
			<Router>
				<div className="bg-[#F1F3FF]">
					<Navbar />
					<Header />
				</div>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/cars" element={<CarsPage />} />
				</Routes>
				<Footer />
			</Router>
		</>
	)
}

export default App
