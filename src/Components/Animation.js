import React from "react";
import Lottie from "react-lottie";
import AnimationImage from '../images/weather-bg.json';

const Animation = () => {
    return (
        <>
            <div className="lottie-bg">
                <Lottie
                    options={{
                        loop: true,
                        autoplay: true,
                        animationData: AnimationImage,
                        rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice',
                        },
                    }}
                />
            </div>

        </>
    )
}
export default Animation;