# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# EcoE

## 1.Components

### App.jsx

This is the main React component use for rendering the site. The component is currently mounting NavBar, Card and SideNav components.

The website includes 4 other main components and 1 json data:
* [Card.jsx](#card)
* [NavBar.jsx](#navbar)
* [SideNav.jsx](#sidenav)
* [Tag.jsx](#tag)
* [cards.json](#cardData)

### Card.jsx

The Card component use for rendering each of the article card. It required 5 props:
* imgPath: The path to article card image (currently image is storing in the public folder).
* title: The article's title.
* content: Quick article description.
* link: Link to the article inner page.
* tags: An array of tag (string) for each of the article card.

```jsx
import React from "react";
import Tag from './Tag';

export default function Card({
  imgPath, title, content, link, tags
}) {
  return (
    <div id={`${title.replaceAll(" ", "")}`} className="card-skin">
      <a className="card" href="#">
        <div className="card__img-container">
          <img src={imgPath} alt="Thumbnail one" />
        </div>
        <div className="card__content-container">
          <div className="card__tags-container">
            {
              tags.map((tag, i) => <Tag key={i} tag={tag}/>)
            }
          </div>
          <h3>{title}</h3>
          <p dangerouslySetInnerHTML={{__html: content}}></p>
          <span className="read-more" href={link}>
            Read more
          </span>
        </div>
      </a>
    </div>
  );
}
```

```scss
.cards-container {
  .card-skin {
    position: relative;
    margin-top: -30px;
    padding-top: 30px;
  }
  .card {
    &__img-container {}
    &__content-container {}
    &__tags-container {}
  }
}
```

  * `.cards-container` is the "grid" and re-present the parent of every card nested inside it.
  * `.card-skin` is a card wrapper aiming to support the side sticky navigation menu, onclick to scroll to the card (#ID) offset the top.
  * `.card__img-container` is a block that wrap the image and avoid the img "overflow" outside the container.
  * `.card__content-container` is a grid that wrap the content of the card.
  * `.card__tags-container` is a flex that wrap all the card tags.

### NavBar.jsx

NavBar component is for the top navigation. The responsive layout are:
* Desktop - Menu at the top of the page:
  - Left menu: Includes a link back home logo, main pages navigational links
  - Right menu: Includes a login link and Get Started button.
* Mobile - Menu with a hamburger:
  - Menu toggle scrolling up/down
  - Includes every links that required in the website.

```jsx
import React, { useState } from 'react';
import { ReactComponent as Logo } from '../img/logo.svg';
import { ReactComponent as Hamburger } from '../img/hamburger.svg';

export default function NavBar() {
  const [MenuExpanded, SetMenuExpanded] = useState(false);

  const handleMenuExpanded = (e) => {
    SetMenuExpanded(!MenuExpanded);
  }
  return (
    <>
      <header className="navbar__wrapper">
        <nav className='container'>
          <div className='navbar__container'>
            <div className='navbar__left-container'>
              <a className='logo__container' href='#'>
                <Logo className='icon'/>
                <h5><span className='font-colour-one'>E</span>co<span className='font-colour-one'>E</span></h5>
              </a>
              <div className='navi-links-container'>
                <a className='nav-link' href='#'>Home</a>
                <a className='nav-link' href='#'>About</a>
                <a className='nav-link' href='#'>News</a>
                <a className='nav-link' href='#'>Contact</a>
              </div>
            </div>
            <div className='navbar__right-container'>
              <a className='nav-link' href='#'>Login</a>
              <button className='btn btn-primary'>
                Get Started
              </button>
            </div>
            <Hamburger onClick={handleMenuExpanded} className='hamburger icon'/>
          </div>
        </nav>
        <div className={`dropdown ${!MenuExpanded ? "hidden" : ""}`}>
          <div className='container'>
            <div className='navi-links-container'>
              <a className='nav-link' href='#'>Home</a>
              <a className='nav-link' href='#'>About</a>
              <a className='nav-link' href='#'>News</a>
              <a className='nav-link' href='#'>Contact</a>
              <a className='nav-link' href='#'>Login</a>
              <button className='btn btn-primary'>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
```

```scss
.navbar {
  &__wrapper {
    //...
  }
  &__container {
    //...
    .logo {
      &__container {
        //...
      }
    }
    .navi-links-container {}
  }
  &__left-container, &__right-container {
    //...
  }
}

.dropdown, .hamburger {
  display: none;
}

@media (max-width: $mobile-screen-width) {
  // Mobile screen width = 767px
  .hamburger {
    display: block;
    cursor: pointer;
  }
  .navbar {
    //...
  }
  .dropdown {
    //...
    &.hidden {
      height: 0;
      padding: 0;
      overflow: hidden;
    }
  }
  .navi-links-container {
    //...
  }
}
```

  * `.navbar__wrapper` is a "flex" block which contain all the navigational blocks.
  * `.navbar__container` is a "flex" block container to align the left/right menu container with a space between.
  * `.navbar__left-container` & `.navbar__right-container` are two "flex" block that wrap all the links and Get Started button.
  * `.dropdown` & `.hamburger` are two items that show only in mobile.

### SideNav.jsx

```jsx
import React, { useState } from "react";
import { ReactComponent as ArrowRight } from '../img/arrow-right.svg';

export default function SideNav({
  SidenavTitle, SidenavData
}) {
  const [MenuExpanded, SetMenuExpanded] = useState(false);

  const handleMenuExpanded = (e) => {
    SetMenuExpanded(!MenuExpanded);
  }
  return (
    <div className="sidenav">
      <div className="sidenav-container">
        <h4 onClick={handleMenuExpanded}>{SidenavTitle}</h4>
        <div className={`sidenav-menu ${!MenuExpanded ? "hidden" : ""}`}>
          {
            SidenavData.map((link, index) => {
              return (
                <a key={index} href={`#${link.title.replaceAll(" ", "")}`} className="sidenav-link">
                  <h5>{link.title}</h5>
                  <ArrowRight className="icon sm" />
                </a>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
```

```scss
.sidenav {
  &-container {
    //...
  }
  &-menu {
    //...
  }
  &-link {
    //...
  }
}

@media (max-width: $mobile-screen-width) {
  // Mobile screen width = 767px
  .sidenav {
    //...
  }
}
```

### Tag.jsx

```jsx
import React from "react";

export default function Tag({tag}) {
  return (
    <div className="tag">
      <span>{tag}</span>
    </div>
  );
}
```

```scss
.tag {
  padding: 5px 10px;
  background-color: $colour-two;
  font-size: clamp(12px, 1vw, 14px);
  color: #fff;
  border-radius: 6px;
  width: fit-content;
}
```

### cards.json

Card data format for all the content on the card.

```json
[
  {
    "id": "number",
    "imgPath": "string",
    "title": "string",
    "tags": "string"[],
    "content": "string",
    "link": "string"
  }
]
```