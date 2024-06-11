import React, { Component } from 'react';

class NTTTEvenfromdemo extends Component {

//Hàm xử lý sự kiện
eventhandleclick1=()=>{
    alert("event handle1")
}

eventhandleClick2(){
    alert("event click2")
}
    render() {
        return (
            <div className='NTT'>
                <h2>event handle </h2>
                {/* gọi hàm xử lý sự kiện khi run*/}
                <button onClick={this.eventhandleclick1()}>click1</button>
                {/*gọi hàm xử lý khi click*/}
                <button onClick={this.eventhandleClick2()}>click2</button>
            </div>
        );
    }
}

export default NTTTEvenfromdemo;