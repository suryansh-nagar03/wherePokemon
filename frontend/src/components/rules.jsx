function Rules({showRules, setShowRules}) {
    return (
        <div className="flex flex-col justify-center items-center gap-5 fixed inset-0 bg-black/30 backdrop-blur-sm z-50">
            <div className="flex flex-col justify-center items-center gap-8 bg-white p-5 rounded-lg border-2 border-black">
                <div className="text-sm tracking-tighter font-bold">Instructions</div>
                <div className=" flex flex-col justify-center items-center text-xs tracking-tighter font-semibold">
                        <div>Find the Pokemon above in the</div>
                        <div>shortest possible time.</div>
                </div>
                <div className="text-xs tracking-tighter flex flex-col gap-1 justify-center items-center">
                        <div>When you find a pokemon, click</div>
                        <div>on its position on the image</div>
                        <div>and select it from the list</div>
                        <div>that shows up.</div>
                </div>
                <button 
                    className="hover:scale-110 hover:cursor-pointer" 
                    onClick={() => setShowRules(false)}
                >
                    Start
                </button>
            </div>
        </div>
    );
}

export default Rules;
