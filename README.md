
This is under development

# Link package to use it on development

create link in your system

`npm link` or `yarn link`

this will create a link in your system

and on your other project you can use it like this

`npm link npm-solvitize` or `yarn link npm-solvitize`

# Unlink after development is over, be sure to unlink and install it published package before release

`npm unlink npm-solvitize` or `yarn unlink npm-solvitize` for unlink on current project

`npm unlink` or `yarn unlink` to unlink from your system


# Solvitize NPM 

`npm init`

`npm install npm-solvitize`

Then `npm login`

Write code

Then to make package, type `npm pack`

Then make some changes and to update package

Version format : [major].[minor].[patch]

`npm version patch` # For bug fixes 

`npm version minor` # For new features 

`npm version major` # For breaking changes

`npm publish`
