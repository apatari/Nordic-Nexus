from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates
import validators

from config import db

class NordicCenter(db.Model, SerializerMixin):
    __tablename__ = 'nordic_centers'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    address = db.Column(db.String, nullable=False)
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)
    report_url = db.Column(db.String)
    map_url = db.Column(db.String)

    @validates('name')
    def validate_name(self, key, name):
        if not name or not len(name):
            raise ValueError("Must provide a name for the Nordic center")
        if len(name) > 50:
            raise ValueError("Name must be 50 characters or fewer")
        return name
    
    @validates('address')
    def validate_address(self, key, add):
        if not add or not len(add):
            raise ValueError("Must provide an address")
        return add
    
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
    
        # try:
        #     validators.url(url)
        #     return url
        # except:
        #     raise ValueError("Please enter a valid URL")
        