"use strict";
var React = require('react');
var classNames = require('classnames');
require('./Transform.less');
class Transform extends React.Component {
    render() {
        const self = this;
        const props = self.props;
        let state = self.state;
        let transformStyle;
        let transformClass = classNames('r-Transform', { 'e-translate': (props.type === 'translate') }, { 'e-scale': (props.type === 'scale') }, { 'e-scale': (props.type === 'rotate') }, { 'e-active': (props.if) }, { 'w100': (props.fill) }, { 'h100': (props.fill) }, props.className);
        if (props.if && !props.push) {
            transformStyle = {
                'transform': props.type + (props.axis) + '(' + props.amount + ')',
                transitionDelay: (props.delay) + 'ms'
            };
        }
        else if (props.if && props.push) {
            if (props.push === 'right') {
                transformStyle = {
                    paddingRight: props.amount
                };
            }
            else if (props.push === 'left') {
                transformStyle = {
                    paddingLeft: props.amount
                };
            }
        }
        else {
            transformStyle = {
                'transform': props.type + (props.axis) + '(' + 0 + ')',
                transitionDelay: 0 + 'ms'
            };
        }
        return (<div className={transformClass} style={transformStyle}>
        {props.children}
      </div>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Transform;