from flask import Flask, request, jsonify, render_template
import requests
from envstuff import env_variables
import sys

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/api/card/<name>')
def cards(name):
    url = "https://omgvamp-hearthstone-v1.p.mashape.com/cards/" + name
    headers = { "X-Mashape-Key": env_variables["mashape_key"], "content-type": "application/json; charset=utf8" }
    r = requests.get(url, headers=headers)
    return r.text

app.run(debug=True)