'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './components/UI/Loader'
import Header from './components/Header'
import Footer from './components/Footer/Footer'
import SportsCategoryList from './sportsCategory/SportsCategoryList/SportsCategoryList'
import SportItem from './components/SportItem/SportItem'
import TopNewsList from './topnews/TopNewsList/TopNewsList'
import NewsList from './news/NewsList/NewsList'

import { useRouter, useSearchParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './types'
import { AppDispatch, fetchNews } from '@/lib/slices/newsSlice'

const API_KEY = 'qGsk8r9szcy1BLP3FC0X0m8mduriDRsF'

export type EventType = {
	key: string
	group: string
	title: string
	description: string
	active: boolean
	has_outrights: boolean
}

const Page = () => {
	const { status } = useSelector((state: RootState) => state.news)
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchNews())
		}
	}, [status, dispatch])

	const router = useRouter()

	const searchParams = useSearchParams()
	const category = searchParams.get('category')

	const [sport, setSport] = useState(category)
	const [event, setEvent] = useState<EventType[]>([])
	const [isLoading, setIsLoading] = useState(false)

	const fetchData = async (sport: string) => {
		setEvent([])
		setIsLoading(true)

		try {
			const response = await axios.get(
				'https://api.apilayer.com/odds/sports?all=false',
				{
					headers: {
						apikey: API_KEY,
					},
				}
			)

			const result: EventType[] = response.data

			result.forEach(item => {
				if (item.group === sport)
					setEvent((prev: EventType[]) => [...prev, item])
			})
		} catch (error) {
			console.error('Error fetching data:', error)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		if (!sport) {
			router.push('/?category=Soccer')
		}
		if (sport) {
			fetchData(sport)
		}
	}, [sport])

	return (
		<div className='mainWrapper'>
			<Header />
			<main className='main'>
				<div className='container'>
					<div className='main__wrapper'>
						<div className='left'>
							<SportsCategoryList setSport={setSport} />
							<TopNewsList />
						</div>
						<div className='right'>
							{isLoading && <Loader />}
							{event.length > 0 && <SportItem event={event} />}
							<NewsList />
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default Page
