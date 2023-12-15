from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates
import validators
# from trips import Trip

import requests
import os
from dotenv import load_dotenv

from config import db

load_dotenv()

class NordicCenter(db.Model, SerializerMixin):
    __tablename__ = 'nordic_centers'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    address = db.Column(db.String, nullable=False)
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)
    report_url = db.Column(db.String)
    map_url = db.Column(db.String)

    trips = db.relationship('Trip', back_populates='nordic_center')
    trip_users = association_proxy('trips', 'user',
                                     creator = lambda user_obj: Trip(user=user_obj))
    
    favorites = db.relationship('Favorite', back_populates='nordic_center', cascade='all')
    favorite_users = association_proxy('favorites', 'user',
                                         creator = lambda user_obj: Trip(user=user_obj))

    serialize_rules = ('-trips.nordic_center',)

    @validates('name')
    def validate_name(self, key, name):
        if not name or not len(name):
            raise ValueError("Must provide a name for the Nordic center")
        if len(name) > 50:
            raise ValueError("Name must be 50 characters or fewer")
        return name
    
    @validates('address')
    def validate_address(self, key, address):
        if not address or not len(address):
            raise ValueError("Must provide an address")
        url = 'https://addressvalidation.googleapis.com/v1:validateAddress?key=' + os.environ.get('REACT_APP_GOOGLE_MAPS_KEY')

        body= {"address": {
            "addressLines": [address]}}

        resp = requests.post(url, json=body)

        if not(resp.json()['result']['address']['addressComponents'][0]['confirmationLevel'] == "CONFIRMED"):
            raise ValueError("Address cannot be used by Google Maps")
        return address
    
    @validates('latitude', 'longitude')
    def validate_coordinates(self, key, value):
        if not ((type(value) is float) or (type(value) is int)):
            raise ValueError("Coordinates must be a number")
        if not -180 < value < 180:
            raise ValueError("Coordinates must be between -180 and 180")
        return value

    @validates('report_url', 'map_url')
    def validate_url(self, key, url):
        if url == "":
            return None

        if validators.url(url):
            return url
        else:
            raise ValueError(f"Invalid URL for {'Trail Report' if key == 'report_url' else 'Trail Map'}")
    
    def __repr__(self):
        return f'Nordic Center {self.name}, ID: {self.id}'
        