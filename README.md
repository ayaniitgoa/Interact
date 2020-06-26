TO clone:

To install backend:

cd backend 

(if you do not want to make a virtual environment check requirements.txt file for the necessary packages and install them manually)

If you want virtual environment then install them by:

python -m venv env (make a virtual environment)

source env/Scripts/activate (to activate the virtual environment)

pip install -r requirements.txt

Make changes to the database settings in settings.py

Then to start the server:

./manage.py runserver

To install frontend:

cd frontend

npm install 

To start the project:

npm run start
