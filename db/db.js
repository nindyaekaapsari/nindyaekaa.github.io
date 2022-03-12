export default {
	bio: {
		about: {
			text: [
				"Hi &#128075;",
				"I'm Vinay Somawat. I’m currently working as a software engineer@Novopay specialized in JavaScript Applications. I did my undergrad in CS from NIT Warangal.",
				"I'm a developer, geek and curious human besides being an OpenSource enthusiast. I have experience of delivering solutions for interesting problems from startup and industry space.",
				"I love to read, listen to music, and travel.",
			],
		},
		contact: {
			text: [
				"If you would like to get in touch with me, be it for analytical purposes, business, or to just say hi, feel free to send me an email. My email address is: vinaysomawat40@gmail.com",
			],
		},
	},
	projects: {
		web: [
			{
				projectName: "Covid-19 and Pneumonia Detection through Chest X-rays",
				image: "images/fp5.jpeg",
				summary:
					"Website for Covid-19 and Pneumonia detection through chest X-rays using transfer learning method and getting 92% accuracy in evaluation model.",
				preview: "https://skripsi-fp5-efficientnet.herokuapp.com/",
				techStack: [
					"Python",
					"Deep Learning",
					"Image Classification",
					"Flask",
					"Heroku",
				],
			},
			{
				projectName: "Customer Segmentation",
				image: "images/fp4.jpeg",
				summary:
					"Model deployment website about customer segmentation to define marketing strategy using clustering method",
				preview: "https://h8-fp4-customer-segmentation.herokuapp.com/",
				techStack: ["Python","Unsupervised Learning", "Flask", "Heroku"],
			},
			{
				projectName: "Heart Failure Prediction",
				image: "images/fp3.jpeg",
				summary:
					"Model deployment website that predict heart failure using ensemble method",
				preview: "https://h8-fp3-model-deployment.herokuapp.com/",
				techStack: ["Python","Supervised Learning", "Flask", "Heroku"],
			},
			{
				projectName: "Next-day Rain Prediction",
				image: "images/fp2.jpeg",
				summary:
					"Predict next-day rain in Australia using Logistic Regression method",
				preview: "https://h8-fp2-model-deployment.herokuapp.com/",
				techStack: ["Python", "Regression", "Flask", "Heroku"],
			},
		],
		ml: [
			{
				projectName: "Book Prices Prediction",
				image: "images/bp.jpeg",
				summary:
					"Model prediction of book sales prices based on appropriate features using semi-supervised learning",
				preview:
					"https://github.com/nindyaekaapsari/Prediction-of-book-prices",
				techStack: ["Semi-supervised Learning", "Python"],
			},
			{
				projectName: "Data Visualization",
				image: "images/as1.jpeg",
				summary:
					"Create visualization for London Crime data from Kaggle",
				preview: "https://github.com/nindyaekaapsari/H8_002/tree/master/PYTN_Assgn_1_002_Nindya%20Eka%20Apsari",
				techStack: ["Data Visualization", "Python"],
			},
			{
				projectName: "Statistical Analysis",
				image: "images/as2.jpeg",
				summary:
					"Analyze NYC property sales dataset from kaggle using statistical approach.",
				preview: "https://github.com/nindyaekaapsari/H8_002/tree/master/PYTN_Assgn_2_002_Nindya%20Eka%20Apsari",
				techStack: ["Statistics", "Python"],
			},
		],
		android: [
			{
				projectName: "NITW-CSE",
				image: "images/nitwcse.jpg",
				summary:
					"The Application display details of Department courses, reference books, research, publication and faculty profile.",
				preview: "https://github.com/vinaysomawat/NITW-CSE",
				techStack: ["JAVA", "XML", "Android"],
			},
			{
				projectName: "CareerHigh-App",
				image: "images/carrerhigh.png",
				summary:
					"The Application display the webpages of website careerhigh.in in android devices.",
				preview: "https://github.com/vinaysomawat/CareerHigh-Android",
				techStack: ["JAVA", "XML", "Android"],
			},
		],
		freelance: [
			{
				projectName: "SnylloAir.com",
				image: "images/snylloair.png",
				summary:
					"Developed a company website to showcase the purpose, services and products provided by the company to audience.",
				preview: "https://www.snylloair.com/",
				techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
			},
			{
				projectName: "Delivery+",
				image: "images/AM-Logo-.png",
				summary:
					"Android Application to display website in android devices.",
				preview:
					"https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
				techStack: ["Android", "JAVA", "Play Store"],
			},
		],
	},
	experience: [
		{
			title: "Novopay Solutions Pvt. Ltd.",
			duration: "June 2020 - Present",
			subtitle: "Software Engineer, SDE Intern",
			details: [
				"Supporting both frontend & backend teams for AEPS, DMT transaction, CMS Service, gateways.",
				"Working on biometric eKYCs, CDM card and onboarding retailers flows.",
			],
			tags: [
				"JavaScript",
				"Angular",
				"React",
				"Bootstrap",
				"Nodejs",
				"Jenkins",
			],
			icon: "qrcode",
		},
		{
			title: "ThinkPedia LLP",
			duration: "May 2019 - June 2019",
			subtitle: "SDE Intern",
			details: [
				"Worked as a full stack developer to support tech team.",
				"Developed a customer Web Application from scratch for social media management.",
			],
			tags: ["JavaScript", "Angular", "Bootstrap", "Java", "Spring Boot"],
			icon: "group",
		},
	],
	education: [
		{
			title: "Bachelors in Computer Science and Engineering",
			duration: "",
			subtitle: "National Institute of Technology, Warangal",
			details: [
				"Qualified GATE-2020.",
				"Active Competitive Programmer with CodeChef Rating 1841*.",
				"Received 500+ stars and 300+ forks on GitHub projects.",
			],
			tags: [
				"Data Structures & Algorithms",
				"Operating Systems",
				"Database Management System",
				"Computer Networks",
				"Compiler Designing",
				"Cloud Computing",
			],
			icon: "graduation-cap",
		},
		{
			title: "Class 11-12th in Science and Mathematics",
			duration: "",
			subtitle: "Board of Secondary Education, Rajasthan",
			details: [
				"Qualified JEE Advanced, Main & BITSAT.",
				"Secured 99.5 percentile in Class 12th Boards Examinations.",
			],
			tags: ["Physics", "Chemistry", "Mathematics"],
			icon: "book",
		},
	],
	footer: [
		{
			label: "Dev Profiles",
			data: [
				{
					text: "Stackoverflow",
					link: "https://stackoverflow.com/users/8461233/vinay-somawat",
				},
				{
					text: "GitHub",
					link: "https://github.com/vinaysomawat",
				},
				{
					text: "LeetCode",
					link: "https://leetcode.com/somawatvinay/",
				},
			],
		},
		{
			label: "Resources",
			data: [
				{
					text: "Enable Dark/Light Mode",
					func: "enableDarkMode()",
				},
				{
					text: "Print this page",
					func: "window.print()",
				},
				{
					text: "Clone this page",
					link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
				},
			],
		},
		{
			label: "Social Profiles",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/vinaysomawat/",
				},
				{
					text: "Twitter",
					link: "https://twitter.com/thesigmakid",
				},
				{
					text: "Buy me a coffee",
					link: "https://www.buymeacoffee.com/r194dME8y",
				},
			],
		},
		{
			label: "copyright-text",
			data: [
				"Made with &hearts; by Vinay Somawat.",
				"&copy; No Copyrights. Feel free to use this template."
			],
		},
	],
};
