const cardsData = [
  {
    title: "ChatGPT Prompt Engineering for Developers",
    description:
      "Go beyond the chat box. Use API access to leverage LLMs into your own applications, and learn to build a custom chatbot.",
    item1:
      "Learn prompt engineering best practices for application development",
    item2:
      "Discover new ways to use LLMs, including how to build your own chatbot",
    item3:
      "Gain hands-on practice writing and iterating on prompts using the OpenAI API",
    level: "Beginner to Advanced",
    teacher: "Isa Fulford Andrew",
    prereq: "Basic Python",
    collab: "Open AI",
    vidSrc: "https://www.youtube.com/embed/H4YK_7MAckk",
  },
  {
    title: "LangChain for LLM Application Development",
    description:
      "The framework to take LLMs out of the box. Learn to use LangChain to call LLMs into new environments, and use memories, chains, and agents to take on new and complex tasks",
    item1:
      "Learn LangChain directly from the creator of the framework, Harrison Chase",
    item2:
      "Apply LLMs to proprietary data to build personal assistants and specialized chatbots",
    item3: "Use agents, chained calls, and memories to expand your use of LLMs",
    level: "Beginner",
    teacher: "Harison Chase",
    prereq: "Basic Python",
    collab: "LingChain",
    vidSrc: "https://www.youtube.com/embed/jFo_gDOOusk",
  },
  {
    title: "LangChain: Chat with Your Data",
    description:
      "Create a chatbot to interface with your private data and documents using LangChain.",
    item1: "Learn from LangChain creator, Harrison Chase",
    item2: "Utilize 80+ loaders for diverse data sources in LangChain",
    item3: "Create a chatbot to interact with your own documents and data",
    level: "Beginner",
    teacher: "Harison Chase",
    prereq: "Basic Python",
    collab: "LingChain",
    vidSrc: "https://www.youtube.com/embed/fo7bD-NgA4Y?si=6wJ5_d0aTMIOZ5Kr",
  },
  {
    title: "Finetuning Large Language Models",
    description:
      "Learn to finetune an LLM in minutes and specialize it to use your own data",
    item1: "Master LLM finetuning basics",
    item2:
      "Differentiate finetuning from prompt engineering and know when to use each",
    item3: "Gain hands-on experience with real datasets for your projects",
    level: "Intermediate",
    teacher: "Sharon Zhou",
    prereq: "Basic Python",
    collab: "LAMINI",
    vidSrc: "https://www.youtube.com/embed/9PxhCekQYNI?si=hHsTLR8k9wB01FK0",
  },
  {
    title: "Large Language Models with Semantic Search",
    description: "Learn to use LLMs to enhance search and summarize results.",
    item1: "Enhance keyword search using Cohere Rerank",
    item2: "Use embeddings to leverage dense retrieval, a powerful NLP tool",
    item3: "Evaluate your effectiveness for further optimization",
    level: "Beginner ",
    teacher: "Jay Alamar",
    prereq: "Basic Python",
    collab: "coHere",
    vidSrc: "https://www.youtube.com/embed/Sh4n0uk-NHk?si=TQKLb9tX5cSVphVs",
  },
  {
    title: "How Diffusion Models Work",
    description:
      "Learn and build diffusion models from the ground up. Start with an image of pure noise, and arrive at a final image, learning and building intuition at each step along the way.",
    item1: "Understand diffusion models in use today",
    item2: "Build your own diffusion model, and learn to train it",
    item3: "Implement algorithms to speed up sampling 10x",
    level: "Intermediate",
    teacher: "Sharon Zhou",
    prereq: "Python, TensorFlow or Pythorch",
    collab: "coHere",
    vidSrc: "https://www.youtube.com/embed/obdVesVsGQI?si=Ro9tmHYCfWgGBfBb",
  },
  {
    title: "Knowledge Graphs for RAG",
    description:
      "Learn how to build and use knowledge graph systems to improve your retrieval augmented generation applications.",
    item1:
      "Use Neo4j’s query language Cypher to manage and retrieve data stored in knowledge graphs",
    item2:
      "Write knowledge graph queries that find and format text data to provide more relevant context to LLMs for Retrieval Augmented Generation.",
    item3:
      "Build a question-answering system using Neo4j and LangChain to chat with a knowledge graph of structured text documents.",
    level: "Intermideatte",
    teacher: "Andreas Kollegger",
    prereq: 'LangChain or taking "LangChain: Chat with Your Data"',
    collab: "Neo4J",
    vidSrc: "https://www.youtube.com/embed/jMKRUo4wVKA?si=j_nDfcqMRPjiSXgV",
  },
  {
    title: "Open Source Models with Hugging Face",
    description:
      "Learn how to easily build AI applications using open source models and Hugging Face tools.",
    item1:
      "Find and filter open source models on Hugging Face Hub based on task, rankings, and memory requirements",
    item2:
      "Write just a few lines of code using the transformers library to perform text, audio, image, and multimodal tasks.Easily share your AI apps with a user-friendly interface or via API and run them on the cloud using Gradio and Hugging Face Spaces",
    item3:
      "Build a question-answering system using Neo4j and LangChain to chat with a knowledge graph of structured text documents.",
    level: "Beginner",
    teacher: "Maria Khalusova, Marc Sun, Younes Belkada",
    prereq: "This is a beginner-friendly course.",
    collab: "Hugging Face",
    vidSrc: "https://www.youtube.com/embed/4fkqXdcTmGk?si=a3RntTmGc7nNDJbj",
  },
  {
    title:
      "Evaluating and Debugging Generative AI Models Using Weights and Biases.",
    description:
      "Learn MLOps tools for managing, versioning, debugging and experimenting in your ML workflow.",
    item1:
      "Learn to evaluate LLM and image models with platform-independent tools",
    item2:
      "Instrument training notebooks for tracking, versioning, and logging",
    item3: "Monitor and trace LLM behavior in complex interactions over time",
    level: "Intermediate ",
    teacher: "Carey Phelps",
    prereq:
      "Familiarity with Python. Helpful to be familiar with PyTorch or similar framework",
    collab: "MLOps",
    vidSrc: "https://www.youtube.com/embed/UHFTY0B718s?si=rTHVgFoIrFozYd6D",
  },
  {
    title: "Serverless LLM apps with Amazon Bedrock",
    description:
      "Learn how to deploy a large language model-based application into production using serverless technology.",
    item1:
      "Learn how to prompt and customize your LLM responses using Amazon Bedrock.",
    item2:
      "Summarize audio conversations by first transcribing an audio file and passing the transcription to an LLM.",
    item3:
      "Deploy an event-driven audio summarizer that runs as new audio files are uploaded using a serverless architecture.",
    level: "Intermediate",
    teacher: "Mike Chambers",
    prereq: "Familiarity with Python and AWS services.",
    collab: "AMAZON",
    vidSrc: "https://www.youtube.com/embed/AIILR27LoSg?si=9-RkYyQxz_TOASG6",
  },
];

