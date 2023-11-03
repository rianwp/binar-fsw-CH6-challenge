import img_car from "../assets/img_car.png"
import Button from "./Button"

const Header = () => {
	return (
		<div className="flex flex-row justify-end">
			<div className="w-5/12 flex flex-col gap-y-4 pr-8 self-center py-8">
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
			<div className="w-6/12 pl-4 self-end">
				<img
					className="h-full w-full object-contain object-right-bottom"
					src={img_car}
				/>
			</div>
		</div>
	)
}

export default Header
