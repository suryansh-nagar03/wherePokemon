function LeaderboardTable({data}){
    return (
        <>
        <div className="text-center text-2xl font-semibold">Leaderboard </div>
        <table className="table table-striped">
            <thead>
                <tr className="tracking-tighter text-sm bg-white">
                    <th className="border-2 p-2 pb-0">Rank</th>
                    <th className="border-2 p-2 pb-0">Name</th>
                    <th className="border-2 p-2 pb-0">Time Taken</th>
                    <th className="border-2 p-2 pb-0">Date</th>
                </tr>
            </thead>
            <tbody className="text-center border-2 bg-white text-xs tracking-tighter">
                {data.map((entry, index) => (
                    <tr key={index}>
                        <td className="border-2 p-2">{index + 1}</td>
                        <td className="border-2 p-2">{entry.name}</td>
                        <td className="border-2 p-2">{entry.time}</td>
                        <td className="border-2 p-2">{entry.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}

export default LeaderboardTable;
