import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            text: "I have gone through the book “Pilanka Pain AI” written by Prof. Debu Panda and Prof. Prasant Behera. It is an excellent work. This is truly an amazing initiative with a strong vision.",
            name: "Dr. Sujata Chakravarty",
            role: "Dean of the School of Engineering",
            city: "Odisha"
        },
        {
            text: "The combination of videos and stories is perfect. My son isn't just coding now; he's asking questions about ethics and fairness.",
            name: "Rajesh Singh",
            role: "Parent",
            city: "Odisha"
        },
        {
            text: "A much-needed resource. It simplifies complex topics like Machine Learning using relatable Indian examples like cricket and traffic management.",
            name: "Priya Menon",
            role: "Educationist",
            city: "Odisha"
        },
        {
            text: "Finally, a book that understands how Indian kids learn! The examples from our daily life make AI so easy to grasp.",
            name: "Anita Desai",
            role: "Mother",
            city: "Mumbai"
        },
        {
            text: "As a principal, I strongly recommend this for primary schools. It builds the right foundation before they jump into coding.",
            name: "Mr. Verma",
            role: "School Principal",
            city: "Delhi"
        },
        {
            text: "My daughter loves the animated videos! She explains AI concepts to her grandparents now. Truly empowering.",
            name: "Karthik R.",
            role: "Parent",
            city: "Bangalore"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setItemsPerPage(3);
            else if (window.innerWidth >= 640) setItemsPerPage(2);
            else setItemsPerPage(1);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const canGoNext = currentIndex + itemsPerPage < testimonials.length;
    const canGoPrev = currentIndex > 0;

    const handleNext = () => {
        if (canGoNext) setCurrentIndex(prev => prev + 1);
    };

    const handlePrev = () => {
        if (canGoPrev) setCurrentIndex(prev => prev - 1);
    };

    return (
        <section className="section" style={{ background: '#FFFDF5' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
                        Loved by <span style={{ color: 'var(--color-primary)' }}>Parents & Teachers</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                        Join thousands of families preparing their kids for the future.
                    </p>
                </div>

                <div style={{ position: 'relative', padding: '0 20px' }}>

                    {/* Previous Button */}
                    <button
                        onClick={handlePrev}
                        disabled={!canGoPrev}
                        style={{
                            position: 'absolute',
                            left: '-20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            background: canGoPrev ? 'white' : 'rgba(255,255,255,0.5)',
                            border: '1px solid #eee',
                            borderRadius: '50%',
                            width: '48px',
                            height: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: 'var(--shadow-md)',
                            cursor: canGoPrev ? 'pointer' : 'not-allowed',
                            color: canGoPrev ? 'var(--color-primary)' : '#ccc'
                        }}
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        disabled={!canGoNext}
                        style={{
                            position: 'absolute',
                            right: '-20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            background: canGoNext ? 'white' : 'rgba(255,255,255,0.5)',
                            border: '1px solid #eee',
                            borderRadius: '50%',
                            width: '48px',
                            height: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: 'var(--shadow-md)',
                            cursor: canGoNext ? 'pointer' : 'not-allowed',
                            color: canGoNext ? 'var(--color-primary)' : '#ccc'
                        }}
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div style={{ overflow: 'hidden', margin: '0 -15px' }}>
                        <motion.div
                            style={{
                                display: 'flex',
                                width: '100%'
                            }}
                            animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    style={{
                                        minWidth: `${100 / itemsPerPage}%`,
                                        padding: '0 15px'
                                    }}
                                >
                                    <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ marginBottom: '20px' }}>
                                            <Quote size={40} className="text-accent" style={{ opacity: 0.5 }} />
                                        </div>
                                        <p style={{
                                            fontSize: '1.1rem',
                                            lineHeight: '1.6',
                                            color: 'var(--color-secondary)',
                                            marginBottom: '24px',
                                            flex: 1,
                                            fontStyle: 'italic'
                                        }}>
                                            "{testimonial.text}"
                                        </p>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                            <div style={{
                                                width: '50px',
                                                height: '50px',
                                                borderRadius: '50%',
                                                background: `hsl(${index * 60}, 70%, 90%)`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: 'bold',
                                                color: 'var(--color-secondary)',
                                                flexShrink: 0
                                            }}>
                                                {testimonial.name[0]}
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: 'bold', color: 'var(--color-secondary)' }}>{testimonial.name}</div>
                                                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                                                    {testimonial.role}, {testimonial.city}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
