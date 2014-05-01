// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  events : {
        'ended' :  function() {
          this.songEnded();
        }
  },

  el: '<audio controls autoplay />',

  initialize: function() {

  },

  setSong: function(song){
    this.model = song;
    this.model.on('lastSong',this.unrender);
    this.render();
  },

  songEnded: function(){
    this.model.dequeue();

  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  },

  unrender: function(){
    // console.log('got to unrender');

    var audio = $("audio")[0];
    audio.pause();
    audio.currentTime=0;
    $("audio").removeAttr("src");
  //  return
  }

});
