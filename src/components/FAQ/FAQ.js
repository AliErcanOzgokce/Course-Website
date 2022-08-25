import "./FAQ.css";
import { useState } from "react";
import {data} from "./FAQdata";

export default function FAQ() {
    const [clicked, setClicked] = useState(null);

    const toggle = i => {
        if(clicked == i) {
            return setClicked(null);
        }

        setClicked(i);
    }

    return (
        <div class="FAQ">
            <h1>FAQ</h1>
            <div class="FAQ-container">
                {data.map((item, i) => (
                    <div class="item">
                        <div class="question" onClick={() => toggle(i)}>
                            <h2>{item.question}</h2>
                            <svg className={clicked == i ? "svg show" : "svg"} width="15" height="10" viewBox="0 0 42 25">
                                <path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className={
                            clicked == i ? "answer show" : "answer"
                        }>
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

