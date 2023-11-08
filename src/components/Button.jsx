import React from "react"
import { Link } from "react-router-dom"

const Button = ({ children, link, style, onClick }) => {
	const styles = {
		default:
			"text-white bg-[#5CB85F] px-3 py-2 rounded-[2px] font-bold text-sm hover:bg-green-700",
		fullWidth:
			"text-white bg-[#5CB85F] px-3 py-2 rounded-[2px] font-bold text-sm hover:bg-green-700 w-full text-center",
	}
	if (onClick) {
		return (
			<button
				onClick={onClick}
				className={`${
					styles[style] ?? styles.default
				} inline-block transition duration-200 h-fit`}
			>
				{children}
			</button>
		)
	}
	return (
		<Link
			onClick={onClick}
			className={`${
				styles[style] ?? styles.default
			} inline-block transition duration-200 h-fit`}
			to={link}
		>
			{children}
		</Link>
	)
}

export default Button
