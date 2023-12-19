import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'Browse, Shop, and that\'s the Doorbell!',
    text: 'Quixify is an on-demand delivery service app for ordering all sorts of retail items, including food, clothes, beverages, and even cannabis from the comfort of your home or workplace. Let us know what you need, and it will be on your doorstep in no time.',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}


export const brandFeaturesContent = {
    heading: 'DISCOVER FEATURES',
    features: [
        {
            title: 'Same Day Delivery',
            description: 'Receive your items the same day you place your order.',
            icon: ['delivery-color', 28]
        },
        {
            title: 'Order Tracking',
            description: 'Track how far the courier is from your location and their ETA.',
            icon: ['order-tracking-color', 90]
        },
        {
            title: 'Browse Updated Inventory',
            description: 'Choose items from a daily updated inventory of various outlets.',
            icon: ['package-list-color', 25]
        },
        {
            title: 'Secure Payment',
            description: 'Save your information on the app for a seamless checkout.',
            icon: ['secure-payment-color', 34]
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    descriptions: [
        'Quixify is a one-stop platform for all your retail outlet delivery needs, may they be mechanical tools, alcohol, food, tech items, or any other products sold near you. Just choose the items you want, and a courier will pick them up for you and have them on your doorstep before you know it.',
        'The app is designed to bridge the gap left by existing apps in the marketplace where users can place unlimited orders for gatherings and parties and even get cannabis products picked up for them. The modern UI is designed to make it easier for first-time users to quickly compare products and prices before placing their orders with Quixify.',
    ],
}

export const benefitsContent = {
    heading: 'Life’s too Short to Not Quixify',
    text: 'No one has the time, and you have more productive things on your hands. See for yourself how the app goes beyond the average at-large on-demand delivery apps.',
    benefits: [
        {
            title: 'Large Orders ',
            description: 'You do not have to hire separate catering services for large social gatherings. Quixify delivers large orders in the same amount of time.',
            icon: ['package-color', 14]
        },
        {
            title: 'Compare Store Inventories ',
            description: 'Before making your purchase, browse similar options and compare your choices from all outlets near you.',
            icon: ['dollar-bag-color', 23]
        },
        {
            title: 'Order Cannabis',
            description: 'Quixify is the first on-demand delivery service to offer cannabis delivery from a dispensary near you.',
            icon: ['bag-color', 29]
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Is Quixify Roots Compatible with Android or iOS?',
            answer: 'The answer will be here......',

        },
        {
            question: 'How do I get in touch with someone if there is something wrong with my profile?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'How do I sign up?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Everything Delivered Quixify!',
    text: 'Sign up to download the app as it launches.'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'twitter1',
            link: '',
        },
        {
            icon: 'facebook1',
            link: '',
        },
        {
            icon: 'instagram1',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Pre Sign-up',
    whyUsBtn: `Why ${siteName}?`
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
