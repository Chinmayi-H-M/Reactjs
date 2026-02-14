import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services = () => {
    const servicesData=[
        {
            title:'Advertising',
            description:'Creating compelling ad compaingns that captive audiences and drive results.',
            icon:assets.ads_icon
        },
        {
            title:'Content Marketing',
            description:'We help you to execute ur plan and deliver results.',
            icon:assets.marketing_icon
        },
        {
            title:'Content writing',
            description:'We help you to craete a marketing strategy that drives results.',
            icon:assets.content_icon
        },
        {
            title:'Socail media Marketing',
            description:'We help you to build a strong social media presence and engage with your audience effectively.',
            icon:assets.social_icon
        },
    ]
  return (
    <div id='services' className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
        <img src={assets.bgImage2} alt="" className="absolute -top-110 -left-70 -z-1 dark:hidden"/>
      <Title title='How can we help you?' desc='This is the platform where you get assistance for all your digital marketing needs.'/>
      <div className="flex flex-col md:grid md:grid-cols-2">
        {servicesData.map((service,index)=>(
            <ServiceCard key={index} service={service} index={index}/>
        ))}
      </div>
    </div>
  )
}

export default Services
