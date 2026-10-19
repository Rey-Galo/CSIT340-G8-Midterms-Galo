import { useState } from "react";

function Feedback () {
    const [yes, setYes] = useState(0);
    const [no, setNo] = useState(0);
    
    function incrementYes () {
        setYes(yes + 1);
    }

    function incrementNo () {
        setNo(no + 1);
    }

    function reset () {
        setYes(0);
        setNo(0);
    }
 
    return (
        <div className="flex items-center justify-center gap-4 px-20 pt-10">
            <button
                className="cursor-pointer rounded-lg bg-[#5C766D] px-8 py-3 text-xl font-bold text-[#EDE9E6]"
                onClick={incrementYes}
            >
                Yes {yes}
            </button>
            <button
                className="cursor-pointer rounded-lg bg-[#C9996B] px-8 py-3 text-xl font-bold text-[#5C4F4A]"
                onClick={incrementNo}
                >
                No {no}
            </button>
            <button className="cursor-pointer rounded-lg bg-[#5C4F4A] px-8 py-3 text-xl font-bold text-[#EDE9E6]" onClick={reset}>Reset</button>
        </div>
    );
}

export default Feedback;