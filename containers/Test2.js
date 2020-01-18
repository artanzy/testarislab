import React, { Component } from 'react';
import '../css/Test2.css'

class Test2 extends Component {

    state = {
        regisState : "",
        name: "",
        phone: "",
        showWarning: false,
        numOTP: [0,0,0,0,0,0],
        numPin: [0,0,0,0,0,0],
        numPinConfirm: [0,0,0,0,0,0],
        Pin: "",
    }

    componentDidMount(){
        this.setState({ regisState: "1" })
    }

    handleChangeWithKey = (key, e) => {
        if (key == "name")
            this.setState({ name: e.target.value })
        if (key == "phone")     
            this.setState({ phone: e.target.value })
    }

    handleChangeOTP = (index, e) => {
        let numOTP = this.state.numOTP
        if((numOTP[index]+e.target.value).length <= 1)
            numOTP[index] = e.target.value
        this.setState({ numOTP : numOTP })
    }

    handleChangePin = (index, e) => {
        let numPin = this.state.numPin
        if((numPin[index]+e.target.value).length <= 1)
            numPin[index] = e.target.value
        this.setState({ numPin : numPin })
    }

    handleChangePinConfirm = (index, e) => {
        let numPinConfirm = this.state.numPinConfirm
        if((numPinConfirm[index]+e.target.value).length <= 1)
            numPinConfirm[index] = e.target.value
        this.setState({ numPinConfirm : numPinConfirm })
    }

    checkInput(){
        if(this.state.phone.charAt(0) == "0" && this.state.phone.length == 10){
            this.setState({regisState : "2"})
            this.setState({showWarning : false})
        }
        else
            this.setState({showWarning : true})
    }
        
    checkOTP() {
        let numOTP = this.state.numOTP
        let otp = numOTP[0] + numOTP[1] + numOTP[2] + numOTP[3] + numOTP[4] + numOTP[5]
        if(otp == "102938"){
            this.setState({regisState : "3"})
            this.setState({showWarning : false})
        }
        else
            this.setState({showWarning : true})
    }

    setPin() {
        let numPin = this.state.numPin
        let Pin = numPin[0]+numPin[1]+numPin[2]+numPin[3]+numPin[4]+numPin[5]
        if(Pin.length == 6){
            this.setState({ Pin : Pin })
            this.setState({ regisState : "4" })
            this.setState({showWarning : false})
        }
        else
            this.setState({showWarning : true})
    }

    checkPin() {
        let numPinConfirm = this.state.numPinConfirm
        let ConfirmPin = numPinConfirm[0]+numPinConfirm[1]+numPinConfirm[2]+numPinConfirm[3]+numPinConfirm[4]+numPinConfirm[5]
        if( this.state.Pin == ConfirmPin ){
            this.setState({ regisState : "5" })
            this.setState({showWarning : false})
        }
        else
            this.setState({showWarning : true})
    }

    renderWarning(index){
        if(this.state.showWarning == true){
            if(index == 1)
                return(
                    <div className="test2-warning">โปรดใส่เบอร์โทรศัพท์ให้ถูกต้อง</div>
                )
            if(index == 2)
                return(
                    <div className="test2-warning">OTP ไม่ถูกต้องกรุณากรอก OTP ใหม่ให้ถูกต้อง</div>
                )
            if(index == 3)
                return(
                    <div className="test2-warning">กรุณาใส่ PIN ให้ครบถ้วน 6 ตัวเลข</div>
                )
            if(index == 4)
                return(
                    <div className="test2-warning">PIN ไม่ตรงกับ PIN ที่กำหนดไว้ก่อนหน้านี้ กรุณากรอกใหม่อีกครั้ง</div>
                )
        }
        else
            return(
                <div/>
            )
    }

