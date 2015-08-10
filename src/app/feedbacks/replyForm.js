define(['react', 'lodash', './replyForm.rt'], function (React, _, template) {
    'use strict';

    return React.createClass({
        displayName: 'replyForm',

        submit: function (evt) {
            evt.preventDefault();
            var message = this.refs.replyInp.getValue();
            this.props.submitReplyHandler && this.props.submitReplyHandler(message);
        },

        render: template
    });
});
