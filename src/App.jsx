import React, { Component } from 'react';
import { Clock } from 'lucide-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Oussama Saidi",
        bio: "A passionate software developer. Loves creating beautiful and functional user interfaces.",
        profession: "Mern Stack Developer"
      },
      shows: false,
      timeInterval: 0
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  toggleProfile = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  };

  render() {
    const { person, shows, timeInterval } = this.state;

    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">
                  Time since mount: {timeInterval} seconds
                </span>
              </div>
              <button
                onClick={this.toggleProfile}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                {shows ? 'Hide Profile' : 'Show Profile'}
              </button>
            </div>

            {shows && (
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      {person.fullName}
                    </h1>
                    <p className="text-blue-600 font-medium">
                      {person.profession}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {person.bio}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App