    renderState() {
        let regisState = this.state.regisState
        if(regisState == "1"){
            return(
                <div className="test2-content">
                    <div className="test2-header">ยืนยันตัวตน</div>
                    <div className="test2-subheader">เพื่อความถูกต้องของข้อมูล</div>
                    <div className="test2-input-container">
                        <div className="test2-input-header">ชื่อ นามสกุล<sup>*</sup></div>
                        <input className="test2-input"
                            value={this.state.name}
                            type="text"
                            onChange={e => this.handleChangeWithKey("name",e)}
                            placeholder={" ชื่อ นามสกุล"}/>
                        <div className="test2-input-header">เบอร์โทรศัพท์<sup>*</sup></div>
                        <input className="test2-input"
                            value={this.state.phone}
                            type="text"
                            onChange={e => this.handleChangeWithKey("phone",e)}
                            placeholder={" เบอร์โทรศัพท์"}/>
                        {this.renderWarning(1)}
                        <button className="test2-button" onClick={() => this.checkInput()}>ต่อไป</button>
                    </div>
                </div>
            )
        }
        if(regisState == "2"){
            return(
                <div className="test2-content">
                    <div className="test2-header">ยืนยัน OTP</div>
                    <div className="test2-subheader">ของหมายเลข {this.state.phone}</div>
                    <div className="test2-input-container">
                        <div className="test2-input-header">กรุณาระบุ OTP</div>
                        <div className="test2-otp-row">
                            <input className="test2-otp-input-first" type="number" min="0" max="9" 
                                value={this.state.numOTP[0]}
                                onChange={e => this.handleChangeOTP(0,e)}/>
                            <input className="test2-otp-input" type="number" min="0" max="9"
                                value={this.state.numOTP[1]}
                                onChange={e => this.handleChangeOTP(1,e)}/>
                            <input className="test2-otp-input" type="number" min="0" max="9"
                                value={this.state.numOTP[2]}
                                onChange={e => this.handleChangeOTP(2,e)}/>
                            <input className="test2-otp-input" type="number" min="0" max="9"
                                value={this.state.numOTP[3]}
                                onChange={e => this.handleChangeOTP(3,e)}/>
                            <input className="test2-otp-input" type="number" min="0" max="9"
                                value={this.state.numOTP[4]}
                                onChange={e => this.handleChangeOTP(4,e)}/>
                            <input className="test2-otp-input" type="number" min="0" max="9"
                                value={this.state.numOTP[5]}
                                onChange={e => this.handleChangeOTP(5,e)}/>
                        </div>
                        {this.renderWarning(2)}
                        <button className="test2-button" onClick={() => this.checkOTP()}>ต่อไป</button>
                    </div>
                </div>
            )
        }
        if(regisState == "3"){
            return(
                <div className="test2-content">
                    <div className="test2-header">ตั้ง PIN</div>
                    <div className="test2-subheader">เพื่อใช้ยืนยันตัวตนในครั้งต่อไป</div>
                    <div className="test2-input-container">
                        <div className="test2-otp-row">
                            <input className="test2-otp-input-first" type="number" min="0" max="9" 
                                value={this.state.numPin[0]}
                                onChange={e => this.handleChangePin(0,e)}/>
                            <input className="test2-otp-input" type="number" min="0" max="9"
                                value={this.state.numPin[1]}
                                onChange={e => this.handleChangePin(1,e)}/>
                            <input className="test2-otp-input" type="number" min="0" max="9"
                                value={this.state.numPin[2]}
                                onChange={e => this.handleChangePin(2,e)}/>
                            <input className="test2-otp-input" type="number" min="0" max="9"
                                value={this.state.numPin[3]}
                                onChange={e => this.handleChangePin(3,e)}/>
                            <input className="test2-otp-input" type="number" min="0" max="9"
                                value={this.state.numPin[4]}
                                onChange={e => this.handleChangePin(4,e)}/>
                            <input className="test2-otp-input" type="number" min="0" max="9"
                                value={this.state.numPin[5]}
                                onChange={e => this.handleChangePin(5,e)}/>
                        </div>
                        {this.renderWarning(3)}
                        <button className="test2-button" onClick={() => this.setPin()}>ต่อไป</button>
                    </div>
                </div>
            )
        }
        if(regisState == "4"){
            return(
                <div className="test2-content">
                    <div className="test2-header">ตั้ง PIN</div>
                    <div className="test2-subheader">ระบุอีกครั้ง</div>
                    <div className="test2-input-container">
                        <div className="test2-otp-row">
                            <input className="test2-otp-input-first" type="number" min="0" max="9" 
                                value={this.state.numPinConfirm[0]}
                                onChange={e => this.handleChangePinConfirm(0,e)}/>
                            <input className="test2-otp-input" type="number" min="0" max="9"
                                value={this.state.numPinConfirm[1]}
                                onChange={e => this.handleChangePinConfirm(1,e)}/>
                            <input className="test2-otp-input" type="number" min="0" max="9"
                                value={this.state.numPinConfirm[2]}
                                onChange={e => this.handleChangePinConfirm(2,e)}/>
                            <input className="test2-otp-input" type="number" min="0" max="9"
                                value={this.state.numPinConfirm[3]}
                                onChange={e => this.handleChangePinConfirm(3,e)}/>
                            <input className="test2-otp-input" type="number" min="0" max="9"
                                value={this.state.numPinConfirm[4]}
                                onChange={e => this.handleChangePinConfirm(4,e)}/>
                            <input className="test2-otp-input" type="number" min="0" max="9"
                                value={this.state.numPinConfirm[5]}
                                onChange={e => this.handleChangePinConfirm(5,e)}/>
                        </div>
                        {this.renderWarning(4)}
                        <button className="test2-button" onClick={() => this.checkPin()}>ต่อไป</button>
                    </div>
                </div>
            )
        }
        if(regisState == "5"){
            return(
                <div className="test2-content">
                    <div className="test2-header">ข้อมูลสมาชิก</div>
                    <div className="test2-subtext">ชื่อ - นามสกุล : {this.state.name}</div>
                    <div className="test2-subtext">หมายเลขโทรศัพท์ : {this.state.phone}</div>
                    <div className="test2-subtext">PIN {this.state.Pin}</div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="container">
                <div className="test2-container">
                    {this.renderState()}
                </div>
            </div>
        )
    }

}

export default Test2