import { NextPage } from "next";
import { useState } from "react";
import { Container, Segment, Sidebar } from "semantic-ui-react";
import Navbar from "./Navbar";
import AuthModal from "./AuthModal/AuthModal";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import SideDrawer from "./SideDrawer";

const Layout: NextPage = ({ children }) => {
	const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);
	const [drawerVisible, setDrawerVisible] = useState<boolean>(true)
	return (
		<Container fluid>
			<Navbar
				authModalOpen={authModalOpen}
				setAuthModalOpen={setAuthModalOpen}
				setDrawerVisible={setDrawerVisible}
				drawerVisible={drawerVisible}
			/>
			<Sidebar.Pushable>
				<SideDrawer drawerVisible={drawerVisible} />
				<Sidebar.Pusher>
					<Segment basic>{children}</Segment>
				</Sidebar.Pusher>
			</Sidebar.Pushable>

			<AuthModal
				authModalOpen={authModalOpen}
				setAuthModalOpen={setAuthModalOpen}
			/>
			<ToastContainer />
		</Container>
	);
};

export default Layout;
