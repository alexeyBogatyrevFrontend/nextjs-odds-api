import React from 'react'
import Layout from '../layouts/Layout'

import { newsType } from '../types'
import NewsItem from './NewsItem/NewsItem'

import styles from './all-news.module.css'
import { fetchNews } from '../action'

const page = async () => {
	const newsList: newsType[] = await fetchNews()

	return (
		<Layout>
			<div className={styles.page}>
				<h2>Все новости</h2>
				<div className={styles.wrapper}>
					{newsList.map(news => (
						<NewsItem item={news} key={news._id} />
					))}
				</div>
			</div>
		</Layout>
	)
}

export default page
