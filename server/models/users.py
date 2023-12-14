from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property
# from trips import Trip

from config import db, bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    _password_hash = db.Column(db.String)
    address = db.Column(db.String, nullable=False)

    trips = db.relationship('Trip', back_populates='user', cascade='all')
    trip_centers = association_proxy('trips', 'nordic_center',
                                     creator = lambda nc_obj: Trip(nordic_center=nc_obj))
    
    favorites = db.relationship('Favorite', back_populates='user', cascade='all')
    favorite_centers = association_proxy('favorites', 'nordic_center',
                                         creator = lambda nc_obj: Trip(nordic_center=nc_obj))
    
    serialize_rules = ('-trips.user', '-_password_hash')

    @validates('username')
    def validate_username(self, key, name):
        if not name or not 0 < len(name) <= 20:
            raise ValueError("Name must be 1-20 characters")
        if name in [user.username for user in User.query.all()]:
            raise ValueError("Sorry, that username is not available")
        return name
    
    @validates('address')
    def validate_address(self, key, address):
        if not address or len(address) < 1:
            raise ValueError("Must provide an address")
        return address

    
    @hybrid_property
    def password_hash(self):
        raise AttributeError('Password hashes may not be viewed.')

    @password_hash.setter
    def password_hash(self, password):
        if len(password) < 4:
            raise ValueError("Passwords must be 4 or more characters")
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))

    def __repr__(self):
        return f'User {self.username}, ID: {self.id}'