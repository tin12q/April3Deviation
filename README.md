# April3Deviation

## Description

April3Deviation is a game in [LQDOJ](https://lqdoj.edu.vn/) Third April Fools Contest

## Features

- Finding 'i' game
- Bomb disposal game
- A rickroll based prank
- It has Backend server to protect the answers

## Techonlogies used

- Nginx
- Flask

## Installation

1. Server

- Install Docker on your machine: First, you'll need to install Docker on your machine. You can find installation instructions for your operating system on the Docker website.
- All dependencies are included in requirements.txt
- I deployed server on Docker, below is installation command:

```
docker build -t myapp .
docker run -p 5000:5000 myapp
```

- This command start a container from my image, which located in server. You can access it by visit http://localhost:5000

2. Website
   - First, you have to obtain this website files.
   - Second, I've installed it on a Nginx server, but you can install it by using any application to serve web content.
   - Voila, you're done!
