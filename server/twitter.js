Twit = new TwitMaker({
  consumer_key:         'vcIBvcXZFYfD31KKjCfMow',
  consumer_secret:      'Abpt3ksSRUxaRzMnu7fHTmjEyhfoMV8bpZvzZoQXrE',
  access_token:         '19496635-XM2E4HycWlfs8tZvWBA3DvMqBKYVunjkL5TGtDhgA',
  access_token_secret:  'LpFYTbsdXvu8HBdInBi5FS6cjBIrh8OEB7l1kHEhyv05k'
});

var stream = Twit.stream('statuses/filter', {follow: '18378349'});

stream.on('tweet', Meteor.bindEnvironment(function (tweet) {
  if (tweet) {
    console.log(tweet);
    if(tweet.retweeted_status) {
      Retweets.insert(tweet);
    } else if (tweet.in_reply_to_user_id != null) {
      Mentions.insert(tweet);
    } else {
      Tweets.insert(tweet);
    }
  }
}));

stream.on('favorite', Meteor.bindEnvironment(function (tweet) {
  console.log(tweet);
}));