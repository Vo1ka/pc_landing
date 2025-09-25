export type Build = 
{ slug:string;
    name:string;
    price:number;
    image:string;
    cpu:string;
    gpu:string;
    ram:string;
    storage:string;
    purpose:string
};
export const builds:Build[]= [
    {
        slug:"Cartech",
        name:"Cartech V1",
        price:55000,
        image:"/Sborka1.jpg",
        cpu:"i3-12100F",
        gpu:"GTX 1650",
        ram:"16GB DDR4",
        storage:"240GB SSD",
        purpose:"Игры Full HD (бюджет)"
    }
];
