import { VFC } from 'react';
import { booksInfoList } from '../../data/Data';

const InfoList: VFC = () => {
  //   document.querySelectorAll('.book-info')?.forEach((target) => {
  //     target.addEventListener('hover', () => {
  //       document
  //         .querySelector('.book-title')
  //         ?.classList.toggle('focus-book-title');
  //     });
  //   });
  const No = 'No';

  return (
    <>
      <div className="books-container">
        <table>
          <thead>
            <tr>
              <td>{No}</td>
              <td>Title</td>
              <td>Purpose</td>
              <td>Timing</td>
            </tr>
          </thead>
          <tbody>
            {booksInfoList.map((booksInfo) => (
              <tr className="book-title" key={booksInfo.no}>
                <td>{booksInfo.no}</td>
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
