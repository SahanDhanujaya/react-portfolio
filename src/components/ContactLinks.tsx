import React from 'react'
import { href } from 'react-router-dom'

function ContactLinks() {
    const links = [
        {
            id: 1,
            src: './src/assets/logos/icons8-github-30.png',
            alt: 'github logo',
            href: ''
        },
        {
            id: 2,
            src: './src/assets/logos/icons8-x-30.png',
            alt: 'twitter logo',
            href: ''
        },
        {
            id: 3,
            src: './src/assets/logos/icons8-insta-30.png',
            alt: 'insta logo',
            href: ''
        },
        {
            id: 4,
            src: './src/assets/logos/icons8-fb-30.png',
            alt: 'facebook logo',
            href: ''
        },
        {
            id: 5,
            src: './src/assets/logos/icons8-youtube-30.png',
            alt: 'youtube logo',
            href: ''
        }
    ]
  return (
    <div style={{margin: '1rem'}}>
        <ul className='flex justify-center items-center '>
            {
                links.map((link) => (
                    <li key={link.id} className='p-2 rounded-full hover:shadow-lg hover:shadow-gray-600' style={{padding: '5px'}}>
                        <a href={link.href}>
                            <img src={link.src} alt={link.alt} className='w-5'/>
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default ContactLinks
