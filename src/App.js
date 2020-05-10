import React from 'react';
import './App.scss';
import { Route} from 'react-router-dom';
import { auth, createUserProfileDoc } from './firebase/firebase';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/actions/userActions';

import NavBar from './components/NavBar/NavBar';
import Homepage from './pages/Homepage/Homepage';
import Menu from './pages/MenuPage/MenuPage';
import OpeningTimes from './pages/OpeningTimes/OpeningTimes';
import ItemPage from './pages/ItemPage/ItemPage';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import UserProfile from './pages/UserProfile/UserProfile';

class App extends React.Component {

	unsubscribeFromAuth = null;

	componentDidMount() {
		// mapped redux action to props
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
			if (userAuth) {
				// createUserProfileDoc return userRef
				const userRef = await createUserProfileDoc(userAuth);

				// realtime updates with Firestore
				userRef.onSnapshot( snapshot => {
					setCurrentUser({
							id: snapshot.id, // snapshot has id
							...snapshot.data() // snapshot.data() has the user info except id		
					});
				});
			} else {
				// userAuth is null = user is signed out 
				setCurrentUser(userAuth);
			}
				
		})
	}

	componentWillUnmount() {
		// onAuthStateChanged returns firebase.unsubscribe()
		this.unsubscribeFromAuth();
	}

	render() {
  return (
		<div className="App">
			<NavBar />
			<Route exact path="/" component={Homepage} />
			<Route exact path="/signin" component={SignInAndSignUp} />
			<Route exact path="/openingtimes" component={OpeningTimes} />
			<Route exact path="/menu" component={Menu} />
			<Route exact path="/menu/:menuId" component={ItemPage} />
			<Route exact path="/userprofile" component={UserProfile} />
		</div>
	);
	}
}

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
