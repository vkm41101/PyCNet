import Header from "./utilities/Header/Header"
import monaco,{ Editor, DiffEditor, useMonaco, loader } from "@monaco-editor/react"
import React, { useRef, useState } from "react";
import { Button, Dropdown } from "@nextui-org/react"
import Heading from "./utilities/Heading/Heading"

function AddDropdown({list, onClickFunction})
{
    return(
        <>
            <Dropdown>
                <Dropdown.Button className="mx-auto" flat>Add Tag</Dropdown.Button>
                <Dropdown.Menu aria-label="Tags" items={list}>
                    {(item) => (
                        <Dropdown.Item
                            key={item.name}
                            color="default"
                        >
                            <button onClick={click=>onClickFunction(item.name)}>
                                {item.name}
                            </button>
                        </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
}



export default function main()
{
    
    let editorArr = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];


    const PossibleTags=[
        { name:"Greedy" }, 
        { name:"Dynamic Programming" }, 
        { name:"Disjoint Set Union" },
        { name: "2-SAT" },
        { name: "Binary Search" },
        { name: "Bitmasks" },
        { name: "Brute Force" },
        { name: "Chinese Remainder Theorem" },
        { name: "Combinatorics" },
        { name: "Constructive Algorithms" },
        { name: "Data Structures" },
        { name: "Stacks and Queues" },
        { name: "DFS and Similar" },
        { name: "Divide and Conquer" },
        { name: "Expression Parsing" },
        { name: "Fast Fourier Transform" },
        { name: "Flows" },
        { name: "Game Theory" },
        { name: "Computational Geometry" },
        { name: "Graph Matchings" },
        { name: "Graphs" },
        { name: "Hashing" },
        { name: "Implementation" },
        { name: "Interactive" },
        { name: "Maths" },
        { name: "Matrices" },
        { name: "Meet in the Middle" },
        { name: "Number Theory" },
        { name: "Probabilities" },
        { name: "Schedules" },
        { name: "Shortest Paths" },
        { name: "Sortings" },
        { name: "String Suffix Structures" },
        { name: "Strings" },
        { name: "Ternary Search" },
        { name: "Trees" },
        { name: "Two pointers" },
    ];

    function compare(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }

    PossibleTags.sort(compare);

    const [tags, setTags] = useState([]);

    const dropdownButtonClick = tagName =>
    {
        setTags([...tags, tagName]);
    }
    async function tryat()
    {
        let problem = {
            problemName: editorArr[6].current.getValue(),
            problemStatement: editorArr[0].current.getValue(),
            problemInputFormat: editorArr[2].current.getValue(),
            problemOutputFormat: editorArr[3].current.getValue(),
            problemConstraint: editorArr[1].current.getValue(),
            timeLimit: 1,
            sampleTestCase: {
                input: editorArr[4].current.getValue(),
                output: editorArr[5].current.getValue()
            },
            author: [],
            tags: tags
        }; 

        let response = await fetch("http://localhost:3000/api/problem",{
            method: 'POST',
            mode: 'cors',
            body:JSON.stringify(problem)
        });
        console.log(response);
    }
    return (
        <>
            <Header/>
            <div className="h-full">
                <Heading value="Problem Name: " /><br />
                <Editor
                    className="h-8 mx-10 mt-3 rounded-md"
                    theme="vs-dark"
                    defaultValue="//Add Text"
                    onMount={(editor, monaco) => { editorArr[6].current = editor }}
                    id="problemStatement"
                />
                <Heading value="1. Problem Statement"/><br/>
                <Editor 
                    className="h-60 mx-10 mt-3 rounded-md" 
                    theme="vs-dark"
                    defaultValue="//Add Text"
                    onMount={(editor, monaco)=>{editorArr[0].current=editor}}
                    id="problemStatement"
                />
                <Heading value="2. Constraints" /><br />
                <Editor
                    className="h-60 mx-10 mt-3 rounded-md"
                    theme="vs-dark"
                    defaultValue="//Add Text"
                    onMount={(editor, monaco) => { editorArr[1].current = editor }}
                    id="Constraints"
                />
                <Heading value="3. Input Format" /><br />
                <Editor
                    className="h-60 mx-10 mt-3 rounded-md"
                    theme="vs-dark"
                    defaultValue="//Add Text"
                    onMount={(editor, monaco) => { editorArr[2].current = editor }}
                    id="inputFormat"
                />
                <Heading value="4. Output Format" /><br />
                <Editor
                    className="h-60 mx-10 mt-3 rounded-md"
                    theme="vs-dark"
                    defaultValue="//Add Text"
                    onMount={(editor, monaco) => { editorArr[3].current = editor }}
                    id="outputFormat"
                />
                <div className="w-100">
                    <div className="w-1/2 float-left">
                        <Heading value="5. Sample Input" /><br />
                        <Editor
                            className="h-60 mx-10 my-3 rounded-md"
                            theme="vs-dark"
                            defaultValue="//Add Text"
                            onMount={(editor, monaco) => { editorArr[4].current = editor }}
                            id="sampleInput"
                        />
                    </div>
                    <div className="w-1/2 float-right">
                        <Heading value="6. Sample Output" /><br />
                        <Editor
                            className="h-60 mx-10 my-3 rounded-md"
                            theme="vs-dark"
                            defaultValue="//Add Text"
                            onMount={(editor, monaco) => { editorArr[5].current = editor }}
                            id="sampleOutput"
                        />
                    </div>
                </div>
                <div className="w-screen ">
                    <ul className="m-auto">
                        {tags.map((item)=>{
                            return(
                            <>
                                <li className="inline">
                                    <span className="bg-[#bbbbbb] rounded p-1 m-2">{item}</span>
                                </li>
                            </>
                            );
                        })}
                    </ul><br/>
                    <AddDropdown list={PossibleTags} onClickFunction={dropdownButtonClick} />
                </div>
                <div className="w-screen">
                    <button 
                        type="submit" 
                        className="rounded-full p-3 mx-auto my-3 block bg-[#000000] hover:bg-[#bbbbbb] active:bg-[#444444] text-[#ffffff] hover:text-[#000000] font-bold" 
                        onClick={tryat}
                 >Submit</button>
                </div>
                
            </div>
        </>
    )
}