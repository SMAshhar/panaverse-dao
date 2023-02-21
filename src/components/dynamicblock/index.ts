export interface PageContent {
  id: number
  name: string
  heading: string
  description: string
  outline:string
  outline1:string
  image:string
}

const contents: PageContent[] = [
  {
    id: 1,
    name: 'web3',
    heading: 'Web 3 and Metaverse Specialization',
    description: 'In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc.  Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.',
    outline:`Blockchain and Metaverse Theory.\n Smart Contract Development in Solidity.\n Dapp Development using Ethers.js and Next.js 13. \nTokennomics. \nBlockchain Project: Create a Token and Launch ICO/IEO/IDO`,
    outline1:'Open Metaverse Web Development. \nBlender 3D asset Creation for the Metaverse (Remote Zoom Class) ',
    image:"/image/Meta.jpg"
  },
  {
    id: 2,
    name: 'ai',
    heading: 'Artificial Intelligence (AI) and Deep Learning Specialization',
    description: "Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. The AI and Deep Learning Specialization is a foundational program that will aid in your comprehension of deep learning's potential, difficulties, and effects as well as equip you to take part in the creation of cutting-edge AI technology. We will start this course by understanding the fundamentals and use cases for AI and move on to building next-gen intelligent apps using OpenAI’s powerful models and Next.js 13. We'll conclude the course by learning about basic programming concepts using Python, such as lists, dictionaries, classes, functions, and loops, and practice writing clean and readable code with exercises for each topic. We'll also learn how to make your programs interactive and how to test your code safely before adding it to a project. It is a fast-paced, thorough introduction to programming with Python 3.10+ that will have you writing programs, solving problems, and making things that work in no time. In this quarter we will also learn Git, the distributed version control system. We will also review Git-based GitHub services.",
    outline:'Introduction to Machine Learning, Data Science, and AI. \nBuilding Next-Gen Intelligent Apps with OpenAI’s Powerful Models We will cover GPT-4, ChatGPT, etc. and Next.js 13. \nPython Crash Course  for TypeScript Developers',
    outline1:"Deep Learning with Tensorflow. \nMachine Learning Engineering for Production (MLOps) using Terraform for CDK",
    image:"/image/AI1.jpg"
  },
  {
    id: 3,
    name: 'cnc',
    heading: 'Cloud-Native Computing Specialization',
    description: `Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of the cloud computing model. Cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach. These techniques enable loosely coupled systems that are resilient, manageable, and observable. Combined with robust automation, they allow engineers to make high-impact changes frequently and predictably with minimal toil. Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. In this course, you will learn how to develop cloud applications using cloud-native technologies like Containers, Kubernetes, and CDK for Kubernetes.`,
    outline:'Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition. Cloud Development Kit for Kubernetes',
    outline1:'CDK for Terraform',
    image:"/image/CNC.jpg"
  },
  {
    id: 4,
    name: 'iot',
    heading: 'Ambient Computing and IoT Specialization',
    description: `Ambient computing, also commonly referred to as ubiquitous computing, is the concept of blending computing power into our everyday lives in a way that is embedded into our surroundings - invisible but useful. In a multi-device world, people don't want to spend their life fussing with technology. An ambient approach gets the tech out of your way so you can live your life while getting the help you need. It doesn't matter what device you're using, what context you're in, whether you're talking, typing, or tapping. The technology in your life works together seamlessly. Ambient computing uses all aspects of modern-day technology, including voice assistants, artificial intelligence, sensors, connectivity, cloud computing and more. If you were thinking that the IoT and ambient computing sound a lot alike, you aren't wrong; the two concepts are intertwined. IoT refers to the vast array of devices that connect to the internet to optimize their functionality, like smart sensors and smart speakers: ambient computing builds on that. Ambient computing focuses on the interaction between these devices once they are connected. atter, the next-generation smart home standard, solves many smart home pain points while bringing all our IoT devices together. Some of the biggest tech companies are working together to make Matter a unified protocol for future smart homes. These companies include Apple, Amazon, and Google. This means Apple HomeKit, Amazon Alexa, Samsung SmartThings, Google Nest, and Samsung SmartThings will support the Matter standard by default for all new devices. In this course we will learn to build smart homes with Amazon Alexa and Matter protocol. `,
    outline:'Alexa Skill Developement. \nAlexa with Matter Protocol. \nDapp Development using Ethers.js and Next.js 13. \nTokennomics. \nBlockchain Project: Create a Token and Launch ICO/IEO/IDO',
    outline1:'Introduction to the Internet of Things and Embedded Systems. \nThe C Reference Book: The C programming language Embedded Programming book: Internet of things with ESP8266. \nIntroduction to C Part 1. \nC Programming Part 2. \nIntroduction to Embedded systems Part 1. \nIntroduction to Embedded systems Part 2. \nEmbedded Programming using Rust (Extra Weeks in the Course).',
    image:"/image/iot.jpg"
  },
  {
    id: 5,
    name: 'gb',
    heading: 'Genomics and Bioinformatics Specialization',
    description: 'In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc.  Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.',
    outline:'Bio-351: Python for Biologists',
    outline1:'Bio-361: Bioinformatics with Python',
    image:"/image/bg.jpg"
  },
  {
    id: 6,
    name: "na",
    heading: 'Network Programmability and Automation Specialization',
    description: 'This course will focus on learning the basics of the networking and preparing for the new Cisco Certified Network Associate (CCNA) exam. This comprehensive course focuses on the solutions and technologies needed to implement and administer a broad range of modern networking and IT infrastructure.',
    outline:'This course will focus on learning the basics of the networking and preparing for the new Cisco Certified Network Associate (CCNA) exam. This comprehensive course focuses on the solutions and technologies needed to implement and administer a broad range of modern networking and IT infrastructure.',
    outline1:"Traditional network management techniques can't be effectively automated and don't scale well. By implementing network programmability based on Application Programming Interfaces, this course will assist in overcoming issues of the future and help you develop the skills required for the Next-Generation Network Engineer.",
    image:"/image/NA.jpg"
  },
  
]

export const getContent = (): PageContent[] => {
  return contents
}
