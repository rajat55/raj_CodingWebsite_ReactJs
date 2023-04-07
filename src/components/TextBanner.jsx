import React from 'react';
import './textbanner.css';
import Ai from '../img/Ai.jpg';

export default function TextBanner() {
  return (
    <div className='wrapper'>
      
        <div className="container-text">
            <div className="header">
                Why to Learn Programming
            </div>
            <div className="explain">
                <div className="img-sec">
                  <img src={Ai} alt="ai" />
                </div>
                <div className="text-para">
                Learning programming can be a fun and rewarding experience. It allows you to create silly programs and games, impress your friends, automate tedious tasks, and develop humorous chatbots. With programming, you can create animated cartoons or short films, and express your creativity in unique ways. For instance, you can make a game where you play as a cheeseburger or a program that generates random haikus about cats. Programming skills enable you to create impressive projects that will amaze your friends, and save you time by automating repetitive tasks. In summary, programming can be an enjoyable pursuit that unleashes your creativity and sense of humor.
                </div>
            </div>
        </div>




    </div>
  )
}
