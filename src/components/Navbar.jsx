import BrandLogo from "./BrandLogo"
import Button from "./Button"
import NavLink from "./NavLink"

const Navbar = () => {
	return (
		<nav className="w-10/12 mx-auto flex justify-between py-6 items-center">
			<BrandLogo />
			<div className="flex flex-row gap-x-8 items-center">
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
