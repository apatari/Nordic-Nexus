# Nordic Nexus - All your Nordic skiing info in one place

Comparing weather, trail conditions, and updates across several Nordic centers can be difficult.  Nordic Nexus is here to provide a way to keep up to date with the latest info and plan your next cross country skiing adventure.  Create or discover profiles for your favorite Nordic ski destinations.  Link trail reports and maps and connect to the latest weather reports for each area.  Log your trips to let others know how that tracks look today.  There's even a map feature to plan your next trip's driving route!

## Setup

This repo is currently deployed [at this address](https://nordic-nexus.onrender.com/) using Render.  You are welcome to fork, clone, and modify it for any purpose.  In order to run it on your own local machine, you'll need to cd to the project directory and run a few commands in the terminal:
```bash
pipenv install
```
```bash
pipenv shell
```

From there, cd into the server directory and find the config.py file.  Look for the following lines of code, somewhere around line 26:

![Config lines](https://github.com/apatari/squawk-rack/assets/108021977/0ee909b7-a2af-484e-ae00-d80e7b63a902)

Uncomment the commented line that specifies 'sqlite:///app.db' as the database and comment out the one that looks in the OS environment for it.  This will allow you to work with a local db rather than wherever you choose to host your Postgresql db in the event that you deploy.

Stay in the server directory and run:

```bash
flask db init
```
```bash
flask db migrate -m'create tables'
```
```bash
flask db upgrade
```
```bash
python seed.py
```
```bash
python app.py
```
From there, open a new terminal in the main directory and run:
```bash
npm install --prefix client
```
You should see a working version of Nordic Nexus running on your machine!

## Usage

![NordicNexus](https://github.com/apatari/Nordic-Nexus/blob/main/NordicNexusGIF.gif)

Start by creating a username and password.  From there you can browse the Nordic centers or make new profiles for any that aren't already in the database.  Selecting an individual center brings up more information, including the weather forecast, trail report and map links, and recent trips.  You can fill out the "New Trip" form to log a recent outing and provide helpful information for anyone else considering a trip to that same ski area.  Adding a Nordic center to your favorites will ensure that it appears on your home screen for easy monitoring.

## Acknowledgment

This project was built with [Create React App](https://github.com/facebook/create-react-app) and [SQLAlchemy](https://www.sqlalchemy.org/) and uses [Bootstrap React](https://react-bootstrap.netlify.app/) and [Bootswatch](https://bootswatch.com/) for styling.  Deployed on [Render](https://render.com/).  Thank you to the folks who created and maintain those resources.

