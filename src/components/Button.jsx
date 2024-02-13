const Button = ({ label, iconURL, bgColor, textColor, borderColor}) => {
  return (
    <button className={`
    flex justify-center
    items-center gap-2
    px-7 py-4 border font-monsterrat
    text-lg leading-none
    rounded-full
    ${ bgColor ? `${bgColor} ${textColor} ${borderColor}`
    :
    "bg-coral-red  text-white border-coral-red"
    } `}
    >{label}
    {iconURL && <img src={iconURL}
          alt="arrow"
          className="ml-2 rounded-full
          w-5 h-5"/>}
    </button>
  )
}

export default Button