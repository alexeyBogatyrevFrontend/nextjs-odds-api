import React, { Dispatch, FC, MouseEvent, SetStateAction } from 'react'
import styles from './SportsCategoryItem.module.css'
import { sportsCategoryType } from '../SportsCategoryList/SportsCategoryList'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type SportsCategoryItemProps = {
	item: sportsCategoryType
	setSport?: Dispatch<SetStateAction<string | null>>
	active: string | null // Active category prop
	setActive: Dispatch<SetStateAction<string | null>> // Setter for active category prop
}

const SportsCategoryItem: FC<SportsCategoryItemProps> = ({
	item,
	setSport,
	active,
	setActive,
}) => {
	const router = useRouter()

	const clickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		setActive(item.category)
		if (setSport) setSport(item.category)

		router.push(`/?category=${item.category}`)
	}

	return (
		<Link
			href='/'
			className={`${styles.block} ${
				active === item.category ? styles.active : ''
			}`}
			onClick={clickHandler}
		>
			<Image
				src={`/icons/${
					active === item.category ? 'white-' + item.img : item.img
				}.svg`}
				alt={item.img}
				width={24}
				height={24}
			/>
			<span>{item.title}</span>
		</Link>
	)
}

export default SportsCategoryItem
