// FaqClick.js

import React, { useState } from 'react';

const FaqClick = () => {
    const [answersVisibility, setAnswersVisibility] = useState({});

    const toggleAnswer = (index) => {
        setAnswersVisibility((prevVisibility) => ({
            ...prevVisibility,
            [index]: !prevVisibility[index],
        }));
    };

    return { toggleAnswer, answersVisibility };
}

export default FaqClick;
