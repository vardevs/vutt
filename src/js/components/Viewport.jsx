var React = require('react');

var hasOwnProperty = Object.prototype.hasOwnProperty;

function isEmpty(obj) {
    if (obj == null) return true;
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }
    return true;
}

var Viewport = React.createClass({
  getDefaultProps: function () {
    return {
      thread: {}
    };  
  }, 
  componentDidMount: function() {
  },

  render: function() {
    var hidden = isEmpty(this.props.thread) ? 'hidden viewport' : 'viewport';
    var date = this.props.thread.date || new Date();
    return (
      <div className={hidden}>
        <div className="meta">
          <p>Date: {date.toUTCString()}</p>
          <p>From: {this.props.thread.from}</p> 
          <p>To: {this.props.thread.to}</p> 
          <p>Subject: {this.props.thread.subject}</p> 
        </div>
        <p><pre>{this.props.thread.body}</pre></p>
        <footer>
          <p>
            <span className="text-after">-</span>
            <span className="text-after">-</span>
            <span className="text-after">{this.props.thread.from}</span>
            <span className="text-after">{this.props.thread.subject}</span>
          </p>
        </footer>
      </div>
    );
  }
});

module.exports = Viewport;
