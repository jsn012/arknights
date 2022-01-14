import { useState } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
import { Helmet, HelmetProvider } from "react-helmet-async";

import itemData2 from './itemdata.json';
import './App.css';
import React from 'react';

function App() {
  const bgImg = { backgroundImage: `url(${process.env.PUBLIC_URL + '/img/is2-background.jpg'})` }

  return (
    <div className="App">
      <main className='background bg-img' style={bgImg}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/is/season2" element={<Is2 />} />
          <Route path="/is/season2/item/*" element={<Is2Item />} />
          <Route path="/is/season2/others" element={<Is2Others />} />
        </Routes>
      </main>
    </div>
  );
}

function Meta({data}) {
  // const lang = "ko_KR";
  const siteName = "Arknights - 자승넛"
  const title = data.title;
  const description = data.description;
  const canonical = `https://jsn012.github.io/arknights${data.canonical}`;
  const type = data.type === undefined ? 'website' : data.type;
  const icon = data.icon;
  const author = "자승넛 MayNut"

  return(
    <HelmetProvider>
      <Helmet titleTemplate="%s">
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>{title}</title>

        <link rel="icon" href={`${process.env.PUBLIC_URL}${icon ? icon : '/rhodes_icon.png'}`} />
        <link rel="apple-touch-icon" href={`${process.env.PUBLIC_URL}${icon ? icon : '/rhodes_icon.png'}`} />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="twitter:title" content={author} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content={siteName} />
        
        <meta property="og:title" content={title} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={canonical} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:image" content={`${process.env.PUBLIC_URL}${icon ? icon : '/rhodes_icon.png'}`} />
        <meta property="og:locale" content="ko_KR" />
      </Helmet>
    </HelmetProvider>
  );
}

function Main() {
  const navigate = useNavigate();

  return(
    <div className='main'>
      <button type='button' onClick={() => {navigate('/is/season2')}}>로그라이크2</button>
    </div>
  );
}

function Is2() {
  const navigate = useNavigate();
  const logoImg = { backgroundImage: `url(${process.env.PUBLIC_URL + '/img/crimson-solitaire.png'})` }
  const titleImg = { backgroundImage: `url(${process.env.PUBLIC_URL + '/img/crimson-solitaire-title.png'})` }

  const metaData = {
    title: '팬텀과 크림슨 솔리테어',
    description: '명일방주 통합전략#2 팬텀과 크림슨 솔리테어에 등장하는 소장품과 여러 아이템들 etc. _ MayNut',
    canonical: `/is/season2`,
  }

  const readyMessage = () => {
    alert('준비 중입니다.');
  }

  return (
    <>
      <Meta data={metaData} />
      <div className='is2'>
        <div className='is2--logo'>
          <div className='logo' style={logoImg}> </div>
          <div className='title' style={titleImg}> </div>
        </div>
        <div className='is2__button'>
          <button type='button' onClick={() => { navigate('/is/season2/item') }}>소장품</button>
          <button type='button' onClick={readyMessage}>레퍼토리</button>
          {/* <button type='button' onClick={() => { navigate('/is/season2/others') }}>기타</button> */}
          <button type='button' onClick={readyMessage}>기타</button>
        </div>
      </div>
    </>
  );
}

function Is2Header() {
  const navigate = useNavigate();
  const hpIcon = { backgroundImage: `url(${process.env.PUBLIC_URL + '/img/hypergryph-icon.png'})` }

  return(
    <header className='is2-item__header'>
      <div className='header-back__btn'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
          className="bi bi-chevron-left" viewBox="0 0 16 16" onClick={() => navigate('/is/season2')}>
          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
        </svg>
      </div>
      <a href='https://ak.hypergryph.com/is/crimsonsolitaire' target='_blank' rel='noreferrer noopener'>
        <div className='go-hp__btn bg-img' style={hpIcon}></div>
      </a>
    </header>
  );
}

