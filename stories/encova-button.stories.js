//Follow the structure of this file to get started in writing stories with knobs

import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

//This is how to set up the cascade for the stories. It will hold all the stories from this file
export default {
    title: 'Encova-Button',
};

export const Default = () => 
    `<encova-button text="Default"></encova-button>`;

export const SampleText = () => `
    <encova-button text="Sample Text"></encova-button>
`;

export const AlertText = () => `
    <encova-button text="Text" message="Alert Text"></encova-button>
`;

export const DisabledButton = () => `
    <encova-button disabled text="Disabled Button" message="This should not pop up"></encova-button>
`

/**
 * There are other ways to write knob functions, but this way made more sense to me
 */
storiesOf('Encova-Button', module)
  .addDecorator(withKnobs)
  .add(
    'Change Text using Knobs',
    () => {
        /**
         * This creates an element inside of the story, then adds all attributes needed
         * In this case, the text function comes from knobs and allows for the text to be changed
         */
        const el = document.createElement('encova-button');
        el.text = text('Button Text', 'Enter text');
        return el;
    }
);


storiesOf('Encova-Button', module)
  .addDecorator(withKnobs)
  .add(
    'Knob Button and Alert',
    () => {
        const el = document.createElement('encova-button');
        el.text = text('Button Text', 'Enter text');
        el.message = text("Alert Text", "Enter Text");
        return el;
    }
);

storiesOf('Encova-Button', module)
  .addDecorator(withKnobs)
  .add(
    'Disabled',
    () => {
        const el = document.createElement('encova-button');
        el.disabled = boolean('Disabled?', false);
        if (el.disabled) {
            el.text = "This is a disabled button";
        } else {
            el.text = "This button is not disabled";
            el.message = "This button works";
        }
        
        return el;
    }
);

storiesOf('Encova-Button', module)
    .addDecorator(withKnobs)
    .add(
        'Button Type',
        () => {
            const buttonType = {
                Default: 'default',
                Warning: 'warning',
                Info: 'info'
            };
            const el = document.createElement('encova-button');
            el.type = select('Button type:', buttonType, null);
            el.text = "Button text";
            return el;
        }
    );
  