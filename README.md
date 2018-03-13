![Logo](/screenshots/GitStarted.png?raw=true "GitStarted")

GitStarted is the perfect place for exploring Open Source Projects on GitHub.

Get project recommendations based on your past Open Source contributions just by signing in with your GitHub credentials.
Based on the languages you have used, the number of stars and forks that you have on your owned/contributed repositories, we show you a list of projects that meets your current level of expertise in Open Source development. 
<br/><br/>

**Features**

* A bar graph illustarting the different programming languages used by you in your GitHub based Open Source projects.

![Language Graph](/screenshots/graph.png?raw=true "Language Graph")<br/>


* A search box to filter out projects from our recommended list based on any keyword.

![Search Bar](/screenshots/search.JPG?raw=true "Search")<br/><br/>


* Liked any of the projects that we recommended? Great! Just click on the project to explore it even further.

  1. See a graph illustrating the various languages that has been used in the project.
  
    ![Repo Graph](/screenshots/rep_graph.JPG?raw=true "Repo Graph")<br/>
    
  2. Directly read the README.md of the project to understand it better and get started with contributing.
  
    ![Readme](/screenshots/readme.JPG?raw=true "Readme")<br/>

  3. Cannot think of any new feature to add? Why not try resolving some issues in the project by having a look at the issues ?
  
    ![Issues](/screenshots/issues.JPG?raw=true "Issues")<br/><br/>
    
**P.S - The website has not been hosted yet. In order to run the website on your localhost, please clone and do the following**
1. Make sure you have Node.js and MongoDB installed on your system.
2. Go to the root of the project and run `npm install` in command line to download the project dependencies.
3. Start your Mongo server.
4. Go to the root of the project and run `node app.js` in command line to start the project server.
5. Go to your preferred browser and type `localhost:3000` in the address bar.
6. Start exploring your recommended projects !!!<br/><br/>
    
**Things to be done**
* Enable slider functionality to let user select the level of projects within his experience range.
* Store user experience details in database and directly access from there instead of calculating everytime to reduce the time taken for data retrieval.
* Update user experience details in database at frequent intervals of user login.
* Add more parameters to the recommended project search query to increase the accuracy of the results.
* Add a tips page in order to help novice Open Source developers.
* Add a trending repositories page.<br/>
**Contributions in the form of above features or any other feature is always welcome !!**
<br/><br/>

**Credits**
* github.js - https://github.com/github-tools/github
* octonode - https://github.com/pksunkara/octonode
* octokat - https://github.com/philschatz/octokat.js
* frappe charts - https://github.com/frappe/charts
