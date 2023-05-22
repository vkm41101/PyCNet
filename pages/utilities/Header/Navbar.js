let links = [
    {'display': 'Home', 'route' : '../../'},
    {'display': 'Problemset', 'route': '../../problemset'},
    { 'display': 'Login', 'route': '../../login' },
    {'display': 'Register', 'route': '../../register'}
]

export default function Navbar({activePage})
{
    return (
        <>
        <div className="w-screen bg-[#000000]">
            <ul>
                {links.map((data) => {
                    var className="inline-flex py-2 px-2 bg-[#000000] hover:bg-[#bbbbbb] text-[#ffffff] font-bold";
                    if(data.display===activePage)
                    {
                        className ="inline-flex py-2 px-2 bg-[#bbbbbb] text-[#000000] font-bold"
                    }
                    return (
                        <li className="inline px-4" key={data.display}>
                            <a href={data.route} className={className}>
                                {data.display}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
        </>
    )
}