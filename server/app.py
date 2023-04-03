from flask import Flask, render_template, jsonify
import os
from flask_cors import CORS,cross_origin
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address


app = Flask(__name__)
limiter = Limiter(
    app,
    key_func=get_remote_address,
    default_limits=["100 per day", "50 per hour"]
)
CORS(app,resources={r"/*": {"origins": "https://tin12q.live"}})
@app.route('/')
@cross_origin()
def index():
    return 'https://tin12q.live'
@app.route('/e29c9c180c6279b0b02abd6a1801c7c04082cf486ec027aa13515e4f3884bb6b/1')
@cross_origin()
def ans1True():
    return 'https://tin12q.live/3e23e8160039594'
@app.route('/0b8efa5a3bf104413a725c6ff0459a6be12b1fd33314cbb138745baf39504ae5/2')
@cross_origin()
def ans2True():
    return 'https://tin12q.live/2e7d2c03a9507'
@app.route('/4eee09aa8597f984ca12b20ce6a18a2d581ce0228e500358cf2f4bed1895e9cc/3')
@cross_origin()
def ans3True():
    return 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

if __name__ == "__main__":
    app.run(host='0.0.0.0')