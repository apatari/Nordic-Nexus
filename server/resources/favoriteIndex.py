from flask_restful import Resource
from flask import request
from config import db

from models.favorites import Favorite

class FavoriteIndex(Resource):

    def post(self):

        json = request.get_json()

        fav = Favorite.query.filter_by(user_id=json['user_id'], nordic_center_id=json['nordic_center_id']).first()

        if fav:
            db.session.delete(fav)
            db.session.commit()

            return {}, 204
        else:
            new_favorite = Favorite(user_id=json['user_id'], nordic_center_id=json['nordic_center_id'])
            db.session.add(new_favorite)
            db.session.commit()

            return new_favorite.to_dict(), 201

        # try:
        #     new_favorite = Favorite(user_id=json['user_id'], nordic_center_id=json['nordic_center_id'])

        #     db.session.add(new_favorite)
        #     db.session.commit()

        #     return new_favorite.to_dict(), 201
        # except Exception as err:
        #     return {"errors": [str(err)]}, 422