export interface IBook {
    header: string;
    authors: Array<IAuthor>;
    length: number; // book's length
    publisher?: string;
    publishYear: number;
    issueDate: string;
    ISBN: number;
    image?: string;
}

export interface IAuthor {
    firstName: string;
    lastName: string;
}