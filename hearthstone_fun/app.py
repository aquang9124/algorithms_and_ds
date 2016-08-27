from flask import Flask, request, render_template
import requests
from envstuff import env_variables

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/api/Card', methods=['POST', 'GET'])
def cards():
    if request.method == 'GET':
        url = "https://omgvamp-hearthstone-v1.p.mashape.com/cards"
        headers = { "X-Mashape-Key": env_variables.mashape_key }
        r = requests.get(url, headers=headers)
        return r.json()

app.run(debug=True)