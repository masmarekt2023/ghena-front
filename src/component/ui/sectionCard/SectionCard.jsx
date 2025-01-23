import React, { useRef, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import CardComponent from '../Card/CardCreators';
import './sectionCard.css'
import Cardbundle from '../Card/Cardbundle';
import CardMarketplace from '../Card/CardMarketplace';
const SectionCard = ({

    likesCount,
    subscrib,

    CardpersonalInfo,
    Subscribe,
    data,
    chat,
    Creators,
    Bundles,
    Marketplace
}) => {
    const carouselRef = useRef(null);
    console.log(data)

    const handleScrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const handleScrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    // Automatic scrolling
    useEffect(() => {
        const interval = setInterval(() => {
            handleScrollRight();
        }, 2000); // Scroll every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div style={{ display: 'flex', alignItems: 'center', margin: '20px' }}>

            <button
                onClick={handleScrollLeft}
                className='prev-arrow'
            >
                <AiOutlineArrowLeft size={50} />
            </button>
            <div
                ref={carouselRef}
                style={{
                    display: 'flex',
                    overflowX: 'hidden',
                    scrollBehavior: 'smooth',
                    padding: '20px',
                    whiteSpace: 'nowrap',
                }}
            >
                {data.map((itemCard, index) => {
                    console.log(itemCard)
                    return (
                        <div className='CardContainer' key={index}>
                            {Creators && (
                                <CardComponent
                                data={itemCard}
                                chat={chat}

                                subscrib={subscrib}

                                CardpersonalInfo={CardpersonalInfo}
                                Subscribe={Subscribe}
                            />)}
                            { Bundles && (
                                <Cardbundle
                                data={itemCard}
                          
                            />
                            )}
                            {Marketplace && (
                                <CardMarketplace data={itemCard} />
                            )}

                        </div>
                    )
                })}
            </div>
            <button
                onClick={handleScrollRight}
                className='next-arrow'

            >
                <AiOutlineArrowRight size={50} />
            </button>
        </div>
    );
};

export default SectionCard;