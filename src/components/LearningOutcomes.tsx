import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import kidsDiscussion from '../assets/images/kids_discussion.jpeg';

const LearningOutcomes = () => {
    const outcomes = [
        "Understand what AI is and isn't",
        "Develop logical thinking and problem-solving skills",
        "Learn about AI ethics, fairness, and safety",
        "Recognize AI in daily life (YouTube, Maps, Siri)",
        "Build confidence to embrace future technologies"
    ];

    return (
        <section className="section" style={{ background: 'white' }}>
            <div className="container">
                <style>{`
                  .outcomes-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    align-items: center;
                  }
                  @media (max-width: 768px) {
                    .outcomes-grid {
                      grid-template-columns: 1fr;
                      gap: 40px;
                    }
                    .outcomes-grid h2 {
                        text-align: center;
                        font-size: 2rem !important;
                    }
                  }
                `}</style>
                <div className="outcomes-grid">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '32px' }}>
                            What Your Child Will <span style={{ color: 'var(--color-primary)' }}>Learn</span>
                        </h2>

                        <ul style={{ listStyle: 'none' }}>
                            {outcomes.map((item, index) => (
                                <li key={index} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '20px',
                                    fontSize: '1.2rem',
                                    color: 'var(--color-secondary)'
                                }}>
                                    <CheckCircle2 size={24} color="var(--color-accent)" style={{ marginRight: '16px', flexShrink: 0 }} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{
                            background: 'var(--color-accent-light)',
                            borderRadius: 'var(--radius-lg)',
                            height: '400px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                        }}
                    >
                        <img
                            src={kidsDiscussion}
                            alt="Kids Discussing Ideas"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: 'var(--radius-lg)'
                            }}
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default LearningOutcomes;
