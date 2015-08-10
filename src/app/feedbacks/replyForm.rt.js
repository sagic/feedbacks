define([
    'react/addons',
    'lodash',
    'ReactBS'
], function (React, _, ReactBS) {
    'use strict';
    return function () {
        return React.createElement('div', { 'className': 'reply-form container' }, React.createElement('form', {}, React.createElement(ReactBS.Input, {
            'ref': 'replyInp',
            'type': 'textarea',
            'placeholder': 'Message goes here...'
        }), React.createElement(ReactBS.ButtonInput, {
            'type': 'submit',
            'onClick': this.submit
        })));
    };
});