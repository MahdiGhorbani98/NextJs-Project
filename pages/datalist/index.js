import axios from "axios";
import Link from "next/link";
import styles from '../../styles/Datalist.module.css'

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
        <div className={styles.container}>
            <h1>Data List</h1>
            {
                nextData.map(user =>(
                        <Link  href={'/datalist/' + user.id} key={user.id}>
                        <a className={styles.a}>
                            <h3 className={styles.links}>{user.name}</h3>
                        </a>
                        </Link>
                ))
            }
        </div>
    );
}

export default index;