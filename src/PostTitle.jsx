import React from 'react';
import { Input } from 'semantic-ui-react';
import './PostTitle.css';

const PostTitle = (props) => (
  <div className="input-container">
    <label>{props.title}</label>
    <Input placeholder={props.text}/>
  </div>
);
export default PostTitle;
