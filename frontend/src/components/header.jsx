function Header(){
    return (
        <>
            <div className="bg-white flex justify-center items-center p-2">
                <div className="flex items-center">
                    <img src="detective-pikachu.png" className="h-42" />
                    <div className="flex text-4xl gap-5 tracking-tighter">
                        <div className="text-red-500">Where's</div>
                        <div>Pokemon</div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header