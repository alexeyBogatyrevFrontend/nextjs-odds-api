'use server'

import axios from 'axios'
import { RootInterface } from './eventspage/[data]/page'

const API_KEY = 'qGsk8r9szcy1BLP3FC0X0m8mduriDRsF'
let dateFormat = 'iso'
let markets = 'h2h'
let oddsFormat = 'decimal'
let regions = 'us'

export const getEvents = async (key: string) => {
	const response = await axios.get(
		`https://api.apilayer.com/odds/sports/${key}/odds?regions=${regions}&oddsFormat=${oddsFormat}&markets=${markets}&dateFormat=${dateFormat}`,
		{
			headers: {
				apikey: API_KEY,
			},
		}
	)

	const result: RootInterface[] = response.data

	return result
}

export const getGame = async (key: string) => {
	const response = await axios.get(
		`https://api.apilayer.com/odds/sports/${key}/odds?regions=${regions}&oddsFormat=${oddsFormat}&markets=${markets}&dateFormat=${dateFormat}`,
		{
			headers: {
				apikey: API_KEY,
			},
		}
	)

	const result: RootInterface[] = response.data

	return result
}
