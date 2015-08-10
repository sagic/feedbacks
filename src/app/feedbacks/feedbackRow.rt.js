define([
    'react/addons',
    'lodash',
    'ReactBS',
    '../components/userAvatar',
    './replyForm'
], function (React, _, ReactBS, userAvatar, replyForm) {
    'use strict';
    function repeatReply1(displayed, reply, replyIndex) {
        return React.createElement('div', { 'className': 'reply-row' }, React.createElement('hr', {}), React.createElement(userAvatar, { user: reply.user }), React.createElement('div', { 'className': 'reply-content' }, reply.message));
    }
    function scopeDisplayed2(displayed) {
        return React.createElement('li', { 'className': 'feedback-row' }, React.createElement(userAvatar, { user: displayed.user }), React.createElement('div', { 'className': 'content' }, React.createElement('div', {}, React.createElement('h3', {}, displayed.title)), React.createElement('div', {}, displayed.feedback)), this.state.isOpen ? React.createElement.apply(this, [
            'div',
            { 'className': 'replies' },
            _.map(this.props.feedback.replies, repeatReply1.bind(this, displayed)),
            this.state.isReplying ? React.createElement(replyForm, _.assign({}, { 'key': 'replyForm' }, { submitReplyHandler: this.handleSubmitReply })) : null
        ]) : null, React.createElement('div', { 'className': 'options' }, React.createElement(ReactBS.Button, {
            'bsStyle': 'link',
            'onClick': this.handleDetails
        }, React.createElement(ReactBS.Glyphicon, { 'glyph': this.state.isOpen ? 'eye-close' : 'eye-open' })), React.createElement(ReactBS.Button, {
            'bsStyle': 'link',
            'onClick': this.handleAddReply
        }, React.createElement(ReactBS.Glyphicon, { 'glyph': 'envelope' }))));
    }
    return function () {
        return scopeDisplayed2.apply(this, [this.getDisplayed()]);
    };
});