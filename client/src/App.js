import './App.css';
import React from 'react';
import io from 'socket.io-client';
var socket = io('http://127.0.0.1:5000/');

class App extends React.Component {
  getEmit = () => {
    socket.on('received', (data) => {
      console.log(data);
    });
  };
  componentDidMount() {
    socket.on('connect', function () {
      socket.emit('connected', { room_name: 'FHD67', company_no: 'OG29' });
    });
    socket.emit('message', { fdsfsd: 'fsjhfsdjk' });
  }
  render() {
    return (
      <div>
        Socket
        <video autoPlay controls>
          <source
            src="https://www.youtube.com/watch?v=CVpUuw9XSjY&t=687s"
            type="video/mp4"
          />
        </video>
      </div>
    );
  }
}

export default App;
