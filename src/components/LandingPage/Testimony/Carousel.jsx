import { useState } from "react"
import chevron_left from "../../../assets/fi_chevron-left.svg"
import chevron_right from "../../../assets/fi_chevron-right.svg"
import star from "../../../assets/star.svg"

const Carousel = ({ testimony }) => {
	const [slide, setSlide] = useState(0)

	const biggestIndex = testimony.length - 1

	const handleNext = () => {
		if (slide < biggestIndex) {
			setSlide((currentValue) => currentValue + 1)
		} else {
			setSlide(0)
		}
	}
	const handlePervious = () => {
		if (slide > 0) {
			setSlide((currentValue) => currentValue - 1)
		} else {
			setSlide(biggestIndex)
		}
	}

	const translateSlide = {
		transform: `translateX(-${100 * slide}%)`,
	}

	return (
		<>
			<div className="overflow-x-hidden w-full mb-6 rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)]">
				<div
					style={translateSlide}
					className="w-full flex flex-row transition duration-500"
				>
					{testimony.map((dataTestiomny, indexTestimony) => {
						return (
							<div
								key={indexTestimony}
								className="w-full shrink-0 bg-[#F1F3FF] py-16 px-11 flex flex-row flex-wrap md:flex-nowrap items-center justify-center gap-x-[46px] gap-y-6"
							>
								<div className="w-20 h-20 rounded-full overflow-hidden shrink-0">
									<img className="w-full h-full" src={dataTestiomny.image} />
								</div>
								<div className="flex flex-col items-start gap-y-2">
									<div className="flex flex-row self-center md:self-start mb-4 md:mb-0">
										{[...Array(dataTestiomny.stars)].map(
											(dataStar, indexStar) => {
												return <img key={indexStar} src={star} />
											}
										)}
									</div>
									<p className="text-sm font-light">
										{dataTestiomny.description}
									</p>
									<p className="text-sm font-normal">{dataTestiomny.name}</p>
								</div>
							</div>
						)
					})}
				</div>
			</div>
			<div className="flex flex-row gap-x-6 items-center w-full justify-center">
				<button
					onClick={handlePervious}
					className="w-8 h-8 shrink-0 rounded-full border border-[#C4C4C4] bg-white flex items-center justify-center transition duration-200 hover:bg-[#5CB85F]"
				>
					<img className="w-5 h-5" src={chevron_left} />
				</button>
				<button
					onClick={handleNext}
					className="w-8 h-8 shrink-0 rounded-full border border-[#C4C4C4] bg-white flex items-center justify-center transition duration-200 hover:bg-[#5CB85F]"
				>
					<img className="w-5 h-5" src={chevron_right} />
				</button>
			</div>
		</>
	)
}

export default Carousel
