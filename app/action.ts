'use server'

import axios from 'axios'
import { RootInterface } from './odds/eventspage/[data]/page'

// odds
const API_KEY = 'zfme0kbYPxejRvJvTdv5gs0LfaadXMSF'
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

// news
export const fetchNews = async () => {
	const response = await axios.get('http://localhost:3001/news/all')
	const result = response.data

	return result
}
