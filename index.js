import React from 'react';
import ReactDOM from 'react-dom';

const page = (
    <div>
        <img src="./react-logo.png"/>
        <h1>Fun Facts About React</h1>
        <ol>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k start on github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ol>
    </div>
);

ReactDOM.render(page,document.getElementByID("root"))