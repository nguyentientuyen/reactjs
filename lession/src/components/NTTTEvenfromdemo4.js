import React, { Component } from 'react';

class NTTTEvenfromdemo4 extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Anh"
        }
    }
    handleGetName = ()=>{
        alert(this.props.name);
        this.setState({
            name:this.props.name

        })
    }
    render() {
        return (
            <div className='Demo4'>
                <h2>lấy dữ liệu từ props</h2>
                <button onClick={this.handleGetName}>Lấy Tên</button>
                <h2>Welcome to , {this.state.name}</h2>
            </div>
        );
    }
}

export default NTTTEvenfromdemo4;