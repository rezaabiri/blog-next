const config: {
    theme: { extend: { dropShadow: { all: string }; colors: { background: string; foreground: string } } };
    darkMode: string;
    content: string[]
} = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/tw-elements/js/**/*.js"

    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            dropShadow: {
                'all': '0 rgba(0, 0, 0)',
            }
        },
    },
    darkMode: "class",
};
export default config;
