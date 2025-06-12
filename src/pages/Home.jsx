import { useState } from "react";
import { saveCount, getCount } from "../services/countServices.js";
import CountDown from "../components/CountDownTime.jsx";

function Home() {
    const [countdown, setCountdown] = useState(getCount());

    const handleCount = (newCount) => {
        const updatedTime =  [...countdown, newCount];
        setCountdown(updatedTime);
        saveCount(updatedTime);
    };

    return  (
        <div>
            <CountDown onAdd = {handleCount} />
        </div>
    );
}

export default Home;
