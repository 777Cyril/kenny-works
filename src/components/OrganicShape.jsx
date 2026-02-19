import { useEffect, useRef } from 'react';
import './OrganicShape.css';

export default function OrganicShape() {
  const shapeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      if (shapeRef.current) {
        shapeRef.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div className="organic-shape" ref={shapeRef} />;
}
