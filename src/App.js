import React from 'react';
import './App.scss';
import { Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import Menu from './pages/MenuPage/MenuPage';
import OpeningTimes from './pages/OpeningTimes/OpeningTimes';
import ItemPage from './pages/ItemPage/ItemPage';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import UserProfile from './pages/UserProfile/UserProfile';

function App() {
	
  return (
		<div className="App">
			<Navbar />
			<Route exact path="/" component={Homepage} />
			<Route exact path="/signin" component={SignInAndSignUp} />
			<Route exact path="/openingtimes" component={OpeningTimes} />
			<Route exact path="/menu" component={Menu} />
			<Route exact path="/menu/:menuId" component={ItemPage} />
			<Route exact path="/userprofile" component={UserProfile} />
		</div>
	);
}


export default App;
