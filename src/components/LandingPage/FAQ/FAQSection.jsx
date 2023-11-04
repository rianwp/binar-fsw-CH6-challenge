import { useState } from "react"
import Accordion from "./Accordion"

const questions = [
	{
		title: "Apa saja syarat yang dibutuhkan?",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
	},
	{
		title: "Berapa hari minimal sewa mobil lepas kunci?",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
	},
	{
		title: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
	},
	{
		title: "Apakah Ada biaya antar-jemput?",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
	},
	{
		title: "Bagaimana jika terjadi kecelakaan",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
	},
]

const FAQSection = () => {
	const [activeIndex, setActiveIndex] = useState()

	const handleOpen = (index) => {
		if (activeIndex === index) {
			setActiveIndex()
		} else {
			setActiveIndex(index)
		}
	}
	return (
		<div className="w-10/12 mx-auto my-[100px] flex flex-row justify-between">
			<div className="w-5/12">
				<h1 className="text-2xl font-bold leading-9 mb-4">
					Frequently Asked Question
				</h1>
				<p className="text-sm font-light">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit
				</p>
			</div>
			<div className="w-6/12 flex flex-col gap-y-4">
				{questions.map((question, index) => {
					return (
						<Accordion
							key={index}
							title={question.title}
							isActive={activeIndex === index}
							onShow={() => handleOpen(index)}
							description={question.description}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default FAQSection
