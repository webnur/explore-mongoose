import express, { Application} from 'express';


import cors from 'cors'
const app: Application = express()
import userRoutes from './app/modules/user/user.router'
app.use(cors())

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/user', userRoutes)



// app.get('/', (req: Request, res: Response, next: NextFunction) => {

//     //inserting a test data into mongodb
//     /*
//         step1: interface done
//         step2: Schema done 
//         step3: Model done
//         step4: Database query on model done
//     */

//     interface IUser {
//         id: string;
//         role: "student";
//         password: string;
//         name: {
//             firstName: string;
//             middleName?: string;
//             lastName: string;
//         };
//         dateOfBarth?: string;
//         gender: "male" | "female";
//         email?: string;
//         contactNo: string;
//         emergencyContactNo: string;
//         presentAddress: string;
//         permanentAddress: string;
//     }
//     // res.send('Hello World!')
//     // 2. Create a Schema corresponding to the document interface.
//     const userSchema = new Schema<IUser>({
//         id: { type: String, required: true, unique: true },
//         role: { type: String, required: true },
//         password: { type: String, required: true },
//         name: {
//             firstName: { type: String, required: true },
//             middleName: { type: String },
//             lastName: { type: String, required: true }
//         },
//         dateOfBarth: { type: String },
//         gender: {
//             type: String,
//             enum: ['male', 'female']
//         },
//         email: { type: String },
//         contactNo: { type: String, required: true },
//         emergencyContactNo: { type: String, required: true },
//         presentAddress: { type: String, required: true },
//         permanentAddress: { type: String, required: true },

//     });

//     const User = model<IUser>('User', userSchema);

//     const createUserToBd = async () => {
//         const user = new User({
//             id: '432',
//             role: "student",
//             password: 'amena',
//             name: {
//                 firstName: 'Nurul',
//                 middleName: 'tanvir',
//                 lastName: 'islam',
//             },
//             dateOfBarth: '12/32/32',
//             gender: "male",
//             email: 'abc@gmail.com',
//             contactNo: '4353434',
//             emergencyContactNo: '45454223',
//             presentAddress: 'chandpur, bangladesh',
//             permanentAddress: 'homna',
//         });
//         await user.save();
//         console.log(user);
        
//     }
//     createUserToBd()

// })

export default app;