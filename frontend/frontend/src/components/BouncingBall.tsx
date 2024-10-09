// src/BouncingBall.tsx
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const BouncingBall: React.FC = () => {
    const ballRef = useRef<HTMLImageElement | null>(null);
    const navigate = useNavigate(); // Use useNavigate for navigation

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to(ballRef.current, { y: -100, duration: 0.5, yoyo: true, repeat: 1 })
          .to(ballRef.current, { y: -100, duration: 0.5 }) // Third bounce
          .to(ballRef.current, { y: -window.innerHeight, duration: 1, onComplete: () => {
              // Navigate to new page after the bounce animation
              navigate('/product'); // Use navigate instead of history.push
          }});
    }, [navigate]);

    return (
        <div>
            <img 
                ref={ballRef} 
                src="/public/Rocket.png" 
                alt="Bouncing Ball" 
                style={{ position: 'absolute', left: '50%', bottom: '20px', width: '150px', height: '150px' }} 
            />
        </div>
    );
};

export default BouncingBall;
