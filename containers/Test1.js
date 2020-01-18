import React, { Component } from 'react';
import '../css/Test1.css'
import axios from 'axios'

class Test1 extends Component {

    state = {
        url: '',
        response: ''
    }

    handleChange(e) {
        this.setState({ url: e.target.value })
    }

    async getUrl() {
        await axios.get("http://api.instagram.com/oembed?url=" + this.state.url).then(
            response => {
                this.setState({ response: response.data })
            }
        ).catch(error => console.log(error))
        console.log(this.state.response.thumbnail_url)
        this.postGoogleVision()
    }

    async postGoogleVision() {
        await axios.post("https://vision.googleapis.com/v1/images:annotate?key=AIzaSyAD18tclJ99f1_re8yWGO6LdhTDXdeUG6c", {
            requests: [
                {
                    image: {
                        source: {
                            imageUri: this.state.response.thumbnail_url
                        }
                    }
                }
            ]
        }).then(
            response => {
                console.log(response)
            }
        ).catch(error => console.log(error))
    }

    renderImage() {
        if (this.state.response == '')
            return (<div />)
        return (
            <div className="show-block">
                <img className="show-image" src={this.state.response.thumbnail_url} />
                <div className="show-text">{this.state.response.title}</div>
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                <div className="url-row">
                    <div className="url-text">URL: </div>
                    <input className="url-input"
                        value={this.state.url}
                        onChange={e => this.handleChange(e)} />
                    <button className="confirm-button" onClick={() => this.getUrl()}>ประมวลผล</button>
                </div>
                {this.renderImage()}
            </div>
        )
    }

}

export default Test1