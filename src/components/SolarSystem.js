import React from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="planets">
        <Title headline="Planetas" />
        {Planets.map((planet) => (<PlanetCard
          planetName={ planet.name }
          planetImage={ planet.image }
          key={ planet.name }
        />))}

      </div>
    );
  }
}
export default SolarSystem;
