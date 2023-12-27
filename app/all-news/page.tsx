'use client'

import React, { useEffect } from 'react'
import Layout from '../layouts/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../types'
import NewsItem from '../news/NewsItem/NewsItem'
import { AppDispatch, fetchNews } from '@/lib/slices/newsSlice'

import styles from './all-news.module.css'

const page = () => {
	const { newsList, status, error } = useSelector(
		(state: RootState) => state.news
	)

	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchNews())
		}
	}, [status, dispatch])

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
