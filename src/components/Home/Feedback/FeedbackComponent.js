import React, { Component } from 'react'
import styles from './Feedback.module.css'
import FeedbackCardComponent from './FeedbackCardComponent';

class FeedbackComponent extends Component {

    state = {
        currentSlide: 1
    }

    componentDidMount() {
        this.intervalId = setInterval(this.changeSlide, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    changeSlide = () => {
        const totalSlides = cards.length;
        this.setState(prevState => ({
            currentSlide: (prevState.currentSlide + 1) % totalSlides
        }));
    }

    render(){
        return(
            <section className={styles.feedbackSection}>
                <div className={styles.commentContainer}>
                    <h1 className={styles.titleHeading}>
                        Kind words from our patients
                    </h1>
                    <div className={styles.cardCarousel}>
                        {cards.map((card, index)=>(
                            <FeedbackCardComponent 
                                key={index}
                                comment={card.comment}
                                name={card.name}
                                style={{ display: index === this.state.currentSlide ? 'block' : 'none' }}
                            />
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

const cards = [
    { 'comment': 'Love it it was so nice. I will recommend 100%', 'name': 'Jenny C.' },
    { 'comment': 'Excellent service. Best in Tj', 'name': 'Raymond S.' },
    { 'comment': 'Great service. Close to the border', 'name': 'Jose P.' },
    { 'comment': 'Best Value, they made me feel I was paying what I should pay', 'name': 'Andrea J.' },
    { 'comment': 'Me and my spouse went both to get our implants done, and it was just amazing. Love it', 'name': 'Megan R.' }
];
export default FeedbackComponent