const express = require('express');
const connect = require('./config/database')

const app = express();
const PORT = 3000;

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(PORT, async ()=> {
    const repo = new TweetRepository();
    console.log(`server started at ${PORT}`);
    await connect();
    console.log('Mongodb connected');

    // createTweet = await repo.create({content: "1st tweet", userEmail: "abc@admin.in"});
    // console.log(createTweet);

    // let getTweet = await repo.get('65ae1d3160e839e8f059efa7');
    // console.log(getTweet);

    // const newComment = await Comment.create({content: 'comment on 1st tweet', userEmail: 'c1.@lol.admin'});
    // getTweet.comments.push(newComment);
    // getTweet.save(); 

    // let getTweetWithUser = await repo.getUserWithComment('65ae1d3160e839e8f059efa7');
    // console.log(getTweetWithUser);

});

