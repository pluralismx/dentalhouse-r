import React, { Component } from 'react'
import styles from './TestimonialsSection.module.css'
import FeedbackCardComponent from './FeedbackCardComponent';
import next from '../../../../assets/images/left-arrow-white.png'
import previous from '../../../../assets/images/right-arrow-white.png'

const cards = [
    { 'comment': 'Love it it was so nice. I will recommend 100%', 'name': 'Jenny C.', 'initial': 'J'},
    { 'comment': 'Excellent service. Best in Tj', 'name': 'Raymond S.', 'initial': 'R' },
    { 'comment': 'Great service. Close to the border', 'name': 'Jose P.', 'initial': 'J' },
    { 'comment': 'Best Value, they made me feel I was paying what I should pay', 'name': 'Andrea J.', 'initial': 'J', 'initial': 'A' },
    { 'comment': 'Me and my spouse went both to get our implants done, and it was just amazing. Love it', 'name': 'Megan R.', 'initial': 'M' }
];

class TestimonialsSectionComponent extends Component {

    state = {
        currentSlide: 1,
        desktopCurrentSlide: 1
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

    // Desktop carousel

    nextSlide = () => {
        const totalSlides = cards.length;
        this.setState(prevState => ({
            desktopCurrentSlide: (prevState.desktopCurrentSlide + 1) % totalSlides
        }));
    };

    previousSlide = () => {
        const totalSlides = cards.length;
        this.setState(prevState => ({
            desktopCurrentSlide: (prevState.desktopCurrentSlide - 1 + totalSlides) % totalSlides
        }));
    };

    render(){

        const { desktopCurrentSlide } = this.state;
        const totalSlides = cards.length;

        // Calculate the indices for the 3 cards to display
        const startIndex = desktopCurrentSlide;
        const middleIndex = (desktopCurrentSlide + 1) % totalSlides;
        const endIndex = (desktopCurrentSlide + 2) % totalSlides;

        return(
            <section className={ styles.FeedbackSectionWrapper }>
                <div className={ styles.Filter }></div>
                <div className={ styles.FeedbackSectionHeader }>
                    <h1>Testimonials</h1>
                </div>
                
                <div className={styles.cardCarousel}>
                    {cards.map((card, index)=>(
                        <FeedbackCardComponent 
                            key={index}
                            comment={card.comment}
                            name={card.name}
                            initial={card.initial}
                            style={{ display: index === this.state.currentSlide ? 'block' : 'none' }}
                        />
                    ))}
                </div>

                <div className={styles.DesktopCardCarousel}>
                    <button className={ styles.CarouselControlButton } onClick={this.previousSlide}>
                        <img src={next}/>
                    </button>
                    <div className={ styles.DesktopCardContainer }>
                        {[
                            { index: startIndex, style: { display: 'flex' } },
                            { index: middleIndex, style: { display: 'flex' } },
                            { index: endIndex, style: { display: 'flex' } },
                        ].map(({ index, style }) => (
                            <FeedbackCardComponent
                                key={index}
                                comment={cards[index].comment}
                                name={cards[index].name}
                                initial={cards[index].initial}
                                style={style}
                            />
                        ))}
                    </div>
                    <button className={ styles.CarouselControlButton } onClick={this.nextSlide}>
                        <img src={ previous }/>
                    </button>
                </div>

            </section>
        );
    }
}

export default TestimonialsSectionComponent