export class Message {
    name: String;
    subject: String;
    email: String;
    message: String;

    constructor (
        message: String,
        name: String,
        subject: String,
        email: String,
    ){
        this.name = name!;
        this.subject = subject!;
        this.email = email!;
        this.message = message!;
      }

}