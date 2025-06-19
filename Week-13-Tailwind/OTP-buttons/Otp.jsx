import { useRef } from "react";

export function Otp() {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();

    return <div className="flex justify-center">
        
        <SubOtpBox reference={ref1} onDone={() => {
            ref2.current.focus();
        }}/>
        <SubOtpBox reference={ref2} onDone={() => {
            ref3.current.focus();
        }}/>
        <SubOtpBox reference={ref3} onDone={() => {
            ref4.current.focus();
        }}/>
        <SubOtpBox reference={ref4} onDone={() => {
            ref5.current.focus();
        }}/>
        <SubOtpBox reference={ref5} onDone={() => {
            ref6.current.focus();
        }}/>
        <SubOtpBox reference={ref6} onDone={() => {
            ref6.current.focus();
        }}/>
    </div>
}

function SubOtpBox({
    reference, onDone
}) {
    
    return <div className="p-1 text-white">
        <input ref={reference} onChange={(e) => {
            
            onDone()
        }} type="text" className="w-[50px] h-[50px] rounded-2xl bg-[#17395f]"></input>
    </div>
}
