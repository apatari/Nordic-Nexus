#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session, render_template
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models.users import User
from models.nordicCenters import NordicCenter
from models.trips import Trip
from models.favorites import Favorite

# Resource imports
from resources.login import Login
from resources.checkSession import CheckSession
from resources.signup import Signup
from resources.logout import Logout
from resources.nordicCenterIndex import NordicCenterIndex
from resources.nordicCenterByID import NordicCenterByID
from resources.tripIndex import TripIndex
from resources.favoriteIndex import FavoriteIndex

# Views don't go here!

# @app.route('/')
# def index():
#     return '<h1>Project Server</h1>'

api.add_resource(Login, '/api/login', endpoint='login')
api.add_resource(CheckSession, '/api/check_session')
api.add_resource(Signup, '/api/signup')
api.add_resource(Logout, '/api/logout')
api.add_resource(NordicCenterIndex, '/api/nordiccenters')
api.add_resource(NordicCenterByID, '/api/nordiccenters/<int:id>')
api.add_resource(TripIndex, '/api/trips')
api.add_resource(FavoriteIndex, '/api/favorites')


if __name__ == '__main__':
    app.run(port=5555, debug=True)

