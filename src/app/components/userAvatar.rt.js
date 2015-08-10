define([
    'react/addons',
    'lodash',
    'ReactBS'
], function (React, _, ReactBS) {
    'use strict';
    return function () {
        return React.createElement('div', { 'className': 'user-avatar' }, React.createElement('div', { 'className': 'avatar circle' }, React.createElement('img', { 'src': this.getImageURL() })), React.createElement('div', { 'className': 'name' }, this.getName()));
    };
});