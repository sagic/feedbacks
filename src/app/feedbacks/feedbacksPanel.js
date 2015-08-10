define(['react', 'lodash', '../stores/userStore', '../stores/feedbacksStore', './feedbacksPanel.rt'],
    function (React, _, userStore, feedbacksStore, template) {
        'use strict';

        return React.createClass({
            displayName: 'feedbacksPanel',

            getInitialState: function () {
                return {
                    user: null,
                    isCreatingFeedback: false,
                    feedbacks: []
                };
            },

            componentDidMount: function () {
                var user = userStore.getUserData();
                if (user) {
                    this.setState({user: user});
                } else {
                    userStore.on('logged-in', this.handleUserLogin, this);
                }

                feedbacksStore.on('change', this.syncFeedbacks, this);
            },

            syncFeedbacks: function() {
                this.setState({
                    feedbacks: feedbacksStore.getFeedbacks()
                });
            },

            handleUserLogin: function () {
                var user = userStore.getUserData();
                this.setState({user: user});
            },

            handleNewFeedbackClick: function () {
                this.setState({isCreatingFeedback: true});
            },

            hideForm: function() {
                this.setState({isCreatingFeedback: false});
            },

            render: template
        });
    });
