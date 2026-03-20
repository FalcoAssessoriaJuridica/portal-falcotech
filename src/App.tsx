import React from 'react';
import { motion } from 'framer-motion';
import {
    Building2,
    Users,
    CreditCard,
    Truck,
    Bike,
    ExternalLink,
    ShieldCheck,
    ArrowRight
} from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    url: string;
    icon: React.ReactNode;
    delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, url, icon, delay }) => (
    <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="group relative flex flex-col p-8 rounded-2xl glass transition-all hover:border-[#C5A059]/50 overflow-hidden"
    >
        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink size={18} className="text-[#C5A059]" />
        </div>

        <div className="w-14 h-14 rounded-xl bg-[#C5A059]/10 flex items-center justify-center mb-6 text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-colors">
            {icon}
        </div>

        <h3 className="text-xl font-semibold mb-3 tracking-tight group-hover:text-[#C5A059] transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
            {description}
        </p>

        <div className="flex items-center text-xs font-semibold tracking-widest uppercase text-[#C5A059] mt-auto">
            ACESSAR AGORA <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>

        {/* Subtle glow effect on hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#C5A059]/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
    </motion.a>
);

const App: React.FC = () => {
    const projects = [
        {
            title: "ERP Jurídico",
            description: "Sistema central de gestão de processos, agenda jurídica e controle de documentos.",
            url: "https://erp.falcotech.com.br",
            icon: <Building2 size={28} />,
            delay: 0.2
        },
        {
            title: "CRM de Captação",
            description: "Plataforma de gestão de leads, automação de funis e dashboards de performance.",
            url: "https://crm.falcotech.com.br",
            icon: <Users size={28} />,
            delay: 0.3
        },
        {
            title: "Gateway Pro",
            description: "Módulo financeiro integrado para emissão de faturas, links de pagamento e controle de fluxo.",
            url: "https://gatewaypro.falcotech.com.br",
            icon: <CreditCard size={28} />,
            delay: 0.4
        },
        {
            title: "LP Rodoviários",
            description: "Portal especializado em consultoria jurídica para trabalhadores do transporte rodoviário.",
            url: "https://rodoviarios.falcotech.com.br",
            icon: <Truck size={28} />,
            delay: 0.5
        },
        {
            title: "LP Motoboys",
            description: "Soluções e orientações jurídicas personalizadas para entregadores e pilotos de moto.",
            url: "https://motoboys.falcotech.com.br",
            icon: <Bike size={28} />,
            delay: 0.6
        }
    ];

    return (
        <div className="min-h-screen px-6 py-20 lg:py-32 selection:bg-[#C5A059]/30">
            <div className="max-w-7xl mx-auto">

                {/* Header/Hero */}
                <header className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center px-4 py-2 rounded-full glass mb-8 text-xs font-semibold tracking-[0.2em] uppercase text-[#C5A059]"
                    >
                        <ShieldCheck size={14} className="mr-2" /> ECOSSISTEMA FALCOTECH
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl lg:text-7xl font-bold mb-6 tracking-tighter"
                    >
                        Sistemas <span className="gold-gradient-text">RF - Falco</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Bem-vindo ao centro de comando. Selecione a plataforma abaixo para gerir seus processos, leads e finanças com máxima eficiência.
                    </motion.p>
                </header>

                {/* Projects Grid */}
                <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </main>

                {/* Footer */}
                <footer className="mt-24 text-center border-t border-white/5 pt-10">
                    <p className="text-gray-500 text-sm font-light">
                        &copy; {new Date().getFullYear()} <span className="font-semibold text-[#C5A059]">Falcotech</span>. Todos os direitos reservados.
                    </p>
                </footer>
            </div>

            {/* Visual Decoration */}
            <div className="fixed top-0 left-0 w-full h-full -z-20 overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[#C5A059]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] bg-[#C5A059]/3 rounded-full blur-[100px]" />
            </div>
        </div>
    );
};

export default App;
