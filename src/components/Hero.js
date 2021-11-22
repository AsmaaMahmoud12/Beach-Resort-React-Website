import React from 'react'

const Hero = ({children, hero}) => {
    // Hero.defaultProps = {
    //     hero:'defaultHero'
    // }
    // ==
    const STYLES = ['defaultHero', 'roomsHero'] 
    const checkStyle = STYLES.includes(hero) 
    ? hero : STYLES[0]
    return (
        <header className={`${checkStyle}`}>
            {children}
        </header>
    )
}

export default Hero