/*****************************************************************************/
/* Subscriptions */
/*****************************************************************************/

Meteor.subscribe('puns');

/*****************************************************************************/
/* Initial State */
/*****************************************************************************/

Session.setDefault('page', 'showMain');

/*****************************************************************************/
/* RPC (Remote Procedure Call) Methods */
/*****************************************************************************/

/*****************************************************************************/
/* Template Helpers */
/*****************************************************************************/

UI.body.helpers({
  isPage: function (page) {
    return Session.equals('page', page);
  }
});

Template.ShowGive.helpers({

});

Template.ShowTake.helpers({
  getPun: function () {
    var pun = Puns.findOne();
    console.log(pun);
    return pun;
  }
});

// /*****************************************************************************/
// /* Template Events */
// ***************************************************************************

UI.body.events({
  'click .clickChangesPage': function(event, template) {
    Session.set('page', event.currentTarget.getAttribute('data-page'));
  }
});

Template.ShowGive.events({
  'submit form': function (e, tmpl) {
    e.preventDefault();

    var form = tmpl.find('form');
    var prompt = tmpl.find('[name=prompt]').value;
    var answer = tmpl.find('[name=answer]').value;

    Puns.insert({
      'prompt': prompt,
      'answer': answer
    });

    form.reset();
  }
});

Template.ShowTake.onRendered({
  // Should load a pun on render.
});

Template.ShowTake.events({
  // Should load a pun when "More Pun" btn is clicked.
  'click #getPun': function (e, tmpl) {
    e.preventDefault();

    getPun();
  }
});