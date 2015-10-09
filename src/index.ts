///<reference path="typings/tsd.d.ts" />

import React = require('react');
import $ = require('jquery');
import App = require('./components/App/App');
import StoreComponent = require('./lib/StoreComponent');
import PostStore = require('./stores/PostStore');

require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/scss/font-awesome.scss');

$(document).ready(() => {
    React.render(React.createElement<App.IProps>(App.Component,{}), document.getElementById('root'));
});

