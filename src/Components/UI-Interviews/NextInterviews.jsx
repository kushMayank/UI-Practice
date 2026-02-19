
/*

Next support -
    CSR -> client side rendering -> useEffect, browser api, events
    SSR -> Server Side rendering -> Page generate on every request -> dynamic data dashboard
    SSG -> Static site generation -> generate at build time -> static blog 
    ISR -> Incremental site regeneration -> use revalidate  -> regenerate after interval -> news site



    server component runs on server and reduce the JS bundle size



    Data Fetching 

    page based router
    ------------------
    1. getServerSideProps (SSR) method

        export async function getServerSideProps(){
            const res = await fetch('url');
            const data = await res.json()

            return {
            props: {data}
            }
        
        }

        export default function Page({data}){
        
        return <div>{data.name}</data>
        }


    2. getStaticProps(SSG)
        
        export async function getStaticProps(){
            const res = await fetch('url');
            const data = await res.json()

            return {
                props: {data}   
            }
        } 


    3 getStaticProps (ISR)
        export async function getStaticProps(){
            const res = await fetch('url');
            const data = await res.json()

            return {
                props: {data},
                revalidate: 60
            }
        } 

    
    App based router
    -----------------
    we fetch directly inside the server component using fetch()  with async await

    async function Page(){
        const res = await fetch('url');
        const data = await res.json();

        return <div> {data.name}</div>
    }

    Disable caching
      fetch('url', {cache: 'no-store'});

    revalidate after 10sec
       fetch('url', {next: { revalidate: 10}});




       
    
*/