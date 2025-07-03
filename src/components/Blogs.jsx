import React, { useState } from "react";
import { FiSearch, FiPlus, FiMinus } from "react-icons/fi";
import BackButton from "./BackButton";
import '@fontsource/krona-one/400.css';

const blogPosts = [
	{
		id: 1,
		title: "The Shift Toward Eco-Friendly Industrial Packaging",
		description:
			"Explore how sustainable materials are replacing traditional plastics in sectors like automotive and manufacturing.",
	},
	{
		id: 2,
		title: "Why Aluminum-Backed Paper Is a Game Changer",
		description:
			"Discover how Konnect's collaboration with Hindalco is transforming packaging with biodegradable and corrosion-resistant solutions.",
	},
	{
		id: 3,
		title: "Solving the Problem of Packaging Waste in Heavy Industries",
		description:
			"Learn how single-layer biodegradable bags reduce cost, waste, and carbon footprint while maintaining strength and protection.",
	},
	{
		id: 4,
		title: "How Konnect Aligns with ESG & ZED Goals",
		description:
			"Find out how our products help businesses meet environmental mandates and secure government tenders through certified packaging.",
	},
];

const faqData = [
	{
		id: 1,
		question: "What makes Konnect's packaging eco-friendly?",
		answer:
			"Our packaging is made using biodegradable materials and solvent-free processes, significantly reducing environmental impact.",
	},
	{
		id: 2,
		question: "Are your products suitable for export?",
		answer:
			"Yes, our packaging solutions are certified with ROHS, CE, and ZED—making them ideal for global markets and government tenders.",
	},
	{
		id: 3,
		question: "Can I customize the size and print of the bags?",
		answer:
			"Absolutely. We offer full customization options including size, lamination type, and branding prints to meet your exact requirements.",
	},
	{
		id: 4,
		question: "How long does VCI protection last in your packaging?",
		answer:
			"Depending on the product type, our VCI (Volatile Corrosion Inhibitor) solutions offer protection from 8 months up to 5 years.",
	},
];

const SearchBar = ({ placeholder, searchTerm, setSearchTerm }) => (
	<div className="relative group">
		<div className="rounded-2xl border-2 border-gray-200 bg-white/70 backdrop-blur-sm h-[56px] w-[561px] max-md:w-[90%] max-sm:h-[52px] max-sm:w-[95%] relative shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-300 focus-within:border-gray-800 focus-within:ring-2 focus-within:ring-gray-800/10 flex items-center px-4">
			<input
				type="text"
				placeholder={placeholder}
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				className="flex-1 text-lg font-medium text-gray-800 bg-transparent outline-none placeholder-gray-500 placeholder:font-normal max-sm:text-base pr-4"
			/>
			<div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors duration-200 group-hover:scale-105 flex-shrink-0">
				<FiSearch className="w-5 h-5 text-white" />
			</div>
		</div>
		{/* Search suggestions indicator */}
		{searchTerm && (
			<div className="absolute top-full left-0 right-0 mt-1 text-xs text-gray-500 px-6">
				{searchTerm.length > 0 ? `Searching for "${searchTerm}"...` : ''}
			</div>
		)}
	</div>
);

const ListItem = ({ title, description, isExpanded, onToggle }) => (
	<div className="flex relative items-start mb-5">
		<div className="w-2 h-2 bg-gray-800 rounded-full absolute left-0 top-2 flex-shrink-0" />
		<div className="flex-1 ml-4 max-w-[518px]">
			<div className="mb-1.5 text-xl font-medium text-gray-800 max-md:text-lg max-sm:text-base cursor-pointer" onClick={onToggle}>
				{title}
			</div>
			<div className={`text-base text-gray-800 max-md:text-sm max-sm:text-sm transition-all duration-300 ease-in-out overflow-hidden ${
				isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
			}`}>
				{description}
			</div>
		</div>
		<div className="relative">
			<div className="w-[42px] h-[42px] bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors duration-200" onClick={onToggle}>
				{isExpanded ? <FiMinus className="w-6 h-6 text-white" /> : <FiPlus className="w-6 h-6 text-white" />}
			</div>
		</div>
	</div>
);

const SectionDivider = () => (
	<div className="mx-0 my-5 h-px bg-gray-800 w-[582px] max-sm:w-full" />
);

