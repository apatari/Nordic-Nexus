
from flask_restful import Resource
from flask import request
from config import db

from models.nordicCenters import NordicCenter

class NordicCenterIndex(Resource):

    def get(self):

        nordic_centers = [nordic_center.to_dict() for nordic_center in NordicCenter.query.all()]

        return nordic_centers, 200
    
    def post(self):
        
        json = request.get_json()

        try:
            new_nordic_center = NordicCenter(
                name=json["name"],
                address=json["address"],
                latitude=json["latitude"],
                longitude=json["longitude"],
                report_url=json["report_url"],
                map_url=json["map_url"],
            )

            db.session.add(new_nordic_center)
            db.session.commit()

            return new_nordic_center.to_dict(), 201

        except Exception as err:
            return {"errors": [str(err)]}, 422

    