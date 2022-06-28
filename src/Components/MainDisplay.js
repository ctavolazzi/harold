import React from 'react'

class MainDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Well how about that.'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        {this.props.value}
      </div>
    );
  }
}

export default MainDisplay;