export default function GameCard({url,text}){
    return (
        <>
            <div className= "flex flex-col justify-center items-center p-2 gap-2 bg-white shadow-lg rounded-lg ">
                <img src={url} alt="" className="h-60 w-60"/>
                <div className="tracking-tight">{text}</div>
                <button className="bg-[#6929b1] text-white p-2 pt-1 pb-1 rounded-lg hover:scale-95 hover:cursor-pointer hover:opacity-80">
                    <div>Start</div>
                </button>
            </div>
        </>
    )
};