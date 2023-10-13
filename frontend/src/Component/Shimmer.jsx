import React from 'react'

const Shimmer = () => {
  return(
    <>
    {
      Array(4).fill(" ").map((item,idx)=>{
        return(
            <div className="w-[300px] h-[400px] md:w-[250px] md:h-[400px] flex flex-col p-2 m-2 border bg-slate-200 rounded-md shadow-xl"> </div>
        )
      })
     
    }
    </>
  )
}

export default Shimmer