function Is2Item() {
  const navigate = useNavigate();
  const items2 = Object.keys(itemData2);
  let itemId = 1;

  let relic_r = [];
  let relic_a = [];
  let relic_p = [];
  let relic_q = [];
  let relic_c = [];
  let relic_m = [];
  let relic_sp = [];

  for (let i=0; i<items2.length; i++) {
    if (i < 44) {
      relic_r.push(<Item2 data={items2[i]} id={itemId++} key={items2[i]} />);
    } else if (i < 44 + 48) {
      relic_a.push(<Item2 data={items2[i]} id={itemId++} key={items2[i]} />);
    } else if (i < 44 + 48 + 47) {
      relic_p.push(<Item2 data={items2[i]} id={itemId++} key={items2[i]} />);
    } else if (i < 44 + 48 + 47 + 37) {
      relic_q.push(<Item2 data={items2[i]} id={itemId++} key={items2[i]} />);
    } else if (i < 44 + 48 + 47 + 37 + 6) {
      relic_c.push(<Item2 data={items2[i]} id={itemId++} key={items2[i]} />);
    } else if (i < 44 + 48 + 47 + 37 + 6 + 21) {
      relic_m.push(<Item2 data={items2[i]} id={itemId++} key={items2[i]} />);
    } else if (i < 44 + 48 + 47 + 37 + 6 + 21 + 7) {
      relic_sp.push(<Item2 data={items2[i]} id={itemId++} key={items2[i]} />);
    }
  }

  const itemArr = [
    { data: relic_r, _data: "relic_r", title: "Survival Support", _title: "survival-support" },
    { data: relic_a, _data: "relic_a", title: "Gear Of Fight", _title: "gear-of-fight" },
    { data: relic_p, _data: "relic_p", title: "Professional Tool", _title: "professional-tool" },
    { data: relic_q, _data: "relic_q", title: "Collection Of Clever Use", _title: "collection-of-clever-use" },
    { data: relic_c, _data: "relic_c", title: "Proof Of Glory", _title: "proof-of-glory" },
    { data: relic_m, _data: "relic_m", title: "Storyteller", _title: "storyteller" },
    { data: relic_sp, _data: "relic_sp", title: "Secret in the Troupe", _title: "secret-in-the-troupe" }
  ]

  let itemGrid = [];
  for (let i=0; i<itemArr.length; i++) {
    itemGrid.push(<ItemGrid arr={itemArr[i]} key={itemArr[i]._data} />);
  }

  const metaData = {
    title: '소장품 도감 - 팬텀과 크림슨 솔리테어',
    description: '명일방주 통합전략#2 팬텀과 크림슨 솔리테어 소장품 한글 도감 _ MayNut',
    canonical: '/is/season2/item',
  }

  return(
    <>
      <Meta data={metaData} />
      <section className='is2-item'>
        <Is2Header />
        <main className='is2-item__main'>
          <div className='item-grid__wrap'>
            {itemGrid}
          </div>
          <Routes>
            <Route path="/:itemId" element={<ItemDetail2 />} />
          </Routes>
        </main>
      </section>
    </>
  );
}

function ItemGrid(props) {
  return(
    <section className={props.arr._data}>
      <div className={`grid__header ${props.arr._title}`}>
        <span>{props.arr.title}</span>
      </div>
      <div className='is2-item__grid'>
        {props.arr.data}
      </div>
    </section>
  );
}

function Item2(props) {
  const navigate = useNavigate();
  const id = props.id;
  const data = props.data;
  const iconStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL+'/img/items/'+itemData2[data].id}.png)`,
    // borderBottom: `3px solid ${itemData2[data].rarity == "NORMAL" ? '#aaa' : 
    //   (itemData2[data].rarity == "RARE" ? '#6563FE' : '#FFCD32')}`
  }

  return(
    <div className='item' id={id} onClick={() => { navigate(`/is/season2/item/${id}`) }}>
      <div className='item-icon' style={iconStyle}>
        <p>{id > 203 ? `PCS${String(id - 203).padStart(2, '0')}` : String(id).padStart(3, '0')}</p>
      </div>
    </div>
  );
}

function ItemDetail2() {
  const navigate = useNavigate();
  const items2 = Object.keys(itemData2);
  const id = useParams().itemId-1;
  const iconStyle = { backgroundImage: `url(${process.env.PUBLIC_URL + '/img/items/' + itemData2[items2[id]].id}.png)` }

  const metaData = {
    title: `${itemData2[items2[id]].nameKr} - 팬텀과 크림슨 솔리테어`,
    description: itemData2[items2[id]].usageKr,
    canonical: `/is/season2/item/${id+1}`,
    icon: `/img/items/${itemData2[items2[id]].id}.png`,
  }

  return (
    <>
      <Meta data={metaData} />
      <section className='item__section' id={id}>
        <div className='item-section__background' onClick={() => { navigate(-1); }}></div>
        <div className='item-section__inner'>
          <div className='item-no section__item'>{id > 203-1 ? `PCS${String(id-202).padStart(2, '0')}` : String(id + 1).padStart(3, '0')}</div>
          <div className='item-icon section__item' style={iconStyle}></div>
          <div className='item-name section__item'>
            {itemData2[items2[id]].nameKr}
          </div>
          <div className='item-detail section__item'>
            {itemData2[items2[id]].usageKr}
          </div>
          <div className='item-section__close-btn' onClick={() => { navigate(-1); }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" strokeWidth="6">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}

function Is2Others() {
  const navigate = useNavigate();

  return(
    <section className='is2-item'>
      <Is2Header />
    </section>
  );
}

export default App;