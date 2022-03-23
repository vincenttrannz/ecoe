import React from 'react';
import CardData from './data/cards.json'
import NavBar from './components/NavBar';
import Card from './components/Card';
import SideNav from './components/SideNav';

export default function App() {
  return (
    <>
      <NavBar/>
      <div className='hero'>
        <div className='container hero__container'>
          <h1>WELCOME TO ECO ENERGY</h1>
        </div>
      </div>
      <div className='container main'>
        <div className='main__container'>
          <div className='cards-container'> 
            {
              CardData.map((data, index) => {
                return (
                  <Card
                    key={index}
                    imgPath={data.imgPath}
                    title={data.title}
                    tags={data.tags}
                    content={data.content}
                    link={data.link}
                  />
                )
              })
            }
          </div>
          <SideNav SidenavData={CardData} SidenavTitle={"Side Navigation"}/>
        </div>
      </div>
    </>
  );
}
