import React from "react";
import './UserProfile.styles.scss';
import { connect } from "react-redux";
import { currentUserSelector } from "../../redux/selectors/userSelectors";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// receive props from redux then display user details
const UserProfile = ({ currentUser }) => {
  if (!currentUser) return (
        <div> Loading ... </div> )

  const { name, email, createdAt } = currentUser
  return (
		<Form className='UserProfile'>

			<Form.Group as={Row} >
				<Form.Label column sm="2">
					Name
				</Form.Label>
				<Col sm="10">
					<Form.Control plaintext readOnly defaultValue={name} />
				</Col>
			</Form.Group>

			<Form.Group as={Row} >
				<Form.Label column sm="2">
					Email
				</Form.Label>
				<Col sm="10">
					<Form.Control plaintext readOnly defaultValue={email} />
				</Col>
			</Form.Group>

			<Form.Group as={Row} >
				<Form.Label column sm="2">
					Created At
				</Form.Label>
				<Col sm="10">
					<Form.Control id='date' plaintext readOnly defaultValue={createdAt.toDate()} />
				</Col>
			</Form.Group>


		</Form>
	);
    
}

const mapStateToProps = state => ({
	currentUser: currentUserSelector(state)
});

export default connect(mapStateToProps)(UserProfile);
