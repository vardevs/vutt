var React = require('react'),
    ActionCreator = require('../actions/DataActionCreators'),
    Keymaster = require('keymaster'),
    Thread = require('./Thread.jsx');

function isEmpty(obj) {
    if (obj == null) return true;
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }
    return true;
}

function selectId(coll, id) {
  let elem = coll.find(x => x.id === id);

  if (!elem) {
    for (let c in coll) {
      let current = coll[c];
      
      if (current.id === id) {
        elem = current;
      } else if (current.children) {
        return selectId(current.children, id);
      }
    }
  }

  return elem;
} 

var ThreadList = React.createClass({
  getDefaultProps: function() {
    return {
      threads: [],
      active: {}
    };
  },

  componentDidMount: function() {
    Keymaster('j, k', this._changeSelection);
    Keymaster('r', this._openReply);
  },

  componentWillUnmount: function () {
    Keymaster.unbind('j, k', this._changeSelection);
    Keymaster.unbind('r', this._openReply);
  },

  _openReply: function (e) {
    alert(this.props.active.from);
  },
  
  _changeSelection: function (e) {
    e.preventDefault();
    let newThread;
    let currentId 

    switch (e.keyCode) {
      case 74:
        currentId = !isEmpty(this.props.active) ? this.props.active.id : 0;
        newThread = selectId(this.props.threads, currentId+1);
        break;
      case 75:
        currentId = !isEmpty(this.props.active) ? this.props.active.id : 0;
        newThread = selectId(this.props.threads, currentId-1);
        break;
      default:
        break;
    }
    if (newThread) {
      ActionCreator.select(newThread);
    }
  },

  render: function() {
    return (
      <div className="thread-list" onKeyPress={this._onKeyDown}>
        <ul>
          {this.props.threads.map(thread =>
            <Thread thread={thread} active={this.props.active} />
          )}
        </ul>
        <footer>
          <p>
            <span className="">
              ---vutt: =Inbox [Msgs:{this.props.threads.length}]---(threads)---
            </span>
          </p>
        </footer>
      </div>
    );
  }
});

module.exports = ThreadList;
