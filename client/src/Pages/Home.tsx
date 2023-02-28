import React,{useState,useEffect} from 'react'
import { Loader,Card,FormField } from '../Components'

type Props = {}


const RenderCard = ({data,title} : {data : {_id : string,name : string,prompt : string ,image : string}[] , title : string})  => {
  if(data?.length > 0){
    return <>{data.map(((post ,index)=> <Card key={post._id} {...post}></Card>))}</>
  }
  return(
    <>
      <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>
        {title}
      </h2>
    </>
  )
}

const Home = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [allPost, setAllPost] = useState<{_id : string,name : string,prompt : string ,image : string}[] | null>(null);
  const [seachText, setSeachText] = useState("");
  const [searchedResults, setSearchedResults] = useState<{_id : string,name : string,prompt : string ,image : string}[] | null>(null);
  const [searchTimeout, setSearchTimeout] = useState<any>(null);

  useEffect(()=>{
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://ai-mern-imagegenerator.onrender.com/api/v1/post",{
          method : "GET",
          headers : {
            "Content-Type" : "application/json"
          }
        });
        if(response.ok){
          const result = await response.json();
          console.log(result)
          setAllPost(result.data.reverse());
        }
      } catch (error) {
          alert(error)
      }finally{
        setLoading(false);
      }
    };
    fetchPosts()
  },[]);



  const handleSearchChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
    
    clearTimeout(searchTimeout);
    
    setSeachText(e.target.value);
    
    setSearchTimeout(
      setTimeout(() => {
        if(allPost){
          const searchResults = allPost.filter((item)=>
          item.name.toLowerCase() == seachText.toLowerCase() ||
          item.prompt.toLowerCase().includes(seachText.toLowerCase())
          );
        setSearchedResults(searchResults);
        }

    }, 500)
    );

  }
  return (
    <section className='max-w-7xl mx-auto'>
        <div className=''>
              <h1 className='font-extrabold text-[#222328] text-[32px]'>
                The Community Showcase
              </h1>
              <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>
                    Browse through a collection of immaginative and 
                    visually stunning images generate by DALL-E AI
              </p>
        </div>
        <div className='mt-16'>
          <FormField 
          labelName={'Search posts'} 
          type={'text'} 
          name={'text'} 
          placeholder={'Search posts'} 
          value={seachText} 
          handleChange={handleSearchChange} />
        </div>

        <div  className='mt-10'>
              {
              loading ? 
                <div className='flex justify-center items-center'>
                    <Loader/>
                </div> :
                <>
                    {seachText && (
                      <h2 className='font-medium text-[#666e75] text-xl mb-3'>
                            Showing results for : {" "}
                            <span className='text-[#222328]'>{seachText}</span>
                      </h2>
                    )}
                    <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
                        {seachText ? 
                        (
                          <RenderCard 
                            data={searchedResults || []} 
                            title="No search results found." />
                        )
                         : 
                        (
                          <RenderCard 
                            data={allPost || []}
                            title="No posts found"
                          />
                        )}
                    </div>
                </>
              }
        </div>
    </section>
  )
}

export default Home