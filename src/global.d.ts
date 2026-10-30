// Suppress implicit any for lucide-react (no @types package available)
declare module 'lucide-react' {
    import * as React from 'react';
    export interface LucideProps extends React.SVGAttributes<SVGElement> {
        size?: string | number;
        strokeWidth?: string | number;
        absoluteStrokeWidth?: boolean;
    }
    export type LucideIcon = React.ForwardRefExoticComponent<LucideProps & React.RefAttributes<SVGSVGElement>>;
    const icons: Record<string, LucideIcon>;
    export default icons;
    export * from 'lucide-react/dist/esm/lucide-react';
}

declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.jpeg' {
    const value: string;
    export default value;
}

declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}
