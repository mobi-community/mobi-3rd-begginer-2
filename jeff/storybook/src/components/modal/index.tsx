import { Button } from '@/components'
import { tailwindMerge } from '@/utils'
import { faWarning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ModalProps } from './modal.type'

export const Modal = ({
	theme = 'red',
	layout = 'portrait',
	titleText,
	contentText,
	buttonText = '닫기',
	iconData = faWarning,
	onClick = () => {
		console.log('굿')
	},
}: ModalProps) => {
	return (
		<div className='fixed top-0 left-0 bg-transparent z-10 w-full h-full flex justify-center items-center text-Primary-White'>
			<div
				className={
					layout === 'portrait'
						? 'w-[30rem] h-[40rem] grid grid-rows-[1fr_2fr]'
						: 'w-[50rem] h-[20rem] grid grid-cols-[1fr_2fr]'
				}
			>
				<div
					className={tailwindMerge(
						'w-full h-full flex justify-center items-center p-5 text-Grey-Grey-25',
						theme === 'red' && 'bg-Secondary-Red-200',
						theme === 'blue' && 'bg-Secondary-Blue-200',
						theme === 'green' && 'bg-Secondary-Green',
					)}
				>
					<FontAwesomeIcon
						icon={iconData}
						className='text-inherit bg-transparent'
						size='5x'
					/>
				</div>
				<div className='w-full h-full bg-Grey-Grey-800 grid grid-rows-[1fr_2fr_1fr] py-5 px-10'>
					<h1>{titleText}</h1>
					<span>{contentText}</span>
					<div className='flex justify-center items-center'>
						<Button
							theme='secondary'
							size='large'
							onClick={onClick}
						>
							{buttonText}
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
