/*****************************************************************************/
/* Initial State */
/*****************************************************************************/

Session.setDefault('page', 'showMain');
Session.setDefault('pun', null);

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
  // getPun: function (pun) {
  //   return Session.equals('pun', pun);
  // }
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
  'click [data-action="getPun"]': function (event, template) {
    var array = Puns.find().fetch();
    var randomIndex = Math.floor( Math.random() * array.length );
    pun = array[randomIndex];
    console.log(pun);
    return pun;
    // Session.set('pun', pun);
  }
});