import React from 'react';

function handleButtonClick() {}

export default function App() {
  const registers = [{
    id: 1,
    information: '마녀식당 | 한식 | 서울시 강남구',
  }];

  return (
    <div>
      <h1>Restaurant</h1>
      <ul>
        <li>
          {registers[0].information}
        </li>
      </ul>
      <input type="text" placeholder="이름" />
      <input type="text" placeholder="분류" />
      <input type="text" placeholder="주소" />
      <button type="button" onClick={handleButtonClick}>
        등록
      </button>
    </div>
  );
}
