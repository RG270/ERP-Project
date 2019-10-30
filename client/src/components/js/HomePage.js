import React, {Component} from 'react';

export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            response: {}
        }
    }
    componentDidMount(){
       
    }

    render(){
        return(
            <div>
                <p>hi there</p>
            </div>
        )
    }
}