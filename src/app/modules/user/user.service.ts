import User from "./user.model";

export const createUserToBd = async () => {
    const user = await new User({
        id: '4488883',
        role: "student",
        password: 'tumi',
        name: {
            firstName: 'Nurul islam',
            middleName: 'tanvir f',
            lastName: 'islam f',
        },
        dateOfBarth: '12/32/32',
        gender: "male",
        email: 'abc@gmail.com',
        contactNo: '4353434',
        emergencyContactNo: '45454223',
        presentAddress: 'chandpur, bangladesh',
        permanentAddress: 'homna',
    });
    await user.save();
    return user;

}