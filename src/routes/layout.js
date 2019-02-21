import React from 'react'
import Loadable from "react-loadable"
import Layout from 'components/BaseLayout'

// default
const defaultLoad = () => <div className="defaultLoad"/>

const Home = () => import('pages/Home/Home')

let layout = {
		path: '/admin',
		component: Layout,
		routes: [
			// home
			{
				path: '/admin/home/index',
				component: Loadable({
					loader: Home,
					loading: defaultLoad
				}),
			}
		]
	}

export default layout