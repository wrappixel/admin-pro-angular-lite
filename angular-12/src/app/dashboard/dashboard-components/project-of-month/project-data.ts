export interface  Project{
    image:string;
    name:string;
    designation:string;
    project:string;
    priority:string;
    class:string;
}


export const projects:Project[]=[

    {
        image:'assets/images/users/1.jpg',
        name:'Sunil Joshi',
        designation:'Web Designer',
        project:'Elite Admin',
        priority:'Low',
        class:'round'
    },
    {
        image:'assets/images/users/2.jpg',
        name:'Andrew',
        designation:'Project Manager',
        project:'Real Homes',
        priority:'Medium',
        class:'round'
    },
    {
        image:'assets/images/users/3.jpg',
        name:'Bhavesh patel',
        designation:'Developer',
        project:'Pro Theme',
        priority:'High',
        class:'round round-success'
    },
    {
        image:'assets/images/users/4.jpg',
        name:'Nirav Joshi',
        designation:'Frontend Eng',
        project:'Elite Admin',
        priority:'Low',
        class:'round round-primary'
    },
    {
        image:'assets/images/users/5.jpg',
        name:'Micheal Doe',
        designation:'Content Writer',
        project:'Helping Hand',
        priority:'Low',
        class:'round round-warning'
    },
    {
        image:'assets/images/users/6.jpg',
        name:'Johnathan',
        designation:'Graphic',
        project:'Digital Agency',
        priority:'High',
        class:'round round-danger'
    },



]