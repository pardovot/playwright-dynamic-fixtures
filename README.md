# playwright-dynamic-fixtures
This is an example of how to use dynamic fixtures with playwright

Basic idea:
Extending the base test class could get very long with lots of page files, this is a way to extend all page objects based on imports/exports.

All the fixtures are imported from the main index.ts in the src folder, from there you just need to make sure the exports hierarchy goes up to that index file.

E.g - /src/index.ts:

`export * from 'example';`

/src/example is a folder inside src which either contains more folders, or just page object files, for each folder inside src you'll need to have another index.ts file in order to make it as easier as possible to add new page object files.

/src/example/index.ts:
```
export * from 'example/inner-folder';
export * from 'example/FirstPage';
```
These exports the FirstPage file, as well as exporting the inner-folder, this is only relevant when you have another folder and something inside that folder.

In this example /src/example/inner-folder/index.ts:

`export * from 'example/inner-folder/SomePage';`

In /src/fixtures/classes-fixtures.ts:

We basically just import everything we've exported in the index.ts files throughout the project, then just build our object which will be extended by the test object.

Optional addition:

navigateTo - a helper function so it's easier to build each page object with the matching redirect URL and params for it.
This extends into a 'PageObject.visit' function.
Both are built as an object in /src/fixtures/index.ts which is exported.

In /src/utils/fixtures is where we actually extend the test object of playwright, since we built everything, all we do is import fixtures and TFixtures(so typescript will know how to go to definition).
Then as usual, we just export the extended object:

`export const test = base.extend<TFixtures>(fixtures);`
