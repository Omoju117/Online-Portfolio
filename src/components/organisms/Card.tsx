/* eslint @typescript-eslint/no-unsafe-assignment: 0 */
import { VFC } from 'react';
import { CardInformation } from '../../data/Data';

type Props = {
  cardType: string;
  imgSrc: string;
  information: CardInformation;
  to?: string;
};

const openAnotherTab = (to: string) => {
  window.open(to);
};

const Card: VFC<Props> = ({ cardType, imgSrc, information, to }) => {
  const cardBody = (
    <div className={`card-container ${cardType}`}>
      <div className="card-description-space">
        <h1>{information.type}</h1>
        <h2>{information.title}</h2>
        <p>{information.description}</p>
      </div>
      <div className="card-img-space">
        <img src={imgSrc} alt="card" />
      </div>
    </div>
  );

  if (to != null) {
    return (
      <>
        <label htmlFor={information.title}>{cardBody}</label>
        <input
          id={information.title}
          type="submit"
          onClick={() => openAnotherTab(to)}
        />
      </>
    );
  }

  return <div>{cardBody}</div>;
};

export default Card;
