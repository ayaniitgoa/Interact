## TO CLONE:

### To install backend:

```bash
cd backend
``` 
(if you do not want to make a virtual environment check requirements.txt file for the necessary packages and install them manually)

If you want virtual environment then install them by:

```bash
python -m venv env (make a virtual environment)
source env/Scripts/activate (to activate the virtual environment)
pip install -r requirements.txt
```
### Make sure, you make necessary changes to the database settings in settings.py. 

### Then to start the backend server:

```bash
./manage.py runserver

```

### To install frontend:

```bash
cd frontend

npm install 
```

### Finally, To start the client-side server:

```bash
npm run start
```
