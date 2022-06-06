const express = require("express")
const config = require("config")
const instrumentRouter = require("./routes/instrument.routes")
const app = express()
const PORT = config.get("serverPort");
const corsMiddleware = require("./middleware/cors.middleware")

app.use(corsMiddleware)
app.use("/api/items", instrumentRouter)


const start = () => {
    try {
        app.listen(PORT, () => {
            console.log("Server started on port", PORT)
        })
    }catch (e) {

    }
}




start()