export interface Posts {
    id: number,
    title: string,
    body: string,
    active: boolean,
    type: 'news' | 'politic' | 'education'
}
