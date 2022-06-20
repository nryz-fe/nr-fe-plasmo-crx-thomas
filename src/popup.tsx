import 'antd/dist/antd.css'

import { Route, Routes } from 'react-router-dom'

import { HashRouter } from 'react-router-dom'
import Layout from './Layout'
import Manage from './pages/Manage'
import NotFound from './pages/NotFound'
import Set from './pages/Set'
import Tool from './pages/Tool'

function IndexPopup() {
	return (
		<HashRouter basename="/">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Tool />} />
					<Route path="tool" element={<Tool />} />
					<Route path="manage" element={<Manage />} />
					<Route path="set" element={<Set />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</HashRouter>
	)
}

export default IndexPopup
