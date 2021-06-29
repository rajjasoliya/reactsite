import React from 'react';
import './index.css';
export class First extends React.Component {
    constructor() {
        super({});
    }
    render() {
        return (<div className="div1">
            <div><button type="button" className="button button1" >Chef</button><br /><br /></div>
            <div><button type="button" className="button button1">Customer</button></div>          
</div>);
    }
}

export default First;
