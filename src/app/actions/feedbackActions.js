define(['react', 'lodash', '../constants/actionsConstants', '../dispatcher/appDispatcher'],
    function (React, _, actionsConstants, appDispatcher) {
    'use strict';

    var feedbackActions = {
        create: function(data) {
            appDispatcher.dispatch({
                actionType: actionsConstants.FEEDBACK_CREATE,
                data: data
            });
        },
        reply: function(data) {
            appDispatcher.dispatch({
                actionType: actionsConstants.REPLY_CREATE,
                data: data
            });
        }
    };

    return feedbackActions;

});
