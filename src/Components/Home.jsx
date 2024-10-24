/* eslint-disable react/prop-types */
import style from '../Stylesheets/Home.module.css';
import demoImg from '../assets/dsaimg.png';

export default function Home({ onLearnMoreClick }) {
    return (
        <div className={style.container}>
            <section className={style.content}>
                <h2 className={style.tagLine}>
                    DSA sharpens problem-solving skills, unlocking efficient solutions to challenges.
                </h2>
                <button
                    type="button"
                    className={style.LearnBtn}
                    onClick={onLearnMoreClick}
                >
                    Learn More
                </button>
            </section>

            <section className={style.animation}>
                <img src={demoImg} alt="A representation of data structures and algorithms" />
            </section>
        </div>
    );
}
