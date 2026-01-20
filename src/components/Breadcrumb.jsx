import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ links }) => {
    const lastIndex = links.length - 1;
    return (
        <div className="flex items-baseline flex-wrap justify-center my-3.75 mx-0">
            {links.map((link, index) => (
                <React.Fragment key={index}>
                    {index !== lastIndex ? (
                        <Link href={link.href} className="no-underline flex items-center text-(--SlateBlueText) font-normal md:text-21 text-lg hover:underline after:relative after:content-[''] after:ml-2.5 after:mr-3.25 after:my-0 after:inline-block after:top-px after:w-2 after:h-2 after:border-r-2 after:border-solid after:border-b-2 after:border-(--secondary) after:-rotate-45">
                            {link.text}
                        </Link>
                    ) : (
                        <span className="text-(--secondary) md:text-lg text-lg mx-2.5">{link.text}</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Breadcrumb;