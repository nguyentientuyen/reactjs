import React from 'react'

export default function NTTTEvenfromdemo2(){
     //Định nghĩa các hàm xử lý thực hiện
     const eventHandleClick1=(content)=>{
        console.log('========================================');
        console.log(content);
        console.log('========================================');
     }
    return (
        <div className='ntt'>
            <h2> Event Demo - Function component</h2>
            <button onClick={eventHandleClick1("ntt")}>Goi Khi Render</button>
            <button onClick={()=>eventHandleClick1("K22CNT-reactjs")} >Gọi Khi Click</button>
        </div>
    )
}