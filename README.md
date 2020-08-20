# Front-end AXA assessment (AKA gnomeet)
Summary of the technologies used, short documentation and explanation of the decisions taken.

## Libraries
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

## Documentation
Clone or download the project, open the folder in a terminal and type:
```
npm start
```
It will automatically open the application in your default browser.

Test is a WIP
```
npm test
```
You can also build a production-like distribution of the application, it's just there out of habit.
```
npm build
```

## Decisions
###### Design & Color Palette
The design is mobile-first with some tweaks for PC viewing, there's not so much innovation and animations as I wanted it to be functional.

As for the colors, I started searching for tavern-like color palettes (brown, yellow, green, shades of blue...) and found [this one](https://www.color-hex.com/color-palette/75628) as a "temporal" design, but after getting accostumed to it I kinda like it.

###### Gnome Details
At first I thought of using React Router to show a detail page of the selected gnome, sending the data via Link + location, but with 1000+ gnomes I focused on making the data as accesible as possible, having to go into another page and then having to go back would not be a good UX practice. 

###### Pagination
Althought I wanted to implement a solution like [react-virtualized](https://github.com/bvaughn/react-virtualized) for infinite scrolling, I decided to use pagination as it was a faster (and reliable) way of showing data to the user (and a page can be pinpointed easily).

###### Gender of gnomes
As gender is a social construct (and I totally forgot about it), it has not been added.
