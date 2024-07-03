"use client";

import React, { useEffect, useRef } from 'react';
import { TweenLite, Circ } from 'gsap';

interface Point {
  x: number;
  originX: number;
  y: number;
  originY: number;
  closest: Point[];
  active: number;
  circle: Circle | null;
}

class Circle {
  pos: Point;
  radius: number;
  color: string;
  active: number;

  constructor(pos: Point, rad: number, color: string) {
    this.pos = pos;
    this.radius = rad;
    this.color = color;
    this.active = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (!this.active) return;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = `rgba(156,217,249,${this.active})`;
    ctx.fill();
  }
}

const LargeHeader: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const targetRef = useRef<Point>({
    x: 0,
    y: 0,
    originX: 0,
    originY: 0,
    closest: [],
    active: 0,
    circle: null,
  });
  const animateHeaderRef = useRef(true);

  const getDistance = (p1: Point, p2: Point) => {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  };

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    targetRef.current = {
      x: width / 2,
      y: height / 2,
      originX: width / 2,
      originY: height / 2,
      closest: [],
      active: 0,
      circle: null,
    };

    const largeHeader = headerRef.current;
    const canvas = canvasRef.current;
    if (!largeHeader || !canvas) return;

    largeHeader.style.height = `${height}px`;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    const points: Point[] = [];
    for (let x = 0; x < width; x += width / 40) {
      for (let y = 0; y < height; y += height / 40) {
        const px = x + Math.random() * width / 40;
        const py = y + Math.random() * height / 40;
        const p: Point = { x: px, originX: px, y: py, originY: py, closest: [], active: 0, circle: null };
        points.push(p);
      }
    }

    points.forEach((p1) => {
      const closest: Point[] = [];
      points.forEach((p2) => {
        if (p1 !== p2) {
          let placed = false;
          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (!closest[k]) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
        }
      });
      p1.closest = closest;
    });

    points.forEach(p => {
      const c = new Circle(p, 2 + Math.random() * 3, 'rgba(255,255,255,0.5)');
      p.circle = c;
    });

    pointsRef.current = points;

    const mouseMove = (e: MouseEvent) => {
      const posx = e.pageX || e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      const posy = e.pageY || e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      targetRef.current = { 
        x: posx, 
        y: posy,
        originX: posx,
        originY: posy,
        closest: [],
        active: 0,
        circle: null 
      };
    };

    const scrollCheck = () => {
      if (document.body.scrollTop > height) animateHeaderRef.current = false;
      else animateHeaderRef.current = true;
    };

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      largeHeader.style.height = `${height}px`;
      canvas.width = width;
      canvas.height = height;
    };

    const animate = () => {
      if (animateHeaderRef.current) {
        ctx.clearRect(0, 0, width, height);
        pointsRef.current.forEach(p => {
          if (Math.abs(getDistance(targetRef.current, p)) < 3000) {
            p.active = 0.8;
            if (p.circle) p.circle.active = 10;
          } else if (Math.abs(getDistance(targetRef.current, p)) < 10000) {
            p.active = 0.4;
            if (p.circle) p.circle.active = 4;
          } else if (Math.abs(getDistance(targetRef.current, p)) < 40000) {
            p.active = 0.1;
            if (p.circle) p.circle.active = 0.4;
          } else {
            p.active = 0;
            if (p.circle) p.circle.active = 0.1;
          }

          drawLines(p, ctx);
          p.circle?.draw(ctx);
        });
      }
      requestAnimationFrame(animate);
    };

    const shiftPoint = (p: Point) => {
      TweenLite.to(p, 1 + 1 * Math.random(), {
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: Circ.easeInOut,
        onComplete: () => {
          shiftPoint(p);
        },
      });
    };

    const drawLines = (p: Point, ctx: CanvasRenderingContext2D) => {
      if (!p.active) return;
      p.closest.forEach((c: Point) => {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(c.x, c.y);
        ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
        ctx.stroke();
      });
    };

    animate();
    points.forEach(p => {
      shiftPoint(p);
    });

    if (!('ontouchstart' in window)) {
      window.addEventListener('mousemove', mouseMove);
    }
    window.addEventListener('scroll', scrollCheck);
    window.addEventListener('resize', resize);

    return () => {
      if (!('ontouchstart' in window)) {
        window.removeEventListener('mousemove', mouseMove);
      }
      window.removeEventListener('scroll', scrollCheck);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div
      id="large-header"
      ref={headerRef}
      className="relative w-full flex overflow-hidden z-1 bg-cover bg-center h-60"
      style={{ backgroundImage: `url(https://www.marcoguglie.it/Codepen/AnimatedHeaderBg/demo-1/img/demo-1-bg.jpg)` }}>
      <canvas id="demo-canvas" ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>
      <div className="absolute inset-0 flex flex-col tracking-wider justify-center items-center text-white z-1">
        <p className="mt-4 text-lg">Bonjour,</p>
        <div className='font-bold text-4xl'>
          <h1>Je suis Mathieu JACQUEMIN,</h1>
        </div>
				<p className="mt-4 text-lg">Developpeur web full-stack</p>
      </div>
    </div>
  );
};

export default LargeHeader;
