import { Gift, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const ImpactSection = () => {
    return (
        <section className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{
                        background: 'linear-gradient(135deg, var(--color-secondary) 0%, #2D3142 100%)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '60px 40px',
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {/* Decorative shapes */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1 }}>
                        <Heart size={300} style={{ position: 'absolute', top: '-50px', right: '-50px' }} />
                        <Gift size={200} style={{ position: 'absolute', bottom: '-50px', left: '-50px' }} />
                    </div>

                    <div style={{ zIndex: 1, maxWidth: '700px' }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(255,255,255,0.1)',
                            padding: '8px 24px',
                            borderRadius: '50px',
                            marginBottom: '24px',
                            border: '1px solid rgba(255,255,255,0.2)'
                        }}>
                            <Heart size={20} className="text-primary" fill="var(--color-primary)" />
                            <span style={{ fontWeight: 600 }}>Make a Difference</span>
                        </div>

                        <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', color: 'white' }}>
                            Gift "AI for Kids" to <span style={{ color: 'var(--color-primary)' }}>Schools in Need</span>
                        </h2>

                        <p style={{ fontSize: '1.2rem', marginBottom: '40px', opacity: 0.9 }}>
                            Help us bridge the digital divide. Your purchase can send books to government schools, rural classrooms, and under-resourced communities across India.
                        </p>

                        <button
                            className="btn"
                            onClick={() => window.open('https://docs.google.com/forms/d/1Wn1rMAneJ-TNIaXn1Vn8-VNCV2MvAGO4TCmE4GvsHpE/viewform?edit_requested=true', '_blank')}
                            style={{
                                background: 'var(--color-primary)',
                                color: 'white',
                                fontSize: '1.2rem',
                                padding: '16px 40px',
                                boxShadow: '0 4px 15px rgba(224, 122, 95, 0.4)'
                            }}>
                            Gift AI Books to Schools
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ImpactSection;
