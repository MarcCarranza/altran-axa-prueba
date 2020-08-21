# Front-end AXA assessment (AKA gnomeet)
Summary of the technologies used, short documentation and explanation of the decisions taken. Some of the explanations may refer to time or a timeframe as I proposed myself to have it done within a workweek.

## Libraries 📚
* [Webpack](https://webpack.js.org/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [React-Redux](https://react-redux.js.org/)
* [Redux-Saga](https://redux-saga.js.org/)
* [Lodash](https://lodash.com/)
* [Axios](https://github.com/axios/axios)
* [Babel](https://babeljs.io/)
* [FontAwesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome)
* [React-Select](https://react-select.com/home)
* [jest](https://jestjs.io/en/)
* [enzyme](https://github.com/enzymejs/enzyme)

## Documentation 📄
Clone or download the project, open the folder in a terminal and type the command below, it will automatically open the application in your default browser.
```
npm start
```


For running the tests provided with the project (:obsolete was added because some snapshots got obsolete while testing):
```
npm test
npm test:obsolete
```
You can also build a production-like distribution of the application, it's just there out of habit.
```
npm build
```

## Decisions 🤔
###### Design & Color Palette
The design is mobile-first with some tweaks for PC viewing, I wanted it to be functional as possible so I wouldn't say it shines by it's innovation or animations.

As for the colors, I started searching for tavern-like color palettes (brown, yellow, green, shades of blue...) and found [this one](https://www.color-hex.com/color-palette/75628) as a "temporal" design, but after getting accostumed to I kinda like it.

I also wanted to use Context for theming, but it was not either a priority or there was enough time.

###### Gnome Details
At first I thought of using React Router to show a detail page of the selected gnome, sending the data via Link + location, but with 1000+ gnomes I focused on making the data as accesible as possible. Having to go into another page and then having to go back would not be a good UX practice. 

###### Pagination
Althought I wanted to implement a solution like [react-virtualized](https://github.com/bvaughn/react-virtualized) for infinite scrolling, I decided to use pagination as it was a faster (and reliable) way of showing data to the user (and a page can be pinpointed easily).

###### Saga "FETCH_SUCCESS" Test and Filter Clear functionality
While the other tests work as expected, I bumped into some problems with how the function fetchGnomeData() is coded and how the async testing works.
To keep it short: there's 2 put actions inside it, one for settings isLoading and another to set the data when it's done and I can't really figure out how to tackle this logic in the test within time.

When the filter was being developed I didn't have in mind a clear button and [uncontrolled inputs](https://reactjs.org/docs/uncontrolled-components.html) were being used, and while the clear functionality works (clearing the filter), it doesn't clear the form. This was overlooked by me, as well as other user interactions with the filter/search, but I think it should be pointed.

###### Gender of gnomes
As gender is a social construct (and I totally forgot about it), it has not been added.


That's all I can think of right now, if you have any questions I would be happy to answer them!
