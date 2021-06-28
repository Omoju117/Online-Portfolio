import { VFC } from 'react';
import { CareerDescription } from '../../data/Data';

type Props = {
  careerDescription: CareerDescription;
};

const CareerInfo: VFC<Props> = ({ careerDescription }) => (
  <>
    <div className="career-info-container bgleft">
      <div className="career-info-left">
        <p className="career-happen-time">{careerDescription.when}</p>
        <h1 className="career-event">{careerDescription.careerEvent}</h1>
      </div>
      <div className="career-info-right">
        <p className="career-description">{careerDescription.description}</p>
      </div>
    </div>
    <hr />
  </>
);

export default CareerInfo;
