export default function GameCard({url}){
    return (
        <>
            <div className= "flex flex-col justify-center items-center p-2 gap-2 bg-white shadow-lg rounded-lg hover:scale-98 hover:cursor-pointer">
                <img src={url} alt="" className="h-60 w-60"/>
                <div className="tracking-tight">First Generation</div>
                <button className="bg-blue-500 text-white p-2 pt-1 pb-1 rounded-lg">
                    <div>Start</div>
                </button>
            </div>
        </>
    )
};