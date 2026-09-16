---
date: 20/7/2026

title: Kelvin's Kopitiam

description: Kelvin's Kopitiam is a simulation created by myself and a team of four others. The simulation contains customers with personalities and preferences, deciding which stall and food to order based on a collection of heuristics. Customers also find tables to sit down at and consume the food before leaving.

brief: My first simulation game!

thumbnail_url: "/posts/KelvinsKopitiam_Mid-game.jpg"

tags: ["simulation", "unity", "coding", "system design"]
---
![Cover Image](/posts/KelvinsKopitiam_Mid-game.jpg)
Kelvin's Kopitiam - My first simulation game!

Kelvin's Kopitiam is a simulation created by myself and a team of four others. The simulation contains customers with personalities and preferences, deciding which stall and food to order based on a collection of heuristics. Customers also find tables to sit down at and consume the food before leaving.
# About the project
As part of the final assignment for my system design module, me and 2 others created the system, content, and interface design of a simulation of sorts. We were assigned the hawker centre simulation, where unique customers could decide on the food they want from the different stall types. And would also find seats to sit down and eat before leaving. 
# The process 
The brief regarding the design proposal was made and distributed to us by our professor, [Kevin Prior](https://www.linkedin.com/in/k-star/). We were then tasked with taking on one form of design each. System design, content design, and interface design. I was put in charge of system design due to my interest as well as my stronger programming skillset. 
## System Design
As the system designer, I spent a lot of time discussing with my team about how we want the game to go, i.e. what parts of real-life we want to, and can feasibly recreate given the capabilities and time we possessed at the time of the commencement of development. As such, we settled with features and systems that met the proposal's requirements and a little extra. 

For most of my though process regarding this project, I spent time working on first, simulating life. Things such as simulating the unique tastes of individuals through personalities and preferences, the act of queueing and paying for food. Waiting for it to be ready for collection before finding a seat and eating the meal. And finally leaving the hawker centre. 

Then I thought of the interactions between systems like stalls, where they have their own selection of food that customers peruse and decide on, their own cook times per food, a queue of dishes to cook, and a way to call customers when the food is ready.

There is also a system for the economy. With its own transaction and account tracking system that outputs historical data into a csv file at the end of the game. The ability to track data also allows the game to display graphs to view revenue trends with a custom Unity UI Toolkit graph renderer. 
### System Design Document
![System Design Document Cover](/posts/KelvinsKopitiam_SDDCover.jpg)
<a href="/posts/KelvinsKopitiam_SDD.pdf" download>Click to Download</a>

## Difficulties
Due to the nature of the degree, many students do not come from a programming background, or have strong programming knowledge. My team was one of them.

However, all of my team members still managed to create really amazing work for the given timeframe and the difficulty of simulation game code! 

Some issues we had were with programming the queue system; it utilises dynamically assigned queue positions based on demand and sent move commands to the pathfinding system to move the patrons around. 

This was a difficult task for the teammate in-charge of the task as they also had to complete the patron personality system. 

In the end, the system was complete, but was slightly buggy underload. Meaning we could not fully utilise other more optimised and polished systems. Nor could we implement more dynamics. 
# Final Game
## Screen Captures
### Main Menu
![Main Menu](/posts/KelvinsKopitiam_MainMenu.jpg)
### Preparation Phase
![Preparation Phase](/posts/KelvinsKopitiam_PreRound.jpg)
### Mid Game
![Mid Game](/posts/KelvinsKopitiam_Mid-game.jpg)
## The Team
[Willie Tan](https://www.linkedin.com/in/willietanjenqhong/) - Art, UI/UX, Programmer, Designer

[Ella Chionh](https://www.linkedin.com/in/ellachionh/) - Art, UI/UX, Programmer, Designer

[Ernest Yeo](https://www.linkedin.com/in/ernestyeo333/) - Content, Designer, Programmer

[Shayne Ong](https://www.linkedin.com/in/shayne-ong/) - Content, Programmer

[Cai Xuan](https://www.linkedin.com/in/exrion/) - Tech Lead, Designer, UI/UX
# Thoughts and Reflection
Overall, the project was a fun experience, and my first foray into system design. It afforded me a lot of experience regarding systems and dynamics. It also gave me a chance to experiment with complex economy systems and optimising pathfinding node lookup techniques. 
# Contact and Download
If you wish to hear more about the game we made, do contact me through the social links in [About](https://exrions-portfolio.vercel.app/about).

Otherwise, you may also download the game from the [itch.io](https://exrionlexom.itch.io/kelvins-kopitiam).