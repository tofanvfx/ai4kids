import { BookOpen, Brain, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSeries = () => {
    const cards = [
        {
            icon: <BookOpen size={40} className="text-primary" />,
            title: "Simple Language",
            description: "No complex jargon. We explain AI using stories, relatable examples, and fun illustrations so every child can understand."
        },
        {
            icon: <Users size={40} className="text-primary" />,
            title: "Indian Context",
            description: "Designed for Indian classrooms. Examples feature local scenarios, festivals, and daily life in India to make learning personal."
        },
        {
            icon: <Brain size={40} className="text-primary" />,
            title: "Thinking > Coding",
            description: "We focus on logic, ethics, and problem-solving. Coding is a tool, but thinking is the superpower we build first."
        }
    ];

    return (
        <section className="section" style={{ background: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--color-secondary)' }}>
                        Why <span style={{ color: 'var(--color-primary)' }}>AI for Kids?</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', maxWidth: '700px', margin: '0 auto' }}>
                        A unique book series that bridges the gap between technology and young minds through storytelling and curiosity.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="card"
                            style={{
                                textAlign: 'center',
                                padding: '40px 30px',
                                borderTop: `4px solid var(--color-accent${index === 1 ? '-light' : ''})`
                            }}
                        >
                            <div style={{
                                background: 'var(--color-background)',
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 24px',
                                color: 'var(--color-primary)'
                            }}>
                                {card.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{card.title}</h3>
                            <p style={{ color: 'var(--color-text-light)' }}>{card.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSeries;
