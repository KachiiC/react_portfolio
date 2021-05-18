import React, {useState, useEffect} from 'react'
// COMPONENT
import CardComponent from 'Pages/Components/SiteComponents/SiteCard'

const BooksComponent = (props) => {

    const [booksInfo, setBooksInfo] = useState([{
        title: "",
        image: "",
        link: ""
    }])
    const [inputBook, setInputBook] = useState("")
    const [resultsQuantity, setResultsQuantity] = useState(0)

    const books_list = `https://www.googleapis.com/books/v1/volumes?q=${inputBook}&key=${props.api_key}&maxResults=${resultsQuantity}`

    useEffect(() => {
        fetch(books_list)
        .then(response => response.json())
        .then(responseData => setBooksInfo(
            responseData.items.map((item) => {
                const bookContent = item["volumeInfo"]
                item.title = bookContent["title"]
                item.image = bookContent["imageLinks"]["thumbnail"]
                item.link = bookContent["previewLink"]
                item.card_height = 200

                return item
            })
        ))
        .catch(error => console.log(error))
    },[books_list])

    const submitLogic = data => {
        data.preventDefault()
        setInputBook(document.getElementById("input_book").value)
        setResultsQuantity(document.getElementById("quantity").value)
    }

    const renderLogic = () => {
        if (booksInfo[0].title !== "") {
            return (
                <div className="w-100">
                    <CardComponent 
                        data={booksInfo} 
                        number_of_cards={resultsQuantity} 
                    />
                </div>
            )
        }
        
    }

    return (
        <div className="w-100 books-component">
            <form onSubmit={submitLogic}>
                <input id="input_book" />
                <select name="quantity" id="quantity">
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                    <option value={25}>25</option>
                </select>
            </form>
            {renderLogic()}
        </div>

    )
}

export default BooksComponent