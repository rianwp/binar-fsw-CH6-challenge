import img_car from "../assets/img_car.png"
import Button from "./Button"

const Header = () => {
	return (
		<div className="flex flex-row justify-end flex-wrap">
			<div className="md:w-5/12 w-full flex flex-col gap-y-4 pr-8 self-center py-8 pl-4 md:pl-0">
				<h1 className="font-bold text-4xl leading-[54px] ">
					Sewa & Rental Mobil Terbaik di kawasan Sragen
				</h1>
				<p className="text-sm font-light">
					Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
					terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
					untuk sewa mobil selama 24 jam.
				</p>
				<div>
					<Button link="/cars">Mulai Sewa Mobil</Button>
				</div>
			</div>
			<div className="md:w-6/12 w-full pl-4 self-end">
				<img className="h-full w-full object-contain" src={img_car} />
			</div>
		</div>
	)
}

export default Header
