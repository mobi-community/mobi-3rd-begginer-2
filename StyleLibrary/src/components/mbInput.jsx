import { cva } from "class-variance-authority"

const MBInput = ({
  purpose,
  shape = "rectangle",
  iconUrl,
  hasButton = false,
  hasIcon = false,
  buttonText = "버튼",
}) => {
  return (
    <div className={WrapperVariants({ purpose, shape })}>
      <input className="w-[80%] outline-none bg-transparent text-ellipsis" />
      {hasButton &&
        (hasIcon ? (
          <IconComponent iconUrl={iconUrl} />
        ) : (
          <ButtonComponent buttonText={buttonText} />
        ))}
    </div>
  )
}

export default MBInput

const WrapperVariants = cva(
  "h-[5rem] pl-[1rem] pr-[1rem] flex items-center justify-between border-solid border-[1px] border-grayScale-600 focus-within:bg-theme-main-light ",
  {
    variants: {
      purpose: {
        search: "w-[30rem] ",
        resgisterSmall: "w-[20rem]",
        resgisterNormal: "w-[50rem]",
        resgisterLarge: "w-[100rem]",
      },
      shape: {
        round: "rounded-[5rem]",
        rectangle: "",
      },
    },
  }
)

const ButtonComponent = React.memo(({ buttonText }) => (
  <button className="w-[8rem] h-fit  rounded-[5rem] border-[1px] border-solid border-grayScale-600 hover:bg-theme-mainOppsite-light">
    {buttonText}
  </button>
))

const IconComponent = React.memo(({ iconUrl }) => (
  <img
    className="w-8 h-8 cursor-pointer  hover:scale-125"
    src={iconUrl}
    alt="Loading fail"
  />
))
