import React from 'react'
import Header from '../../layout/header'
import Banner from './banner'
import Crimeabout from './crimeabout'
import CrimeSearch from './crimesearch'
import CrimeReportCard from './RelatedCrime'
import { Chatbot } from './Chatbot'
import Footer from '../../layout/footer'

export const Homepage = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Crimeabout/>
        <CrimeSearch/>
        <CrimeReportCard/>
        <Chatbot/>
        {/* <CaseListSection/> */}
        <Footer/>
    </div>
  )
}
