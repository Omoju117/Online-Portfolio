import { VFC } from 'react';
import {
  cardInfoAdobeXd,
  cardInfoAngular,
  cardInfoJava,
  cardInfoPhotoshop,
  cardInfoReact,
  cardInfoTypeScript,
} from '../../data/Data';
import Card from '../organisms/Card';
import Description from '../organisms/Description';
import SiteHeader from '../templates/SiteHeader';

const Skill: VFC = () => {
  const page = 'Skill';
  const title = 'Portfolio';
  const description =
    '現職、及びプライベートで使用している技術・ツールを紹介。';

  return (
    <>
      <SiteHeader />
      <Description page={page} title={title} description={description} />
      <div className="wrapper">
        <ul className="cards-space-container">
          <li>
            <Card
              cardType="skill"
              imgSrc="TypeScript_logo.png"
              information={cardInfoTypeScript}
            />
          </li>
          <li>
            <Card
              cardType="skill"
              imgSrc="React_logo.png"
              information={cardInfoReact}
            />
          </li>
          <li>
            <Card
              cardType="skill"
              imgSrc="Java_logo.png"
              information={cardInfoJava}
            />
          </li>
          <li>
            <Card
              cardType="skill"
              imgSrc="Angular_logo.png"
              information={cardInfoAngular}
            />
          </li>
          <li>
            <Card
              cardType="skill"
              imgSrc="Photoshop_logo.png"
              information={cardInfoPhotoshop}
            />
          </li>
          <li>
            <Card
              cardType="skill"
              imgSrc="AdobeXd_logo.png"
              information={cardInfoAdobeXd}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Skill;
