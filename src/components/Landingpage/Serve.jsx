import * as React from "react";
import { useState, useEffect, useRef } from "react";
import "@fontsource/montserrat"; // Import Montserrat font

// Industry data array
const industries = [
	{
		id: 1,
		title: "Metals & Foundry",
		description:
			"Robust packaging solutions engineered to withstand extreme conditions. Supporting the heavy-duty demands of the metals and foundry industry with strength and precision.",
		image: "/hero/Serve/4.png",
	},
	{
		id: 2,
		title: "Automotive & Engineering",
		description:
			"Secure packaging that safeguards delicate automotive and engineering parts. Ensures damage-free shipping and supports efficient logistics.",
		image: "/hero/Serve/5.png",
	},
	{
		id: 3,
		title: "Food & Beverage",
		description:
			"Hygienic and reliable packaging that maintains freshness and safety. Eco-friendly options to enhance product appeal and shelf life.",
		image: "/hero/Serve/6.png",
	},
	{
		id: 4,
		title: "Agriculture & Tea Export",
		description:
			"Packaging that preserves quality and aroma, protecting against moisture and contamination. Compliant with global export standards for freshness.",
		image: "/hero/Serve/1.png",
	},
	{
		id: 5,
		title: "Export & Logistics",
		description:
			"Robust packaging optimized for international shipping. Protects products with cushioning and smart design for timely delivery.",
		image: "/hero/Serve/2.png",
	},
	{
		id: 6,
		title: "Defense & Aerospace",
		description:
			"High-strength packaging for sensitive components. Provides protection from impact and environmental hazards, meeting strict industry standards.",
		image: "/hero/Serve/3.png",
	},
];

// Reusable Industry Card Component
function IndustryCard({ title, description, image, onClick, isClickable, isHovered }) {
	return (
		<div
			className={`relative shrink-0 rounded-2xl sm:rounded-3xl border-2 border-black border-solid 
			h-[280px] w-[320px] 
			sm:h-[300px] sm:w-[340px] 
			md:h-[320px] md:w-[360px] 
			lg:h-[340px] lg:w-[380px] 
			xl:h-[359px] xl:w-[400px] 
			2xl:h-[380px] 2xl:w-[420px]
			max-w-full
			transition-shadow duration-300 ease-in-out
			${isHovered ? "shadow-2xl" : ""}
			${isClickable ? "cursor-pointer" : ""}
			`}
			style={{ background: "linear-gradient(to top right, white, #F6DFAA)" }}
			onClick={onClick}
			tabIndex={isClickable ? 0 : undefined}
			onKeyDown={isClickable ? (e) => { if (e.key === "Enter" || e.key === " ") onClick(); } : undefined}
		>
			<div className="absolute left-1/2 top-2 sm:top-2.5 transform -translate-x-1/2 px-3 sm:px-4 lg:px-5 py-0 
			text-sm sm:text-base md:text-lg lg:text-xl 
			text-center text-white bg-black rounded-xl sm:rounded-2xl 
			h-[50px] sm:h-[60px] md:h-[65px] lg:h-[70px] xl:h-[73px] 
			w-[calc(100%_-_16px)] sm:w-[calc(100%_-_20px)] lg:w-[calc(100%_-_24px)]
			flex items-center justify-center">
				{title}
			</div>
			<div
				className="box-border absolute shrink-0 px-3 sm:px-4 pt-5 sm:pt-6 lg:pt-7 pb-0 rounded-xl sm:rounded-2xl border border-linear-gradient(to bottom, transparent, black) 1 border-solid 
				h-[200px] sm:h-[210px] md:h-[220px] lg:h-[240px] xl:h-[258px] 2xl:h-[270px]
				left-[8px] sm:left-[9px] 
				top-[65px] sm:top-[75px] md:top-[80px] lg:top-[85px] xl:top-[88px] 
				w-[calc(100%_-_16px)] sm:w-[calc(100%_-_18px)]"
				style={{ background: "linear-gradient(to top right, white, #F6DFAA)" }}
			>
				<div
					className="mb-6 sm:mb-8 lg:mb-10 
					text-[15px] sm:text-sm md:text-base lg:text-lg 
					text-center text-black w-full font-normal leading-normal"
					style={{ fontFamily: "'Montserrat', sans-serif" }}
				>
					{description}
				</div>

				{/* Circular icon positioned at bottom center, partially outside the card */}
				<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 
				h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] md:h-[75px] md:w-[75px] lg:h-[80px] lg:w-[80px] xl:h-[88px] xl:w-[88px]">
					<img
						src={image}
						alt=""
						className="absolute top-0.5 left-0.5 shrink-0 aspect-[1/1] 
						h-[56px] w-[56px] sm:h-[66px] sm:w-[66px] md:h-[71px] md:w-[71px] lg:h-[76px] lg:w-[76px] xl:h-[83px] xl:w-[83px]"
					/>
				</div>
			</div>
		</div>
	);
}

