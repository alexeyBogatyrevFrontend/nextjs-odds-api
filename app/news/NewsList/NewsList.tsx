import React from 'react'
import NewsItem from '../NewsItem/NewsItem'
import styles from './NewsList.module.css'

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

export type NewsItemType = {
	img: string
	title: string
	time: string
}

const NewsList = () => {
	return (
		<>
			<h2 className={styles.title}>Новости</h2>
			<div className={styles.wrapper}>
				{testArr.map((item, index) => (
					<NewsItem item={item} key={index} />
				))}
			</div>
		</>
	)
}

export default NewsList
