interface Message {
    role: string,
    content: string
}

interface ChatProps {
    messages: Message[] | undefined
}

interface RequestProps extends Message {}

interface ResponseProps extends Message {
    approve(status: boolean): void,
    disapprove(status: boolean): void
}