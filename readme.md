# Component Library
Building of component library. Given the tag `<encova-button>`

## List of Components enclosed
`<encova-button>` Green rounded button. Attributes: text - Text to go on the button

`<encova-form>` Basic form with label, text field and submit button. On submit, text will clear and print to console.

# Versioning
0.0.1 - 7/7/20 2:40 CST - Built basic encova styled button, pushed to github repo, builds correctly in stencil

0.0.2 - 7/7/20 2:45 CST - Forgot to run `npm run build`, commit and push then published to NPM

0.0.3 - Minor update - 7/7/20 3:10 CST - Working correctly! Imported well into the React Application - needed the customElements polyfills added to index.js in order to run. Polyfill imported from loader folder in index.js, component imported from component name in any file it is used in.

0.0.4 - Minor Update - 7/7/20 3:30 CST - Minor readme updates to make sure they appear on NPM

0.0.5 - Storybook Addition - 7/8/20 8:20 CST - Storybook added to project. Added `preview.js` file and `build.watch` script. To run correctly, run `npm run build.watch`, then run `npm run storybook`. Storybook requires a prod build of the component.

0.0.6 - Second Component Addition - 7/8/20 9:00 CST - Form component added to project. Story files added for storybook as well. Ran `npm run build` before testing and publishing. Once published, will be tested in React App. `build.watch` might not actually be necessary for running storybook.

0.0.7 - 7/8/20 9:20 CST - Updated description for package

0.0.8 - 7/8/20 10:10 CST - Adding Storybooks Knobs Addon to project. Working correctly, added one story to `<encova-button>` that makes use of knobs addition.

0.0.9 - 7/8/20 1:30 CST - Added chromatic for static storybook generation hosting. Attempted deploying on multiple services, but all failed except chromatic. Link is located in links section.

0.0.10 - 7/9/20 8:00 CST - unpkg.com link works, script tag is below. Adding functionality to the encova-button for onClick. On click, alert window will display with given text. Wrote story with and without knobs for the alert.

# Runtime
Runs through stencil `npm run start`

# Storybook Installation Steps
To install Storybook: `npx -p @storybook/cli sb init --type html`

# Running Storybook
Run `npm run build` before storybook can be loaded

Run `npm run storybook`

# unpkg
`<script src="https://unpkg.com/encova-button-stencil-component@0.0.9/dist/encova-button-stencil-component/encova-button-stencil-component.js"></script>` - This script tag can be place in any HTML file to load the component library for use without node/NPM. Version number can be changed to the most recent version, but rest of link stays the same.

# Using Stories
Keep all stories in the ./stories folder. Main.js knows to look there for all Storybook files

# Vercel
Vercel did not work when deploying. Tried changing run scripts but none worked.

# Netlify
Netlify was not working, tried adding --quiet command to the `build-storybook` script but still failed

# Chromatic
`npx chromatic --project-token=m29qepgw008` - publishes to chromatic, checks for new versions. Runs build and creates "version control" system for storybook stories. Generates static site for Storybook.

# Links
[Web Component Library](https://www.npmjs.com/package/encova-button-stencil-component)

[Web Component Library GitHub Repo](https://github.com/jseltzer7/encova-button)

[React App with Implementation of Web Components](https://github.com/jseltzer7/Encova-DesignSystem-Testing)

[Netlify Link when Deployed (not currently available)](https://sleepy-bartik-f66b83.netlify.app/)

[Vercel Link (project not available)](#links)

[Chromatic Build Link](https://www.chromatic.com/builds?appId=5f06005e4432420022ae1de6)

[Chromatic Static Story Link](https://5f06005e4432420022ae1de6-tclghgrfut.chromatic.com/)
