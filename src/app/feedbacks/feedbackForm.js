define(['react', 'lodash', '../actions/feedbackActions', './feedbackForm.rt'],
    function (React, _, feedbackActions, template) {
    'use strict';

    return React.createClass({
        displayName: 'feedbackForm',

        handleFormReset: function() {
            this.props.closeHandler && this.props.closeHandler();
        },

        handleFormSubmit: function(evt) {
            evt.preventDefault();
            feedbackActions.create({
                title:this.refs.titleInp.getValue() || 'lorem ipsum',
                feedback:this.refs.feedbackInp.getValue() || 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
            });
            React.findDOMNode(this.refs.titleInp).getElementsByTagName('input')[0].value = '';
            React.findDOMNode(this.refs.feedbackInp).getElementsByTagName('textarea')[0].value = '';
            this.handleFormReset();
        },

        render: template
    });
});
