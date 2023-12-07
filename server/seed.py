#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from model import db
from models.users import User

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!

        print("Deleting tables...")
        User.query.delete()

        print("Adding users...")
        user1 = User(username="user1", address='Keene, NH')

        user1.password_hash='bigPuppy'

        db.session.add(user1)

        db.session.commit()