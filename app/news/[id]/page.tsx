'use client'
import Loader from '@/app/components/UI/Loader'
import Layout from '@/app/layouts/Layout'
import { RootState } from '@/app/types'
import { AppDispatch, fetchNews } from '@/lib/slices/newsSlice'
import dayjs from 'dayjs'
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

type NewsPageProps = {
	params: {
		id: string
	}
}

const page: FC<NewsPageProps> = ({ params: { id } }) => {
	const { newsList, status, error } = useSelector(
		(state: RootState) => state.news
	)

	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchNews())
		}
	}, [status, dispatch])

	const currentNews = newsList.filter(news => news._id === id)[0]

	const formattedDate = currentNews?.date
		? dayjs(currentNews?.date).format('MMMM DD, YYYY HH:mm')
		: 'Дата не была установлена'

	return (
		<Layout>
			{status === 'loading' ? (
				<Loader />
			) : (
				<>
					<h1>{currentNews?.title}</h1>
					<h2>{currentNews?.description}</h2>
					<h3>{currentNews?.isTop ? 'Top' : 'Usual'}</h3>
					<h4>{formattedDate}</h4>
					<div dangerouslySetInnerHTML={{ __html: currentNews?.textEditor }} />
				</>
			)}
		</Layout>
	)
}

export default page
