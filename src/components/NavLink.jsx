const NavLink = ({ link, children }) => {
	return (
		<a href={link} className="font-normal text-sm">
			{children}
		</a>
	)
}

export default NavLink
