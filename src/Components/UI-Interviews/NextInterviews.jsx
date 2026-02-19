
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


/*

    Routing in Next

      Page Based
            page/
               index.js                   -> /
               about.js                   -> /about  
               blog/
                 index.js                 -> /blog    
                 [id].js                  -> /blog/1   
               _app.js                    -> global wrapper
               _document.js
               api/
                  user.js                 -> /api/user


        dynamic route -> [id].js 
        catch all -> [...slug].js          
        api route -> page/api/user.ts


      App Based
      
            app/
                page.js                         -> /  
                layout.js                       -> global layout    
                about/
                    page.js                     -> /about
                blog/ 
                    page.js                     -> /blog      
                    [id]
                        page.js                 -> /blog/1   
                api/
                    user/
                        route.ts
                dashboard/
                    layout.js
                    page.js  
                    
        dynamic route -> [id].page.js 
        catch all -> [...slug].page.js   
        api route -> app/api/user/route.ts
        Private folder -> app/(auth)/login/page.js  -> /login
        underscore folder -> _ folder -> app/_component/Navbar.js -> it will ignored by routing

        

*/