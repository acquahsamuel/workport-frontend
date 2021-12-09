export interface ICreateCompany {
    companyName: string;
    companyAddress: string;
    companyContact: string;
    companyLogo: string;
    companyTwitter: string;
    companyLikedin: string;
    companyEmail: string;
    invoiceNotes: string;
    jobs: string;
}


export interface IUpdateCompany {
    companyName?: string;
    companyAddress?: string;
    companyContact?: string;
    companyLogo?: string;
    companyTwitter?: string;
    companyLikedin?: string;
    companyEmail?: string;
    invoiceNotes?: string;
    jobs?: string;
}