# TravelEasy Web App

Welcome to **TravelEasy**, your one-stop solution for convenient and hassle-free travel ticket bookings. Whether you're planning a local trip or an international adventure, TravelEasy has got you covered with its user-friendly interface and robust ticketing system.

## Features

- **Diverse Ticket Options**: Explore a wide range of ticket options for flights, trains, and buses, offering both domestic and international routes.

- **User Authentication**: Securely register and log in to your account, allowing you to manage your bookings and preferences with ease.

- **Effortless Booking Process**: Enjoy a seamless and intuitive booking process. Simply choose your source and destination, select the date and time, and pick your preferred ticket type.

- **Booking History**: Keep track of your travel history by viewing your past bookings, making it easy to plan your journeys and refer to important travel information.

- **Transparent Pricing**: Get a clear breakdown of ticket prices, with options for various classes and seat types, ensuring you have all the information you need to make informed decisions.

- **Review and Rating System**: Share your travel experiences by leaving reviews and ratings for your booked tickets, helping other travelers make informed choices.


## Getting Started
To get TravelEasy up and running on your local machine, follow these steps:

### Prerequisites
Before you begin, ensure you have the following prerequisites installed:

- **Python 3.x**: [Download and Install Python](https://www.python.org/downloads/)

- **Node.js**: [Download and Install Node.js](https://nodejs.org/)

- **MongoDB**: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)

- **Virtual Environment (optional but recommended)**:
  You can create a virtual environment to isolate your project's dependencies. Install the `venv` module, if not already installed, using the following command:

  ```bash
  pip install virtualenv

### Installation
git clone https://github.com/yourusername/TravelEasy.git
cd TravelEasy

# Create and activate a virtual environment (recommended)
python3 -m venv venv
source venv/bin/activate

# Install Python dependencies

pip install -r requirements.txt

# Set up the database (example using MongoDB)
# Update the database configuration in config/database.js
python manage.py db upgrade

# Install Node.js dependencies
cd web_static
npm install

### Configuration

Database Configuration:

Edit the config/database.js file to provide your database settings.

Authentication Configuration:

Edit the config/authentication.js file to set up your preferred authentication settings.

## Usage

Follow these steps to run TravelEasy:

1. **Run the Backend Server:**

python app.py

2. **Run the Frontend Development Server:**

cd web_static
npm start

3. **Access the App:**

## API Documentation

For detailed information about available API endpoints and their usage, refer to the [`docs/api_documentation.md`](docs/api_documentation.md) file.

## Contributing

Contributions are welcome! If you encounter any issues, have suggestions for improvements, or want to add new features, please feel free to open an issue or submit a pull request.

## License

In this section, the "Prerequisites" subsection explains the software components that need to be installed before proceeding with the installation. The "Installation" subsection provides step-by-step instructions for setting up the backend and frontend of your TravelEasy web app. The "Configuration" subsection guides users on how to configure important settings before running the app. The subsequent subsections cover the actual usage of the app, API documentation, contributing guidelines, and licensing information.

## Author
Olumide Jenyo <email:jenyoolumide@yahoo.com>
