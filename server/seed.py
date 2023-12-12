#!/usr/bin/env python3

# Standard library imports


# Remote library imports


# Local imports
from app import app
from model import db
from models.users import User
from models.nordicCenters import NordicCenter

if __name__ == '__main__':
    
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!

        print("Deleting tables...")
        User.query.delete()
        NordicCenter.query.delete()

        print("Adding users...")
        
        user1 = User(username="user1", address='144 Belmont Avenue, Brattleboro, VT')
        user1.password_hash='bigPuppy'
        user2 = User(username="user2", address='Keene, NH')
        user2.password_hash='bigPuppy'
        user3 = User(username="user3", address='Putney, VT')
        user3.password_hash='bigPuppy'

        db.session.add(user1)
        db.session.add(user2)
        db.session.add(user3)

        db.session.commit()

        nc1 = NordicCenter(
            name="Wild Wings", 
            address="Peru, VT", 
            latitude=43.26272, 
            longitude=-72.90498, 
            report_url='https://wildwingsski.com/category/trail-conditions/',
            map_url='https://wildwingsski.com/wp-content/uploads/sites/23/2023/01/TrailMap-ToPrint.gif')
        nc2 = NordicCenter(
            name="BOC Trails", 
            address="58 Senator Gannett Dr, Brattleboro, VT 05301", 
            latitude=42.87315, 
            longitude=-72.58144)
        nc3 = NordicCenter(
            name="Prospect Mountain", 
            address="204 Prospect Access Road, Woodford, VT", 
            latitude=42.87537, 
            longitude=-73.07756,
            report_url='https://prospectmountain.com/conditions/')
        nc4 = NordicCenter(
            name="Jackson XC", 
            address="153 Main Street, Jackson, NH", 
            latitude=44.14664, 
            longitude=-71.18442, 
            report_url='https://www.jacksonxc.org/trail-report/',
            map_url='https://www.jacksonxc.org/wp-content/uploads/2021/03/JSTF-trailsmap2020-2.pdf')

        db.session.add(nc1)
        db.session.add(nc2)
        db.session.add(nc3)
        db.session.add(nc4)
        db.session.commit()