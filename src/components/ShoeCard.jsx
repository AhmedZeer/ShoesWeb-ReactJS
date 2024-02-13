function ShoeCard({imgURL, changeBigShowImage, bigShowImage}) {
  const handleClick = () => {
    if( bigShowImage !== imgURL.bigShoe ){
        changeBigShowImage(imgURL.bigShoe);
    }
  }
  return (
    <div className={`border-2 rounded-xl ${bigShowImage === imgURL.bigShoe ? 'border-red-500':'border-transparent cursor-pointer max-sm:flex-1'}`}
    onClick={handleClick}>
      <div className="flex justify-center items-center
      bg-card bg-center bg-cover sm:h-40 sm:w-40
      rounded-xl max-sm:p-2">
        <img src={imgURL.thumbnail}
            alt="shoe"
            height={127}
            width={103}
            className="object-contain"

        />
      </div>
    </div>
  )
}

export default ShoeCard