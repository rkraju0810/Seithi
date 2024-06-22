import { createContext,useEffect,useState} from "react";

const DataContext = createContext({})


export const DataProvider = ({children}) =>{
    const [isnextpage, setIsnextpage] = useState(true)

    const [article, setArticle] = useState([]);
  
    const [category, setCategory] = useState('general')
  
    const [countrycode, setCountrycode] = useState('in')
  
    const [searchcontent, setSearchcontent] = useState('')
   
    const [descriptionarticle,setDescriptionarticle] = useState('')

    const [country, setCountry] = useState('india')

  const [searchcontentvalue , setSearchcontentvalue] = useState('')

  const [error,setError] = useState(false)

  const [errorMessage, setErrorMessage] = useState('');

  function handlesetCountry(arr) {
    setCountry(arr.name)
    setCountrycode(arr.code)
    console.log(country)
    console.log(countrycode)
  }

  function handlesetCategory(arr) {
    setCategory(arr)
    console.log(arr)  
  }


    useEffect(() => {


        //  const Search_URL = `https://newsapi.org/v2/everything?q=${searchcontent}&apiKey=32cc13e77b7f44259aa34519a8662044`
      
        //  const URL = `https://newsapi.org/v2/top-headlines?country=${countrycode}&category=${category}&apiKey=32cc13e77b7f44259aa34519a8662044`
      
        const Search_URL = `https://newsapi.org/v2/everything?q=${searchcontent}&apiKey=f2385347b8a6434782fca97d480b38c9`
      
        const news_URL = `https://newsapi.org/v2/top-headlines?country=${countrycode}&category=${category}&apiKey=f2385347b8a6434782fca97d480b38c9`
    
         
        //  const Search_URL = `https://newsapi.org/v2/everything?q=${searchcontent}&apiKey=d6e9fa5b93374eafb52b54d523a2a2db`
      
        //   const news_URL = `https://newsapi.org/v2/top-headlines?country=${countrycode}&category=${category}&apiKey=d6e9fa5b93374eafb52b54d523a2a2db`
      
          const URL = searchcontent ? Search_URL : news_URL
          
          const newsdata = async () => {
            try {
              const response = await fetch(URL);
              const data = await response.json();
              setArticle(data.articles);
              console.log(data)
              setError(false)
            } catch (error) {
              setError(true)
              console.log(error.message)
              setErrorMessage(error.message)
            }
          }
          (() => newsdata())()
      
        }, [countrycode,category,searchcontent])



    const articles =  article.filter((item)=> item.title != "[Removed]" && item.urlToImage !== null && item.description != null && item.title != null)
       
   
    const news1 = articles[0]
    const news2 = articles.slice(1, articles.length/2)
    const news3 = articles.slice(articles.length/2)


    function handleshowdescription(item) {
        setDescriptionarticle(item)
        console.log(item)
    }
    



    return (
    <DataContext.Provider value={{
        isnextpage,setIsnextpage,article,setArticle,category,setCategory,countrycode,setCountrycode,
        searchcontent,setSearchcontent,descriptionarticle,setDescriptionarticle,handleshowdescription,
        articles,news1,news2,news3,country,setCountry,searchcontentvalue,setSearchcontentvalue,handlesetCategory,handlesetCountry
        ,error,errorMessage
    }}>
         {children}
    </DataContext.Provider>)
}

export default DataContext