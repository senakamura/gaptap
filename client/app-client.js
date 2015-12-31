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
  pun: function () {
    var array = Puns.find().fetch();
    var randomIndex = Math.floor( Math.random() * array.length );
    var element = array[randomIndex];
    return element;
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
  'submit form': function (event, template) {
    event.preventDefault();

    var form = template.find('form');
    var prompt = template.find('[name=prompt]').value;
    var answer = template.find('[name=answer]').value;

    Puns.insert({
      'prompt': prompt,
      'answer': answer
    });

    form.reset();
    alert('Thanks!');
  }
});

// Template.ShowTake.onRendered({

// });

Template.ShowTake.events({
  // Should load a pun when "More Pun" btn is clicked.
  'click #getPun': function (event, template) {
    event.preventDefault();

    // console.log(this);
    // debugger;


    var array = Puns.find().fetch();
    var randomIndex = Math.floor( Math.random() * array.length );
    var element = array[randomIndex];

    console.log(element);
    return element;

  }
});