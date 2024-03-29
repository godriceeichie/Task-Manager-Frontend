import React from "react";
import easyToUse from '../../../assets/img/snap.png'

const Features = () => {
  return (
    <section className="features">
      <h1 className="features__heading">The benefit of using our platform</h1>
      <main className="features__container">
        <div className="feature__container">
            <span className="feature__iconContainer">
                <img src={easyToUse} alt="" width={35}/>
            </span>
            <div className="feature__text">
                <h2>Easy To Use</h2>
                <p> Manage Your Tasks with Speed and Precision Using Our Professional Task Management Tool</p>
            </div>
        </div>
       
        <div className="feature__container">
            <span className="feature__iconContainer">
                <svg width="30" height="29" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_103_617)">
                    <path d="M21.7646 26.0625C28.5943 26.0625 34.1309 20.7739 34.1309 14.25C34.1309 7.72614 28.5943 2.4375 21.7646 2.4375C14.935 2.4375 9.39844 7.72614 9.39844 14.25C9.39844 20.7739 14.935 26.0625 21.7646 26.0625Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.0692 24.1894L12.9316 39.5625L21.7646 34.5L30.5977 39.5625L28.4601 24.1725" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_103_617">
                    <rect width="42.3984" height="40.5" fill="white" transform="translate(0.56543 0.75)"/>
                    </clipPath>
                    </defs>
                </svg>

            </span>
            <div className="feature__text">
                <h2>Professional & Fast</h2>
                <p> Manage Your Tasks with Speed and Precision Using Our Professional Task Management Tool</p>
            </div>
        </div>

        <div className="feature__container">
            <span className="feature__iconContainer">
                <svg width="30" height="29" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_103_617)">
                    <path d="M21.7646 26.0625C28.5943 26.0625 34.1309 20.7739 34.1309 14.25C34.1309 7.72614 28.5943 2.4375 21.7646 2.4375C14.935 2.4375 9.39844 7.72614 9.39844 14.25C9.39844 20.7739 14.935 26.0625 21.7646 26.0625Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.0692 24.1894L12.9316 39.5625L21.7646 34.5L30.5977 39.5625L28.4601 24.1725" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_103_617">
                    <rect width="42.3984" height="40.5" fill="white" transform="translate(0.56543 0.75)"/>
                    </clipPath>
                    </defs>
                </svg>

            </span>
            <div className="feature__text">
                <h2>Professional & Fast</h2>
                <p>Manage Your Tasks with Speed and Precision Using Our Professional Task Management Tool</p>
            </div>
        </div>
      </main>
    </section>
  );
};

export default Features;
