module.exports = {
    purge: ['./dist/*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            black: "#000000",
            gray: {
                50: "#f2f2f3",
                100: "#e5e6e7",
                200: "#cacdce",
                300: "#b0b3b5",
                400: "#959a9d",
                500: "#7b8184",
                600: "#62676a",
                700: "#4a4d50",
                800: "#313435",
                900: "#181a1b"
            },
            blue: {
                50: "#e5f4ff",
                100: "#cceaff",
                200: "#99d4ff",
                300: "#66bfff",
                400: "#33aaff",
                500: "#0095ff",
                600: "#0077cc",
                700: "#005999",
                800: "#003b66",
                900: "#001e33"
            },
            indigo: {
                50: "#e5e8ff",
                100: "#ccd0ff",
                200: "#99a2ff",
                300: "#6673ff",
                400: "#3344ff",
                500: "#0015ff",
                600: "#0011cc",
                700: "#000d99",
                800: "#000866",
                900: "#000433"
            },
            violet: {
                50: "#f0e5ff",
                100: "#e1ccff",
                200: "#c399ff",
                300: "#a666ff",
                400: "#8833ff",
                500: "#6a00ff",
                600: "#5500cc",
                700: "#400099",
                800: "#2a0066",
                900: "#150033"
            },
            purple: {
                50: "#fde5ff",
                100: "#fbccff",
                200: "#f699ff",
                300: "#f266ff",
                400: "#ee33ff",
                500: "#ea00ff",
                600: "#bb00cc",
                700: "#8c0099",
                800: "#5d0066",
                900: "#2f0033"
            },
            pink: {
                50: "#ffe5f4",
                100: "#ffccea",
                200: "#ff99d5",
                300: "#ff66bf",
                400: "#ff33aa",
                500: "#ff0095",
                600: "#cc0077",
                700: "#990059",
                800: "#66003c",
                900: "#33001e"
            },
            red: {
                50: "#ffe5e8",
                100: "#ffccd0",
                200: "#ff99a1",
                300: "#ff6673",
                400: "#ff3344",
                500: "#ff0015",
                600: "#cc0011",
                700: "#99000d",
                800: "#660008",
                900: "#330004"
            },
            orange: {
                50: "#fff0e5",
                100: "#ffe1cc",
                200: "#ffc499",
                300: "#ffa666",
                400: "#ff8833",
                500: "#ff6a00",
                600: "#cc5500",
                700: "#994000",
                800: "#662b00",
                900: "#331500"
            },
            yellow: {
                50: "#fffde5",
                100: "#fffbcc",
                200: "#fff699",
                300: "#fff266",
                400: "#ffee33",
                500: "#ffea00",
                600: "#ccbb00",
                700: "#998c00",
                800: "#665e00",
                900: "#332f00"
            },
            lime: {
                50: "#f4ffe5",
                100: "#eaffcc",
                200: "#d5ff99",
                300: "#bfff66",
                400: "#aaff33",
                500: "#95ff00",
                600: "#77cc00",
                700: "#599900",
                800: "#3c6600",
                900: "#1e3300"
            },
            green: {
                50: "#e8ffe5",
                100: "#d0ffcc",
                200: "#a2ff99",
                300: "#73ff66",
                400: "#44ff33",
                500: "#15ff00",
                600: "#11cc00",
                700: "#0d9900",
                800: "#096600",
                900: "#043300"
            },
            teal: {
                50: "#e5fff0",
                100: "#ccffe1",
                200: "#99ffc4",
                300: "#66ffa6",
                400: "#33ff88",
                500: "#00ff6a",
                600: "#00cc55",
                700: "#009940",
                800: "#00662b",
                900: "#003315"
            },
            cyan: {
                50: "#e5fffd",
                100: "#ccfffb",
                200: "#99fff7",
                300: "#66fff2",
                400: "#33ffee",
                500: "#00ffea",
                600: "#00ccbb",
                700: "#00998c",
                800: "#00665e",
                900: "#00332f"
            }
        },
        extend: {
            fontFamily: {
                'bellota': ['Bellota', 'Helvetica', 'Arial', 'sans-serif']
            },
            fontSize: {
                "13px": "13px"
            },
            width: {
                '50': '12.5rem',
                '240': '60rem',
                '180': '45rem',
            },
            padding: {
                "0.16": "0.04em"
            },
            maxWidth: {
                '1/4': '25%',
                '1/2': '50%',
                '1/3': '33.333333%',
                '3/4': '75%',
                '240': '60rem',
                '100': '45rem',
            },
            flex: {
                '0-0-25': '0 0 25%',
                '0-0-33': '0 0 33.333333%',
                '0-0-50': '0 0 50%',
                '0-0-75': '0 0 75%'
            },
            transitionProperty: {
                'element-size': 'width, height, max-width, max-height',
                'max-height': 'max-height'
            },
            transitionTimingFunction: {
                'in-bezier-1': ' cubic-bezier(0, 1, 0, 1)'
            },
            boxShadow: {
              'inner-2': 'inset 1px 4px 9px -6px rgb(0 0 0 / 50%)'
            },
        },
    },
    variants: {
        extend: {
            transitionProperty: ['hover', 'focus']
        },
    },
    plugins: [],
}