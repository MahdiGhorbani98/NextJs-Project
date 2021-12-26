export async function getServerSideProps(context) {
    const res =await fetch('https://api.npoint.io/93bfc2ce4b56c5ebefe2')
    const data =await res.json()

    return {
      props: {Ndata : data}, // will be passed to the page component as props
    }
}

const getServer = ({Ndata}) => {
    console.log(Ndata);
    return (
        <div style={{textAlign:'center'}}>
            <h1>getServerSideProps</h1>
            {
                Ndata.map(data=>(
                    <p key={data.id}>{data.title}</p>
                ))
            }
        </div>
    );
}

export default getServer;