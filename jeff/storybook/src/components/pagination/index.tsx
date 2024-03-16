import { tailwindMerge } from '@/utils'
import { cva } from 'class-variance-authority'
import type { PaginationProps } from './pagination.type'

export const PaginationVariants = cva(
	`border-solid flex items-center justify-center text-center aspect-square `,
	{
		variants: {
			theme: {
				primary: `bg-Primary-Black text-Primary-White active:bg-Primary-Red active:border-Primary-Black active:text-Primary-White`,
				secondary:
					'bg-Primary-Black text-Primary-White active:bg-Primary-White active:border-Primary-Black active:text-Primary-Black',
			},
			shape: {
				rectangle: 'rounded-none',
				semi: 'rounded-23xl',
			},
			size: {
				small: 'text-sm w-5 py-2 px-4',
				medium: 'text-base w-7 py-3 px-5',
				large: 'text-xl w-9 py-4 px-6',
			},
			weight: {
				normal: 'font-small border-2',
				bold: 'font-semibold border-4',
			},
		},
		defaultVariants: {
			theme: 'primary',
			shape: 'semi',
			size: 'small',
			weight: 'normal',
		},
	},
)

export const Pagination = ({
	theme = 'primary',
	shape,
	size,
	weight,
	curPage = 1,
	perPage = 5,
	totPage = 1,
	onHandlePage,
}: PaginationProps) => {
	const startPage = Math.floor((curPage - 1) / perPage) * perPage + 1 // 시작 번호

	const onClickFirstButton = () => {
		onHandlePage && onHandlePage(1)
	}
	const onClickPreviousButton = () => {
		if (curPage === 1) return
		onHandlePage && onHandlePage(curPage - 1)
	}
	const onClickNextButton = () => {
		if (curPage === totPage) return
		onHandlePage && onHandlePage(curPage + 1)
	}
	const onClickLastButton = () => {
		onHandlePage && onHandlePage(totPage)
	}
	const onClickNumberButton = (moveTo: number) => {
		onHandlePage && onHandlePage(moveTo)
	}

	return (
		<div className='flex justify-center items-center gap-4 rounded-full w-full h-fit'>
			<button
				className={PaginationVariants({ theme, shape, weight, size })}
				onClick={onClickFirstButton}
			>
				{'≪'}
			</button>
			<button
				className={PaginationVariants({ theme, shape, weight, size })}
				onClick={onClickPreviousButton}
			>
				{'＜'}
			</button>
			{Array.from({ length: perPage }).map((_, idx) => {
				const printedPage = startPage + idx
				const isSelected = printedPage === curPage

				if (printedPage > totPage) return
				return (
					<button
						key={printedPage}
						className={tailwindMerge(
							PaginationVariants({ theme, shape, size, weight }),
							isSelected && theme == 'primary' && 'bg-Primary-Red text-Primary-White',
							isSelected && theme == 'secondary' && 'bg-Primary-White text-Primary-Black',
						)}
						onClick={() => {
							onClickNumberButton(printedPage)
						}}
					>
						{printedPage}
					</button>
				)
			})}
			<button
				className={PaginationVariants({ theme, shape, weight, size })}
				onClick={onClickNextButton}
			>
				{'＞'}
			</button>
			<button
				className={PaginationVariants({ theme, shape, weight, size })}
				onClick={onClickLastButton}
			>
				{'≫'}
			</button>
		</div>
	)
}
