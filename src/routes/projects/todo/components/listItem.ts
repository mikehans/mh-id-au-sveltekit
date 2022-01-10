export interface ListItem {
    id: number;
    task: string;
    isCompleted: boolean;
}

export type ListItemPartial = Partial<ListItem>;