// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({
  // events : {
  //       'ended' : function(event){console.log('ended', event);}
  // },

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.model.get('songQueue').on('add', function(model){
      this.songQueueView.render();
      this.model.get('songQueue').checkQueue();  // if there is only one song in the Queue after adding a song, play that song
    },this);

    this.model.get('songQueue').on('remove', function(model){
      //this.songQueueView.render();
      console.log('AppView event remove listener called');
      console.log(this.model.get('songQueue'));
    }, this);

  },

  render: function(){
    return this.$el.html([
      this.songQueueView.$el,
      this.playerView.$el,
      this.libraryView.$el
    ]);
  }

});
