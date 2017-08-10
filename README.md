# Bullseye

## Contribution guide

### The contribution process is...
- Make an issue (or multiple issues)
- Make a PR that references that issue
- Get it code reviewed by someone on the team, address any comments
- Merge into master (with merge commit)

### Code style guide
- Airbnb JS Style Guide
- Pay attention to the linter!
- const or let over var
- Use require and module.exports in .js files
- Use import and export in .jsx files
- Put import statements at top - modules on top, components below with a line break between
- Put the default export at bottom
- Define container components and presentational components in separate files
- Use the "ducks" pattern for redux
- Name files using lowercase-and-dashes instead of camelCase or PascalCase, except for when the default export is a class, then use PascalCase
