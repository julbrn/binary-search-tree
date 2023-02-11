import React, { useEffect, useState, useCallback } from 'react';
import "./App.css";
import { BinarySearch } from '../BinarySearch';
import { Tree } from '../Tree';

const newNode = new BinarySearch();

function App() {
  const [root, setRoot] = useState(null);

  useEffect(() => {
    newNode.add(20);
    newNode.add(40);
    newNode.add(35);
    newNode.add(55);
    newNode.add(-10);
    newNode.add(-50);
    newNode.add(5);
    setRoot((prev) => ({ ...prev, ...newNode.root }));

  }, []);

  function addNumber() {
    const number = Math.round(Math.random() * (100 - -100) + -100);
    newNode.add(number);
    setRoot((prev) => ({ ...prev, ...newNode.root }));
  }

  let handleSpacePress = useCallback(event => {
    if (event.code === 'Space') {
      addNumber();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keyup', handleSpacePress);
    return () => {
      window.removeEventListener("keyup", handleSpacePress);
    };
  }, [handleSpacePress]);

  return (
    <div className="content">
      <h1 className="content__header">Бинарное дерево поиска</h1>
      <p className='content__description'><span className="content__emphasis">Описание: </span>При нажатии на пробел генерируется номер в диапазоне [-100, 100] и добавляется в дерево.</p>
      <div className="tf-tree tf-custom">
        <ul>
          <li className="tf-dotted-children">
            <Tree number={root} parent={newNode.root} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;