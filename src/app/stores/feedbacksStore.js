define(['lodash', 'jquery', '../dispatcher/appDispatcher', 'eventEmitter', '../constants/actionsConstants', './userStore'],
    function (_, $, appDispatcher, EventEmitter, actionsConstants, userStore) {
        'use strict';

        var eventEmitter = new EventEmitter();
        var CHANGE_EVENT = 'change';

        var feedbacks = [];

        function saveFeedbacks() {
            console.log('saving...');
        }

        var FeedbacksStore = _.extend({}, EventEmitter.prototype, {
            getFeedbacks: function () {
                return feedbacks;
            },

            addFeedback: function (data) {
                var feedback = {
                    user: userStore.getUserData(),
                    data: data,
                    replies: []
                };
                feedbacks.push(feedback);
                saveFeedbacks();
                this.emitChange();
            },

            addReply: function (feedback, message) {
                feedback.replies = feedback.replies || [];
                feedback.replies.push({
                    user: userStore.getUserData(),
                    message: message
                });
                saveFeedbacks();
                this.emitChange();
            },

            emitChange: function () {
                this.emit(CHANGE_EVENT);
            },

            addChangeListener: function (callback) {
                this.on(CHANGE_EVENT, callback);
            },

            removeChangeListener: function (callback) {
                this.removeListener(CHANGE_EVENT, callback);
            }
        });

        appDispatcher.register(function(action){
            switch(action.actionType){
                case actionsConstants.FEEDBACK_CREATE:
                    FeedbacksStore.addFeedback(action.data);
                    break;
                case actionsConstants.REPLY_CREATE:
                    FeedbacksStore.addReply(action.data.feedback, action.data.message);
                    break;
            }
        });




        return FeedbacksStore;

    });
