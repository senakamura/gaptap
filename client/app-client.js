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

    var prompt = tmpl.find('[name=prompt]').value;
    var answer = tmpl.find('[name=answer]').value;

    Puns.insert({
      'prompt': prompt,
      'answer': answer
    });
  }
});