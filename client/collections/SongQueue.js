// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

  },
  checkQueue: function(){
    if(this.length === 1) {
      this.at(0).play();
    }
  },

  removeDequeued: function(song){

    if(this.length ===1){
      this.at(0).lastSong();
    }

    this.remove(song);

    if(this.length){
      this.at(0).play();
    }
    // } else {
    //   this.trigger('stop');
      // var emptySong = new SongModel();
      // console.log('empty')
      // emptySong.play();
    // }
  }

  //remove the dequeued song
  //check to see if there are any more songs in queue
  //if so, play the next song

});
