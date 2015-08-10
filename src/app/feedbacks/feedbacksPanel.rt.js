define([
    'react/addons',
    'lodash',
    'ReactBS',
    './feedbackRow',
    './feedbackForm',
    '../components/userAvatar'
], function (React, _, ReactBS, feedbackRow, feedbackForm, userAvatar) {
    'use strict';
    function repeatFeedback1(feedback, feedbackIndex) {
        return React.createElement(feedbackRow, { feedback: feedback });
    }
    return function () {
        return React.createElement('div', {
            'className': _.keys(_.pick({
                'feedbacks-panel': true,
                'show': this.props.isLoggedIn
            }, _.identity)).join(' ')
        }, React.createElement('div', { 'className': 'wrapper' }, React.createElement('nav', { 'className': 'left-pane' }, React.createElement(userAvatar, { user: this.state.user }), React.createElement(ReactBS.Button, {
            'bsStyle': 'link',
            'onClick': this.handleNewFeedbackClick
        }, React.createElement(ReactBS.Glyphicon, { 'glyph': 'envelope' }))), React.createElement('div', { 'className': 'content-pane' }, React.createElement.apply(this, [
            'ul',
            {},
            _.map(this.state.feedbacks, repeatFeedback1.bind(this))
        ])), React.createElement('nav', { 'className': 'right-pane' + ' ' + _.keys(_.pick({ show: this.state.isCreatingFeedback }, _.identity)).join(' ') }, React.createElement(feedbackForm, { closeHandler: this.hideForm }))));
    };
});