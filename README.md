# Movie Reviews

Preview: http://moviesreview2018.s3-website.eu-west-2.amazonaws.com/#/searchpage

## Screenshots
![Screenshot](/screenshot.png?raw=true)

To fast install dependences, I recommend to use [yarn](https://yarnpkg.com/lang/en/). Otherwise, you can use `npm run` instead `yarn`.

For example:
    `npm i && npm run dev`
    `npm run test`
    `npm run build`

## Install 

`yarn` 

## Start

`yarn dev`

## Build
Your build version will be under `dist` folder.

`yarn build`

## Test

`yarn test`

## Dynamic page routing

The project able to generate routes base `Pages/index.js` file, as long as creating new page under `Pages` folder, and export it in `Pages/index.js`, the `Libs/RouterWrapper` will generate routes.
Please refer `AppContainer.js` file about dynamic routing.

## State Management

There are two reducers in this project, `search` reducer for storing fetched data from api, and `app` reducer to store application local data, such as favourites list, footer information, nav items.
[Here](https://github.com/etamity/moviesearch) is another implement without using redux. 

# Services
`MovieService.js` is a api wrapper that fetch data and put them into redux store, once redux store update, all view layer where subscribed the state, will also trigger re-render. You can wrap tv show api by extending the services. For example: Simply create a new file call `TvService.js`, and wrap the api and put them into store.

## Components

Most of components are stateless component, as we only need to render the view with data, no complex logic and inner state management needed.

## Infinite Scroll

Used `react-infinite-scroller` component for infinite scroller feature.

## CSS

The stylesheet are following [BEM](http://getbem.com/) naming convention, I don't have much time to create utilities css class, but I would really love to implement flexbox base css grids system.