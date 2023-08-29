# app/models.py

from app import db
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    firstname = db.Column(db.String(80), nullable=False)
    lastname = db.Column(db.String(80), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    address = db.Column(db.String(200), nullable=False)

    # Hashes the password and sets it to the password attribute
    def set_password(self, password):
        self.password = generate_password_hash(password)

    # Checks if the provided password matches the stored hashed password
    def check_password(self, password):
        return check_password_hash(self.password, password)
