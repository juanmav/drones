# Drones
A technical exam from a Job search!

## The problem.

The goal of this assignment is to find out how you handle a scenario with the constraints and vagueness of the real world. We expect you to make a variety of assumptions given the information you have, and to clearly document them in the README.


A company has a number of drones flying around the country. You have been tasked to build a system to track the location of every drone in real-time. The system's dashboard will only display the last location of the drones, so the backend doesn't need to worry about the history. You can store the state of the application in-memory for simplicity reasons.


Each drone should be associated with a unique identifier, and should report its geo-location coordinates to the central server in real-time through a cellular modem connection. Cellular modem connections are expensive, therefore you need to make sure the drones report back their location using as little data as possible. You are in charge of deciding the protocol and frequency that the drones will use to communicate with the backend. You are welcome to code a small drone simulation if that helps with testing, but its not mandatory.


The dashboard should be a simple web application displaying the list of active drones as a table, by their unique identifiers, along with their current speed. You should visually highlight the drones that have not been moving for more than 10 seconds (the drone sent updates, but didn't move more that 1 meter).


Please provide a Dockerfile so we can easily run your project. You are encouraged to use the programming languages and frameworks that you are most comfortable with, as we want to focus on your understanding of full-stack systems and approach to software engineering rather than on your mastery of particular technologies. That being said, Resin.io is a Node.js-based company, so we will appreciate if you provide additional comments and documentation if that's not the stack you chose, just to make it easier for us to review your solution.


A software application is much more than its production code. We expect you to deliver documentation, automated testing at different levels, and integration with tools to aid development productivity, such as linters.


We will give you extra points for:

Well articulated assumptions and explanations of how you built the system
Maintainability
Good coding practices
Historical commits that show incremental progress

Things to avoid:

A single-container solution is more than enough. Attempting to create a microservices architecture with something like Docker Compose takes a lot of time, and its not essential for this assignment
You can store state as an in-memory object. Integrating with databases such as Redis or MongoDB can take a lot of time, and its not essential for this assignment
Don't spend too much time on the front-end part of the assignment (a simple table is enough). You definitely don't need to create a real-time maps component with something like Google Maps. We would rather have you focusing on the core backend problems


## Development mod local

> npm install
> npm run dev

## Development mod Docker

> npm run dev-docker

## To build and custom run docker.

> docker build -t drones . 
> docker run -p 3000:3000/udp -p 8080:8080 drones

## Run a drone emulating messages

> npm run send

## FAQ

Why is .env upload?

For now it is easier to work with the .env file in the repo, this project is only for exam purposes. 
In production project .env should not exits in the repository.

Why udp?

UDP is a light protocol is not connection-oriented as TCP so it is a good choice for communicate
little packets maintaining the cost low.