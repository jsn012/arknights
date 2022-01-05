import { useState } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';

import itemData from './testdata.json';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/is/season2/*" element={<Is2 />} />
      </Routes>
    </div>
  );
}

function Main() {
  return(
    <div className='main'>
      Main
    </div>
  );
}

function Is2() {
  let itemList = [];
  const [searchItem, setSearchItem] = useState(null);
  const [items, setItems] = useState(itemData);

  // const filteredProducts = itemData.filter((item) => {
  //   return item.id == searchValue;
  // });

  for (let i=0; i<itemData.length; i++) {
    itemList.push( <Item id={itemData[i].id} key={`item${itemData[i].id}`} /> );
  }

  return(
    <>
      <header>
        <div className='search'>
          <select className='options' name='options'>
            <option value='id'>ID</option>
            <option value='name'>이름</option>
          </select>
          <input
            className='search-bar'
            type="texy"
            placeholder="Search"
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
          />
        </div>
      </header>
      <main>
        <div className='is2__main'>
          <div className='is2-item__grid'>
            {/* {itemList} */}
            {itemData.map(item => (
              <Item id={item.id} key={`item${item.id}`} />
            ))}
          </div>
          <Routes>
            <Route path="/item/:itemId" element={<ItemDetail />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

function Item(props) {
  const id = props.id;
  const iconStyle = { backgroundImage: `url(${process.env.PUBLIC_URL + itemData[id].icon})` }

  return(
    <div className='item' id={id}>
      <div className='item-icon'
        style={iconStyle}>
        <Link to={`/is/season2/item/${id}`}><p>{itemData[id].id}</p></Link>
      </div>
    </div>
  );
}

function ItemDetail() {
  const id = useParams().itemId;
  const iconStyle = { backgroundImage: `url(${process.env.PUBLIC_URL + itemData[id].icon})` }
  console.log(id);

  return(
    <section className='item__section' id={id}>
      <div className='close__button'>
        <Link to="/is/season2"></Link>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-compact-down" viewBox="0 0 16 16" strokeWidth="3">
          <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
        </svg>
      </div>
      <div className='item-icon section__item' style={iconStyle}></div>
      <div className='item-name section__item'>
        {itemData[id].name}
      </div>
      <div className='item-detail section__item'>
        {itemData[id].detail}
      </div>
    </section>
  );
}

export default App;
