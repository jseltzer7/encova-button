# Encova-button
Rebuild of the button. Given the tag `<encova-button>`

# Using the tag
Has text attribute to fill for the button's text

# Versioning
0.0.1 - 7/7/20 2:40 CST - Built basic encova styled button, pushed to github repo, builds correctly in stencil

0.0.2 - 7/7/20 2:45 CST - Forgot to run `npm run build`, commit and push then published to NPM

0.0.3 - Minor update - 7/7/20 3:11 CST - Working correctly! Imported well into the React Application - needed the customElements polyfills added to index.js in order to run. Polyfill imported from loader folder in index.js, component imported from component name in any file it is used in.

0.0.4 - Minor Update - 7/7/20 3:30 CST - Minor readme updates to make sure they appear on NPM

0.0.5 - Storybook Addition - 7/8/20 8:20 CST - Storybook added to project. Added `preview.js` file and `build.watch` script. To run correctly, run `npm run build.watch`, then run `npm run storybook`. Storybook requires a prod build of the component.

0.0.6 - Second Component Addition - 7/8/20 ___ CST - Form component added to project. Story files added for storybook as well. Ran `npm run build` before testing and publishing. Once published, will be tested in React App. `build.watch` might not actually be necessary for running storybook.

0.0.7 - 7/8/20 9:20 CST - Updated description for package

0.0.8 - 7/8/20 ___ CST - Adding Storybooks Knobs Addon to project


# Runtime
Runs through stencil `npm run start`

# Storybook Installation Steps
To install Storybook: `npx -p @storybook/cli sb init --type html`

# Running Storybook
Run `npm run storybook`

# Using Stories
Keep all stories in the ./stories folder. Main.js knows to look there for all Storybook files