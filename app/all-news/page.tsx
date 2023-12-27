'use client'

import React from 'react'
import Layout from '../layouts/Layout'
import { useSelector } from 'react-redux'
import { RootState } from '../types'
import NewsItem from '../news/NewsItem/NewsItem'

const page = () => {
	const { newsList, status, error } = useSelector(
		(state: RootState) => state.news
	)
	return (
		<Layout>
			<div className='all-news'>
				{newsList.map(news => (
					<NewsItem item={news} />
				))}
			</div>
		</Layout>
	)
}

export default page
