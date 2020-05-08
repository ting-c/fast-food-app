import React from 'react';
import './Navbar.styles.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import Logo from '../../img/Logo.png';
import { signOutUser } from '../../redux/actions/userActions'


const Navbar = ({currentUser, signOutUser}) => {
  const signOut = () => {
    auth.signOut().then(
      signOutUser()
    )
  }

  return (
    <div className="navbar">
      <div className="logo-box">
        <Link to='/'>
          <img className="logo" src={Logo} alt="logo" />
        </Link>
      </div>
        {
          currentUser ? ( 
          <div onClick={() => signOut()}>Sign Out</div> ) : (
          <Link to="/signin">
            <div>Sign In</div>
          </Link> ) 
        }
    </div>
  )
};


const mapStateToProps = (state) => {
  return  { currentUser: state.user.currentUser }
}

// call auth.signOut then call SIGN_OUT_USER using dispatch
const mapDispatchToProps = dispatch => (
  { //action creators
    signOutUser: () => dispatch(signOutUser())
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
