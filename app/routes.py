# routes.py
from flask import jsonify, request, render_template, redirect, url_for, session, flash
from datetime import datetime, timedelta  # For working with dates and times
from random import choice  # For generating random tokens
from string import ascii_letters, digits  # For generating random tokens
from flask_mail import Message  # For sending emails
from app import app, db, mail  # Import the 'mail' object from the app package
from app import app, db
from app.models import User
from flask_wtf.csrf import CSRFProtect
from app.forms.signup import SignUpForm
from app.forms.login import LoginForm

# Initialize CSRF protection
csrf = CSRFProtect(app)

# Route to serve the HTML template
@app.route('/', methods=['GET', 'POST'])
def index():
    signup_form = SignUpForm()  # Instantiate the signup form
    login_form = LoginForm()  # Instantiate the login form
    return render_template('index.html', signup_form=signup_form, login_form=login_form)

# Route to handle form submission
@app.route('/signup', methods=['POST'])
def signup():
    if request.method == 'POST':
        user_data = request.form.to_dict()
        print(user_data)
        
        # Create a new User instance using the form data
        new_user = User(
            username=user_data['username'],
            email=user_data['email'],
            password=user_data['password'],
            firstname=user_data['first_name'],
            lastname=user_data['last_name'],
            phone=user_data['phone_number'],
            address=user_data['address']
        )

        new_user.set_password(user_data['password']) # Hash the password
        print("Hashed password:", new_user.password)

        try:
            db.session.add(new_user)
            db.session.commit()
            return jsonify(message='User registered successfully'), 200
        except Exception as e:
            db.session.rollback()
            return jsonify(error='Failed to register user'), 500

# In your login route
@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()  # Instantiate the login form

    if request.method == 'POST' and form.validate_on_submit():
        username = form.username.data
        password = form.password.data
        remember_me = form.remember_me.data  # Get the value of the Remember Me checkbox

        # Debugging prints
        print("Username:", username)
        print("Password:", password)
        print("remember me:", remember_me)

        # Perform validation and authentication checks
        user = User.query.filter_by(username=username).first()
        if user and user.check_password(password):
            print("User authentication successful")
            session['username'] = username
            if remember_me:
                session.permanent = True  # Extend session expiration
            return redirect(url_for('user_page', username=username))
        else:
            print("Invalid password")
            message = 'Invalid credentials'
            return render_template('login.html', login_form=form, message=message)
    else:
        print("User not found")
        return render_template('login.html', login_form=form)

@app.route('/user')
def user_page():
    if 'username' in session:
        username = session['username']
        user = User.query.filter_by(username=username).first()
        if user:
            return render_template('user_page.html', user=user)
        else:
            return "User not found"
    else:
        return redirect(url_for('login'))

@app.route('/recover_password', methods=['GET', 'POST'])
def recover_password():
    if request.method == 'POST':
        email = request.form.get('email')
        user = User.query.filter_by(email=email).first()
        if user:
            token = generate_random_token()  # Implement token generation
            user.reset_token = token
            user.token_expiry = datetime.utcnow() + timedelta(hours=1)
            db.session.commit()
            send_reset_email(email, token)  # Implement sending the email
            flash("If your email exists in our system, you will receive a password reset link.")
            return redirect(url_for('login'))
        flash("No user found with that email address.")
        return redirect(url_for('recover_password'))
    return render_template('recover_password.html')

def generate_random_token(length=20):
    chars = ascii_letters + digits
    return ''.join(choice(chars) for _ in range(length))


def send_reset_email(email, token):
    subject = "Password Reset Request"
    reset_link = url_for('reset_password', token=token, _external=True)
    body = f"Click the following link to reset your password: {reset_link}"
    
    msg = Message(subject=subject, recipients=[email], body=body)
    mail.send(msg)


@app.route('/reset_password/<token>', methods=['GET', 'POST'])
def reset_password(token):
    user = User.query.filter_by(reset_token=token).first()
    if user and user.token_expiry > datetime.utcnow():
        if request.method == 'POST':
            new_password = request.form.get('new_password')
            user.set_password(new_password)  # Update password
            user.reset_token = None
            user.token_expiry = None
            db.session.commit()
            flash("Your password has been successfully reset.")
            return redirect(url_for('login'))
        return render_template('reset_password.html', token=token)
    flash("Invalid or expired token. Please request a new password reset link.")
    return redirect(url_for('forgot_password'))

@app.route('/transactions')
def transactions():
    # Define the logic for displaying transactions
    # You can render a template or return JSON data, as needed
    return "Transactions page"

@app.route('/deposit')
def deposit():
    # Define the logic for handling deposits
    # You can render a template or return a form for deposits
    return "Deposit page"

@app.route('/withdraw')
def withdraw():
    # Define the logic for handling withdrawals
    # You can render a template or return a form for withdrawals
    return "Withdraw page"

@app.route('/buy_train_ticket')
def buy_train_ticket():
    # Define the logic for buying train tickets
    # You can render a template or return a form for ticket purchase
    return "Buy Train Ticket page"

@app.route('/buy_airplane_ticket')
def buy_airplane_ticket():
    # Define the logic for buying airplane tickets
    # You can render a template or return a form for ticket purchase
    return "Buy Airplane Ticket page"

@app.route('/buy_bus_ticket', methods=['GET'])
def buy_bus_ticket():
    # You can add your logic here, if needed
    return render_template('buy_bus_ticket.html')

@app.route('/user_profile')
def user_profile():
    # Define the logic for displaying user's profile
    # You can render a template or return user profile data
    return "User Profile page"

@app.route('/user_settings')
def user_settings():
    # Define the logic for displaying user's settings
    # You can render a template or return user settings data
    return "User Settings page"

# Logout route
@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('index'))
