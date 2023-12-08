


# Remote library imports
from flask import session
from flask_restful import Resource

# Add your model imports
from models.users import User

class CheckSession(Resource):

    def get(self):

        user = User.query.filter_by(id = session.get('user_id')).first()

        if user:
            response_body = {
                "id": user.id,
                "username": user.username,
            }
            return response_body, 200
        else:
            return {"errors": "User not logged in"}, 401