import { VFC } from 'react';
import Description from '../organisms/Description';
import SiteHeader from '../templates/SiteHeader';
import InfoList from '../organisms/InfoList';

const Books: VFC = () => {
  const page = 'Books';
  const title = 'Portfolio';
  const description =
    '日々キャッチアップしている姿勢を定量的に示すために、熟読した技術書をご紹介。（Webブラウザでの検索による学習は除外。）';

  return (
    <>
      <SiteHeader />
      <Description page={page} title={title} description={description} />
      <InfoList />
    </>
  );
};

export default Books;
