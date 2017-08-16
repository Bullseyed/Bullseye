import React, { Component } from 'react';
import d3 from 'd3';

class Arc extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this.updateD3(this.props);
    }

    componentWillReceiveProps(newProps) {
        this.updateD3(newProps);
    }

    updateD3(newProps) {
    }

    render() {
    }
}

export default Arc;
