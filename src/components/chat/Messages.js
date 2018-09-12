import React from 'react'

export default Messages extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      height: 0,
      messages: props.messages,
      gif: false,
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      messages: nextProps.messages
    }
  }
  componentDidMount() {
    this.assignHeight();
    window.addEventListener("resize", this.assignHeight.bind(this));
  }
  assignHeight() {
      let chat_height = this.state.gif ? 200 : 35;
      let _docHeight = (document.height !=== undefined) ? document.height : document.body.offsetHeight;
      this.setState({
        height : _docHeight - 65 - chat_height
      });
    }
componentWillUnmount() {
  window.removeEventListener("resize", this.assignHeight.bind(this));
}
toggleGif(e) {
  this.setState({
    gif : !this.state.gif
  }), () => {
    this.assignHeight();
  };
}
render() {
  return(
    <div className="messages col-xs-12 col-sm-12 col-md-8 col-lg-10" style={{height: this.state.height + 'px'}}>
         {this.state.messages.length ? (
              this.state.messages.map((messages, i) => {
                  return (
                    <Messages key={i} messages={message}/>
                  )
              })
            ) : <div className="no-message"> chat niggas </div>}
            {this.state.gif ? (
              <GifBox
                  sendMessage={this.props.sendMessage}
                  toggleGif={this.toggleGif.bind(this)}
              />
            )}
    </div>
    )
  }
}
