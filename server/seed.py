#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from model import db
from models.users import User
from models.nordicCenters import NordicCenter

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!

        print("Deleting tables...")
        User.query.delete()
        NordicCenter.query.delete()

        print("Adding users...")
        user1 = User(username="user1", address='Keene, NH')

        user1.password_hash='bigPuppy'

        db.session.add(user1)

        db.session.commit()

        nc1 = NordicCenter(name="Grafton Ponds", address="Grafton, VT", latitude=43.16176, longitude=-72.61525)
        nc2 = NordicCenter(name="BOC Trails", address="58 Senator Gannett Dr, Brattleboro, VT 05301", latitude=42.87315, longitude=-72.58144)

        db.session.add(nc1)
        db.session.add(nc2)
        db.session.commit()