import { Link } from "react-router-dom"
function Header(){
    return (
        <Link to={"/"}>
            <div className="bg-white flex justify-center items-center p-1 md:p-2">
                <div className="flex items-center">
                    <img src="detective-pikachu.png" className="h-18 sm:h-28 md:h-32 lg:h-42" />
                    <div className="flex text-xs sm:text-base lg:text-2xl xl:text-4xl gap-2 sm:gap-3 md:gap-4 lg:gap-5 tracking-tighter">
                        <div className="text-[#FF0000]">Where's</div>
                        <div>Pokemon</div> 
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Header