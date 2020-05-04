import React from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import Menu from './pages/Menu/Menu';
import SignIn from './pages/SignIn/SignIn';
import OpeningTimes from './pages/OpeningTimes/OpeningTimes';
import ItemPage from './pages/ItemPage/ItemPage';

function App() {
  return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Route exact path="/" component={Homepage} />
				<Route exact path="/signin" component={SignIn} />
				<Route exact path="/openingtimes" component={OpeningTimes} />
				<Route exact path="/menu" component={Menu} />
				<Route exact path="/menu/:menuId" component={ItemPage} />
			</div>
		</BrowserRouter>
	);
}

export default App;
