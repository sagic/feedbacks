require.config({
    baseUrl: '/app',
    paths: {
        text: '../vendor/requirejs-plugins/lib/text',
        json: '../vendor/requirejs-plugins/src/json',
        lodash: '../vendor/lodash/lodash',
        jquery: '../vendor/jquery/dist/jquery',
        reactBootstrap: '../vendor/react-bootstrap/react-bootstrap',
        react: '../vendor/react/react',
        flux: '../vendor/flux/dist/Flux',
        eventEmitter: '../vendor/eventemitter3/index'
    },
    shim: {
        lodash: {exports: '_'},
        jquery: {exports: '$'},
        react: {exports: 'React'},
        reactBootstrap: {exports: 'ReactBS'},
        eventEmitter: {exports: 'EventEmitter'}
    },
    map: {
        '*': {
            'react/addons': 'react',
            'ReactBS': 'reactBootstrap'
        }
    }
});

require(['react', 'app'], function (React, app) {
    'use strict';
    React.render(React.createElement(app), document.getElementById('appContainer'));
});
