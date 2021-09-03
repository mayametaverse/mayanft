import React from 'react'
import mars from '../../images/mars.png'
import mercury from '../../images/mercury.png'
import neptune from '../../images/neptune.png'

import { UniverseCard, UniverseContainer, UniverseH1, UniverseIcon, UniverseWrapper, UniverseH2, UniverseP } from './UniverseElements'

const Universe = () => {
    return (
        <UniverseContainer id="collection">
            <UniverseH1>Your Mayas</UniverseH1>
            <UniverseWrapper>
                <UniverseCard>
                    <UniverseIcon src={mars} />
                        <UniverseH2>
                            Maya Exo
                            <UniverseP>
                            Price & Description
                            </UniverseP>
                        </UniverseH2>
                </UniverseCard>
                <UniverseCard>
                    <UniverseIcon src={mercury} />
                        <UniverseH2>
                            Maya Giga
                            <UniverseP>
                            Price & Description
                            </UniverseP>
                        </UniverseH2>
                </UniverseCard>
                <UniverseCard>
                    <UniverseIcon src={neptune} />
                        <UniverseH2>
                            Maya HelloWorld
                            <UniverseP>
                            Price & Description
                            </UniverseP>
                        </UniverseH2>
                </UniverseCard>
            </UniverseWrapper>
        </UniverseContainer>
    )
}

export default Universe
