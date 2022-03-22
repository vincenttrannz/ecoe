import React from "react";
import Tag from './Tag';

export default function Card({
  imgPath, title, content, link, tags
}) {
  return (
    <div className="card">
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
        <a className="read-more" href={link}>
          Read more
        </a>
      </div>
    </div>
  );
}
