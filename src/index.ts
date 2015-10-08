///<reference path="typings/tsd.d.ts" />

import React = require('react');
import $ = require('jquery');
import App = require('./components/App/App');
import StoreComponent = require('./lib/StoreComponent');
import PostStore = require('./stores/PostStore');

require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/scss/font-awesome.scss');

$(document).ready(() => {
    React.render(
        /**
         * This is basically:
         * <StoreComponent>
         *     <App />
         * </StoreComponent>
         *
         * StoreComponent loads some data from Stores, watches these Stores
         * and gives App.Component the data via Props.
         *
         * What stores to watch and how to get the data from the stores is still defined by App.
         *
         * No technical reason for this. This developer just likes it better than most Flux-solutions.
         * You can throw this away, use whatever Flux you want and prefer Mixins over Composition.
         */
        React.createElement<StoreComponent.IProps<App.IProps>>(StoreComponent.Component, {
            stores: App.watchStores,
            dataFn: App.getPropsFromStores,
            children: [
                React.createElement<App.IProps>(App.Component, App.getPropsFromStores())
            ],
        }),
        document.getElementById('root'));
});

