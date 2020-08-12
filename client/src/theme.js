module.exports = {
	breakpoints: ['600px', '900px', '1200px', '1800px'],
	space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	fonts: {
		body: 'raleway, sans-serif',
		heading: 'orbitron, sans-serif',
		monospace: 'Menlo, monospace',
	},
	fontSizes: [
		'.5rem',
		'1rem',
		'1.5rem',
		'2rem',
		'3rem',
		'4rem',
		'5rem',
		'7rem',
		'12rem',
	],
	fontWeights: {
		body: 400,
		heading: 700,
		bold: 700,
	},
	lineHeights: {
		body: 1.5,
		heading: 1.125,
	},
	colors: {
		text: '#000',
		background: '#fff',
		primary: '#6e1fad',
		secondary: '#3c22be',
		muted: '#f6f6f6',
		accent: '#ccb81e',
		danger: '#ee89b5',
		primaryOpaque: 'rgba(110,31,173,0.75)',
		secondaryOpaque: 'rgba(60,34,190,0.25)',
		accentOpaque: 'rgba(204,184,30,0.25)',
	},
	borders: {
		card: '8px solid #141414',
	},
	text: {
		h3: {
			fontSize: ['1rem', '2rem'],
		},
		cardHeading: {
			textAlign: 'center',
			marginBottom: '2rem',
		},
		cardText: {
			textAlign: 'center',
		},
	},
	links: {
		homeLink: {
			fontSize: ['.5rem', '1rem'],
			textDecoration: 'none',
			color: 'primary',
			transition: 'all .5s ease',
			textShadow: '2px 2px 3px #ccb81e',
			'&:hover': {
				transform: 'scale(1.1)',
				color: 'secondary',
				textDecoration: 'underline overline',
			},
		},
		savedLink: {
			textTransform: 'uppercase',
			fontSize: [0, 1],
			padding: '0 1rem',
			color: 'accent',
			transition: 'all .2s ease-in',
			textShadow: '3px 2px 4px rgba(234,176,243,1)',
			cursor: 'pointer',
			textDecoration: 'none',
			textAlign: 'center',

			'&:hover': {
				color: 'danger',
			},
		},
	},
	images: {
		cardImg: {
			width: '90%',
			height: 'auto',
		},
		aboutImg: {
			width: ['100%', null, '60%', null, '50%'],
			borderRadius: '50%',
			marginY: ['30px', null, '50px', null, '70px'],
			boxShadow: '10px 10px 48px 0px rgba(0,0,0,0.5)',
			backgroundColor: 'accent',
			padding: '15px',
		},
	},
	cards: {
		primary: {
			backgroundColor: 'secondary',
			color: 'muted',
			display: 'flex',
			flexDirection: ['column', null, 'row'],
			alignItems: 'center',
			width: '90%',
			margin: '1rem auto',
			padding: '1.5rem',
			fontSize: [1, 2, 3],
			textDecoration: 'none',
			cursor: 'pointer',
			borderRadius: '.5rem',
			border: '1px solid black',
			transition: 'all .4s linear',

			'&:hover': {
				transform: 'scale(1.02)',
			},
		},
	},
	layout: {
		container: {
			display: 'flex',
			flexDirection: 'column',
			width: ['100%', null, '90%', null, '80%'],
			position: 'relative',
			minHeight: '100vh',
			// overflow: "hidden",
			paddingBottom: ['50px', '75px', '125px', '150px'],
		},
	},
	buttons: {
		primary: {
			fontSize: '2rem',
			bg: 'primary',
			padding: '.25rem .75rem',
			borderRadius: '10px',
			verticalAlign: 'center',
			display: 'flex',
			alignItems: 'center',
			boxShadow: '10px 10px 10px -7px rgba(0,0,0,0.49)',
			cursor: 'pointer',
		},
	},
	variants: {
		cardInfo: {
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'space-around',
			width: '100%',
		},
	},
	forms: {
		label: {
			fontSize: [2, null, 3],
			marginBottom: '5px',
		},
		input: {
			marginBottom: '10px',
			bg: 'muted',
			color: 'text',
			fontSize: [1, null, 2],
		},
		textarea: {
			minHeight: '150px',
			bg: 'muted',
			color: 'text',
			resize: 'none',
			fontSize: [1, null, 2],
		},
	},
	styles: {
		root: {
			fontFamily: 'body',
			lineHeight: 'body',
			fontWeight: 'body',
			background:
				'linear-gradient(349deg, rgba(113,37,164,0.5) 0%, rgba(25,4,48,0.5) 68%, rgba(26,19,187,0.5) 100%)',
			backgroundSize: 'cover',
			minHeight: '100vh',
			fontSize: '62.5%',
			borderSizing: 'border-box',
		},
	},
};
