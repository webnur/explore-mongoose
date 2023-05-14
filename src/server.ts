import mongoose from 'mongoose';
import app from './app';
const port : number = 5000

async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log(`database connection succesfully done`);
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })

    }catch(error){
        console.log(`fail to connect with database ${error}`);
        
    }
}
bootstrap()

