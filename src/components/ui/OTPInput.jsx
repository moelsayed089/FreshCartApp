import React, { useRef, useState } from 'react';

const OTPInput = ({ length = 4, onComplete }) => {
    const inputRef = useRef(Array(length).fill(null));
    const [OTP, setOTP] = useState(Array(length).fill(''));

    const handleTextChange = (input, index) => {
        const newPin = [...OTP];
        newPin[index] = input;
        setOTP(newPin);

        // Focus on the next input field if a digit is entered
        if (input.length === 1 && index < length - 1) {
            inputRef.current[index + 1]?.focus();
        }

        // Focus on the previous input field if a digit is deleted
        if (input.length === 0 && index > 0) {
            inputRef.current[index - 1]?.focus();
        }

        // Call onComplete with the OTP when all digits are entered
        if (newPin.every((digit) => digit !== '')) {
            const pinValue = newPin.join('') ;
            onComplete(pinValue);
        
        }
    };

    return (
        <div className={`grid grid-cols-6 gap-2`}>
            {Array.from({ length }, (_, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={OTP[index]}
                    onChange={(e) => handleTextChange(e.target.value, index)}
                    ref={(ref) => (inputRef.current[index] = ref)}
                    className={`border border-solid border-border-slate-500 focus:border-blue-600 p-5 outline-none`}
                    style={{ marginRight: index === length - 1 ? '0' : '10px' }}
                />
            ))}
        </div>
    );
};

export default OTPInput;
