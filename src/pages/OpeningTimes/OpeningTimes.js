import React from 'react';
import './OpeningTimes.styles.scss';
import openingTimes from './../../items-store/openingTimes';
import Card from 'react-bootstrap/Card';

const OpeningTimes = () => (
  <div className='OpeningTimes'>
    <Card className='Card'>
      <Card.Body>
        <Card.Title className='title'>
          Opening Times
        </Card.Title>
        <Card.Text>
          <ul>
          {
            openingTimes.map( day => (
              <li className='listItem'>
                <span className='day'>{day.Day} :</span>
                <span className='time'>{day.Time}</span>
              </li>             
            ))
          }
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
)

export default OpeningTimes
