import { useRef, useState, useEffect } from "react";

function CountDown() {
    const [timer, setTimer] = useState("00:00:00");
    const [input, setInput] = useState('');
    const [timeLeft, setTimeLeft] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const Ref = useRef();

    const formatTime = (time) => {
        const hours = String(Math.floor(time / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            Ref.current = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        }

        if (timeLeft === 0 && isRunning) {
            clearInterval(Ref.current);
            setIsRunning(false);
        }

        setTimer(formatTime(timeLeft));

        return () => clearInterval(Ref.current);
    }, [isRunning, timeLeft]);

    const handleInput = (values) => {
        setInput(values.target.value);
    };

    const startTimer = () => {
        if (!isRunning) {
            if (timeLeft === 0) {
                const totalSeconds = parseInt(input) * 60;
                setTimeLeft(totalSeconds);
            }
            setIsRunning(true);
        }
    };

    const puaseTimer = () => {
        if (isRunning) {
            setIsRunning(false);
        }
    }

    const resetTimer = () => {
        setIsRunning(false);
        setTimeLeft(0);
        setTimer("00:00:00");
    }

    return (
        <div>
            <h1>Time-Down Count</h1>
            <div>
                <input
                    type="number"
                    value={input}
                    onChange={handleInput}
                    placeholder="Enter minutes"
                />
                <button onClick={startTimer}>Start</button>
                <button onClick={puaseTimer}>Puase</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
            <div>
                <h2>{timer}</h2>
            </div>
        </div>
    );
}

export default CountDown;
