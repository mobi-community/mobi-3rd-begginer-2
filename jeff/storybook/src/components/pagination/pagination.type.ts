import { PaginationVariants } from '@/components'
import type { VariantProps } from 'class-variance-authority'
import type { Dispatch, SetStateAction } from 'react'

export type PaginationProps = VariantProps<typeof PaginationVariants> & {
	curPage?: number
	perPage?: number
	totPage?: number
	onHandlePage?: Dispatch<SetStateAction<number>>
}
