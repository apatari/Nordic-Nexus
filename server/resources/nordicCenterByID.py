from flask_restful import Resource

from models.nordicCenters import NordicCenter

class NordicCenterByID(Resource):

    def get(self, id):

        nordic_center = NordicCenter.query.filter_by(id=id).first()

        if nordic_center:
            return nordic_center.to_dict(), 200
        
        else:
            return {"error": "Nordic center not found"}, 404