/*
|-------------------------------------------------------------------------------
| Colors                                    https://tailwindcss.com/docs/colors
|-------------------------------------------------------------------------------
|
| Here you can specify the colors used in your project. To get you started,
| we've provided a generous palette of great looking colors that are perfect
| for prototyping, but don't hesitate to change them for your project. You
| own these colors, nothing will break if you change everything about them.
|
| We've used literal color names ("red", "blue", etc.) for the default
| palette, but if you'd rather use functional names like "primary" and
| "secondary", or even a numeric scale like "100" and "200", go for it.
|
*/

let colors = {
    'transparent': 'transparent',

    'black': '#22292f',
    'grey-darkest': '#3d4852',
    'grey-darker': '#606f7b',
    'grey-dark': '#8795a1',
    'grey': '#b8c2cc',
    'grey-light': '#dae1e7',
    'grey-lighter': '#f1f5f8',
    'grey-lightest': '#f8fafc',
    'white': '#ffffff',

    'red-darkest': '#3b0d0c',
    'red-darker': '#621b18',
    'red-dark': '#cc1f1a',
    'red': '#e3342f',
    'red-light': '#ef5753',
    'red-lighter': '#f9acaa',
    'red-lightest': '#fcebea',

    'orange-darkest': '#462a16',
    'orange-darker': '#613b1f',
    'orange-dark': '#de751f',
    'orange': '#f6993f',
    'orange-light': '#faad63',
    'orange-lighter': '#fcd9b6',
    'orange-lightest': '#fff5eb',

    'yellow-darkest': '#453411',
    'yellow-darker': '#684f1d',
    'yellow-dark': '#f2d024',
    'yellow': '#ffed4a',
    'yellow-light': '#fff382',
    'yellow-lighter': '#fff9c2',
    'yellow-lightest': '#fcfbeb',

    'green-darkest': '#0f2f21',
    'green-darker': '#1a4731',
    'green-dark': '#1f9d55',
    'green': '#38c172',
    'green-light': '#51d88a',
    'green-lighter': '#a2f5bf',
    'green-lightest': '#e3fcec',

    'teal-darkest': '#0d3331',
    'teal-darker': '#20504f',
    'teal-dark': '#38a89d',
    'teal': '#4dc0b5',
    'teal-light': '#64d5ca',
    'teal-lighter': '#a0f0ed',
    'teal-lightest': '#e8fffe',

    'blue-darkest': '#12283a',
    'blue-darker': '#1c3d5a',
    'blue-dark': '#2779bd',
    'blue': '#3490dc',
    'blue-light': '#6cb2eb',
    'blue-lighter': '#bcdefa',
    'blue-lightest': '#eff8ff',

    'indigo-darkest': '#191e38',
    'indigo-darker': '#2f365f',
    'indigo-dark': '#5661b3',
    'indigo': '#6574cd',
    'indigo-light': '#7886d7',
    'indigo-lighter': '#b2b7ff',
    'indigo-lightest': '#e6e8ff',

    'purple-darkest': '#21183c',
    'purple-darker': '#382b5f',
    'purple-dark': '#794acf',
    'purple': '#9561e2',
    'purple-light': '#a779e9',
    'purple-lighter': '#d6bbfc',
    'purple-lightest': '#f3ebff',

    'pink-darkest': '#451225',
    'pink-darker': '#6f213f',
    'pink-dark': '#eb5286',
    'pink': '#f66d9b',
    'pink-light': '#fa7ea8',
    'pink-lighter': '#ffbbca',
    'pink-lightest': '#ffebef',
}

module.exports = {
    /*
    |-----------------------------------------------------------------------------
    | Colors                                  https://tailwindcss.com/docs/colors
    |-----------------------------------------------------------------------------
    |
    | The color palette defined above is also assigned to the "colors" key of
    | your Tailwind config. This makes it easy to access them in your CSS
    | using Tailwind's config helper. For example:
    |
    | .error { color: config('colors.red') }
    |
    */

    colors: colors,
    /*
    |-----------------------------------------------------------------------------
    | Fonts                                    https://tailwindcss.com/docs/fonts
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your project's font stack, or font families.
    | Keep in mind that Tailwind doesn't actually load any fonts for you.
    | If you're using custom fonts you'll need to import them prior to
    | defining them here.
    |
    | By default we provide a native font stack that works remarkably well on
    | any device or OS you're using, since it just uses the default fonts
    | provided by the platform.
    |
    | Class name: .font-{name}
    | CSS property: font-family
    |
    */

    fonts: {
        'sans': [
            'Roboto',
            'system-ui',
            'BlinkMacSystemFont',
            '-apple-system',
            'Segoe UI',
            'Roboto',
            'Oxygen',
            'Ubuntu',
            'Cantarell',
            'Fira Sans',
            'Droid Sans',
            'Helvetica Neue',
            'sans-serif',
        ],
        'serif': [
            'Constantia',
            'Lucida Bright',
            'Lucidabright',
            'Lucida Serif',
            'Lucida',
            'DejaVu Serif',
            'Bitstream Vera Serif',
            'Liberation Serif',
            'Georgia',
            'serif',
        ],
        'mono': [
            'Menlo',
            'Monaco',
            'Consolas',
            'Liberation Mono',
            'Courier New',
            'monospace',
        ],
    },
    /*
     |-----------------------------------------------------------------------------
     | Text colors                         https://tailwindcss.com/docs/text-color
     |-----------------------------------------------------------------------------
     |
     | Here is where you define your text colors. By default these use the
     | color palette we defined above, however you're welcome to set these
     | independently if that makes sense for your project.
     |
     | Class name: .text-{color}
     | CSS property: color
     |
     */
    textColors: colors,

    /*
    |-----------------------------------------------------------------------------
    | Background colors             https://tailwindcss.com/docs/background-color
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your background colors. By default these use
    | the color palette we defined above, however you're welcome to set
    | these independently if that makes sense for your project.
    |
    | Class name: .bg-{color}
    | CSS property: background-color
    |
    */
    backgroundColors: colors,


    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            width: {
                '1/7': '14.2857143%',
                '2/7': '28.5714286%',
                '3/7': '42.8571429%',
                '4/7': '57.1428571%',
                '5/7': '71.4285714%',
                '6/7': '85.7142857%',
            }
        },
        container: {
            center: true,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
