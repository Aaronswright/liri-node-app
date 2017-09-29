var twitterkeys = require("./keys");
console.log(twitterkeys)

var spotify = require("node-spotify-api");

var request = require("request");

var fs = required("fs");

var getMyTweets = function() {
  var client = new Twitter(keys.twitterKeys);

  var params = {
    screen_name: "cnn"
  };
  client.get("statuses/user_timeline", params, function(error, tweets, response) {
    if (!error) {
      for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].created_at);
        console.log("");
        console.log(tweets[i].text);
      }
    }
  });
};


var spotify = new Spotify({
  id: "1676652223-jG6L7TagG6BjYlsOxcvS6OWn8DTYnEyVVK6zkvE",
  secret: "UDLrFQ12N5GwNTAx8uSyLK16DE67XRvp3W22TRoYFqM5J"
});

var getMeSpotify = function(songName) {
	if (songName === undefined) {
		songName = "Hello";
	}
	spotify.search(
    {
      type: "track",
      query: songName
    },
    function(err, data) {
      if (err) {
        console.log("Error occurred: " + err);
        return;
      }

      var songs = data.tracks.items;

      for (var i = 0; i < songs.length; i++) {
        console.log(i);
        console.log("artist(s): " + songs[i].artists.map(getArtistNames));
        console.log("song name: " + songs[i].name);
        console.log("preview song: " + songs[i].preview_url);
        console.log("album: " + songs[i].album.name);
        console.log("-----------------------------------");
      }
    }
  );
};
};