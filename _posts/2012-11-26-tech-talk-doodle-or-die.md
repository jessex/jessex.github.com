--- 
permalink: /blog/tech-talk-doodle-or-die.html
layout: post
title: "Tech Talk: Doodle or Die"
published: true
category: programming
tags: 
- Doodle or Die
- JavaScript
- MongoDB
- Node.js
- Tutorial
- Web Development
---
On November 1, I gave a tech talk with the [Michigan Hackers](http://michiganhackers.org/ "Michigan Hackers") group at the University of Michigan. Specifically, I spoke about the tech stack behind [Doodle or Die](http://doodleordie.com/ "Doodle or Die"), the completely, absurdly hilarious game of "telephone" with drawings. I spoke for just an over an hour about the core of our stack, namely: [Node.js](http://nodejs.org/ "Node"), [Express.js](http://expressjs.com/ "Express"), [MongoDB](http://www.mongodb.org/ "mongoDB") and [Amazon S3](http://aws.amazon.com/s3/ "Amazon S3"). We shared some laughs and we learned some cool things!

A video of the presentation can be seen below, courtesy of the Michigan Hackers YouTube channel:

<iframe width="700" height="394" src="http://www.youtube.com/embed/gG8M2emVTH0" frameborder="0">https://github.com/mojombo/jekyll/issues/346</iframe>

The slideware that I roll through in the presentation can be found on [Github](https://github.com/jessex/doodle-tech "doodle-tech") \[[direct download](https://github.com/jessex/doodle-tech/raw/master/doodletech.pdf "doodletech.pdf")\].

I had an amazing time giving the talk: the group definitely seemed to be into the subject matter and there was a pretty good turnout, given the fact that we sort of organized the talk at the last minute. Michigan Hackers certainly know how to put on a party.

But somewhat unexpectedly, even though I was the one giving the talk, _I_ learned a ton. Not just about giving a technical presentation, though there were certainly many lessons to be learned along that front, but also about the subject matter itself. I am still relatively new with all of this technology--I've been working on Doodle or Die for only a few months, and I had negligible exposure to the precise stack beforehand--and the process of constructing the presentation was a great way to gain more knowledge of and experience with the actual software. Working off of my prior experience in web development (albeit with different tech stacks) and my still nascent experience with Node/Express/Mongo, I was able to construct a general skeleton that I wanted to take the talk in, filling in the gaps with further research and experimentation. 

To say that I now know at least twice as much about the tech that we use at Doodle or Die than I did before building and giving the talk would not be a stretch. It would likely be an _understatement_. Just like writing a professor-granted "cheat sheet" for an exam in college compels you to study, composing a presentation for a tech talk compels you to refine your own technical expertise. 

As for the actual quality of the talk, I would assess myself positively. I believe that I did a good job of striking a balance between breadth and depth. The audience is composed of college students with, in general, little experience in web development or the technology. As such, I tried not to get too bogged down in technical details, providing a surface examination of the higher-level concepts and penetrating into greater detail where appropriate and necessary. For instance, going deeper into the concept of event-driven, asynchronous concurrency was critical for understanding Node, even though there is a somewhat steep learning curve. _(Aside: [this thesis](http://berb.github.com/diploma-thesis/original/055_events.html#st "Event-driven Concurrency") by Benjamin Erb contains a fantastic case study on Node's model of concurrency.)_

I think that I did the material justice and presented a clear and accurate portrait of the technology behind Doodle or Die.

Furthermore, I think that I was successful in keeping the audience entertained and focused. The little injections of actual doodles kept the laughs roaring, as did the interludes which helped provide a bit of a break between the intensive portions of the talk. The live doodling interlude was particularly awesome, when Adam Williams live-doodled [step 8 of this chain](http://doodleordie.com/c/1GC8QR6fG1 "A Roman Soldier") and Ian Paschal followed up with [step 1 of this chain](http://doodleordie.com/c/8qKkaQJKG5 "Bob Ross"). Pure hilarity.

And the feedback that I have received has been highly positive and supportive, with some very helpful constructive criticism.

But there are areas where I can and should improve. Namely:
* __I need to project more__. Though it may not seem like a significant issue on the video, the truth is that I am typically a pretty low, quiet talker. There were a few times where my voice sort of trailed off at the end of sentences, and where I simply did not speak loud enough.
* __I need to be more consistent in sustaining eye contact__. In general, this is a strong suit of mine. In one on one conversation and when speaking to a group, I do a pretty good job of maintaining a healthy amount of eye contact. But at times, particularly when going into greater technical detail or walking through some sample code, I tended to focus more on the slide or on some invisible shapes and colors in a conceptual plane that I zone off into. I have to maintain consistency with eye contact throughout, _particularly_ in the more technically involved sections.
* __I need to cut back on the self-deprecation__. My personal brand of humor is often self-deprecating, dry, and dark. A handful of my jokes and off-the-cuff remarks during the talk followed this model. It is not entirely appropriate for a presentation of this sort, where the audience has agreed to pay attention under the premise that I am an expert and that subsequently they will learn. Cutting myself down or short-selling my own knowledge gives off the wrong impression.
* __I need to make fewer assumptions about the knowledge and experience of the audience__. As previously mentioned, I was speaking to a group without much expertise in the subject matter. There were multiple points where I not only assumed that every one knew what I was talking about, but I editorialized the concept with an "obviously" or a "hopefully everyone has seen this". The former can decrease the educational value of the presentation and the latter can come off as just plain rude. There were times where I stopped to explain a particular point, such as atomicity of database transactions or HTTP verbs and routing, but there were times where I erroneously assumed that there had been prior exposure, such as to JSON. I have to continue to keep the entire audience in step with the material.
* And finally, a question to ponder: __do I need to keep tighter control on the presentation__? The live-doodling interlude in the presentation ran on for a bit longer than I would have liked and the talk got a tad bit unwieldy. I like to keep the presentation tight and evenly paced; I like to establish a consistently brisk flow. I absolutely would _not_ remove the interlude in retrospect: I think it was completely hilarious and it helped to showcase the fun to be had with Doodle or Die. But perhaps keeping that interlude slightly more controlled would have been beneficial. Then again, whatever! It was fun!

<p/>
If you watch the video or go through the slideware and have comments, critiques, or corrections, feel free to let me know! 

This was an absolute blast! I only hope that I helped to educate and to get some up-and-coming developers excited about the world on the Web. And if a few more folks become Doodlers, then all the better.

I extend a humongous _thank you_ to the Michigan Hackers and the University of Michigan for giving me the chance to speak about exciting stuff with great people!
