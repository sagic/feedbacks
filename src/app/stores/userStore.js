define(['lodash', '../dispatcher/appDispatcher', 'eventEmitter'],
    function (_, appDispatcher, EventEmitter) {
        'use strict';

        var eventEmitter = new EventEmitter();
        var LOGGEDIN_EVENT = 'logged-in';

        var user = null;

        var UserStore = _.extend({}, EventEmitter.prototype, {

            loginUser: function () {
                $.ajax({
                    url: 'https://randomuser.me/api/',
                    dataType: 'json',
                    success: this.handleUserLogin.bind(this)
                });
            },

            handleUserLogin: function (data) {
                this.setUserData(data.results[0].user);
                this.emit(LOGGEDIN_EVENT);
            },

            setUserData: function (data) {
                console.log('new user', data);
                user = data;
            },

            getUserData: function () {
                return user;
            }
        });
        return UserStore;
    });
