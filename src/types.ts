export interface section {
    title: string
    viewport?: viewportType
}

export interface aboutSection extends section {
    type: 'intro'
    intro_text: string
    image: { url: string, alt: string }
    image_desktop?: { url: string, alt: string }
    text: string | string[]
}

export interface headerSection extends section {
    type: 'header'
    intro: string
    mail_button: { text: string, email: string }
    secondary_button: string
}

export type ButtonType = {
    text: string
    url: string
    noFollow?: boolean
}

export interface caseSection extends section {
    type: 'case'
    align?: 'left' | 'right'
    color?: 'purple' | 'turquoise' | 'tomato'
    text: string
    live_demo_url?: string
    buttons: ButtonType[]
}

export interface service {
    icon: string
    title: string
    text: string
}

export interface servicesSection extends section {
    type: 'services'
    services: service[]
}

export interface reference {
    name: string
    function: string
    text: string
    company?: string
    company_url?: string
}

export interface referencesSection extends section {
    type: 'references'
    references: reference[]
}

export interface appStateType {
    scrolled: boolean
    windowWidth: number
    windowHeight: number
    showForm: boolean
    sections: Array<headerSection | aboutSection | caseSection | servicesSection | referencesSection>
}

export interface stateType {
    scrolled: boolean
}

export type viewportType = "mobile" | "tablet" | "desktop"