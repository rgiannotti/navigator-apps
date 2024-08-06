/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from 'svelte-sonner'

export const sendSuccessNotification = (description: string, duration = 5000) => {
	toast.success('Success', { description, duration })
}

export const sendWarningNotification = (description: string, duration = 5000) => {
	toast.warning('Warning', { description, duration })
}

export const sendErrorNotification = (error: any, duration = 5000) => {
	const description = error?.message || error?.body?.message || error
	toast.error('Error', { description, duration })
}

export const sendInfoNotification = (description: string, duration = 5000) => {
	toast.info('Info', { description, duration })
}
