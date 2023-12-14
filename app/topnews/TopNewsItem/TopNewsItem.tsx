import React, { FC } from 'react'
import { TopNewsItemType } from '../TopNewsList/TopNewsList'
import styles from './TopNewsItem.module.css'
import Link from 'next/link'
import Image from 'next/image'

type TopNewsItemProps = {
	item: TopNewsItemType
}

const TopNewsItem: FC<TopNewsItemProps> = ({ item }) => {
	return (
		<Link href='/all-news' className={styles.block}>
			<Image src='/news-temp.png' width={73} height={73} alt={item.img} />
			<div className={styles.block__bottom}>
				<h3>{item.title}</h3>
				<span>{item.time}</span>
			</div>
		</Link>
	)
}

export default TopNewsItem
