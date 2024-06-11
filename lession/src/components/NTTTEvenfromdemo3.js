import React, { Component } from 'react';
// sử lý sk với props,state
class NTTTEvenfromdemo3 extends Component {
    constructor(props){
        super(props);
        //tạo đóio tượng dữ liệu thông qua state
        this.state = {
            name:"ntt",
            jop:"SV"

        }
    }
    //Hàm Xử Lý SK
    handleChangeName = (event)=>{
        this.setState({
            name:"K22CNT2-ReactJS"
        })
    }
    handleChangeJop = (event)=>{
        this.setState({
            jop:"Chủ Tịch"
        })
    }

    render() {
        return (
            <div className='test'>
                <h2>Thay Đổi Dữ Liệu Trong State</h2>
                <p>Dữ Liệu:{this.state.name}-{this.state.jop}</p>
                <button onClick={this.handleChangeName}>Thay Đổi Name</button>
                <button onClick={this.handleChangeJop}>Thay Đổi Jop</button>
            </div>
        );
    }
}

export default NTTTEvenfromdemo3;