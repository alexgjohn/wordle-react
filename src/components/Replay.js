import React from 'react'

function Replay() {

    const handleClick = () => {
        window.location.reload();
    }
    return (
        <button id="replay" onClick={handleClick}>PLAY AGAIN</button>
    )
}

export default Replay