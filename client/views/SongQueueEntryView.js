// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  //
  tagName: 'tr',

  template: _.template('<td class="artist">(<%= artist %>)</td><td class="title"><%= title %></td><td class="dequeue"> X </td>'),

  events: {
    'click td.artist, td.title': function() {
      this.model.play();
    },
    'click td.dequeue': function(){
      this.model.dequeue();
      console.log('dequeued!');
    }


  },

  initialize: function(){

    this.model.on('remove', function(model){
      this.unrender();
    }, this);

  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },

  unrender: function(){
    $(this.el).remove();
    console.log('called unrender');
  }
});
