const expertise = [
    {
        id: 0,
        title: 'FullStack Development',
        desc: 'I work with modern technologies like React, Node.js, MongoDB, and cloud services to deliver clean, efficient, and maintainable solutions. I focus on performance, usability, and writing high-quality code that is ready for production.',
    },
    {
        id: 1,
        title: 'Python Development',
        desc: "I focus on writing clean, efficient, and maintainable code, with hands-on experience in frameworks like Django and FastAPI, as well as working with cloud services and databases.",
    },
    {
        id: 2,
        title: 'BlockChain Development',
        desc: 'I work with Solidity, Web3, and modern blockchain frameworks to create secure, scalable, and efficient solutions.',
    },
    {
        id: 3,
        title: 'Mobile Design',
        desc: "I focus on clean, modern design, usability, and seamless user experiences, turning ideas into high-quality, production-ready designs using tools like Figma and industry best practices.",
    },
    {
        id: 4,
        title: 'E-Commerce Development',
        desc: "I work with platforms like Shopify and custom stacks using React and Node.js to deliver fast, secure, and user-friendly shopping experiences.",
    },
    {
        id: 5,
        title: 'AI Development',
        desc: "MI work with Python, LLM APIs, and data pipelines to create scalable, real-world solutions. I focus on clean architecture, reliable performance"
    }
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
