function Rules({showRules, setShowRules}) {
    return (
        <div className="flex flex-col justify-center items-center gap-5 fixed inset-0 bg-black/30 backdrop-blur-sm z-50 p-2">
            <div className="flex flex-col justify-center items-center gap-5 md:gap-6 lg:gap-8 bg-white p-4 md:p-5 rounded-lg border-2 border-black">
                <div className=" tracking-tighter font-bold">Instructions</div>
                <div className=" flex flex-col justify-center items-center text-[0.6rem] sm-text-[0.7rem] md:text-xs tracking-tighter font-semibold">
                        <div>Find the Pokemon above in the</div>
                        <div>shortest possible time.</div>
                </div>
                <div className="text-[0.6rem] sm-text-[0.7rem] md:text-xs tracking-tighter flex flex-col gap-1 justify-center items-center">
                        <div>When you find a pokemon, click</div>
                        <div>on its position on the image</div>
                        <div>and select it from the list</div>
                        <div>that shows up.</div>
                </div>
                <button 
                    className="hover:scale-110 hover:cursor-pointer text-md sm:text-lg md:text-base" 
                    onClick={() => setShowRules(false)}
                >
                    Start
                </button>
            </div>
        </div>
    );
}

export default Rules;
