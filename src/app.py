from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit
app = Flask(__name__)

app.config['SECRET_KEY'] = "mysecretkey"

socket = SocketIO(app, cors_allowed_origins="*")
app.debug = True
app.host = 'localhost'

@socket.on("message")
def handleMessage(data):
  print(data)
  room = data["room_name"]
  emit("received", data["message"], room=room)
  
@socket.on("received")
def receive(data):
  print(data)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
  socket.run(app)
 