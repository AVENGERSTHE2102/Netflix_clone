import React, { useState, useEffect, useRef } from 'react';
import { 
  Container, 
  Background, 
  ProjectorBeam, 
  Content, 
  Title, 
  TimerWrapper, 
  TimerUnit, 
  Number, 
  Label,
  PopcornCanvas,
  ScreenGlow
} from './styles/countdown';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [scrollOffset, setScrollOffset] = useState(0);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const targetDate = new Date('2026-04-30T00:00:00');

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const offset = window.innerHeight - rect.top;
        if (offset > 0 && rect.bottom > 0) {
          setScrollOffset(offset);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const popcorns = [];
    const colors = ['#f0f0f0', '#d1d1d1', '#ffffff', '#e5e5e5'];

    class Popcorn {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -50;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = Math.random() * 1.5 + 1;
        this.size = Math.random() * 15 + 10;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.rotation = Math.random() * Math.PI * 2;
        this.vRotation = (Math.random() - 0.5) * 0.03;
        this.depth = Math.random();
        this.hasButter = Math.random() > 0.7;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.vRotation;

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        if (
          this.x > centerX - 200 && 
          this.x < centerX + 200 &&
          this.y > centerY - 125 &&
          this.y < centerY + 125
        ) {
          this.x += this.x < centerX ? -1 : 1;
        }

        if (this.y > canvas.height + 50) {
          this.reset();
        }
      }

      draw() {
        const scale = 0.6 + this.depth * 0.4;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.scale(scale, scale);
        ctx.globalAlpha = 0.4 + this.depth * 0.6; // Use alpha instead of blur for depth

        ctx.fillStyle = this.color;
        // Simple 3-blob popcorn shape
        ctx.beginPath();
        ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
        ctx.arc(this.size / 3, -this.size / 4, this.size / 2.5, 0, Math.PI * 2);
        ctx.arc(-this.size / 3, -this.size / 4, this.size / 2.5, 0, Math.PI * 2);
        ctx.fill();

        if (this.hasButter) {
          ctx.fillStyle = 'rgba(255, 215, 0, 0.2)';
          ctx.beginPath();
          ctx.arc(0, 0, this.size / 2.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    for (let i = 0; i < 40; i++) {
      popcorns.push(new Popcorn());
    }

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < popcorns.length; i++) {
        popcorns[i].update();
        popcorns[i].draw();
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <Container ref={containerRef}>
      <Background $offset={scrollOffset} />
      <ProjectorBeam $offset={scrollOffset} />
      <ScreenGlow />
      <Content>
        <Title>The Next Big Premiere</Title>
        <TimerWrapper>
          <TimerUnit>
            <Number>{timeLeft.days}</Number>
            <Label>Days</Label>
          </TimerUnit>
          <TimerUnit>
            <Number>{timeLeft.hours}</Number>
            <Label>Hours</Label>
          </TimerUnit>
          <TimerUnit>
            <Number>{timeLeft.minutes}</Number>
            <Label>Minutes</Label>
          </TimerUnit>
          <TimerUnit>
            <Number>{timeLeft.seconds}</Number>
            <Label>Seconds</Label>
          </TimerUnit>
        </TimerWrapper>
      </Content>
      <PopcornCanvas ref={canvasRef} />
    </Container>
  );
}