const ContentSection = ({
	title,
	subtitle,
	description,
	searchPlaceholder,
	items,
	topOffset,
	searchTerm,
	setSearchTerm,
	expandedItems,
	setExpandedItems,
}) => {
	const filteredItems = items.filter(item => {
		const searchText = (item.title || item.question || '').toLowerCase() + 
			(item.description || item.answer || '').toLowerCase();
		return searchText.includes(searchTerm.toLowerCase());
	});

	const handleToggle = (id) => {
		setExpandedItems(prev => ({
			...prev,
			[id]: !prev[id]
		}));
	};

	return (
		<div className="relative z-[2]">
			{/* Desktop Layout */}
			<div className="hidden md:block">
				<div
					className={`absolute text-7xl text-gray-800 h-[88px] ${
						title === "BLOG" ? "left-[799px]" : "left-[816px]"
					} w-[280px]`}
					style={{ 
						fontFamily: 'Krona One',
						top: `${topOffset}px`
					}}
				>
					{title}
				</div>
				<div
					className={`absolute text-2xl font-medium text-gray-800 h-[37px] ${
						title === "BLOG" ? "left-[830px]" : "left-[821px]"
					} w-[656px]`}
					style={{ 
						fontFamily: 'Krona One',
						top: `${topOffset + 82}px`
					}}
				>
					{subtitle}
				</div>
				<div
					className={`absolute text-lg text-gray-800 h-[72px] ${
						title === "BLOG" ? "left-[830px]" : "left-[821px]"
					} w-[569px]`}
					style={{ 
						fontFamily: 'Krona One',
						top: `${topOffset + 127}px`
					}}
				>
					{description}
				</div>
				<div
					className={`absolute ${
						title === "BLOG" ? "left-[825px]" : "left-[816px]"
					}`}
					style={{ 
						top: `${topOffset + 225}px`
					}}
				>
					<SearchBar placeholder={searchPlaceholder} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
				</div>
				<div
					className={`absolute ${
						title === "BLOG"
							? "left-[77px]"
							: "left-[92px]"
					} w-[600px]`}
					style={{ 
						top: title === "BLOG" ? "427px" : "1281px"
					}}
				>
					{filteredItems.map((item, index) => (
						<React.Fragment key={item.id}>
							<ListItem
								title={item.title || item.question}
								description={item.description || item.answer}
								isExpanded={expandedItems[item.id] || false}
								onToggle={() => handleToggle(item.id)}
							/>
							{index < filteredItems.length - 1 && <SectionDivider />}
						</React.Fragment>
					))}
				</div>
			</div>

			{/* Mobile & Tablet Layout */}
			<div className="block md:hidden mb-12">
				<div className="text-center mb-8">
					<div className="text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Krona One' }}>
						{title}
					</div>
					<div className="text-xl font-medium text-gray-800 mb-4" style={{ fontFamily: 'Krona One' }}>
						{subtitle}
					</div>
					<div className="text-[11px] text-gray-800 mb-6 px-4" style={{ fontFamily: 'Krona One' }}>
						{description}
					</div>
					<div className="flex justify-center mb-6">
						<SearchBar placeholder={searchPlaceholder} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
					</div>
				</div>
				<div className="px-4">
					{filteredItems.map((item, index) => (
						<React.Fragment key={item.id}>
							<ListItem
								title={item.title || item.question}
								description={item.description || item.answer}
								isExpanded={expandedItems[item.id] || false}
								onToggle={() => handleToggle(item.id)}
							/>
							{index < filteredItems.length - 1 && <div className="mx-0 my-5 h-px bg-gray-800 w-full" />}
						</React.Fragment>
					))}
				</div>
			</div>
		</div>
	);
};

function Blogs() {
	const [blogSearchTerm, setBlogSearchTerm] = useState("");
	const [faqSearchTerm, setFaqSearchTerm] = useState("");
	const [expandedItems, setExpandedItems] = useState({});

	return (
		<div className="flex justify-center min-h-screen bg-white py-8">
			<div className="relative w-[95%] max-w-none overflow-hidden bg-white min-h-[1855px] max-md:p-5 max-md:min-h-[auto] max-sm:max-w-screen-sm max-md:bg-gradient-to-tr max-md:from-[#E9C77F] max-md:to-[#FBE6B7] max-md:rounded-[50px]">
				{/* Back Button */}
				<BackButton />

				{/* Background Elements - Desktop Only */}
				<div className="hidden md:block absolute bg-gradient-to-tr from-[#E9C77F] to-[#FBE6B7] h-[777px] left-[25px] rounded-[352px_0px] top-[114px] w-[calc(100%-50px)]" />
				<div className="hidden md:block absolute bg-gradient-to-tr from-[#E9C77F] to-[#FBE6B7] h-[1627px] left-[25px] rounded-[343px_0px_344px_0px] top-[114px] w-[calc(100%-50px)]" />

				{/* Background Text - Desktop Only */}
				<div className="hidden md:block absolute top-32 text-9xl h-[188px] left-[785px] text-white/50 text-opacity-50 w-[600px] z-[1]" style={{ fontFamily: 'Krona One' }}>
					BLOG
				</div>
				<div className="hidden md:block absolute text-9xl h-[188px] left-[785px] text-white/50 text-opacity-50 top-[1003px] w-[462px] z-[1]" style={{ fontFamily: 'Krona One' }}>
					FAQ
				</div>

				{/* Blog Section */}
				<ContentSection
					title="BLOG"
					subtitle="INSIGHTS & UPDATES"
					description="Stay informed with the latest trends, tips, and breakthroughs in sustainable packaging and industrial innovation."
					searchPlaceholder="Search blog posts here"
					items={blogPosts}
					topOffset={228}
					searchTerm={blogSearchTerm}
					setSearchTerm={setBlogSearchTerm}
					expandedItems={expandedItems}
					setExpandedItems={setExpandedItems}
				/>

				{/* Divider Line - Desktop Only */}
				<div className="hidden md:block absolute left-[50%] top-[950px] w-[95%] h-1.5 bg-white/60 transform -translate-x-1/2 z-[3]" />

				{/* FAQ Section */}
				<ContentSection
					title="FAQ"
					subtitle="QUESTIONS & ANSWERS"
					description="Find quick answers to common questions about our sustainable packaging solutions, certifications, and services."
					searchPlaceholder="Search FAQ here"
					items={faqData}
					topOffset={1103}
					searchTerm={faqSearchTerm}
					setSearchTerm={setFaqSearchTerm}
					expandedItems={expandedItems}
					setExpandedItems={setExpandedItems}
				/>
			</div>
		</div>
	);
}

export default Blogs;