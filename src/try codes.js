const toggleviews = () => {
    setVisble((prev) => (prev === 3 ? data.legth : 3))
}


const  toggleviewsmore = () => {
     setVisble((prev) => Math.min(prev + 3, data.length));
    setVisble((prev) => Math.min(prev === data.legth))
  };

  const  toggleviewsless = () => {
    setVisble((prev) => Math.max(prev - 3, 3));
  };




    <div  className='mx-20 space-x-10 mb-[-30px] mt-20'>
            <button onClick={toggleviewsmore} disabled={ visiblerows >=data.length} className=''>
          View More
        </button>
        <button onClick={ toggleviewsless} disabled={ visiblerows <= 3}>
          View Less
        </button>
        </div> 


        //  <button onClick={toggleviews}>
        //         {toggleviews == 3 ? "View all" : "View less"}
        //         </button> 