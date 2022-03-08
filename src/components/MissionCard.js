import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <p data-testid="mission-name" className="mission-titles">{name}</p>
        <p data-testid="mission-year" className="minor-titles">{year}</p>
        <p data-testid="mission-country" className="minor-titles">{country}</p>
        <p data-testid="mission-destination" className="minor-titles">{destination}</p>
      </div>
    );
  }
}
MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
export default MissionCard;
