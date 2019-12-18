This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


# React router

### Portfolio 


1. The components are:
   > Contacts\
   Header\
   HomePage\
   Portfolio\
   PortfolioItemPage\
   PageNotFound





 1. Contacts

 ```js
 import React from 'react';


function Contacts() {
    return <div>hi there contacts</div>
}

export default Contacts

```


 2. Header

```js
import React from 'react';
import { NavLink } from 'react-router-dom';




function Header() {
    return <header>hi there HomePage
        <NavLink to="/" exact activeClassName="is-active">HomePage</NavLink>
        <NavLink to="/portfolio" exact activeClassName="is-active">Portfolio</NavLink>
        <NavLink to="/contacts" exact activeClassName="is-avtive">Contacts</NavLink>
    </header>
}


export default Header

```


 3. Portfolio

```js
import React from 'react';
import { Link } from 'react-router-dom';


function Portfolio() {
    return <div>hi there portfolio
        <Link to="/portfolio/1">One</Link>
        <Link to="/portfolio/2">Two</Link>

    </div>
}

export default Portfolio;

```


 4. PortfolioItemPage

```js
import React from 'react';


function PortfolioItemPage(props) {
    return <div>hi there portfolio oneeee.
        <h2>This is from item {props.match.params.id} ??? I am hidden</h2>
        <h3>Why this ain't working</h3>
    </div>
}

export default PortfolioItemPage

```

5. HomePage

```js
import React from 'react';


function HomePage() {
    return <div>hi there HomePage</div>
}

export default HomePage

```


6. NotFoundPage

```js
import React from 'react';


function NotFoundPage() {
    return <div>404 Error not found</div>
}

export default NotFoundPage
```


---


# AppRouter is the component where we will import each of the other components

---



7. **AppRouter**

```js
import React from 'react';
import '../styles/base/sample.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Contacts from '../components/Contacts';
import HomePage from '../components/HomePage';
import Portfolio from '../components/Portfolio';
import Header from '../components/Header';
import PortfolioItemPage from '../components/PortfolioItemPage';
import NotFoundPage from '../components/NotFoundPage';


function AppRouter() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/portfolio" exact component={Portfolio} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/portfolio/:id" component={PortfolioItemPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>

        </BrowserRouter>
    );
}
export default AppRouter;



```
