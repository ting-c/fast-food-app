import React from 'react';
import { connect } from 'react-redux';

// receive props from redux then display user details
const UserProfile = ({currentUser}) => {
  return (    
      <div>
        User Profile
      </div>    
  )
};


const mapStateToProps = (state) => (
  {
    currentUser: state.user.currentUser
  }
);

export default connect(mapStateToProps)(UserProfile)