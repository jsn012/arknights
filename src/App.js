import { useState } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

import itemData from './testdata.json';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/is/season2/item/*" element={<Is2 />} />
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
  const [searchItem, setSearchItem] = useState(null);
  const [option, setOption] = useState('id');

  return(
    <>
      <header>
        <div className='search'>
          <select className='options' name='options' onChange={(e) => {
            setOption(e.target.value);
          }}>
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
            {itemData.filter((data) => {
              if (searchItem == null || searchItem == "") {
                return data;
              }
              else {
                if (option == 'id') {
                  if (data.no.includes(searchItem)) { return data; }
                } else if (option == 'name') {
                  if (data.name.toLowerCase().includes(searchItem.toLowerCase())) { return data; }
                }
              }
            }).map(item => (
              <Item id={item.id} key={`item${item.id}`} />
            ))}
          </div>
          <Routes>
            <Route path="/:itemId" element={<ItemDetail />} />
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
    <div className='item' id={id} style={id === 0 ? {display: 'none'} : {}}>
      <div className='item-icon'
        style={iconStyle}>
        <Link to={`/is/season2/item/${id}`}><p>{itemData[id].no}</p></Link>
      </div>
    </div>
  );
}

function ItemDetail() {
  const navigate = useNavigate();
  const id = useParams().itemId;
  const iconStyle = { backgroundImage: `url(${process.env.PUBLIC_URL + itemData[id].icon})` }

  return(
    <section className='item__section' id={id}>
      <div className='item-section__background' onClick={() => { navigate("/is/season2/item"); }}></div>
      <div className='item-section__inner'>
        <div className='item-no section__item'>{itemData[id].no}</div>
        <div className='item-icon section__item' style={iconStyle}></div>
        <div className='item-name section__item'>
          {itemData[id].name}
        </div>
        <div className='item-detail section__item'>
          {itemData[id].detail}
        </div>
      </div>
    </section>
  );
}

export default App;
