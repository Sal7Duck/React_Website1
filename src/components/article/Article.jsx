import React from 'react';
import './Article.css';

const Article = ({imageURL, date, title}) => {
    return(
        <div className='gpt3__blog-container_article'>
            <div className='gpt3__blog-container_article-image'>
                <img src={imageURL} alt='blog desc pic'/>
            </div>
            <div className='gpt3__blog-container_article-content'>
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read full article</p>
            </div>
        </div>
    )
}

export default Article;