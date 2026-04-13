const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Allegro-Poznan',
                degree: 'Sr, Computer Science Engineering',
                detail: "Bachelor's Degree in Computer Sciene Engineering from Allegro-Poznan.",
                year: '2015-2017'
            },
            {
                id: 1,
                title: 'Warsaw University of Technology',
                degree: 'BS, Science Subjects',
                detail: "awarded Bachelor’s Degree, Computer Science",
                year: '2011-2015'
            },
        ]
    },
    {
        expCards: [
             {
                id: 1,
                title: 'DealHub-Austin, UnitedStates',
                role: ' Lead Senior FullStack Engineer',
                location: 'Austin',
                desc: 'As a senior developer, I have built smart and functional website for the DealHub-Austin company in Austin (remote access)',
                year: 'Apr2023 - Present',
                location: 'Austin, United State'
            },
            {
                id: 2,
                title: 'Crezco-London, UK',
                role: ' Senior FullStack Engineer',
                location: 'London',
                desc: 'As a senior developer, I have built smart and functional web applications for the Crezco-London company in London (remote access)',
                year: 'Jan2020 - Mar2023',
                location: 'London, UK'
            },
            {
                id: 3,
                title: 'medbelle-Berlin, Germany',
                role: 'FullStack Engineer',
                location: 'Berlin',
                desc: 'As a main developer, I have built functional web and mobile development for the medbelle-Berlin company in Berlin (remote access).',
                year: 'Oct2017 - Dec2019',
                location: 'Berlin, Germany'
            },
            {
                id: 4,
                title: 'Allegro-Poznan, Poland',
                role: 'Junior Frontend Engineer',
                location: 'Warsaw',
                desc: "As a junior developer, I have built visually appealing user interface of web projects for the Allegro-Poznan company in Warsaw.",
                year: 'Jul2015 - Sep2017 ',
                location: 'Warsaw, Poland'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
