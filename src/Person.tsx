import { useState } from "react";

export interface Person {
    name: string;
    age: number;
    isStudent: boolean;
}

export const Person = (props: Person) => {
    const [personBio, setPersonBio] = useState<string | null>(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPersonBio(event.target.value)
    }

    return (
        <div>

            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>This person {props.isStudent ? "is a student." : "is not a student."}</p>


       <p> 
        {props.name} Bio: {personBio == null ? "No bio available." : personBio}
       </p>

       < input onChange={handleChange}/>

        </div>
    )

};