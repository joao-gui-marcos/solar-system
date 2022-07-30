import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missions">
          {missions.map((elem) => (
            <div key={ elem.name } className="mission-card">
              <MissionCard
                name={ elem.name }
                year={ elem.year }
                country={ elem.country }
                destination={ elem.destination }
              />
            </div>))}
        </div>

      </div>
    );
  }
}

export default Missions;
