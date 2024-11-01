import React from 'react';
import ServiceCard from './ServiceCard';
import { Code2, Shield, Blocks, BookOpen, Lock, Cpu } from 'lucide-react';

export default function Services() {
  const services = [
    {
      Icon: Code2,
      title: "Custom Software Development",
      description: "Tailored blockchain solutions and smart contract development for your specific business needs."
    },
    {
      Icon: Shield,
      title: "Security Audits",
      description: "Comprehensive security assessments of blockchain systems and smart contracts."
    },
    {
      Icon: Blocks,
      title: "Web3 Solutions",
      description: "End-to-end development and integration of decentralized applications and services."
    },
    {
      Icon: BookOpen,
      title: "Training & Education",
      description: "Expert-led workshops and training programs in blockchain and Web3 technologies."
    },
    {
      Icon: Lock,
      title: "Cryptography Consulting",
      description: "Advanced cryptographic solutions and consulting for blockchain applications."
    },
    {
      Icon: Cpu,
      title: "Digital Innovation",
      description: "Strategic consulting for digital transformation and blockchain adoption."
    }
  ];

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}