import React from 'react'
import NewsItem from '../TopNewsItem/TopNewsItem'
import styles from './TopNewsList.module.css'
import Image from 'next/image'

const testArr = [
	{
		img: 'good',
		title:
			'Матч Захаряна в Лиге чемпионов и возвращение Ковальчука: что вы могли пропустить',
		time: '5 часов назад',
	},
	{
		img: 'good',
		title:
			'Матч Захаряна в Лиге чемпионов и возвращение Ковальчука: что вы могли пропустить',
		time: '5 часов назад',
	},
	{
		img: 'good',
		title:
			'Матч Захаряна в Лиге чемпионов и возвращение Ковальчука: что вы могли пропустить',
		time: '5 часов назад',
	},
]

export type TopNewsItemType = {
	img: string
	title: string
	time: string
}

const TopNewsList = () => {
	return (
		<>
			<h2 className={styles.title}>
				<Image src='/top-fire.svg' width={24} height={24} alt='fire' />
				Топ новости
			</h2>
			<div className={styles.wrapper}>
				{testArr.map((item, index) => (
					<NewsItem item={item} key={index} />
				))}
			</div>
		</>
	)
}

export default TopNewsList
