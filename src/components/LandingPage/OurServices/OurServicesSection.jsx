import img_service from "../../../assets/img_service.png"
import Service from "./Service"

const services = [
	"Sewa Mobil Dengan Supir di Sragen 12 Jam",
	"Sewa Mobil Lepas Kunci di Sragen 24 Jam",
	"Sewa Mobil Jangka Panjang Bulanan",
	"Gratis Antar - Jemput Mobil di Bandara",
	"Layanan Airport Transfer / Drop In Out",
]

const OurServicesSection = () => {
	return (
		<div
			id="ourservices"
			className="mx-auto md:px-0 px-4 flex flex-row flex-wrap md:pt-[100px] pt-[60px] justify-center items-center"
		>
			<div className="lg:2-4/12 md:w-5/12 w-full p-8 flex flex-col">
				<img
					className="w-full h-full object-contain self-end"
					src={img_service}
				/>
			</div>
			<div className="lg:2-4/12 md:w-5/12 w-full p-4">
				<h1 className="font-bold text-2xl leading-9 mb-6">
					Best Car Rental for any kind of trip in Sragen!
				</h1>
				<p className="mb-4 font-light text-sm">
					Sewa mobil di Sragen bersama Binar Car Rental jaminan harga lebih
					murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
					pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
					dll.
				</p>
				<div className="flex flex-col gap-y-4">
					{services.map((service, index) => {
						return <Service key={index}>{service}</Service>
					})}
				</div>
			</div>
		</div>
	)
}

export default OurServicesSection
