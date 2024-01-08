import React, { useEffect } from 'react'
import Layout from '../layouts/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, newsType } from '../types'
import NewsItem from './NewsItem/NewsItem'
import { AppDispatch } from '@/lib/slices/newsSlice'

import styles from './all-news.module.css'
import { fetchNews } from '../action'

const page = async () => {
	// const { newsList, status, error } = useSelector(
	// 	(state: RootState) => state.news
	// )

	// const dispatch = useDispatch<AppDispatch>()

	// useEffect(() => {
	// 	if (status === 'idle') {
	// 		dispatch(fetchNews())
	// 	}
	// }, [status, dispatch])

	const newsList: newsType[] = await fetchNews()

	console.log(newsList)

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
