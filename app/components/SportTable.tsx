import React, { FC } from 'react'
import { EventType } from '../page'
import Link from 'next/link'

type SportTableProps = {
	event: EventType[]
}

const SportTable: FC<SportTableProps> = ({ event }) => {
	return (
		<div>
			<h2>Категории спорта</h2>
			<div className='sportCategory'>
				<div className='sportCategory__wrapper'>
					{event.map((item, index) => (
						<Link href={`/eventspage/${item.group}&${item.key}`} key={index}>
							<div className='sportCategory__item'>
								<span>{item.title}</span>
								<span>{item.description}</span>
								<span>{item.group}</span>
							</div>
						</Link>
					))}
				</div>
			</div>
			{/* <table className='w-full border-collapse mt-4'>
				<thead>
					<tr>
						<th>group</th>
						<th>title</th>
						<th>description</th>
						<th>active</th>
						<th>has_outrights</th>
						<th>key</th>
					</tr>
				</thead>
				<tbody>
					{event.map((item, index) => (
						<tr key={index}>
							<td>
								<Link href={`/eventspage/${item.group}&${item.key}`}>
									{item.group}
								</Link>
							</td>
							<td>
								<Link href={`/eventspage/${item.group}&${item.key}`}>
									{item.title}
								</Link>
							</td>
							<td>
								<Link href={`/eventspage/${item.group}&${item.key}`}>
									{item.description}
								</Link>
							</td>
							<td>
								<Link href={`/eventspage/${item.group}&${item.key}`}>
									{item.active ? 'Yes' : 'No'}
								</Link>
							</td>
							<td>
								<Link href={`/eventspage/${item.group}&${item.key}`}>
									{item.has_outrights ? 'Yes' : 'No'}
								</Link>
							</td>
							<td>
								<Link href={`/eventspage/${item.group}&${item.key}`}>
									{item.key}
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table> */}
		</div>
	)
}

export default SportTable
