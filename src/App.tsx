import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Shield,
    Users,
    TrendingUp,
    MapPin,
    ExternalLink,
    Cpu,
    Database,
    Globe,
    Bike,
    Sun,
    Moon
} from 'lucide-react';

interface Project {
    id: string;
    title: string;
    description: string;
    url: string;
    icon: React.ReactNode;
    category: string;
    status: 'online' | 'maintenance' | 'beta';
}

const projects: Project[] = [
    {
        id: 'erp',
        title: 'ERP Falco Jurídico',
        description: 'Gestão processual completa, controle de prazos e fluxo de trabalho jurídico avançado.',
        url: 'https://erp.falcotech.com.br',
        icon: <Shield className="w-8 h-8" />,
        category: 'Gestão Jurídica',
        status: 'online'
    },
    {
        id: 'crm',
        title: 'CRM Saas Falco',
        description: 'Pipeline de vendas, gestão de leads e automação de relacionamento com clientes.',
        url: 'https://crm.falcotech.com.br',
        icon: <Users className="w-8 h-8" />,
        category: 'Vendas & Leads',
        status: 'online'
    },
    {
        id: 'finance',
        title: 'Portal Financeiro',
        description: 'Módulo de faturamento, gestão de contratos e integração com gateways de pagamento.',
        url: 'https://gatewaypro.falcotech.com.br',
        icon: <TrendingUp className="w-8 h-8" />,
        category: 'Financeiro',
        status: 'online'
    },
    {
        id: 'lp-rodoviarios',
        title: 'LP Rodoviários',
        description: 'Landing page especializada para motoristas e profissionais de transporte rodoviário.',
        url: 'https://lprodoviarios.falcotech.com.br',
        icon: <MapPin className="w-8 h-8" />,
        category: 'Marketing LP',
        status: 'online'
    },
    {
        id: 'lp-motoboys',
        title: 'LP Motoboys',
        description: 'Landing page focada em entregadores e pilotos de aplicativo com atendimento via IA.',
        url: 'https://motoboys.falcotech.com.br',
        icon: <Bike className="w-8 h-8" />,
        category: 'Marketing LP',
        status: 'online'
    },
    {
        id: 'rf-cursos',
        title: 'RF Cursos - App',
        description: 'Plataforma de ensino e capacitação para profissionais do setor de serviços.',
        url: 'https://rfcursos.falcotech.com.br/login',
        icon: <Cpu className="w-8 h-8" />,
        category: 'Educação',
        status: 'online'
    }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty('--mouse-x', `${x}px`);
        cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            ref={cardRef}
            className="spotlight glass-card relative p-8 rounded-3xl group cursor-pointer h-full"
            onClick={() => window.open(project.url, '_blank')}
        >
            <div className="relative z-20">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 group-hover:border-amber-500/50 transition-colors">
                        <div className="text-amber-500 group-hover:scale-110 transition-transform duration-500">
                            {project.icon}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${project.status === 'online' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 'bg-amber-500'}`} />
                        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold opacity-70">
                            {project.status}
                        </span>
                    </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-amber-500 transition-colors">
                    {project.title}
                </h3>

                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-8 line-clamp-3">
                    {project.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-black/5 dark:border-white/5">
                    <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">
                        {project.category}
                    </span>
                    <div className="flex items-center gap-2 text-amber-500 font-medium text-xs group-hover:gap-3 transition-all">
                        ACESSAR <ExternalLink className="w-3 h-3" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

function App() {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('portal-theme') as 'light' | 'dark' || 'dark';
        }
        return 'dark';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'light') {
            root.classList.add('light');
            root.classList.remove('dark');
        } else {
            root.classList.add('dark');
            root.classList.remove('light');
        }
        localStorage.setItem('portal-theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

    return (
        <div className="min-h-screen py-20 px-4 md:px-8 lg:px-12 bg-transparent transition-colors duration-500">
            {/* Theme Toggle */}
            <div className="fixed top-6 right-6 z-50">
                <button
                    onClick={toggleTheme}
                    className="p-3 rounded-full bg-white/10 dark:bg-zinc-900/50 backdrop-blur-md border border-black/10 dark:border-white/10 hover:border-amber-500/50 transition-all group"
                    title={theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={theme}
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.2 }}
                        >
                            {theme === 'light' ?
                                <Moon className="w-5 h-5 text-slate-700 hover:text-amber-600" /> :
                                <Sun className="w-5 h-5 text-amber-500 hover:text-amber-400" />
                            }
                        </motion.div>
                    </AnimatePresence>
                </button>
            </div>

            {/* Background Central Glow */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 dark:bg-amber-500/5 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <header className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8"
                    >
                        <Database className="w-4 h-4 text-amber-500" />
                        <span className="text-[10px] text-amber-500 font-bold uppercase tracking-[0.2em]">Hub Falcotech v2.1</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-slate-900 dark:text-white">
                        Sistemas <span className="gold-gradient-text">RF - Falco</span>
                    </h1>

                    <p className="text-slate-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        Central de comando integrada para gestão jurídica, financeira e automação de marketing.
                    </p>
                </header>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* Footer */}
                <footer className="mt-32 text-center">
                    <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400 dark:text-zinc-600 mb-8">
                        <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4" />
                            <span className="text-xs font-semibold tracking-widest uppercase">Global Network</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Database className="w-4 h-4" />
                            <span className="text-xs font-semibold tracking-widest uppercase">Supabase Cloud</span>
                        </div>
                    </div>
                    <p className="text-[10px] text-slate-400 dark:text-zinc-700 font-bold uppercase tracking-[0.3em]">
                        © 2026 Falco Assessoria Jurídica. All rights reserved.
                    </p>
                </footer>
            </div>
        </div>
    );
}

export default App;
