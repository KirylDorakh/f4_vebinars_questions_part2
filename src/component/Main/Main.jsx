import React from "react";
import Text from "../Text/Text";
import './main.module.css'
import Section from "../Section/Section";
import InputForm from "../InputForm/InputForm";

const Main = () => {
    return (
        <main>
            <h1>Name</h1>
            <div>
                <Text text='text1'/>
            </div>
            <div>
                <Text text='text2'/>
            </div>
            <Section />
            <InputForm name="letters"/>
            <InputForm name="numbers"/>
            <InputForm name="mail"/>
        </main>
    )
}

export default Main;