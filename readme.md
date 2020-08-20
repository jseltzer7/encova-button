# Component Library
Building of component library. 

## I left notes throughout the files about certain attributes and things that are more specific to building a component instead of using the library or applications as a whole.

## List of Components enclosed
`<encova-button>` Green rounded button. Attributes: text - Text to go on the button

`<encova-form>` Basic form with label, text field and submit button. On submit, text will clear and print to console.

`<encova-slat>` Basic vehicle coverage card

# Notes
## Using NPM Packaging
Run npm sign in commands: `npm adduser` then add your account. Once you are logged in, you can run `npm init` or make changes directly in the `package.json` file. Once these are completed a run of `npm publish` can be used to publish to your NPM org

## Storybook
When storybook is initialized, it may be on a newer version and have a slightly different file structure. Make sure to check the `./.storybook/main.js` file and the demo story files to make sure you are naming files correctly and are placing them in the correct location in the file structure. They can be changed easily if it's decided they make sense somwhere else

### Addons
Addons can be used very easily as well. Make sure to read the adddons documentation before getting started. They need to be installed using NPM then imported into the `main.js` file for them to be allowed in your story files.

## Other files
Stencil component libraries have a few extra files that you may or may not need. There are a bunch of config files that are determining how the Typescript files work, how Stencil gets bundled and some utils that were used in an example component.

## Readme files
Stencil Components generate their own readme files that can be edited. I would reccommend putting information about the component in the readme just so there is something about it. It auto-generates information about all the publically accessible properties of the component.

## Testing files
I never got around to working on tests, but the component comes with 2 different test files that can be used along with the component. But, the components can be tested using Jest or Mocha

# Versioning - Basic descriptions of each update to the library
0.0.1 - 7/7/20 - Built basic encova styled button, pushed to github repo, builds correctly in stencil

0.0.2 - 7/7/20 - Forgot to run `npm run build`, commit and push then published to NPM

0.0.3 - Minor update - 7/7/20 - Working correctly! Imported well into the React Application - needed the customElements polyfills added to index.js in order to run. Polyfill imported from loader folder in index.js, component imported from component name in any file it is used in.

0.0.4 - Minor Update - 7/7/20 - Minor readme updates to make sure they appear on NPM

0.0.5 - Storybook Addition - 7/8/20 - Storybook added to project. Added `preview.js` file and `build.watch` script. To run correctly, run `npm run build.watch`, then run `npm run storybook`. Storybook requires a prod build of the component.

0.0.6 - Second Component Addition - 7/8/20 - Form component added to project. Story files added for storybook as well. Ran `npm run build` before testing and publishing. Once published, will be tested in React App. `build.watch` might not actually be necessary for running storybook.

0.0.7 - 7/8/20 - Updated description for package

0.0.8 - 7/8/20 - Adding Storybooks Knobs Addon to project. Working correctly, added one story to `<encova-button>` that makes use of knobs addition.

0.0.9 - 7/8/20 - Added chromatic for static storybook generation hosting. Attempted deploying on multiple services, but all failed except chromatic. Link is located in links section.

0.0.10 - 7/9/20 - unpkg.com link works, script tag is below. Adding functionality to the encova-button for onClick. On click, alert window will display with given text. Wrote story with and without knobs for the alert.

0.0.11 - 8/19/20 - Most recent versioning of all components built over the course of the summer. README also updated

# Runtime
Runs through stencil `npm run start`

# Storybook Installation Steps
To install Storybook: `npx -p @storybook/cli sb init --type html`

# Running Storybook
Run `npm run build` before storybook can be loaded

Run `npm run storybook`

# unpkg
`<script src="https://unpkg.com/encova-button-stencil-component@0.0.11/dist/encova-button-stencil-component/encova-button-stencil-component.js"></script>` - This script tag can be place in any HTML file to load the component library for use without node/NPM. Version number can be changed to the most recent version, but rest of link stays the same.

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
