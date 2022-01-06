import { useState } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

import itemData2 from './itemdata.json';
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

  const [gridCheck, setGridCheck] = useState([1, 1, 1, 1, 1, 1, 1]);
  const [gridStyle, setGridStyle] =
    useState(['grid-on', 'grid-on', 'grid-on', 'grid-on', 'grid-on', 'grid-on', 'grid-on']);

  const gridOnOff = () => {
    // if (gridCheck === 0) {
    //   setGridStyle[0] ('grid-on');
    //   setGridCheck(1);
    // } else {
    //   setGridStyle[0]('grid-off');
    //   setGridCheck(0);
    // }
  }

  return(
    <main>
      <div className='is2__main'>
        <section className={`relic_r ${gridStyle[0]}`}>
          <div className={`grid__header survival-suppor`} onClick={gridOnOff}>
            <span>Survival Suppor</span>
          </div>
          <div className='is2-item__grid'>
            {relic_r}
          </div>
        </section>
        <section className={`relic_a ${gridStyle[1]}`}>
          <div className={`grid__header gear-of-fight`} onClick={gridOnOff}>
            Gear Of Fight
          </div>
          <div className='is2-item__grid'>
            {relic_a}
          </div>
        </section>
        <section className={`relic_p ${gridStyle[2]}`}>
          <div className={`grid__header professional-tool`} onClick={gridOnOff}>
            Professional Tool
          </div>
          <div className='is2-item__grid'>
            {relic_p}
          </div>
        </section>
        <section className={`relic_q ${gridStyle[3]}`}>
          <div className={`grid__header collection-of-clever-use`} onClick={gridOnOff}>
            Collection Of Clever Use
          </div>
          <div className='is2-item__grid relic_q'>
            {relic_q}
          </div>
        </section>
        <section className={`relic_c ${gridStyle[4]}`}>
          <div className={`grid__header proof-of-glory`} onClick={gridOnOff}>
            Proof Of Glory
          </div>
          <div className='is2-item__grid relic_c'>
            {relic_c}
          </div>
        </section>
        <section className={`relic_m ${gridStyle[5]}`}>
          <div className={`grid__header storyteller`} onClick={gridOnOff}>
            Storyteller
          </div>
          <div className='is2-item__grid relic_m'>
            {relic_m}
          </div>
        </section>
        <section className={`relic_sp ${gridStyle[6]}`}>
          <div className={`grid__header secret-in-the-troupe`} onClick={gridOnOff}>
            Secret In The Troupe
          </div>
          <div className='is2-item__grid relic_sp'>
            {relic_sp}
          </div>
        </section>
        <Routes>
          <Route path="/:itemId" element={<ItemDetail2 />} />
        </Routes>
      </div>
    </main>
  );
}

function Item2(props) {
  const id = props.id;
  const data = props.data;
  const iconStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL+'/items/'+itemData2[data].id}.png)`,
    borderBottom: `3px solid ${itemData2[data].rarity == "NORMAL" ? '#aaa' : 
      (itemData2[data].rarity == "RARE" ? '#6563FE' : '#FFCD32')}`
  }

  return(
    <div className='item' id={id}>
      <div className='item-icon'
        style={iconStyle}>
        <Link to={`/is/season2/item/${id}`}><p>{id > 203 ? `SP${String(id-203).padStart(2, '0')}` : String(id).padStart(3, '0')}</p></Link>
      </div>
    </div>
  );
}

function ItemDetail2() {
  const navigate = useNavigate();
  const items2 = Object.keys(itemData2);
  const id = useParams().itemId-1;
  const iconStyle = { backgroundImage: `url(${process.env.PUBLIC_URL + '/items/' + itemData2[items2[id]].id}.png)` }

  return(
    <section className='item__section' id={id}>
      <div className='item-section__background' onClick={() => { navigate(-1); }}></div>
      <div className='item-section__inner'>
        <div className='item-no section__item'>{id > 203-1 ? `SP${String(id-202).padStart(2, '0')}` : String(id + 1).padStart(3, '0')}</div>
        <div className='item-icon section__item' style={iconStyle}></div>
        <div className='item-name section__item'>
          {itemData2[items2[id]].nameKr}
        </div>
        <div className='item-detail section__item'>
          {itemData2[items2[id]].usageKr}
        </div>
      </div>
    </section>
  );
}

export default App;