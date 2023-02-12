import React, { useEffect, useState } from 'react';
import "./App.css";
import BinarySearch from '../BinarySearch';
import VisualizedTree from '../VisualizedTree';

const newTree = new BinarySearch();

const App = () => {
  const [root, setRoot] = useState(null);
  const handleSpacePress = (event) => {
    console.log(event);
    if ((event.code === 'Space') || (event.type === "touchstart")) {
      const randomNumber = Math.round(Math.random() * (100 - -100) + -100);
      newTree.add(randomNumber);
      setRoot((prev) => ({ ...prev, ...newTree.root }));
    }
  };

  useEffect(() => {
    newTree.add(20);
    newTree.add(1);
    newTree.add(35);
    newTree.add(55);
    newTree.add(-10);
    newTree.add(-50);
    newTree.add(5);
    setRoot((prev) => ({ ...prev, ...newTree.root }));
    window.addEventListener("keyup", handleSpacePress);
    window.addEventListener("touchstart", handleSpacePress);

    return () => {
      window.removeEventListener("keyup", handleSpacePress);
      window.removeEventListener("touchstart", handleSpacePress);
    };


  }, []);

  return (
    <div className="content">
      <h1 className="content__header">Бинарное дерево поиска</h1>
      <p className='content__description'><span className="content__emphasis">Описание: </span>При нажатии на пробел генерируется номер в диапазоне [-100, 100] и добавляется в дерево.</p>
      <div className="tf-tree tf-custom tf-gap-sm">
        <ul>
          <li className="tf-dotted-children">
            <VisualizedTree root={root} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;