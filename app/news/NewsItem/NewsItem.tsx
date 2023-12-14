import React, { FC } from 'react'
import { NewsItemType } from '../NewsList/NewsList'
import styles from './NewsItem.module.css'
import Link from 'next/link'
import Image from 'next/image'

type NewsItemProps = {
	item: NewsItemType
}

const NewsItem: FC<NewsItemProps> = ({ item }) => {
	return (
		<Link href='/all-news' className={styles.block}>
			<Image src='/news-temp.png' width={290} height={155} alt={item.img} />
			<div className={styles.block__bottom}>
				<h3>{item.title}</h3>
				<span>{item.time}</span>
			</div>
		</Link>
	)
}

export default NewsItem
