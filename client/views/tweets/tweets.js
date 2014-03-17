  Template.tweetFeed.helpers({
    list: function() {
      return Tweets.find();
    }
  });

  Template.mentionFeed.helpers({
    list: function() {
      return Mentions.find();
    }
  });

  Template.tweetFeed.rendered = function () {
    Reveal.initialize({transition:'carousel', controls:false});
    var i = Tweets.find().fetch().length;
    Reveal.slide(i-2);
    Meteor.setTimeout(function(){
      Reveal.next();
    },1000);
  }