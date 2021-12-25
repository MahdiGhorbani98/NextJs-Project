import axios from "axios";

// export const getStaticProps= async ()=>{
//     let dataAx = await
//     axios.get('https://api.npoint.io/c234b398ffb4d0537743')
//     .then(res => res.data)

//     return{
//         props:{nextData:dataAx}
//     }
// }

export const getStaticProps = async ()=>{
    const res = await fetch('https://api.npoint.io/c234b398ffb4d0537743')
    const data =await res.json();

    return{
        props: {nextData : data}
    }
}
const index = ({nextData}) => {

    return (
        <div>
            <h1>Data List</h1>
            {
                nextData.map(user =>(
                    <div key={user.id}>
                        <a>
                            <h3>{user.name}</h3>
                        </a>
                    </div>
                ))
            }
        </div>
    );
}

export default index;