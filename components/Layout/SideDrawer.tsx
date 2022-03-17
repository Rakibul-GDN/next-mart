import { NextPage } from "next"
import Link from "next/link";
import { Menu, Sidebar } from "semantic-ui-react"
import { SideDrawerPropType } from "../../dataTypes/propsTypes";

const SideDrawer: NextPage<SideDrawerPropType> = ({ drawerVisible }) => {
	return (
		<Sidebar
			as={Menu}
			animation='scale down'
			icon='labeled'
			vertical
			visible={drawerVisible}
			style={{ minWidth: "200px" }}
		>
			<Menu.Item>
				<Link href="/food">Food</Link>
			</Menu.Item>
			<Menu.Item>
				<Link href="/hygiene">Hygiene</Link>
			</Menu.Item>
			<Menu.Item>
				<Link href="/beauty_and_health">Beauty & Health</Link>
			</Menu.Item>
			<Menu.Item>
				<Link href="/baby_care">Baby Care</Link>
			</Menu.Item>
			<Menu.Item>
				<Link href="/pet_care">Pet Care</Link>
			</Menu.Item>
			<Menu.Item>
				<Link href="/cleaning_supplies">Cleaning Supplies</Link>
			</Menu.Item>
			<Menu.Item>
				<Link href="/home_and_itchen">Home & Kitchen</Link>
			</Menu.Item>
			<Menu.Item>
				<Link href="/stationery_and_office">Stationery & Office</Link>
			</Menu.Item>
			<Menu.Item>
				<Link href="/toys_and_fun">Toys & Fun</Link>
			</Menu.Item>
			<Menu.Item>
				<Link href="/sports_and_fitness">Sports & Fitness</Link>
			</Menu.Item>
			<Menu.Item>
				<Link href="/vehicle_essentials">Vehicle Essentials</Link>
			</Menu.Item>
			<Menu.Item>
				<Link href="/electronics">Electronics</Link>
			</Menu.Item>
		</Sidebar>

	)
}

export default SideDrawer;