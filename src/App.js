import React, { useState } from 'react';
import './App.css';
import Title from './Title';
import RadioExampleRadioGroup from './Radio';
import PostTitle from './PostTitle';
import BodyText from './BodyText';
import Button from './Button';

function App() {

  const [selectedType, setSelectedType] = useState('Question');

  return (
    <div className="App">
        
        <Title text="New Post" 
        />

        <RadioExampleRadioGroup selectedType={selectedType} onTypeChange={setSelectedType} />

        <Title text="What do you want to ask or share" 
        />
        
        {selectedType === 'Question' ? 
        <div>
          <PostTitle title = "Title" text="Start your question with how, what why, etc."/> 

          <br/>

          <BodyText title="Describe your Problem"/>

          <PostTitle title = "Tags" text="Please add up to 3 tags to describe what your question is about e.g. Java"/> 

          <Button/>
          
        </div>

        : 
        <div>  
          <PostTitle title = "Title" text="Enter a descriptive Title"/>
          <br/>
          <BodyText title="Abstract" text="Enter a 1-paragraph Abstract"/>

          <br/>
          <BodyText title="Article Text" text="Enter a 1-paragraph Abstract"/>

          <PostTitle title = "Tags" text="Please add up to 3 tags to describe what your question is about e.g. Java"/> 

          <Button/>
         </div>
      
        
        }
        

      

    </div>
  );
}

export default App;
