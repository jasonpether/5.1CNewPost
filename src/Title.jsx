import React from "react";
import { Header } from 'semantic-ui-react'
import './Title.css'

const Title = ({text}) => (
  <div className="TextContainer">
    <Header as='h3' block>
      {text}
    </Header>
  </div>
 
)

export default Title