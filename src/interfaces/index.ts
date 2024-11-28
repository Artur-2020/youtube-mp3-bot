export interface createStateDTO {
    chatId: number;
    state: string;
    username?: string | null;
    full_name?: string | null;
    userId: number
    status: string;
}
export interface StateAttributes extends createStateDTO {
    id: number;
    createdAt?: Date;
    updatedAt?: Date;
}