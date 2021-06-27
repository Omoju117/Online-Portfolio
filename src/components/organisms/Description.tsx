import { VFC } from 'react';

type Props = {
  page: string;
  title: string;
  description: string;
};

const Description: VFC<Props> = ({ page, title, description }) => (
  <section>
    <div className="wrapper">
      <div className="description-container">
        <div className="icon-space">
          <img
            className="portfolio-icon"
            src="portfolioIcon.png"
            alt="Profile Icon"
          />
        </div>
        <div className="description-space">
          <h1>{page}</h1>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  </section>
);

export default Description;
