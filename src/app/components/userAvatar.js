define(['react', 'lodash', './userAvatar.rt'], function (React, _, template) {
    'use strict';

    return React.createClass({
        displayName: 'userAvatar',

        getImageURL: function () {
            if(this.props.user && this.props.user.picture) {
                return this.props.user.picture.thumbnail;
            }
            return '';
        },

        getName: function () {
            if(this.props.user && this.props.user.name) {
                return this.props.user.name.first + ' ' + this.props.user.name.last;
            }
            return '';
        },

        render: template
    });
});
