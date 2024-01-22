import React from 'react';
import './Blog.css';
import { Article } from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './imports';

const title = "GPT-3 and Open  AI is the future. Let us exlore how it is?";

const Blog = () => {
    return (
        <div className='gpt3__blog section__padding' id='blog'>
            <div className='gpt3__blog-heading'>
                <h1 className='gradient__text'>
                    A lot is happening, We are blogging about it.
                </h1>
            </div>
            <div className='gpt3__blog-container'>
                <div className='gpt3__blog-container_groupA'>
                    <Article imageURL={blog01} date="Aug 25, 1999" title={title}/>
                </div>
                <div className='gpt3__blog-container_groupB'>
                    <Article imageURL={blog02} date="Aug 25, 1999" title={title}/>
                    <Article imageURL={blog03} date="Aug 25, 1999" title={title}/>
                    <Article imageURL={blog04} date="Aug 25, 1999" title={title}/>
                    <Article imageURL={blog05} date="Aug 25, 1999" title={title}/>
                </div>
            </div>
        </div>
    )
}

export default Blog;
