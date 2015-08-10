define(['react', 'lodash', '../actions/feedbackActions', './feedbackRow.rt'],
    function (React, _, feedbackActions, template) {
        'use strict';

        return React.createClass({
            displayName: 'feedbackRow',

            getInitialState: function () {
                return {
                    isReplying: false,
                    isOpen: false
                };
            },

            getDisplayed: function () {
                var replies = this.props.feedback && this.props.feedback.replies;
                var latestReply;
                if (!this.state.isOpen && _.isArray(replies) && replies.length > 0) {
                    latestReply = replies[replies.length-1];
                }
                return {
                    user: latestReply ? latestReply.user : this.props.feedback.user,
                    title: latestReply ? '' : this.props.feedback.data.title,
                    feedback: latestReply ? latestReply.message : this.props.feedback.data.feedback
                };
            },

            handleSubmitReply: function (message) {
                this.setState({isReplying: false});
                feedbackActions.reply({
                    feedback: this.props.feedback,
                    message: message || 'lorem ipsum'
                });
                this.setState({isOpen: false});
            },

            handleAddReply: function () {
                this.setState({isReplying: true, isOpen: true});
            },

            handleDetails: function () {
                this.setState({isOpen: !this.state.isOpen});
            },

            render: template
        });
    });
