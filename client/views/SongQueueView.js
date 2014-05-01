// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({


  tagName: "table",

  // events: {
  //   'ended' : function(event){console.log('ended', event);}
  // },


  initialize: function() {
    this.render();

    _.bindAll(this, 'removeSong', 'render');

    this.on('ended', function(event){
      console.log(event);
    },this);//this.at(0).trigger('ended');
    this.collection.on('dequeue', function(song){this.removeSong(song);}, this);
  },

  removeSong: function(song){
    console.log('in removeSong');
    this.collection.removeDequeued(song);
  },


  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    console.log(this.collection);
    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }


});
