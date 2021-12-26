export const getStaticPaths = async ()=>{
    const res = await fetch('https://api.npoint.io/c234b398ffb4d0537743')
    const data = await res.json();

    const paths = data.map(u =>{
        return{
            params : {id : u.id.toString()}
        }
    })

    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async(context) =>{
    const id = context.params.id -1;
    const res = await fetch('https://api.npoint.io/c234b398ffb4d0537743/' + id )
    const data = await res.json()

    return{
        props : {Ndata: data}
    }
}

const Details = ({Ndata}) => {

    return (
        <div className="container" style={{textAlign:'center'}}>
            <h1>
                Detail Page
            </h1>
            <p>{Ndata.name}</p>
            <p>{Ndata.email}</p>
            <p>{Ndata.website}</p>
        </div>
    );
}

export default Details;