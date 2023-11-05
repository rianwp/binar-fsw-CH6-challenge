import Carousel from "./Carousel"
import img_photo1 from "../../../assets/img_photo1.png"
import img_photo2 from "../../../assets/img_photo2.png"

const testimony = [
	{
		name: "John Dee 32, Bromo",
		image: img_photo1,
		description:
			"“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
		stars: 5,
	},
	{
		name: "John Laa 30, Bromo",
		image: img_photo2,
		description:
			"“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
		stars: 4,
	},
	{
		name: "John Dee 32, Bromo",
		image: img_photo2,
		description:
			"“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
		stars: 5,
	},
]

const TestimonySection = () => {
	return (
		<div
			id="testimonial"
			className="md:w-8/12 w-full md:px-0 px-4 mx-auto md:pt-[84px] pt-[44px]"
		>
			<h1 className="text-2xl font-bold leading-9 text-center mb-4">
				Testimonial
			</h1>
			<p className="text-sm font-light text-center mb-10">
				Berbagai review positif dari para pelanggan kami
			</p>
			<Carousel testimony={testimony} />
		</div>
	)
}

export default TestimonySection
