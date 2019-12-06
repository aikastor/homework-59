import React, {Component} from 'react';

class Button extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
       return this.props.onClick !== nextProps.onClick
    }

    render() {
        return (
            <button onClick={this.props.onClick}>{this.props.children}</button>
        );
    }
}

export default Button;