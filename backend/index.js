const express=require("express")
const app =express()
const cors=require("cors")
const mongoose=require("mongoose")

const Book=require("./Models/Book")

const uri="mongodb+srv://Suryakant:Suryadas@cluster0.mydbwj6.mongodb.net/BookListingApp?retryWrites=true&w=majority"



mongoose.connect(uri)
.then(()=>{console.log("connected to db successfully")})

app.use(express.json())
app.use(cors())


app.get("/", async (req, resp) => {
    try {
        let books = await Book.find();
        if (books.length === 0) {
            resp.send({ result: "no book data found" });
        } else {
            resp.send(books);
            console.log(books);
        }
    } catch {
        resp.status(400).json({ message: "error occurred while fetching books" });
    }
});


app.post("/add", async (req, resp) => {
    try {
        let newBook = new Book(req.body)
        let result = await newBook.save();
        resp.send(result)
        
    }
    catch {
        resp.status(400).json({ message: "something went wrong pleae cheek the inputdata once" })
    }
})

app.get("/book/:id", async (req, resp) => {
    try {

        let result = await Book.findOne({ _id: req.params.id })
        if (result) {
            resp.send(result)
        }
        else {
            resp.send({ result: "no record found" })
        }
    }
    catch {
        resp.status(400).json({ message: "no book is found" })
    }
})

app.get("/book/edit/:id", async (req, resp) => {
    try {

        let result = await Book.findOne({ _id: req.params.id })
        if (result) {
            resp.send(result)
        }
        else {
            resp.send({ result: "no record found" })
        }
    }
    catch {
        resp.status(400).json({ message: "no book is found" })
    }
})

app.put("/book/edit/:id", async (req, resp) => {
    try{

        let result = await Book.updateOne(
            { _id: req.params.id },
            {
                $set: req.body
            }
        )
       
        resp.send(result)
    }
    catch{
        resp.status(400).json({ message: "error in upadating" })
    }
})


app.delete("/book/:id", async (req, resp) => {
    try {
        let result = await Book.deleteOne({ _id: req.params.id })
        resp.send(result)
    }
    catch {
        resp.status(400).json({ message: "Unable to delete the Book..! try later  " })
    }
})


app.listen(5001,()=>{console.log("app is running on port5001")})
