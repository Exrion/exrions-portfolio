---
date: 3/4/2026

title: Just Beat It!

description: Just Beat It! Is my first DigiPen game project in User Experience and Game Development. It was a monumentally difficult project as it features writing and reading beatmaps to json files and getting beat timings accurate and user-adjustable was quite the task! I'm glad we managed to pull through though! 

brief: My first DigiPen game project and first ever rhythm game project.

thumbnail_url: "/posts/JustBeatIt_Cover.png"

tags: ["game", "music", "unity"]
---
![Cover Image](/posts/JustBeatIt_Cover.png)
Just Beat It! - My first DigiPen game project and first ever rhythm game project.

Just Beat It! Is my first DigiPen game project in User Experience and Game Development. It was a monumentally difficult project as it features writing and reading beatmaps to json files and getting beat timings accurate and user-adjustable was quite the task! I'm glad we managed to pull through though! 

# About the project
We first began brainstorming for ideas for our first game at DigiPen. It started off as a simple puzzle platformer, with a narrative and a challenge driven game feel. That however, was scrapped in favour for something more of us had experience or inspiration in. A rhythm game. 

Initially, as the tech lead and main programmer of the team, I was not too confident towards the challenge of a rhythm game but decided to go for the challenge for the sake of learning and a fun programming puzzle. 
# The process
For this blog, I will be focussing on my experiences mainly. Which revolves around programming difficulties, challenges, and outcomes.
## Research
There was not a lot of information on the internet regarding how to create a rhythm game. Most information was basic and provided me with only the fundamentals of creating rhythm games, such as measuring beat timing through calculations and determining accurate passage of time within an audio clip in Unity. 

So I did what any less than sane programmer would. I built the rest of it from scratch. 
It was a really tough journey but really rewarding in the end, I've learned so much, know what to do and what not to; and I can proudly say that I have figured out how to create a rhythm game!
## Progress
### Core Rhythm Engine
![Early Development](/posts/JustBeatIt_EarlyDev.jpg)
Early builds of the core rhythm engine consisted of a proximity-based hit detection system. Simply put, it checks the distance between the tap point (static in nature), and the next closest beat within a given threshold. This system worked in theory, but was not accurate according to my early testers, most of whom were avid rhythm gamers.

This then led to my rebuild of the core rhythm engine to use timings to track the time difference between the tap and the next closest beat within the beat hit threshold. 
### Hold Beats
Held beats were tough to create. I had to register the press and release of the buttons, which would also require visual and code feedback for if it was released halfway, or held beyond its lifetime. Much of this resulted in a ton of time spent making held beats feel and look right, while working correctly in the codebase. 
### Map Editor
This was also the first time I created a game with a serialisation and deserialisation system for data persistence. With it, I added a in-game map editor that lets players create, update, and delete beatmaps in runtime. It also allowed me to learn a lot about Unity's UI Toolkit for more functional than aesthetic purposes. 

The editor was mainly created for my teammate Jyanne (who was mainly in-charge of music composition and beatmap creation) to easily make beatmaps, rather than directly edit json files.
# Final Game
And so after a gruelling full trimester of development, the game was finished, or as finished as we could get it!
## Screen Captures
### Character Select
![Character Select](/posts/JustBeatIt_CharSelect.png)
### Level Select
![Level Select](/posts/JustBeatIt_LevelSelect.png)
### Level 1
![Level 1](/posts/JustBeatIt_Level1.png)
### Level 2
![Level 2](/posts/JustBeatIt_Level2.png)
### Editor
![Editor](/posts/JustBeatIt_Editor.png)
## The Team
![Game Poster](/posts/JustBeatIt_Poster.jpg)
I would like to thank my amazing team for making this game possible! My two cracking artists Li Ting and [Shi Qi](https://twilichuchu.carrd.co/). As well as my awesome music composer and beatmap goddess Jyanne! Do check them out!
# Thoughts and Reflection
This project helped me grow so much in my programming skills, as well as teamwork and communication skills. I could say it was both a blessing and a curse. But I have improved so much since we first undertook this project!

If you wish to try out the game or hear more about it, do contact me through the social links in [About](https://exrions-portfolio.vercel.app/about).