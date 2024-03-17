import { cva } from "class-variance-authority"

const buttonVariants = cva(
  `p-2 rounded  border-dotted border-4 border-blue-400 hover:bg-red-600`,
  {
    variants: {
      size: {
        sm: `w-[10rem] h-[10rem] text-[1.2rem]`,
        md: `w-[20rem] h-[20rem] text-[2.4rem]`,
        lg: `w-[30rem] h-[30rem] text-[3.6rem]`,
      },
      color: {
        primary: `bg-blue-800 text-white`,
        secondary: `bg-gray-300 text-gray-700`,
      },
    },
  }
)

const MBButton = ({ size, color, children }) => {
  return <button className={buttonVariants({ size, color })}>{children}</button>
}

export default MBButton
