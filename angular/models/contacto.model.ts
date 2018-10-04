export interface ContactIf {
    gender: string,
    
    name: {
    title:string,
    first:string,
    last: string
    },
    
    location: {
    street: string,
    city: string "suzano",
    state: string "bahia",
    postcode: 49570,
    coordinates: {
        latitude: "-74.5487",
        longitude: "-56.3512"
    },
   
    timezone: {
        offset: "-7:00",
        description: "Mountain Time (US & Canada)"
        }
    },
   
    email: "gil.rodrigues@example.com",
    login: {
        uuid: "6d213d27-5e9a-4787-9476-10299d2f44c9",
        username: "heavygorilla174",
        password: "dharma",
        salt: "w5MNCHDf",
        md5: "51134ba3a8999c13b4a7d5175c18914e",
        sha1: "0fd8a0f4b7a9885e1160c0986b77e6ed3b7145aa",
        sha256: "7dd29b5280fc2a280c64a83eb00b9d6c160998c138476bf819b3030126e18aac"
    },
    
    dob: {
        date: "1945-05-05T05:42:14Z",
        age: 73
    },
    
    registered: {
        date: "2004-05-14T22:14:37Z",
        age: number
    },
    phone: "(58) 1932-7625",
    cell: "(34) 2754-9130",
    id: {
    name: "",
    value: null
    },
    picture: {
    large: "https://randomuser.me/api/portraits/men/61.jpg",
    medium: "https://randomuser.me/api/portraits/med/men/61.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/61.jpg"
    },
    nat: "BR"
    }