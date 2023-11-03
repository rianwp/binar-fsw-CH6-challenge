import React from "react"
import { Link } from "react-router-dom"

const Button = ({ children, link, style }) => {
	const styles = {
		default:
			"text-white bg-[#5CB85F] px-3 py-2 rounded-[2px] font-bold text-sm hover:bg-green-700",
	}
	return (
		<Link
			className={`${
				styles[style] ?? styles.default
			} inline-block transition duration-200`}
			to={link}
		>
			{children}
		</Link>
	)
}

export default Button
