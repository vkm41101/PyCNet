import { Button, Input, Spacer, useInput, Dropdown } from "@nextui-org/react"
import Header from "./utilities/Header/Header"
import React, { useState } from "react";

export default function register()
{
    const { value, reset, bindings } = useInput("");

    const validateEmail = (value) => {
        return value.match(/^[A-Z]+.+[A-Z]+.+[A-Z0-9]+@iiitbh.ac.in$/i);
    };

    const helper = React.useMemo(() => {
        if (!value)
            return {
                text: "",
                color: "default",
            };
        const isValid = validateEmail(value);
        return {
            color: isValid ? "success" : "error",
        };
    }, [value]);
    return(
        <>
            <Header activePage="Register"/>
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="p-8 border-2 rounded">
                    <Input labelLeft="FirstName:" bordered className="inline"/>
                    <Input labelLeft="LastName:" bordered className="inline mx-4"/>
                    <Spacer y={1}/>
                    <Input
                        {...bindings}
                        onClearClick={reset}
                        status={helper.color}
                        color={helper.color}
                        helperColor={helper.color}
                        type="email"
                        bordered
                        labelLeft="CollegeEmail: "
                        className="inline"
                    />
                    <Input.Password labelLeft="Password: " clearable bordered className="inline mx-4" />
                    <Spacer y={1} />
                    <Input labelLeft="CodeChefIDLink:" bordered className="inline" />
                    <Input labelLeft="CodeforcesIDLink:" bordered className="inline mx-4" />
                    <Spacer y={1} />
                    <Button>Submit</Button>
                </div>
            </div>
        </>
    );
}