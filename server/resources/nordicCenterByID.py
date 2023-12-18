from flask_restful import Resource
from flask import request
from config import db

from models.nordicCenters import NordicCenter

class NordicCenterByID(Resource):

    def get(self, id):

        nordic_center = NordicCenter.query.get(id)

        if nordic_center:
            return nordic_center.to_dict(), 200
        
        else:
            return {"error": "Nordic center not found"}, 404
        
    def patch(self, id):

        nordic_center = NordicCenter.query.get(id)
        json = request.get_json()

        if not nordic_center:
            return {"error": "Nordic center not found"}, 404
        else:
            try:
                nordic_center.name=json['name']
                nordic_center.latitude=json['latitude']
                nordic_center.longitude=json['longitude']
                nordic_center.address=json['address']
                nordic_center.report_url=json['report_url']
                nordic_center.map_url=json['map_url']
                
                db.session.add(nordic_center)
                db.session.commit()

                return nordic_center.to_dict(), 201

            except Exception as err:
                return {"errors": [str(err)]}, 422

