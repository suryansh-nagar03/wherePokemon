import { Link } from "react-router-dom"
function Header(){
    return (
        <Link to={"/"}>
            <div className="bg-white flex justify-center items-center p-2">
                <div className="flex items-center">
                    <img src="detective-pikachu.png" className="h-42" />
                    <div className="flex text-4xl gap-5 tracking-tighter">
                        <div className="text-[#FF0000]">Where's</div>
                        <div>Pokemon</div> 
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Header