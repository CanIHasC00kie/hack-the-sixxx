import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import ReactDOM from 'react-dom';
import Counter from './components/homePage';

const elem = <h1>Hello, world!</h1>;

ReactDOM.render(
    <Counter />,
    document.getElementById("root")
);