// Main Serve Component
function Serve() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [hoveredCard, setHoveredCard] = useState(null);
	const carouselRef = useRef(null);
	const touchStartX = useRef(0);
	const touchEndX = useRef(0);

	// Create extended array for infinite scroll
	const extendedIndustries = [
		...industries.slice(-3), // Last 3 items at the beginning
		...industries,
		...industries.slice(0, 3), // First 3 items at the end
	];

	const totalCards = industries.length;

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Initialize position to show first 3 cards (offset by 3 due to prepended items)
	useEffect(() => {
		if (carouselRef.current) {
			// Reset to initial position
			setCurrentIndex(0);
			
			// Fixed calculation for initial position
			const cardWidthPercent = 100 / extendedIndustries.length;
			const initialOffset = 3 * cardWidthPercent; // Offset to show first 3 cards
			
			// Apply initial transform directly
			carouselRef.current.style.transition = 'none';
			carouselRef.current.style.transform = `translateX(-${initialOffset}%)`;
			
			// Set loaded after a small delay to ensure the transform is applied
			setTimeout(() => {
				setIsLoaded(true);
			}, 50);
		}
	}, [isMobile, extendedIndustries.length]);

	// Auto-advance carousel on desktop every 3 seconds, pause on hover
	useEffect(() => {
		if (!isMobile && isLoaded && !isHovered) {
			const interval = setInterval(() => {
				if (!isAnimating) {
					handleNext();
				}
			}, 3000);
			return () => clearInterval(interval);
		}
	}, [isMobile, isLoaded, isAnimating, currentIndex, isHovered]);

	const handleNext = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		
		const newIndex = currentIndex + 1;
		setCurrentIndex(newIndex);
		
		// Calculate width of a single card as percentage of total carousel width
		const cardWidth = 100 / extendedIndustries.length;
		// Calculate the translate value: initial offset (3) + current index
		const translateX = -((3 + newIndex) * cardWidth);
		
		if (carouselRef.current) {
			carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
			carouselRef.current.style.transform = `translateX(${translateX}%)`;
		}
		
		setTimeout(() => {
			if (newIndex >= totalCards) {
				// Reset to beginning without animation
				setCurrentIndex(0);
				if (carouselRef.current) {
					carouselRef.current.style.transition = 'none';
					carouselRef.current.style.transform = `translateX(-${3 * cardWidth}%)`;
				}
			}
			setIsAnimating(false);
		}, 500);
	};

	const handlePrev = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		
		const newIndex = currentIndex - 1;
		setCurrentIndex(newIndex);
		
		// Calculate width of a single card as percentage of total carousel width
		const cardWidth = 100 / extendedIndustries.length;
		// Calculate the translate value: initial offset (3) + current index
		const translateX = -((3 + newIndex) * cardWidth);
		
		if (carouselRef.current) {
			carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
			carouselRef.current.style.transform = `translateX(${translateX}%)`;
		}
		
		setTimeout(() => {
			if (newIndex < 0) {
				// Reset to end without animation
				setCurrentIndex(totalCards - 1);
				if (carouselRef.current) {
					carouselRef.current.style.transition = 'none';
					carouselRef.current.style.transform = `translateX(-${(3 + totalCards - 1) * cardWidth}%)`;
				}
			}
			setIsAnimating(false);
		}, 500);
	};

	const goToSlide = (index) => {
		if (isAnimating || index === currentIndex) return;
		setIsAnimating(true);
		setCurrentIndex(index);
		
		const cardWidth = 100 / extendedIndustries.length;
		const translateX = -((3 + index) * cardWidth);
		
		if (carouselRef.current) {
			carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
			carouselRef.current.style.transform = `translateX(${translateX}%)`;
		}
		
		setTimeout(() => setIsAnimating(false), 500);
	};

	// Touch handlers for mobile swipe
	const handleTouchStart = (e) => {
		touchStartX.current = e.touches[0].clientX;
	};

	const handleTouchMove = (e) => {
		touchEndX.current = e.touches[0].clientX;
	};

	const handleTouchEnd = () => {
		if (!touchStartX.current || !touchEndX.current) return;
		
		const distance = touchStartX.current - touchEndX.current;
		const isLeftSwipe = distance > 50;
		const isRightSwipe = distance < -50;

		if (isLeftSwipe) {
			handleNext();
		}
		if (isRightSwipe) {
			handlePrev();
		}
	};

	return (
		<div
			className="relative p-0 mx-auto my-0 w-full bg-white h-auto max-w-[95%] sm:max-w-[100%] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 "
			style={{ fontFamily: "'Krona One', sans-serif" }}
		>
			<div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-black mb-6 sm:mb-8 lg:mb-10 w-full font-normal">
				Industries We Serve
			</div>

			{/* Main carousel container with navigation */}
			<div
				className="relative flex items-center justify-center"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{/* Carousel container */}
				<div className="w-full max-w-full overflow-hidden px-2 sm:px-3 py-8 sm:py-10">
					<div
						ref={carouselRef}
						className={`flex ${isLoaded ? 'transition-transform duration-500 ease-in-out' : ''}`}
						style={{
							width: `${extendedIndustries.length * 100 / (isMobile ? 1 : 3)}%`,
							opacity: isLoaded ? 1 : 0,
							transition: isLoaded ? 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out' : 'none',
						}}
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
						onTouchEnd={handleTouchEnd}
					>
						{extendedIndustries.map((industry, index) => {
							// Desktop: left, center, right card indices
							let isClickable = false;
							let onClick = undefined;
							let isCardHovered = hoveredCard === index;
							if (!isMobile) {
								const leftIdx = (3 + currentIndex - 1) % industries.length;
								const rightIdx = (3 + currentIndex + 1) % industries.length;
								const centerIdx = (3 + currentIndex) % industries.length;
								const realIdx = (index - 3 + industries.length) % industries.length;
								if (realIdx === leftIdx) {
									isClickable = true;
									onClick = handlePrev;
								}
								if (realIdx === rightIdx) {
									isClickable = true;
									onClick = handleNext;
								}
							}
							return (
								<div
									key={`${industry.id}-${index}`}
									className="flex justify-center"
									style={{
										width: `${100 / extendedIndustries.length}%`,
										padding: isMobile ? '0 4px' : '0 8px sm:0 12px lg:0 15px',
									}}
									onMouseEnter={() => setHoveredCard(index)}
									onMouseLeave={() => setHoveredCard(null)}
								>
									<IndustryCard
										title={industry.title}
										description={industry.description}
										image={industry.image}
										onClick={onClick}
										isClickable={isClickable}
										isHovered={isCardHovered}
									/>
								</div>
							);
						})}
					</div>
				</div>
				{/* ...existing code... */}
			</div>

			{/* Carousel indicators */}
			<div className="flex justify-center mt-6 sm:mt-8">
				{industries.map((_, idx) => (
					<button
						key={idx}
						onClick={() => goToSlide(idx)}
						className={`w-2 h-2 sm:w-3 sm:h-3 mx-1 rounded-full transition-all duration-300 ${
							idx === (currentIndex % totalCards) ? "bg-black scale-110" : "bg-gray-300 hover:bg-gray-400"
						}`}
						aria-label={`Go to slide ${idx + 1}`}
					/>
				))}
			</div>

			{/* Mobile swipe instruction */}
			<div className="text-center mt-3 sm:mt-4 text-gray-500 text-xs sm:text-sm sm:hidden">
				Swipe left or right to navigate
			</div>
		</div>
	);
}

export default Serve;