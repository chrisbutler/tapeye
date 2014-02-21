Twit = new TwitMaker({
  consumer_key:         'vcIBvcXZFYfD31KKjCfMow',
  consumer_secret:      'Abpt3ksSRUxaRzMnu7fHTmjEyhfoMV8bpZvzZoQXrE',
  access_token:         '19496635-XM2E4HycWlfs8tZvWBA3DvMqBKYVunjkL5TGtDhgA',
  access_token_secret:  'LpFYTbsdXvu8HBdInBi5FS6cjBIrh8OEB7l1kHEhyv05k'
});

var stream = Twit.stream('statuses/filter', {follow: '1592123647'});

stream.on('tweet', Meteor.bindEnvironment(function (tweet) {
  if (tweet)
    Tweets.insert(tweet);
}));
