/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
      colors: {
        'dark-blue': '#314363',
        'navy-blue': '#263857',
        'medium-blue': '#1C3663',
        'search-placeholder': '#6F8BBC',
        'light': '#DAE2EF',
        'grey-06': '#556E9A',
        'grey-05': '#7D7D7D',
        'grey-04': '#F4F4F4',
        'grey-03': '#7E98BA',
        'grey-02': '#D5D5D5',
        'grey-01': '#E3E3E3',
        'input-field': '#F8FBFF',
        'mild-black': '#263857',
        'mild-blue' : '#142A51',
        'sky-blue': '#E9F2FF',
      },
      fontSize: {
        '10': ['10px',{
          lineHeight: '140%'
        }],
        '13': ['13px',{
          lineHeight: '18.2px'
        }],
        '18': ['18px',{
          lineHeight: '140%'
        }],
        '20px': ['20px',{
          lineHeight: '140%'
        }],
        '24': ['24px',{
          lineHeight: '140%'
        }],
        '45': ['45px', {
          lineHeight: '63px',
        }],
      },
      borderRadius: {
        'none': '0',
        '6': '6px',
        '8': '8px',
        '12': '12px',
        '13' : '13px',
        '16': '16px',
        '30': '30px',
        '35' : '35px',
      },
      boxShadow: {
        'sh-gray': '0px 4px 19px 0px rgba(210, 209, 209, 0.25)',
        'sh-blue': '0px 20px 50px 0px rgba(53, 69, 98, 0.15), 0px 25px 70px 0px rgba(53, 69, 98, 0.15)',
      }
    },
  },
  plugins: [],
}