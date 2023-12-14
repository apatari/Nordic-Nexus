from sqlalchemy_serializer import SerializerMixin
from config import db

class Favorite(db.Model, SerializerMixin):
    __tablename__ = 'favorites'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    nordic_center_id = db.Column(db.Integer, db.ForeignKey('nordic_centers.id'))

    user = db.relationship('User', back_populates='favorites')
    nordic_center = db.relationship('NordicCenter', back_populates='favorites')

    serialize_only = ('id', 'user_id', 'nordic_center_id')

    def __repr__(self):
        return f'Favorite {self.id}'