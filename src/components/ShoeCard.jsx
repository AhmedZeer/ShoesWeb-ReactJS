function ShoeCard({imgURL, changeBigShowImage, bigShowImage}) {
  const handleClick = () => {
    if( bigShowImage !== imgURL.bigShoe ){
        changeBigShowImage(imgURL.bigShoe);
    }
  }
  return (
    <div className={`border-2 rounded-xl ${bigShowImage === imgURL ? 'border-color-red':'border-transparent cursor-pointer max-sm:flex-1'}`}
    onClick={handleClick}>

        hello

    </div>
  )
}

export default ShoeCard