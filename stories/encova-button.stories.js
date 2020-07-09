import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';

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

storiesOf('Encova-Button', module)
  .addDecorator(withKnobs)
  .add(
    'Change Text using Knobs',
    () => {
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


  