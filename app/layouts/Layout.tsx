'use client'

import React, { FC, ReactNode, useState } from 'react'
import Header from '../components/Header'

import TopNewsList from '../topnews/TopNewsList/TopNewsList'
import NewsList from '../news/NewsList/NewsList'
import Footer from '../components/Footer/Footer'
import SportsCategoryList from '../sportsCategory/SportsCategoryList/SportsCategoryList'

export type EventType = {
	key: string
	group: string
	title: string
	description: string
	active: boolean
	has_outrights: boolean
}

type LayoutType = {
	children: ReactNode
}

const Layout: FC<LayoutType> = ({ children }) => {
	// const [sport, setSport] = useState('Soccer')

	return (
		<div className='mainWrapper'>
			<Header />
			<main className='main'>
				<div className='container'>
					<div className='main__wrapper'>
						<div className='left'>
							<SportsCategoryList />
							<TopNewsList />
						</div>
						<div className='right'>
							{children}
							<NewsList />
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default Layout
