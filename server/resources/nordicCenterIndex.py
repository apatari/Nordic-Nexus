
from flask_restful import Resource

from models.nordicCenters import NordicCenter

class NordicCenterIndex(Resource):

    def get(self):

        nordic_centers = [nordic_center.to_dict() for nordic_center in NordicCenter.query.all()]

        return nordic_centers, 200
    