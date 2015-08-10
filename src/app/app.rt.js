define([
    'react/addons',
    'lodash',
    'feedbacks/feedbacksPanel'
], function (React, _, feedbacksPanel) {
    'use strict';
    return function () {
        return React.createElement('div', {}, !this.state.isLoggedIn ? React.createElement('div', {
            'key': 'loginAnim',
            'className': 'login-animation'
        }, React.createElement('span', {}, 'Authenticating...')) : null, React.createElement('div', { 'key': 'panel' }, React.createElement(feedbacksPanel, { isLoggedIn: this.state.isLoggedIn })));
    };
});