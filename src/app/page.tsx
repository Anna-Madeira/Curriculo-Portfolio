

import React from "react";
import {Github, Linkedin, Mail, Phone, MapPin} from "lucide-react";

const resumeData ={
  name: "Anna Julia da Silva Madeira",
  title: "Desenvolvedora Frontend Jr.",
  Contact: {
    email: 'anna.madeira@icloud.com',
    phone: '(11) 98897-3221',
    location: 'São Paulo, SP',
    linkedin: 'anna-madeira',
    github: 'Anna-Madeira',
  },
  Summary: "Profissional em transição de carreira para Desenvolvimento Front-end, com foco na criação de interfaces de usuário intuitivas e acessíveis. Minha experiência prévia em análise de sistemas e gestão de projetos me proporcionou uma base sólida em metodologias ágeis (Scrum, Kanban) e SQL, habilidades que agora aplico para criar soluções eficientes e colaborar com equipes multidisciplinares.",

  experience: [
    {

    title: "Analista de Sistemas jr.",
    company: "MC1 Tecnologia LTDA",
    period: "Abril de 2022 – Março de 2023",
    description: "Liderei a definição de escopo e elaborei especificações técnicas para projetos de automação de vendas, garantindo a entrega de soluções eficientes. Colaborei diretamente com equipes de desenvolvimento, servindo como ponte entre as necessidades do cliente e a execução técnica."
  },

  {

    title: "Analista de Configuração",
    company: "MC1 Tecnologia LTDA",
    period: "Fevereiro de 2021 - Abril de 2022",
    description: "Personalizei e implementei soluções tecnológicas para clientes do setor alimentício, com o objetivo de otimizar processos e aumentar a produtividade das equipes comerciais. Analisei as necessidades dos clientes para configurar sistemas de forma estratégica."
  },

    {

    title: "Recepcionista Terceirizada",
    company: "Limpidus",
    period: "Fevereiro de 2019 – Fevereiro de 2021",
    description: "Gerenciei o atendimento ao cliente e dei suporte a colaboradores, coordenando processos de viagens corporativas e emissão de passagens. Minha atuação focou em assegurar a eficiência operacional e a satisfação do cliente interno e externo."

  },
  ],

  education: [
    {

      degree: "Tecnologia em Análise e Desenvolvimento de Sistemas",
      institution: "Universidade Nove de Julho",
      period: "Agosto de 2020 - Dezembro de 2022"
    }
    ],
    skills: ["React.js", "Typescript", "Tailwind CSS", "JavaScript", "Node.js", "HTML", "CSS", "SQL", "Metodologias Ágeis"],
};

const Header = () => (
  <div className="text-center mb-10">
    <h1 className="text-4xl font-bold text-pink-700"> {resumeData.name}</h1>
    <h2 className="text-xl text-pink-500 font-semibold">{resumeData.title} </h2>
      <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 mt-4 text-black italic font-semibold">
       <a href={`mailto:${resumeData.Contact.email}`} className="flex items-center gap-1 hover:text-pink-900 transition-colors">
        <Mail size={16} />
        <span>{resumeData.Contact.email} </span> 
       </a>
       <a href={`https://wa.me/${resumeData.Contact.phone.replace(/[\s()-]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-pink-900  transition-colors"> 
           <Phone size={16} />
        <span>{resumeData.Contact.phone}</span>
          </a>
          <a href={`https://github.com/${resumeData.Contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-pink-900  transition-colors"> 
          <Github size={16}/>
          <span>Github</span>
          </a>
          <a href={`https://linkedin.com/in/${resumeData.Contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-pink-900  transition-colors">
          <Linkedin size={16}/>
          <span>Linkedin</span>
          </a>
        </div>
    </div>
);

const Section = ({title, children}: {title: string, children: React.ReactNode}) => (
<div className="mb-8">
  <h3 className="text-2xl font-extralight font-serif text-gray-900 border-b-2 pb-2 mb-4"> {title} </h3>
  {children}
</div>
);

const Resume = () => {
  return (
    <div className="bg-pink-100 p-8 md:p-12 rounded-xl shadow-2xl max-w-4xl w-full mx-auto my-8">
      <Header />

    <Section title="Resumo">
      <p className="text-black font-sans leading-relaxed "> {resumeData.Summary}</p>
    </Section>
    
    <Section title="Experiência Profissional">
      {resumeData.experience.map((job, index) =>(
        <div key={index} className="mb-4">
          <h4 className="text-xl font-mono text-gray-500 ">{job.title}</h4>
          <p className="text-neutral-700 text-sm ">{job.company} | {job.period}</p>
          <p className="text-neutral-800 mt-2 font-sans mb-6">{job.description}</p>
        </div>
      ))}
    </Section>

    <Section title="Educação">
      {resumeData.education.map((edu, index) => (
        <div key={index} className="mb-4">
          <h4 className="text-xl font-mono text-gray-500">{edu.degree}</h4>
          <p className="text-neutral-800 text-sm ">{edu.institution} | {edu.period} </p>
        </div>
      ))}
    </Section>
    <Section title="Habilidades">
      
        <div className="flex flex-wrap gap-2">
          {resumeData.skills.map((skill, index) => (
        <span key={index} className="bg-pink-900 text-white italic text-sm font-mono px-4 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </Section>
    </div>
    
  );
};






export default function app(){
  return(
<div className=" min-h-screen flex items-center justify-center p-4 font-inter ">
   <Resume />

    </div>
  );
}