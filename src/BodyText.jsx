import React from 'react'
import { Input } from 'semantic-ui-react'
import './BodyText.css';

const BodyText = (props) => (
    <div className="body-container">

      <label>{props.title}</label>

      <Input size='massive' placeholder={props.text} />

    </div>
  );
export default BodyText