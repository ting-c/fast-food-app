import React from 'react';
import './Header.styles.scss';
import PropTypes from 'prop-types';

const Header = ({header}) => (
  <div className="header" data-test='HeaderComponent' >
    {header}
  </div>
);

Header.propTypes = {
  header: PropTypes.string
};

export default Header;