const render = document.querySelector(".render-cards");
const innerHTML = cardsData.map((cardData, index) => {
  return `
  <div class="course-card">
      <div class="card-content">
        <div class="card-thumbnail">
          <iframe
            width="560"
            height="315"
            src="${cardData.vidSrc}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; 
                            clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div class="powered-by">
            In Collaboration with
            <div class="name-of-company">${cardData.collab}</div>
          </div>
        </div>
        <div class="text-content-card">
          <h2>${cardData.title}</h2>
          <p>
          ${cardData.description}
          </p>
          <ul>
            <li>
            ${cardData.item1}
            </li>
            <li>
            ${cardData.item2}
            </li>
            <li>
            ${cardData.item3}
            </li>
          </ul>
          <span class="difficulty-instructor">
            <p class="difficulty">
            <div class="i-for-icon">
              <i class="fas fa-chart-bar"></i>
              ${cardData.level}
              </div>
            </p>
            
            <p class="instructor">
            <div class="i-for-icon">
            <i class="fas fa-chalkboard-teacher"></i> ${cardData.teacher}
            </div>
            </p>
          </span>
          <span>
              <p>
              <div>
                <strong>Prerequisite Recommendation:</strong>
                ${cardData.prereq}
                </div>
              </p>
            </span>
          </span>

          <div class="buttons">
            <button class="enroll-button">Enroll For Free</button>
            <button class="learnmore-button">Learn more</button>
          </div>
        </div>
      </div>
    </div>
    `;
});

render.innerHTML = innerHTML;
