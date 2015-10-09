///<reference path="typings/tsd.d.ts" />

import React = require('react');
import $ = require('jquery');
import App = require('./components/App/App');

require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/scss/font-awesome.scss');

$(document).ready(() => {
    React.render(<App.Component />, document.getElementById('root'));
});

