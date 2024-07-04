import env from 'dotenv'
import path from 'path'


env.config({
    path: path.join(process.cwd(), '.env')
})

const envData = {
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    secret_key: process.env.JWT_SECRET_KEY
}


// console.log(process.cwd())
// console.log(__dirname)

export default envData