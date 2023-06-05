import { Button, Input, Spacer } from "@nextui-org/react"
import Header from "./utilities/Header/Header"
import { useState } from "react";

export default function login ()
{
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    function clickHandle()
    {
        
    }
    return (
        <>
            <Header activePage="Login"/>
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="p-8 border-2 rounded">
                    <Input labelLeft="Username:" labelRight="@iiitbh.ac.in" bordered />
                    <Spacer y={1.6} />
                    <Input.Password labelLeft="Password: " clearable bordered  />
                    <Spacer y={1} />
                    <Button onClick={clickHandle}>Submit</Button>
                </div>
            </div>
        </>
    );
}