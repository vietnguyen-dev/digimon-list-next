import Link from "next/link";
import Layout from "../components/Layout";

export default function digimon({mon}) {

    return (
        <Layout title={mon.name}>
            <Link href="/">Back</Link>
            <div>
            <img src={mon.img} alt={mon.name} />
            <h3>{mon.name}</h3>
            <p>{mon.level}</p>
            </div>
        </Layout>
    );
}

export async function getServerSideProps({query}){
    //should be digimon name
    const id = query.id
    // console.log(id)
    try{
        const res = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${id}`);
        
        const digimon = await res.json()
        
        //object is in array so must destructure
        const [mon ] = digimon;
        console.log(mon)
        return{
            props: {
               mon
            }
        }
    } catch(err){
        console.error(err)
    }
}
