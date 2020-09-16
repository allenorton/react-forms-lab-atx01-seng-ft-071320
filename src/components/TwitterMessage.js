import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  updateMessage = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let charLeft = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.updateMessage} type="text" name="message" id="message" value={this.state.message} />
        {charLeft}
      </div>
    );
  }
}

export default TwitterMessage;
