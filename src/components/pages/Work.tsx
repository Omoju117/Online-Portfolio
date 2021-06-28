import { VFC } from 'react';
import {
  cardInfo3lMuseum,
  cardInfoIllustration,
  cardInfoTaskList,
} from '../../data/Data';
import Card from '../organisms/Card';
import Description from '../organisms/Description';
import SiteHeader from '../templates/SiteHeader';

const Work: VFC = () => {
  const page = 'Work';
  const title = 'Portfolio';
  const description = 'プライベートでアウトプットしている活動・作品を紹介。';

  return (
    <>
      <SiteHeader />
      <Description page={page} title={title} description={description} />
      <div className="wrapper">
        <ul className="cards-space-container">
          <li>
            <Card
              cardType="work"
              imgSrc="3lmuseum_image.png"
              information={cardInfo3lMuseum}
              to="https://www.3l-museum.com/"
            />
          </li>
          <li>
            <Card
              cardType="work"
              imgSrc="Illustration_image.png"
              information={cardInfoIllustration}
            />
          </li>
          <li>
            <Card
              cardType="work"
              imgSrc="Drag&DropTaskList_image.png"
              information={cardInfoTaskList}
              to="https://omoju117.github.io/DragAndDrop-TaskList/"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Work;
