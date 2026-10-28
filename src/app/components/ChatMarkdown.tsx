import React from 'react';
import { Link } from 'react-router-dom';

interface ChatMarkdownProps {
    content: string;
    onLinkClick?: (path: string) => void;
}

/**
 * Lightweight, safe Markdown renderer for chatbot responses.
 * Renders bold text, bullet points, and transforms internal markdown links
 * [Label](/path) into interactive React Router <Link> elements.
 */
export const ChatMarkdown: React.FC<ChatMarkdownProps> = ({ content, onLinkClick }) => {
    // Split by lines to preserve bullet structures
    const lines = content.split('\n');

    const renderFormattedLine = (line: string, key: number) => {
        // Check if line is a bullet item
        const isBullet = line.trim().startsWith('•') || line.trim().startsWith('-') || line.trim().startsWith('✓');
        const cleanLine = isBullet ? line.trim().replace(/^[•\-✓]\s*/, '') : line;

        // Parse markdown links [Label](url) and bold **text**
        const elements: React.ReactNode[] = [];
        let remaining = cleanLine;
        let elementIdx = 0;

        // Combined regex for [Link Text](url) and **bold text**
        const tokenRegex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*)/;

        while (remaining.length > 0) {
            const match = remaining.match(tokenRegex);

            if (!match) {
                elements.push(remaining);
                break;
            }

            const matchIndex = match.index || 0;
            if (matchIndex > 0) {
                elements.push(remaining.substring(0, matchIndex));
            }

            if (match[2] && match[3]) {
                // Link: match[2] = label, match[3] = url
                const label = match[2];
                const url = match[3];

                if (url.startsWith('/')) {
                    elements.push(
                        <Link
                            key={`link-${key}-${elementIdx++}`}
                            to={url}
                            onClick={() => onLinkClick?.(url)}
                            className="text-blue-600 hover:text-blue-800 font-bold underline underline-offset-2 transition-colors cursor-pointer"
                        >
                            {label}
                        </Link>
                    );
                } else {
                    elements.push(
                        <a
                            key={`ext-link-${key}-${elementIdx++}`}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 font-bold underline underline-offset-2 transition-colors"
                        >
                            {label}
                        </a>
                    );
                }
            } else if (match[4]) {
                // Bold: match[4] = text
                elements.push(
                    <strong key={`bold-${key}-${elementIdx++}`} className="font-bold text-slate-900">
                        {match[4]}
                    </strong>
                );
            }

            remaining = remaining.substring(matchIndex + match[0].length);
        }

        if (isBullet) {
            return (
                <div key={key} className="flex items-start gap-1.5 my-0.5">
                    <span className="text-blue-600 font-bold text-xs shrink-0 select-none">•</span>
                    <span className="flex-1 text-[12px] leading-relaxed text-slate-700">{elements}</span>
                </div>
            );
        }

        if (cleanLine.trim() === '') {
            return <div key={key} className="h-1.5" />;
        }

        return (
            <p key={key} className="text-[12px] leading-relaxed text-slate-700 my-0.5">
                {elements}
            </p>
        );
    };

    return <div className="space-y-0.5">{lines.map((line, idx) => renderFormattedLine(line, idx))}</div>;
};
