import { VFC } from 'react';
import { booksInfoList } from '../../data/Data';

const InfoList: VFC = () => {
  // 本の情報を別タブで開く
  const openAnotherTab = (to: string) => {
    window.open(to);
  };

  return (
    <>
      <div className="books-container">
        <table>
          <thead>
            <tr>
              <td>No</td>
              <td>Title</td>
              <td>Purpose</td>
              <td>Timing</td>
            </tr>
          </thead>
          <tbody>
            {booksInfoList.map((booksInfo, index) => (
              <tr
                className="book-info"
                key={booksInfo.no}
                onClick={() => openAnotherTab(booksInfo.url)}
              >
                <td>{index + 1}</td>
                <td>{booksInfo.title}</td>
                <td>{booksInfo.purpose}</td>
                <td>{booksInfo.when}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InfoList;
