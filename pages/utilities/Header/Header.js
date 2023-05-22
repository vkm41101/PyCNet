import Navbar from "./Navbar";
import Masthead from "./Masthead";
import Image from "next/image";
import logo from './/../../Images/logo.png';
import logoText from './/../../Images/LogoText.png';

export default function Header({activePage})
{
    return(
        <>
            <div className="bg-[#000000]">
                <div>
                    <div className="w-25">
                        <a href='../../'>
                            <Image src={logo} width={100} height={100} className="inline" />
                            <Image src={logoText} width={203} height={100} className="inline" />
                        </a>
                        <div className="float-right">
                            <Masthead/>
                        </div>
                    </div>
                </div>
                <div>
                    <Navbar activePage={activePage}/>
                </div>
            </div>
        </>
    )
}