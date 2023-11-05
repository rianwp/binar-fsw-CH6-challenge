import icon_24hrs from "../../../assets/icon_24hrs.svg"
import icon_complete from "../../../assets/icon_complete.svg"
import icon_price from "../../../assets/icon_price.svg"
import icon_professional from "../../../assets/icon_professional.svg"
import Feature from "./Feature"

const features = [
	{
		image: icon_complete,
		title: "Mobil Lengkap",
		description:
			"Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
	},
	{
		image: icon_price,
		title: "Harga Murah",
		description:
			"Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
	},
	{
		image: icon_24hrs,
		title: "Layanan 24 Jam",
		description:
			"Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
	},
	{
		image: icon_professional,
		title: "Sopir Profesional",
		description:
			"Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
	},
]

const WhyUsSection = () => {
	return (
		<div
			id="whyus"
			className="md:w-10/12 w-full md:px-0 px-4 mx-auto md:pt-[100px] pt-[60px]"
		>
			<h1 className="font-bold text-2xl leading-9 mb-4">Why Us?</h1>
			<p className="text-sm font-light mb-6">
				Mengapa harus pilih Binar Car Rental?
			</p>
			<div className="flex flex-row flex-wrap w-[calc(100%+32px)] -ml-4">
				{features.map((feature, index) => {
					return (
						<Feature
							key={index}
							image={feature.image}
							description={feature.description}
							title={feature.title}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default WhyUsSection
