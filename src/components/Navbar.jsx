import BrandLogo from "./BrandLogo"
import Button from "./Button"
import NavLink from "./NavLink"
import menu from "../assets/fi_menu.svg"
import { useState } from "react"
import NavMenu from "./NavMenu"

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	return (
		<nav className="md:w-10/12 w-full px-4 md:px-0 mx-auto flex justify-between py-6 items-center">
			<BrandLogo />
			<button
				onClick={() => setIsMenuOpen(true)}
				className="md:hidden inline-block shrink-0 w-6 h-6"
			>
				<img className="w-full h-full" src={menu} />
			</button>
			{isMenuOpen ? (
				<NavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
			) : null}
			<div className="hidden md:flex flex-row gap-x-8 items-center">
				<NavLink link="/#ourservices">Our Services</NavLink>
				<NavLink link="/#whyus">Why Us</NavLink>
				<NavLink link="/#testimonial">Testimonial</NavLink>
				<NavLink link="/#faq">FAQ</NavLink>
				<Button>Register</Button>
			</div>
		</nav>
	)
}

export default Navbar
