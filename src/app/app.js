define(['react', './stores/userStore', './app.rt'],
    function (React, userStore, template) {
        'use strict';

        return React.createClass({
            displayName: 'app',

            getInitialState: function () {
                return {
                    isLoggedIn: false
                };
            },

            componentDidMount: function () {
                userStore.loginUser();
                userStore.on('logged-in', this.handleLoggedIn, this);
            },

            handleLoggedIn: function () {
                this.setState({isLoggedIn: true});
            },

            componentDidUnmount: function () {
                userStore.removeListener('logged-in', this.handleLoggedIn, this);
            },

            render: template
        });
    });
