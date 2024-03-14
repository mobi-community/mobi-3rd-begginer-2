import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// 스타일 충돌없이 tailwindCSS 클래스 병합
export const tailwindCSSMerge = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs))
}
