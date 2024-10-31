export interface INotificationModel {
    message: string
    result: NotificationResult[]
}

export interface NotificationResult {
    id: number
    title: string
    body: string
    image?: string
    action_type?: number
    open_type?: number
    date: string
    primary_button_text?: string
    secondary_button_text?: string
    primary_button?: string
    secondary_button?: string
    read: number
    badge: number
}
