import React, { Component } from 'react';
import '../css/Test3.css'
import axios from 'axios';

class Test3 extends Component {

    state = {
        message : ""
    }

    async postMessage(){
        await axios.post("http://localhost:3030",{
            token: 'eWpuYJgPODNdYcjYAHRfMb6Ej0kb5O1kDLpkNfNzwqs',
            message: this.state.message
        }).catch(error => console.log(error))
    }

    handleChange(e){
        this.setState({message : e.target.value})
    }

    render() {
        return(
            <div className="container">
                <div className="test3-header">LINE Notify:</div>
                <textarea className="test3-input"
                    value={this.state.message}
                    onChange={e => this.handleChange(e)}
                />
                <button className="test3-button" onClick={() => this.postMessage()}>แจ้งเตือน</button>
            </div>
        )
    }

}

export default Test3