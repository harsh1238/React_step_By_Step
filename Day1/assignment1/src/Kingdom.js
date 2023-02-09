import React from "react";
import Cat from "./animalComponent/Cat";
import Cow from "./animalComponent/Cow";
import Dog from "./animalComponent/Dog";
import Lion from "./animalComponent/Lion";
import Tiger from "./animalComponent/Tiger";
import Zebra from "./animalComponent/Zebra";
import Crow from "./birdComponent/Crow";
import Duck from "./birdComponent/Duck";
import Hen from "./birdComponent/Hen";
import Parrot from "./birdComponent/Parrot";
import Peacock from "./birdComponent/Peacock";
import Sparrow from "./birdComponent/Sparrow";

class Kingdom extends React.Component
{
    render() {
        return (
             <div>

             <h1> Welcome to Kingdom  component </h1>
             <h2> Animal Component </h2>
             <Dog/>
             <Cow/>
             <Cat/>
             <Tiger/>
             <Lion/>
             <Zebra/>

             <h2> Bird  Component </h2>
             <Crow/>
             <Parrot/>
             <Sparrow/>
             <Hen/>
             <Peacock/>
             <Duck/>


             </div>
        );
    }
}

export default Kingdom;