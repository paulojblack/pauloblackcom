---
slug: "/big-brain-day"
date: "2023-05-26"
title: "Big Brain Day"
tags: ["management", "playbook", "work"]
---

Big Brain Day is an exercise I've created for my software teams to spend a 24h period hacking with each other on a
specific topic with a high level set of goals to work towards for the purpose of exploring software as a team,
emphasizing learning and growth. I've noticed a tendency during hackatahons and similar exercises for strong developers
to leave their teammates in the dust as they sprint towards a deliverable. I've also seen the anxiety and
competitiveness that can come out of those exercises overshadow team and skill building. Hackathons have their place, but for Big Brain Day,
I emphasize that the KPI is the ability of any given developer participating in the exercise to speak to any decision or
tradeoff made along the way. The pressure's off, the fun is on, and my only requirement is that no one leaves their
teammates behind.

I want to improve my team's infrastucture skills, demystify the back end and get them excited about doing infra and
data work as the team is currently biased to front end development. So for BBD, I cleared the team's routine meetings for the day,
instructed everybody well ahead of time to wrap up work in flight, address any outstanding bugs and agree on ownership
for any incidents that might arise during BBD. Ahead of time, I created a new AWS account (and deleted the default VPC, subnets etc) backed by
my credit card and secured some funds so everybody could eat a meal together during the project. I got
everybody on a call and presented the following goals to them:

Goal 1: Starting with an empty AWS account, produce infrastructure such that an html page c
ontaining an image is served from an EC2 instance. This should be connected to a purchased domain

Goal 2: Have the html page make a request out to a database that can *only* be accessed from the server containing the html page.

Extra credit:
- Draw a diagram of the stack, including network assets  
- Simulate high traffic to your domain (there are tools for this, use google). Can you crash the server or prevent it from
receiving more traffic? What is actually happening to the server when this happens? Look at CPU/Mem and system logs  
- What would implementing a bare bones CI/CD look like here? If I add a new image to my html file, or change some text on
it, how could I trigger changes in prod on deploy?  

I encouraged them to use Cloudformation/Terraform for the sake of sharing their work and making it easy to pick up where
they left off if we nuke the account and do the exercise again in a month. I showed them how easy it is to iterate
Terraform code with GPT and Copilot and hammered home the only concerns I had: 1) On the spectrum of t2.micro to
r5.16xlarge, know which end you need to be on and 2) You shouldn't have access keys for our real, production AWS account
locally - but if for some reason you do, make damn sure Terraform or the AWS CLI is using the right keys.

The team adored it. I received unsolicited feedback from every participant about how much fun they were having and they
were eager to share what they had learned with me. At one point I hopped on Zoom with them to see if they needed an
assist with a problem they were sharing code snippets and error messages about over Slack, and they kicked me out
insisting that they would have more fun solving it themselves.


- Would you do something like this again?
- Would you be interested in leading the team in a similar exercise?
 

