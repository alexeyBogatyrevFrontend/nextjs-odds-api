import { getGame } from '@/app/action'
import { RootInterface } from '@/app/eventspage/[data]/page'
import Layout from '@/app/layouts/Layout'
import { formatDate } from '@/app/utils/formatDate'
import { FC } from 'react'

import styles from '../GamePage.module.css'
import Image from 'next/image'

type GamePageProps = {
	params: {
		id: string
	}
}

const GamePage: FC<GamePageProps> = async ({ params: { id } }) => {
	const key = id.split('%26')[0]
	const gameId = id.split('%26')[1]

	const games: RootInterface[] = await getGame(key)

	const game = games.filter(game => game.id === gameId)

	return (
		<Layout>
			<div className='mb-8'>
				<h2>Спортивное событие</h2>
				<div className={styles.block}>
					<div
						className={styles.block__game}
						style={{
							background:
								"url('/sport-event/soccer.png') center center / cover no-repeat",
						}}
					>
						<div className={styles.game}>
							<h2>{game[0].home_team}</h2>
							<h2>VS</h2>
							<h2>{game[0].away_team}</h2>
						</div>
						<div className={styles.game__date}>
							<strong>
								{formatDate(game[0].commence_time).dayOfMonth}{' '}
								{formatDate(game[0].commence_time).month}{' '}
							</strong>
							<span>
								{formatDate(game[0].commence_time).dayOfWeek},{' '}
								{formatDate(game[0].commence_time).time}
							</span>
						</div>
					</div>

					<div className='proposal mb-8'>
						<h2 className='proposal__title'>Букмекеры</h2>
						<div className='proposal__wrapper'>
							{game[0].bookmakers.map((bookmaker, index) => (
								<div className='bookmakers' key={index}>
									<div className='bookmakers__wrapper'>
										<div className='bookmakers__time'>
											{/* {formatDate(bookmaker.last_update)} */}
										</div>
										<h3 className='bookmakers__title'>{bookmaker.title}</h3>
									</div>
									<div className='bookmakers__stakes-wrapper'>
										{bookmaker.markets.map((market, index) => (
											<div className='bookmakers__stakes' key={index}>
												<hr />
												{market.outcomes.map((outcome, index) => (
													<div key={index}>
														{outcome.name} - ({outcome.price})
													</div>
												))}
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</div>

					<h3>
						Смотреть онлайн трансляцию {game[0].home_team} — {game[0].away_team}
						. Лига чемпионов. {formatDate(game[0].commence_time).dayOfMonth}{' '}
						{formatDate(game[0].commence_time).month}{' '}
					</h3>

					<p>
						Онлайн результат матча {game[0].home_team} — {game[0].away_team}{' '}
						доступен на нашем сайте бесплатно, без регистрации. Прямой эфир
						может проходить с небольшой задержкой от реального времени. Также
						можете выбрать альтернативные источники трансляции.
					</p>

					<div className={styles.bg}></div>
				</div>
			</div>
		</Layout>
	)
}

export default GamePage
