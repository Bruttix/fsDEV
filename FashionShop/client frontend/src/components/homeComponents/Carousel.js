import React from "react";
const Carousel = (props) => {
    function runWhenPageIsFullyParsed() {
        // your logic goes here

        /**/
        document.addEventListener("click", e => {
            let handleBar;
            if (e.target.matches(".handleBar")) {
                handleBar = e.target;
            } else {
                handleBar = e.target.closest(".handleBar");
            }
            if (handleBar != null) {
                onHandleClick(handleBar);
            }
        })
        const throttleProgressBar = throttle(() => { document.querySelectorAll(".progress-bar").forEach(calculateProgressBar) }, 250);
        window.addEventListener("resize", throttleProgressBar);

        document.querySelectorAll(".progress-bar").forEach(calculateProgressBar);

        function calculateProgressBar(progressBar) {
            progressBar.innerHTML = "";
            const slider = progressBar.closest(".rowCarousel").querySelector(".slider");
            const itemCount = slider.children.length;
            const itemsPerScreen = parseInt(
                getComputedStyle(slider).getPropertyValue("--items-per-screen")
            );
            let sliderIndex = parseInt(
                getComputedStyle(slider).getPropertyValue("--slider-index")
            );
            const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);

            if (sliderIndex >= progressBarItemCount) {
                slider.style.setProperty("--slider-index", progressBarItemCount - 1);
                sliderIndex = progressBarItemCount - 1;
            }

            for (let i = 0; i < progressBarItemCount; i++) {
                const barItem = document.createElement("div");
                barItem.classList.add("progress-item");
                if (i === sliderIndex) {
                    barItem.classList.add("active");
                }
                progressBar.append(barItem);
            }
        };
        function onHandleClick(handleBar) {
            const progressBar = handleBar.closest(".rowCarousel").querySelector(".progress-bar");
            const slider = handleBar.closest(".containerCarousel").querySelector(".slider");
            const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"));
            const progressBarItemCount = progressBar.children.length;
            if (handleBar.classList.contains("left-handle")) {
                if (sliderIndex - 1 < 0) {
                    slider.style.setProperty("--slider-index", progressBarItemCount - 1);
                    progressBar.children[sliderIndex].classList.remove("active");
                    progressBar.children[progressBarItemCount - 1].classList.add("active");
                } else {
                    slider.style.setProperty("--slider-index", sliderIndex - 1);
                    progressBar.children[sliderIndex].classList.remove("active");
                    progressBar.children[sliderIndex - 1].classList.add("active");
                }
            }
            if (handleBar.classList.contains("right-handle")) {
                if (sliderIndex + 1 >= progressBarItemCount) {
                    slider.style.setProperty("--slider-index", 0);
                    progressBar.children[sliderIndex].classList.remove("active");
                    progressBar.children[0].classList.add("active");
                } else {
                    slider.style.setProperty("--slider-index", sliderIndex + 1);
                    progressBar.children[sliderIndex].classList.remove("active");
                    progressBar.children[sliderIndex + 1].classList.add("active");
                }
            }
        };
        function throttle(cb, delay = 1000) {
            let shouldWait = false;
            let waitingArgs;
            const timeoutFunc = () => {
                if (waitingArgs == null) {
                    shouldWait = false;
                } else {
                    cb(...waitingArgs)
                    waitingArgs = null;
                    setTimeout(timeoutFunc, delay);
                }
            };

            return (...args) => {
                if (shouldWait) {
                    waitingArgs = args;
                    return;
                }

                cb(...args);
                shouldWait = true;
                setTimeout(timeoutFunc, delay);
            };
        };
    }
    // DOMContentLoaded handler if/else
    if (document.readyState === "complete") {
        // already fired, so run logic right away
        runWhenPageIsFullyParsed();
    } else {
        // not fired yet, so let's listen for the event
        window.addEventListener("DOMContentLoaded", runWhenPageIsFullyParsed);
    }
    return (

        <div className="rowCarousel">
                <script src="Carousel.js"></script>
                <div className="containerCarousel">
                    <button className="handleBar left-handle">
                        <div className="textHandleBar">&#8249;</div>
                    </button>
                    <div className="slider">
                        <img src="https://res.cloudinary.com/dqbkfteqj/image/upload/v1650865598/heather1_nnxkw7.jpg" alt="placehold" />
                        <img src="https://res.cloudinary.com/dqbkfteqj/image/upload/v1650952099/asdas_nirpjr.avif" alt="placehold" />
                        <img src="https://res.cloudinary.com/dqbkfteqj/image/upload/v1650951797/asda_yjcpba.avif" alt="placehold" />
                        <img src="https://res.cloudinary.com/dqbkfteqj/image/upload/v1650865598/heather4_cpzavl.jpg" alt="placehold" />
                        <img src="https://res.cloudinary.com/dqbkfteqj/image/upload/v1650951181/sdasda_moyqzr.jpg" alt="placehold" />
                        <img src="https://res.cloudinary.com/dqbkfteqj/image/upload/v1650865599/heather3_urdphj.jpg" alt="placehold" />
                        <img src="https://res.cloudinary.com/dqbkfteqj/image/upload/v1650951861/ert_xeqeig.avif" alt="placehold" />
                        <img src="https://res.cloudinary.com/dqbkfteqj/image/upload/v1650865598/heather6_bilirl.jpg" alt="placehold" />
                    </div>
                    <button className="handleBar right-handle">
                        <div className="textHandleBar">&#8250;</div>
                    </button>

                </div>
                <div className="headerCarousel">
                    <h3 className="title">Featured</h3>
                    <div className="progress-bar"></div>
                </div>
            </div>
        )
};

export default Carousel;