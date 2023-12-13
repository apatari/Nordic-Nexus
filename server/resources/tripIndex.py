from flask_restful import Resource

from models.trips import Trip

class TripIndex(Resource):

    def get(self):
        trips = [trip.to_dict() for trip in Trip.query.order_by(Trip.date).all()]

        return trips, 200