import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import style from '../Stylesheets/Cards.module.css';
import '../App.css';

// eslint-disable-next-line react/prop-types
const Card = ({ title, description, imageSrc }) => {
    const [backgroundPosition, setBackgroundPosition] = useState("50% 50%");
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10.5deg", "-10.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10.5deg", "10.5deg"]);

    function handleMouseMove(event) {
        const rect = event.target.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);

        setBackgroundPosition(`${mouseX}px ${mouseY}px`);
        setIsHovered(true);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
        setBackgroundPosition("50% 50%");
        setIsHovered(false);
    }

    return (            
            <motion.div
                className={`${style.Cards} ${isHovered ? style.hovered : style.initial}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    background: isHovered
                    ? `radial-gradient(circle at ${backgroundPosition}, #aa00ff, transparent 20%)`
                    : 'transparent'
                }}
            >
                <div className={style.CardContent}>
                    <img src={imageSrc} alt={title} className={style.featureIcons} />
                    <strong className={style.featureName}>{title}</strong>
                    <p>{description}</p>
                </div>
            </motion.div>
    );
}

export default function Cards() {
    return (
        <div className={style.container}>
            <Card
                title="Test"
                description="Dive into interactive tests on Data Structures and Algorithms. Challenge yourself with quizzes, Start your journey to becoming a DSA expert today!"
                imageSrc="src\assets\testPaper.svg"
            />
            <Card
                title="Visualization"
                description="Visualize complex algorithms with interactive animations. Understand data structures and processes in real-time. Dive in and watch algorithms come to life!"
                imageSrc="src\assets\testPaper.svg"
            />
            <Card
                title="Test"
                description="Dive into interactive tests on Data Structures and Algorithms. Challenge yourself with quizzes, Start your journey to becoming a DSA expert today!"
                imageSrc="src\assets\testPaper.svg"
            />
            <Card
                title="Visualization"
                description="Visualize complex algorithms with interactive animations. Understand data structures and processes in real-time. Dive in and watch algorithms come to life!"
                imageSrc="src\assets\testPaper.svg"
            />
            <Card
                title="Test"
                description="Dive into interactive tests on Data Structures and Algorithms. Challenge yourself with quizzes, Start your journey to becoming a DSA expert today!"
                imageSrc="src\assets\testPaper.svg"
            />
            <Card
                title="Visualization"
                description="Visualize complex algorithms with interactive animations. Understand data structures and processes in real-time. Dive in and watch algorithms come to life!"
                imageSrc="src\assets\testPaper.svg"
            />
        </div>
    );
}
