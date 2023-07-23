function Add()
{
    
    bookID=bID.value;
    bookName=bName.value;
    authorName=aName.value;
    description=descrptn.value;
    if(bookID!="" && bookName!="" && authorName!="" && description!="")
    {
        if(bookName in localStorage){
            alert(`${bookName} already exits !!`)
        }
        else
        {
            Book={bookID,bookName,authorName,description};
            localStorage.setItem(bookName,JSON.stringify(Book));
            alert(`${bookName} have been saved successfully !!`);
        }
    }
    else
    {
            alert(`Please Enter all the details to Proceed !!`)
    }
    bID.value="";
    bName.value="";
    aName.value="";
    descrptn.value="";
}

function Search()
{
    // redirect
    window.location='SearchBook.html';
}

function SearchBook()
{
    bookName=b1.value;
    if(bookName!='' && bookName in localStorage)
    {
            book=JSON.parse(localStorage.getItem(bookName));
            bookDetail.innerHTML=`<p class="text-center text-white">Book Details: <br> <br> BookID-${book.bookID}<br> BookName-${book.bookName} <br> AuthorName-${book.authorName} <br> Description-${book.description}</p>`;
    }
    else
    {
            bookDetail.innerHTML=`<p class='text-center text-white text-danger fs-5'> No records Found!!</p>`;
    }
    b1.value="";
    
}

function GoBack()
{
    // redirect
    window.location='index.html';
}












