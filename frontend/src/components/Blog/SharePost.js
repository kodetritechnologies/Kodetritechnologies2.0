'use client';

import React from 'react';
import toast from 'react-hot-toast';

const SharePost = ({ url, title }) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const shareLinks = [
        {
            name: 'Facebook',
            icon: 'icon icon-FacebookLogo',
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        },
        {
            name: 'X',
            icon: 'icon icon-XLogo',
            url: `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
        },
        {
            name: 'LinkedIn',
            icon: 'fab fa-linkedin-in',
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        },
        {
            name: 'WhatsApp',
            icon: 'fab fa-whatsapp',
            url: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
        },
    ];

    const copyToClipboard = (e) => {
        e.preventDefault();
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(url).then(() => {
                toast.success('Link copied to clipboard!', {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });
            }).catch((err) => {
                console.error('Failed to copy: ', err);
                toast.error('Failed to copy link');
            });
        }
    };

    return (
        <div className="social-left">
            <p>Share this post: </p>
            <ul className="tf-social-icon-2">
                {shareLinks.map((link) => (
                    <li key={link.name}>
                        <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <i className={link.icon}></i>
                        </a>
                    </li>
                ))}
                <li>
                    <a 
                        href="#" 
                        onClick={copyToClipboard}
                        title="Copy Link"
                    >
                        <i className="icon icon-CopySimple"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SharePost;
