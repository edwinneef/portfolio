export type sectionType = 'header' | 'intro' | 'case'


export interface introSection {
    type: 'intro'
    intro_title: string
}

export interface headerSection {
    type: 'header'
    title: string
    intro: string
    mail_button: { text: string, email: string }
    secondary_button?: string
}

export interface caseSection {
    type: 'case'
    title: string
}

export interface appStateType {
    sections: Array<headerSection | introSection | caseSection>
}

const appState : appStateType = {
    sections: [
        {
            type: 'header',
            title: 'Ik ben Edwin, een web developer met een passie voor design',
            intro: 'Ik ben graag betrokken bij elke stap die genomen wordt bij het ontwikkelen van een website. Naast development ben ik namelijk ook zeer geinteresseerd in UI en UX design.',
            mail_button: { text: 'Stuur email', email: 'edwinneef@gmail.com' }
        }, {
            type: 'intro',
            intro_title: 'Test intro'
        }, {
            type: 'case',
            title: 'Test case'
        }
    ], 
}

export default appState;