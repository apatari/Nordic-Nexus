from flask_restful import Resource
from flask import request
import datetime
from config import db

from models.trips import Trip

class TripIndex(Resource):

    def get(self):
        trips = [trip.to_dict() for trip in Trip.query.order_by(Trip.date.desc()).all()]

        return trips, 200
    
    def post(self):

        json = request.get_json()

        try:

            dateArray = [int(date) for date in json['date'].split('-')]
            date = datetime.date(dateArray[0], dateArray[1], dateArray[2])

            new_trip = Trip(
                user_id=json['user_id'], 
                nordic_center_id=json['nordic_center_id'], 
                snow_cover=json['snow_cover'], 
                grooming=json['grooming'], 
                weather=json['weather'], 
                fun_factor=json['fun_factor'], 
                date=date,
                comment=json['comment']

            )
            db.session.add(new_trip)
            db.session.commit()

            return new_trip.to_dict(), 201
        except Exception as err:
            return {"errors": [str(err)]}, 422