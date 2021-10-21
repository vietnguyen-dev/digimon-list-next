import Layout from '../../components/Layout'
import Link from "next/link";

export default function Name({mon}) {
    return (
      <Layout title="">
        <Link href="/">Back</Link>
        <img
          src={mon.img}
          // width={400}
          // height={400}
          alt={mon.mame}
        />
        <div>
          <h3>{mon.mame}</h3>
          <p>{mon.level}</p>
        </div>
      </Layout>
    );
}
//context is always available when using getstatic paths
export async function getStaticProps(context){
    const name = context.params.name
    try{
        const res = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${name}`);
        const digimon = await res.json()
       const [mon] = digimon;
       console.log(mon);
       return {
         props: {
           mon,
         },
       };
    } catch(err){
        console.log(err)
    }
}

export async function getStaticPaths(){
    try{
        const res = await fetch(`https://digimon-api.vercel.app/api/digimon/`);
        const digimon = await res.json();
        
        const paths = digimon.map(mon =>{
            return {
                params: {
                    name: mon.name
                }
            }
        })

        return{
            paths,
            fallback: false
        }

    } catch(err){
        console.error(err)
    }
}