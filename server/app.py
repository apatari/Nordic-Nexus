#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models.users import User

# Resource imports
from resources.login import Login
from resources.checkSession import CheckSession
from resources.signup import Signup

# Views don't go here!

# @app.route('/')
# def index():
#     return '<h1>Project Server</h1>'

api.add_resource(Login, '/api/login', endpoint='login')
api.add_resource(CheckSession, '/api/check_session')
api.add_resource(Signup, '/api/signup')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

