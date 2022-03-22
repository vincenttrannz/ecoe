import React from 'react';
import NavBar from './components/NavBar';
import Card from './components/Card';

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
            <Card
              imgPath={"/img/thumbnail-1.jpg"}
              title={`Title 01`}
              tags={["Articles", "Building", "Eco"]}
              content={`
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nesciunt voluptatibus aliquam iure aspernatur excepturi vel, quisquam dolore perferendis, consequuntur unde iusto rem nihil aperiam sint provident, hic aut? Odit?
              `}
              link={"/"}
            />
            <Card
              imgPath={"/img/thumbnail-2.jpg"}
              title={`Title 02`}
              tags={["Green", "Tools"]}
              content={`
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nesciunt voluptatibus aliquam iure aspernatur excepturi vel, quisquam dolore perferendis, consequuntur unde iusto rem nihil aperiam sint provident, hic aut? Odit? Pariatur nesciunt voluptatibus aliquam iure aspernatur excepturi vel, quisquam dolore perferendis.
              `}
              link={"/"}
            />
          </div>
          <div className='sticky-nav-container'>
            Sticky Nav
          </div>
        </div>
      </div>
    </>
  );
}
