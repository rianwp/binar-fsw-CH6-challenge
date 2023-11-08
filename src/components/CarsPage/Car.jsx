import numberSplit from "../../utils/numberSplit"
import Button from "../Button"
import settings from "../../assets/fi_settings.svg"
import users from "../../assets/fi_users.svg"
import calendar from "../../assets/fi_calendar.svg"

const Car = ({ car }) => {
	const {
		manufacture,
		model,
		type,
		image,
		rentPerDay,
		description,
		capacity,
		transmission,
		year,
	} = car
	return (
		<div className="p-3 md:w-1/3 sm:w-1/2 w-full">
			<div className="p-6 bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] rounded-lg flex flex-col justify-between w-full h-full gap-y-6">
				<div className="flex flex-col gap-y-4">
					<img className="aspect-video w-full object-cover" src={image} />
					<div className="flex flex-col">
						<p className="text-sm font-normal">
							{manufacture} {model}/{type}
						</p>
						<p className="text-base font-bold">
							Rp {numberSplit(rentPerDay)} / hari
						</p>
						<p className="text-sm font-light">{description}</p>
					</div>
					<div className="flex flex-row gap-x-2">
						<img src={users} className="w-5 h-5" />
						<p className="text-sm font-light">{capacity}</p>
					</div>
					<div className="flex flex-row gap-x-2">
						<img src={settings} className="w-5 h-5" />
						<p className="text-sm font-light">{transmission}</p>
					</div>
					<div className="flex flex-row gap-x-2">
						<img src={calendar} className="w-5 h-5" />
						<p className="text-sm font-light">{year}</p>
					</div>
				</div>
				<Button style="fullWidth">Pilih Mobil</Button>
			</div>
		</div>
	)
}

export default Car
