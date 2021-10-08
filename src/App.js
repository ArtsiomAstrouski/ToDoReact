import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Router } from './pages/Router'
import { Nav } from './pages/Nav'
import './App.css'

const navItems = [
	{
		href: '/todos',
		title: 'Todos',
	},
	{
		href: '/editor',
		title: 'Editor',
	},
]

function App() {
	return (
		<div className="app__container">
			<Router>
				<Nav activeKey="/todos" items={navItems} />
			</Router>
		</div>
	)
}

export default App

// start of a new project
// npm install -g json-server
// npx json-server --watch db.json (server start)
// npx create-react-app name (creating)
// cd name
// npm run start - (start program)
// npm install react-router react-router-dom --save
// import { useHistory } from 'react-router-dom'  (history)
// npm install react-devtools --save
// npm install react-redux --save
// npm install react-redux --save
// npm install redux-thunk --save
// npm install --save bootstrap
// npm install react-bootstrap-icons --save
