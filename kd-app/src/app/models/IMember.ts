export interface IMember
{
	id:string;
    firstName:string;
    middleName?:string;
    lastName:string;
    gender:Gender;
    salutation:string;
    role:string;
    phoneNumber:string;
    info?:string;
    tenureStartDate:string;
    tenureEndDate:string;
}
export enum Gender{
    MALE = 0,
    FEMALE = 1,
}
