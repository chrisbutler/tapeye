  Template.tweets.helpers({
    list: function() {
      return Tweets.find();
    }
  });

  Template.twitterFeed.rendered = function () {
    Reveal.initialize();
    var i = Tweets.find().fetch().length;
    Reveal.slide(i-2);
    Meteor.setTimeout(function(){
      Reveal.next();
    },1000);
  }