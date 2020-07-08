import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'Encova-Button',
};

export const Default = () => 
    `<encova-button text="Default Text"></encova-button>`;

export const SampleText = () => `
    <encova-button text="Sample Text"></encova-button>
`;

// storiesOf('encova-button', module)
//   .addDecorator(withKnobs)
//   .add('Simple', () => `
//     <encova-button text="${text}"></encova-button>
//   `);

// const label = 'Button Text';
// const defaultValue = 'Sample Text';
// const groupId = 'GROUP-ID1';

// const value = text(label, defaultValue, groupId);

// export const Change = () => `
//     <encova-button text="${text('Button Text', "Enter text")}"></encova-button>
// `;

// storiesOf('Encova-Button', module)
//   .addDecorator(withKnobs)
//   .add(
//     'Change Text',
//     () => `
//       <encova-button text="{value = text('Click Me!', 'Label')}"></encova-button>
//     ` 
//   );

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


  