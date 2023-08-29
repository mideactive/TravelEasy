# __init__.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_wtf.csrf import CSRFProtect
from flask_mail import Mail
import secrets

app = Flask(__name__, static_folder='static', static_url_path='/static')
app.secret_key = secrets.token_hex(16)  # Generate a 32-character random key
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://mideactive:%40Mide3660ben@localhost/traveleasy'
app.config['TEMPLATES_AUTO_RELOAD'] = True  # Enable automatic template reloading
db = SQLAlchemy(app)

csrf = CSRFProtect(app)  # Initialize CSRF protection

# Configure Flask-Mail settings
app.config['MAIL_SERVER'] = 'smtp.your-email-provider.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'your-email@example.com'
app.config['MAIL_PASSWORD'] = 'your-email-password'
app.config['MAIL_DEFAULT_SENDER'] = 'your-email@example.com'  # This is the 'from' address
mail = Mail(app)

from app import routes  # Import the routes after initializing the app and db
