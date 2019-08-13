import {
	container,
	section,
	sectionDark,
	mlAuto,
	mrAuto,
	title,
	description,
	instagramColor,
	redditColor,
	cardTitle,
	roseColor,
	blackColor,
	whiteColor,
	grayColor,
	hexToRgb
} from '../../material-kit-pro-react.jsx';

import popoverStyle from '../../popoverStyles';

const pricingSection = {
	container,
	instagramColor,
	redditColor,
	mlAuto,
	mrAuto,
	title,
	cardTitle,
	description,
	...popoverStyle,
	tooltip: {
		padding: '10px 15px',
		minWidth: '130px',
		color: whiteColor,
		lineHeight: '1.7em',
		background: 'rgba(' + hexToRgb(grayColor[15]) + ',0.9)',
		border: 'none',
		borderRadius: '3px',
		boxShadow:
			'0 8px 10px 1px rgba(' +
			hexToRgb(blackColor) +
			', 0.14), 0 3px 14px 2px rgba(' +
			hexToRgb(blackColor) +
			', 0.12), 0 5px 5px -3px rgba(' +
			hexToRgb(blackColor) +
			', 0.2)',
		maxWidth: '200px',
		textAlign: 'center',
		fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
		fontSize: '0.875em',
		fontStyle: 'normal',
		fontWeight: '400',
		textShadow: 'none',
		textTransform: 'none',
		letterSpacing: 'normal',
		wordBreak: 'normal',
		wordSpacing: 'normal',
		wordWrap: 'normal',
		whiteSpace: 'normal',
		lineBreak: 'auto'
	},
	cardTitleWhite: {
		...cardTitle,
		color: whiteColor + '  !important'
	},
	sectionGray: {
		background: grayColor[14]
	},
	intro: { padding: '0 0 20px 0', width: '80%', margin: '0 auto' },
	section: {
		...section,
		...sectionDark,
		position: 'relative',
		'& $container': {
			position: 'relative',
			zIndex: '2'
		},
		'& $description': {
			color: 'rgba(' + hexToRgb(whiteColor) + ', 0.5)'
		},
		'& $cardCategory': {
			color: 'rgba(' + hexToRgb(whiteColor) + ', 0.76)'
		},
		'& $title': {
			color: whiteColor,
			marginBottom: '10px'
		},
		'&:after': {
			position: 'absolute',
			zIndex: '1',
			width: '100%',
			height: '100%',
			display: 'block',
			left: '0',
			top: '0',
			content: "''",
			backgroundColor: 'rgba(' + hexToRgb(blackColor) + ', 0.7)'
		}
	},
	pricing1: {
		'&$section:after': {
			backgroundColor: 'rgba(' + hexToRgb(blackColor) + ', 0.8)'
		}
	},
	pricing: {
		padding: '15px 0',
		width: '100%'
	},
	textCenter: {
		textAlign: 'center'
	},
	textRight: {
		textAlign: 'right'
	},
	textLeft: {
		textAlign: 'left',
		padding: '0',
		margin: '0'
	},
	sectionSpace: {
		height: '70px',
		display: 'block'
	},
	cardCategory: {
		...description
	},
	cardCategoryWhite: {
		color: whiteColor
	},
	cardDescription: {
		...description
	},
	justifyContentCenter: {
		WebkitBoxPack: 'center !important',
		MsFlexPack: 'center !important',
		justifyContent: 'center !important'
	},
	icon: {
		color: 'rgba(' + hexToRgb(whiteColor) + ', 0.76)',
		margin: '10px auto 0',
		width: '130px',
		height: '130px',
		border: '1px solid ' + grayColor[14],
		borderRadius: '50%',
		lineHeight: '174px',
		'& .fab,& .fas,& .far,& .fal,& .material-icons': {
			fontSize: '55px',
			lineHeight: '55px'
		},
		'& svg': {
			width: '55px',
			height: '55px'
		}
	},
	iconWhite: {
		color: whiteColor
	},
	iconRose: {
		color: roseColor[0]
	},
	marginTop30: {
		marginTop: '30px'
	},
	marginBottom20: {
		marginBottom: '20px'
	},
	marginBottom30: {
		marginBottom: '30px'
	}
};

export default pricingSection;
