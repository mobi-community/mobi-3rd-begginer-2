import * as S from './a1Input.style'
import type { A1InputProps } from './a1Input.type'

export const A1Input = ({
	icon: Icon,
	theme = 'main',
	size = 'default',
	placeholder = 'Search',
	...rest
}: A1InputProps) => {
	return (
		<S.InputContainer
			$theme={theme}
			$size={size}
		>
			<S.InputBase
				{...{ placeholder }}
				{...rest}
			/>
			{Icon && <Icon />}
		</S.InputContainer>
	)
}
