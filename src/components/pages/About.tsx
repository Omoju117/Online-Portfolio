import { VFC } from 'react';
import SiteHeader from '../templates/SiteHeader';
import Description from '../organisms/Description';
import CareerInfo from '../organisms/CareerInfo';
import {
  developedConstructionSystem,
  developedCreditCardSystem,
  graduateSeijo,
  inHouseDevelopment,
  joinedNicCo,
} from '../../data/Data';

const About: VFC = () => {
  const page = 'About';
  const title = 'Portfolio | 遠藤主樹';
  const description =
    'UI/UXデザインの理解・提案ができるフロントエンドエンジニアとしてのキャリアアップを目指して転職活動中。25歳。 GitHub：@Omoju117';

  return (
    <>
      <SiteHeader />
      <Description page={page} title={title} description={description} />
      <div className="about-text">
        <div className="wrapper">
          <h1>Career</h1>
          <hr />
          <CareerInfo careerDescription={graduateSeijo} />
          <CareerInfo careerDescription={joinedNicCo} />
          <CareerInfo careerDescription={developedCreditCardSystem} />
          <CareerInfo careerDescription={inHouseDevelopment} />
          <CareerInfo careerDescription={developedConstructionSystem} />
        </div>
      </div>
    </>
  );
};

export default About;
