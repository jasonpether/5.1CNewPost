import React from 'react';
import { FormField, Form, Radio } from 'semantic-ui-react';
import './Radio.css';

const RadioExampleRadioGroup = ({ selectedType, onTypeChange }) => {
  return (
    <Form>
      <FormField className="Form">Select a Post Type:</FormField>

      <FormField className="Form">
        <Radio
          label="Question"
          name="radioGroup"
          value="Question"
          checked={selectedType === 'Question'}
          onChange={(e, { value }) => onTypeChange(value)}
        />
      </FormField>

      <FormField className="Form">
        <Radio
          label="Article"
          name="radioGroup"
          value="Article"
          checked={selectedType === 'Article'}
          onChange={(e, { value }) => onTypeChange(value)}
        />
      </FormField>
    </Form>
  );
};

export default RadioExampleRadioGroup;
