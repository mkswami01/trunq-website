import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            borderTop: '1px solid var(--border)',
            padding: '4rem 2rem',
            marginTop: '4rem',
            textAlign: 'center',
            color: 'var(--text-secondary)'
        }}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Trunq. All rights reserved.</p>
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '1rem' }}>
                    <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
                    <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
                    <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
