import React, { FC } from 'react'

import styles from './TopNewsItem.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { newsType } from '@/app/types'
import { arrayBufferToBase64 } from '@/app/utils/arrayBufferToBase64'

type TopNewsItemProps = {
	item: newsType
}

const TopNewsItem: FC<TopNewsItemProps> = ({ item }) => {
	// @ts-expect-error I use here Buffer not file
	const base64Encoded = item.image ? arrayBufferToBase64(item.image.data) : ''

	return (
		<Link href='/all-news' className={styles.block}>
			<div className={styles.img}>
				{' '}
				<Image
					src={`data:image/jpeg;base64,${base64Encoded}`}
					width={73}
					height={73}
					alt={item.title}
				/>
			</div>

			<div className={styles.block__bottom}>
				<h3>{item.title}</h3>
				<span>{item.description}</span>
			</div>
		</Link>
	)
}

export default TopNewsItem
