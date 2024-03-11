import { useState } from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

// The actual mapping from type to image
// const svgMap = {
//     bird: bird,
//     cat: cat,
//     cow: cow,
//     dog: dog,
//     gator: gator,
//     horse: horse
// };

// Use shortcut since type that is passed is same with image name
const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
};

function AnimalShow({ type }) {

    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    };

    return (
        <div onClick={handleClick}>

            <img alt='animal' src={svgMap[type]} />

            <img
                alt='heart'
                src={heart}
                style={{
                    width: 10 + (10 * clicks) + 'px'
                }}
            />

        </div>
    );

}

export default AnimalShow;
