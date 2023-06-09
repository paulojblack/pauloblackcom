---
slug: "/terraform"
date: "2023-04-21"
title: "Terraform"
tags: ["tech", "devops"]
---

Before writing any of the bulk of this post, I feel confident that everything could be summed up with two statements:

1) I can't believe I haven't tried working with Terraform sooner
2) You should try using Terraform

I wanted to spin up a simple N-tier stack (front end, API, database) for a side project during a week off and decided to
use [AWS Fargate](https://aws.amazon.com/fargate/) to serve the application containers and RDS for the Postgres
instance. I'd never used Fargate nor ECS nor ECR before, so I decided to roll the stack with those tools.

It quickly became tedious to run through the entire GUI of an AWS service's creation wizard, skimming irrelevant
configuration and repeatedly entering many similar settings while I iterated on the options that I needed to fiddle with
to get things going. This feeling should sound familiar to anybody who has tried to learn a new AWS service through
their UI.

Enter Terraform. The entire process became mind blowingly simple and within a few hours I had produced a [generic set of
scripts](https://github.com/paulojblack/infra-scripts) that would spin up the entire stack I was trying to build within
seconds AND could readily do it again for my next project.

A few thoughts:
- Copilot *really* shined here. I had not used Copilot much before this, but it occurred to me that it is
  exceptionally powerful when working with DSL/config language as that will tend to be highly redundant.
- GPT also shined here, it was fun to pass it my ugly noob scripts and have it clean up for me. Moreover, having it
  generate a loose outline of what I was trying to do that I could then tweak to my specific needs was very
  pedagogically useful
- This was made much easier by the fact that I was working with an empty AWS account (I even deleted the default
  VPC/Subnets etc). It can be a hassle to synchronize local Terraform state to remote.
- I imagine the above bullet is far and away the biggest pain point when using this in an organization prod environment. 

In conclusion:

1) I can't believe I haven't tried working with Terraform sooner
2) You should try using Terraform
