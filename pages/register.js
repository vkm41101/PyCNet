import { Button, Input, Spacer, useInput, Dropdown } from "@nextui-org/react";
import {createHash} from "crypto";
import Header from "./utilities/Header/Header";
import {useRouter} from 'next/navigation';
import React, { useState } from "react";



export default function register()
{
    const Router = useRouter();
    let firstName="", lastName="", password="", CC="", CF="";
    let [valuee, setValuee] = useState("");
    const validateEmail = (value) => {
        return value.match(/^[A-Z]+.+[A-Z]+.+[A-Z0-9]+@iiitbh.ac.in$/i);
    };

    const helper = React.useMemo(() => {
        if (valuee=="")
            return {
                text: "",
                color: "default",
            };
        let isValid = validateEmail(valuee);
        return {
            color: isValid ? "success" : "error",
        };
    }, [valuee]);
    async function handleClick()
    {
        // console.log(firstName, lastName, value, password, CC, CF);
        let alertText="Please Don't Leave any Field Empty"
        if(firstName==="" || lastName==="" || valuee==="" || password==="" || CC==="" || CF==="")
        {
            alert(alertText);
        }
        else if (valuee.indexOf('@iiitbh.ac.in') < 0 || !(validateEmail(valuee)))
        {
            alert("please Enter a valid Email")
        }
        else
        {
            // post
            let newUser={
                firstName: firstName,
                lastName: lastName,
                emailID: value,
                password: ((string)=>{return createHash('sha256').update(string).digest('hex')})(password),
                codechefID: CC,
                codeforcesID: CF
            }
            let response=await fetch('./api/register', {
                method: "POST",
                mode: "cors",
                body: JSON.stringify(newUser)
            });
            if (response.status==400)
            {
                alert("The Email ID Entry already Exists");
                Router.push('/login');
            }
            else if(response.status==200) 
            {
                alert("User Successfully Registered");
                Router.push('/login');
            }
            else
            {
                alert("Some Error Occurred. Please try again");
            }
        }
    }
    return(
        <>
            <Header activePage="Register"/>
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="p-8 border-2 rounded">
                    <Input labelLeft="FirstName:" bordered className="inline" onChange={(e)=>{firstName=e.target.value}}/>
                    <Input  labelLeft="LastName:" bordered className="inline mx-4" onChange={(e)=>{lastName=e.target.value}}/>
                    <Spacer y={1}/>
                    <Input
                        onChange={(e)=>{setValuee(e.target.value);}}
                        status={helper.color}
                        color={helper.color}
                        helperColor={helper.color}
                        type="email"
                        bordered
                        labelLeft="CollegeEmail: "
                        className="inline"
                    />
                    <Input.Password labelLeft="Password: " clearable bordered className="inline mx-4" onChange={(e)=>{password=e.target.value}}/>
                    <Spacer y={1} />
                    <Input labelLeft="CodeChefUsername:" bordered className="inline" onChange={(e)=>{CC=e.target.value}}/>
                    <Input labelLeft="CodeforcesUsername:" bordered className="inline mx-4" onChange={(e)=>{CF=e.target.value}}/>
                    <Spacer y={1} />
                    <Button onClick={handleClick}>Submit</Button>
                </div>
            </div>
        </>
    );
}