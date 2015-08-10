define([
    'react/addons',
    'lodash',
    'ReactBS'
], function (React, _, ReactBS) {
    'use strict';
    return function () {
        return React.createElement('div', { 'className': 'feedback-form container' }, React.createElement('form', {}, React.createElement(ReactBS.Input, {
            'ref': 'titleInp',
            'type': 'text',
            'label': 'Title',
            'placeholder': 'Enter title'
        }), React.createElement(ReactBS.Input, {
            'ref': 'feedbackInp',
            'type': 'textarea',
            'label': 'Feedback',
            'placeholder': 'Enter your feedback'
        }), React.createElement('div', { 'className': 'options pull-right' }, React.createElement(ReactBS.ButtonInput, {
            'type': 'reset',
            'value': 'Cancel',
            'onClick': this.handleFormReset
        }), React.createElement(ReactBS.ButtonInput, {
            'type': 'submit',
            'value': 'Submit',
            'onClick': this.handleFormSubmit
        }))));
    };
});