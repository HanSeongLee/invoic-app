import React from 'react';
import NextHead from 'next/head';

interface IProps {
    title?: string;
    description?: string;
    url?: string;
    ogImageUrl?: string;
};

const Head: React.FC<IProps> = ({ title, description, url, ogImageUrl }) => {
    return (
        <NextHead>
            <meta charSet="UTF-8"/>
            <meta name="viewport"
                  content="width=device-width, initial-scale=1.0"
            />

            <title>{title}</title>
            <meta name="description"
                  content={description}
            />

            <meta name="description"
                  content={description}
            />

            <meta property="og:url"
                  content={url}
            />
            <meta property="og:type"
                  content="website"
            />
            <meta property="og:title"
                  content={title}
            />
            <meta property="og:description"
                  content={description}
            />
            <meta property="og:image"
                  content={ogImageUrl}
            />

            <meta name="twitter:card"
                  content="summary_large_image"
            />
            <meta property="twitter:url"
                  content={url}
            />
            <meta name="twitter:title"
                  content={title}
            />
            <meta name="twitter:description"
                  content={description}
            />
            <meta name="twitter:image"
                  content={ogImageUrl}
            />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
        </NextHead>
    );
};

export default Head;
