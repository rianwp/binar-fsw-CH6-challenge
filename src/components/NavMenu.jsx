import { useEffect, useState } from "react"
import close from "../assets/fi_x.svg"
import NavLink from "./NavLink"
import Button from "./Button"

const NavMenu = ({ isOpen, onClose }) => {
	const [animation, setAnimation] = useState({
		bg: "bg-black/0",
		menu: "",
	})
	useEffect(() => {
		if (isOpen) {
			setAnimation({
				bg: "bg-black/60",
				menu: "-translate-x-full",
			})
		} else {
			setAnimation({
				bg: "bg-black/0",
				menu: "",
			})
		}
	}, [isOpen])
	return (
		<div
			className={`fixed w-full h-screen transition duration-300 top-0 left-0 z-40 ${animation.bg}`}
		>
			<div
				className={`absolute w-[180px] bg-white h-screen px-4 py-[34px] transition duration-300 top-0 -right-[180px] ${animation.menu}`}
			>
				<div className="flex flex-row justify-between mb-4">
					<h1 className="text-sm font-bold">BCR</h1>
					<button onClick={onClose} className="shrink-0 w-6 h-6">
						<img className="w-full h-full" src={close} />
					</button>
				</div>
				<div className="flex flex-col gap-y-4">
					<NavLink link="/#ourservices">Our Services</NavLink>
					<NavLink link="/#whyus">Why Us</NavLink>
					<NavLink link="/#testimonial">Testimonial</NavLink>
					<NavLink link="/#faq">FAQ</NavLink>
					<div>
						<Button>Register</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NavMenu
