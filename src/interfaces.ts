export interface MailOptions {
    from?: string;
    to?: string;
    subject: string;
    text: string;
}

export interface authentication {
    user?: string,
    pass?: string
}

export interface Transport {
    host: string;
    secure: boolean;
    port: number;
    auth: Object;
}