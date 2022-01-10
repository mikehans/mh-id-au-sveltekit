export interface ListItem {
    id: string;
    task: string;
    isCompleted: boolean;
}

export type ListItemPartial = Partial<ListItem>;