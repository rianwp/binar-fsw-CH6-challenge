import Button from "../../Button"

const CTABannerSection = () => {
	return (
		<div className="md:w-10/12 w-full md:px-0 px-4 mx-auto md:pt-[100px] pt-[60px]">
			<div className="flex flex-row py-16 justify-center items-center bg-[#0D28A6] rounded-[13px]">
				<div className="w-1/2 text-center">
					<h1 className="text-white text-4xl font-bold leading-[54px] mb-4">
						Sewa Mobil di Sragen Sekarang
					</h1>
					<p className="text-white text-sm font-light mb-[52px]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
					</p>
					<Button link="/cars">Mulai Sewa Mobil</Button>
				</div>
			</div>
		</div>
	)
}

export default CTABannerSection
