import NavLink from "./NavLink"
import icon_facebook from "../assets/icon_facebook.svg"
import icon_instagram from "../assets/icon_instagram.svg"
import icon_twitter from "../assets/icon_twitter.svg"
import icon_mail from "../assets/icon_mail.svg"
import icon_twitch from "../assets/icon_twitch.svg"
import BrandLogo from "./BrandLogo"

const socialMedias = [
	{
		link: "#",
		image: icon_facebook,
	},
	{
		link: "#",
		image: icon_instagram,
	},
	{
		link: "#",
		image: icon_twitter,
	},
	{
		link: "#",
		image: icon_mail,
	},
	{
		link: "#",
		image: icon_twitch,
	},
]

const Footer = () => {
	return (
		<div className="md:w-10/12 w-full md:px-0 px-4 mx-auto flex flex-row flex-wrap justify-between py-10 gap-y-4">
			<div className="w-full md:w-auto flex flex-col gap-y-4">
				<p className="text-sm font-light">
					Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
				</p>
				<p className="text-sm font-light">binarcarrental@gmail.com</p>
				<p className="text-sm font-light">081-233-334-808</p>
			</div>
			<div className="w-full md:w-auto flex flex-col gap-y-4">
				<NavLink link="/#ourservices">Our Services</NavLink>
				<NavLink link="/#whyus">Why Us</NavLink>
				<NavLink link="/#testimonial">Testimonial</NavLink>
				<NavLink link="/#faq">FAQ</NavLink>
			</div>
			<div className="w-full md:w-auto flex flex-col gap-y-4">
				<p className="text-sm font-light">Connect with us</p>
				<div className="flex flex-row gap-x-4">
					{socialMedias.map((socialMedia, index) => {
						return (
							<a className="shrink-0" key={index} href={socialMedia.link}>
								<img className="w-full h-full" src={socialMedia.image} />
							</a>
						)
					})}
				</div>
			</div>
			<div className="w-full md:w-auto flex flex-col gap-y-4">
				<p className="text-sm font-light">Copyright Binar 2022</p>
				<BrandLogo />
			</div>
		</div>
	)
}

export default Footer
