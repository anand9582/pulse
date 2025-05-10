import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '../Global/Button'
import LandingExplore from '../../data/LandingExplore'
import Visit from './Visit'
import FirstFooter from '../Global/FirstFooter'
import SecondFooter from '../Global/SecondFooter'
import EnterSection from '../Global/EnterSection'

const Landing = () => {
    return (
        <>
            <div className='landing' id='landing'>
                <div className="container">
                    <div className="row">
                        <EnterSection secName="landing" firstSentence="take a glimpse into the beautiful country of:"
                            titleSec="switzerland" btnURL="/about" valueTextBtn="go there" />

                        <div className="landing__explore">

                            {
                                LandingExplore.map(({ id, iconName, itemTitle, itemNumber }) => (
                                    <div className="landing__explore__item" key={id}>
                                        <FontAwesomeIcon icon={iconName} />
                                        <div className="landing__explore__item__info">
                                            <span className="landing__explore__item__title">{itemTitle}</span>
                                            <span className="landing__explore__item__number">{itemNumber}</span>
                                        </div>
                                    </div>
                                ))
                            }

                            <Button urlValue={"/about"} valueText="explore more" className="btn-url" second={true} btnCard={false} thirdType={false} fourthType={false} />
                        </div>
                    </div>
                </div>
            </div>

            <Visit />

            <FirstFooter />

            <SecondFooter />
        </>
    )
}

export default Landing
