import { VFC } from 'react';
import Card from '../../components/organisms/Card';
import { CardInformation } from '../../data/Data';

type Props = {
  cardType: string;
  imgSrc: string;
  information: CardInformation;
  to: string;
};

const LinkedCard: VFC<Props> = ({ cardType, imgSrc, information }) => (
  <Card cardType={cardType} imgSrc={imgSrc} information={information} />
);

export default LinkedCard;
