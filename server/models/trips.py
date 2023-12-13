from sqlalchemy_serializer import SerializerMixin
# from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates


from config import db

class Trip(db.Model, SerializerMixin):
    __tablename__ = 'trips'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    nordic_center_id = db.Column(db.Integer, db.ForeignKey('nordic_centers.id'))
    snow_cover = db.Column(db.Integer, nullable=False)
    grooming = db.Column(db.Integer, nullable=False)
    weather = db.Column(db.Integer, nullable=False)
    fun_factor = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.String)
    date = db.Column(db.Date, nullable=False)


    user = db.relationship('User', back_populates='trips')
    nordic_center = db.relationship('NordicCenter', back_populates='trips')

    serialize_rules = ('-user.trips', '-nordic_center.trips')

    @validates('snow_cover', 'grooming', 'weather', 'fun_factor')
    def validate_rating(self, key, num):
        if not 0<= num <= 5 or not type(num) == int:
            raise ValueError("Ratings must be a number between 0 and 5")
        return num
    
    @validates('comment')
    def validate_comment(self, key, comm):
        if len(comm) > 1000:
            raise ValueError("Comment must be fewer than 1000 characters")
        return comm
    
    def __repr__(self):
        return f'Trip ID: {self.id}'