import React from 'react'
import Carousel from '../../components/Carousel'
import Yonalishlar from '../../components/Yonalishlar'
import ArizaYuborishQollanma from '../../components/ArizaYuborishQollanma'
import Footer from '../../components/Footer'

const Main = () => {
    return (
        <div>
            <Carousel />
            <Yonalishlar />
            <ArizaYuborishQollanma />
            <Footer />
        </div>
    )
}

export default Main