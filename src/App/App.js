import React, { useEffect, useState, useCallback } from 'react';
import "./App.css";
import { BinarySearchTree } from '../BinarySearchTree/BinarySearchTree';

const binarySearchTree = new BinarySearchTree();

function Tree(props) {
  const { data } = props;

  function renderTree(node) {
    return Object.entries(node).map(function ([key, value]) {
      if (key === 'left' && typeof value === 'object') {
        if (value !== null) {
          return (
            <li key={value.data}>
              <Tree data={value} />
            </li>
          );
        }
        if (value === null) {
          return null;
        }
      } else if (key === 'right' && typeof value === 'object') {
        if (value !== null) {
          return (
            <li key={value.data}>
              <Tree data={value} />
            </li>
          );
        }
        if (value === null) {
          return null;
        }
      }
    });
  }

  return data ? (
    <>
      <span className="tf-nc">{data.data}</span>
      <ul>{renderTree(data)}</ul>
    </>
  ) : (
    'EMPTY'
  );
}

function App() {
  const [root, setRoot] = useState(null);

  useEffect(() => {
    binarySearchTree.add(20);
    binarySearchTree.add(40);
    binarySearchTree.add(35);
    binarySearchTree.add(55);
    binarySearchTree.add(0);
    binarySearchTree.add(-11);
    binarySearchTree.add(-5);
    setRoot((prev) => ({ ...prev, ...binarySearchTree.root }));

  }, []);

  function addNumber() {
    const number = Math.round(Math.random() * (100 - -100) + -100);
    binarySearchTree.add(number);
    setRoot((prev) => ({ ...prev, ...binarySearchTree.root }));
    console.log(number);
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
          <li>
            <Tree data={root} parent={binarySearchTree.root} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;