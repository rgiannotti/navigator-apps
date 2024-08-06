/* eslint-disable @typescript-eslint/no-explicit-any */
import * as crypto from 'crypto'
import * as zlib from 'zlib'

const ALGORITHM = 'aes-256-cbc'
const ENCRYPTION_KEY = Buffer.from(import.meta.env.VITE_SESSION_SECRET_KEY, 'hex')
const IV = crypto.randomBytes(16)

export const encrypt = (token: string) => {
	const compressedToken = zlib.deflateSync(token).toString('base64')
	const cipher = crypto.createCipheriv(ALGORITHM, ENCRYPTION_KEY, IV)
	let encrypted = cipher.update(compressedToken, 'utf8', 'hex')
	encrypted += cipher.final('hex')
	return `${IV.toString('hex')}:${encrypted}`
}

export const decrypt = (token: any) => {
	const textParts = token.split(':')
	const iv = Buffer.from(textParts.shift(), 'hex')
	const encryptedText = Buffer.from(textParts.join(':'), 'hex')
	const decipher = crypto.createDecipheriv(ALGORITHM, ENCRYPTION_KEY, iv)
	let decrypted = decipher.update(encryptedText)
	decrypted = Buffer.concat([decrypted, decipher.final()])
	const decompressedToken = zlib.inflateSync(Buffer.from(decrypted.toString(), 'base64')).toString()
	return decompressedToken
}
