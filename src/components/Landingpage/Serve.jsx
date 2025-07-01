import * as React from "react";
import { useState, useEffect, useRef } from "react";

// Industry data array
const industries = [
	{
		id: 1,
		title: "Metals & Foundry",
		description:
			"Robust packaging solutions engineered to withstand extreme conditions. Supporting the heavy-duty demands of the metals and foundry industry with strength and precision.",
		image:
			"https://cdn.builder.io/api/v1/image/assets/TEMP/75c74371d5145683762d57ec82cd7c2b43fb77f2",
	},
	{
		id: 2,
		title: "Automotive & Engineering",
		description:
			"Secure packaging that safeguards delicate automotive and engineering parts. Ensures damage-free shipping and supports efficient logistics.",
		image:
			"https://cdn.builder.io/api/v1/image/assets/TEMP/ef2b5edabbb4c451e06a8fee2f842781e42b6026",
	},
	{
		id: 3,
		title: "Food & Beverage",
		description:
			"Hygienic and reliable packaging that maintains freshness and safety. Eco-friendly options to enhance product appeal and shelf life.",
		image:
			"https://cdn.builder.io/api/v1/image/assets/TEMP/06d4ca5e48f7c9e6f3f2cbba553bba845327f201",
	},
	{
		id: 4,
		title: "Agriculture & Tea Export",
		description:
			"Packaging that preserves quality and aroma, protecting against moisture and contamination. Compliant with global export standards for freshness.",
		image:
			"https://cdn.builder.io/api/v1/image/assets/TEMP/06d4ca5e48f7c9e6f3f2cbba553bba845327f201",
	},
	{
		id: 5,
		title: "Export & Logistics",
		description:
			"Robust packaging optimized for international shipping. Protects products with cushioning and smart design for timely delivery.",
		image:
			"https://cdn.builder.io/api/v1/image/assets/TEMP/75c74371d5145683762d57ec82cd7c2b43fb77f2",
	},
	{
		id: 6,
		title: "Defense & Aerospace",
		description:
			"High-strength packaging for sensitive components. Provides protection from impact and environmental hazards, meeting strict industry standards.",
		image:
			"https://cdn.builder.io/api/v1/image/assets/TEMP/ef2b5edabbb4c451e06a8fee2f842781e42b6026",
	},
];

// Reusable Industry Card Component
function IndustryCard({ title, description, image }) {
	return (
		<div
			className="relative shrink-0 rounded-3xl border-2 border-black border-solid h-[359px] w-[437px] max-md:w-full max-md:max-w-[400px] max-sm:max-w-full max-sm:h-auto max-sm:min-h-80"
			style={{ background: "linear-gradient(to top right, white, #F6DFAA)" }}
		>
			<div className="absolute left-1/2 top-2.5 transform -translate-x-1/2 px-5 py-0 text-xl text-center text-white bg-black rounded-2xl h-[73px] w-[417px] max-md:w-[calc(100%_-_18px)] max-sm:px-4 max-sm:py-0 max-sm:text-xl flex items-center justify-center">
				{title}
			</div>
			<div
				className="box-border absolute shrink-0 px-4 pt-7 pb-0 rounded-2xl border border-linear-gradient(to bottom, transparent, black) 1 border-solid h-[258px] left-[9px] top-[88px] w-[417px] max-md:w-[calc(100%_-_18px)] max-sm:px-4 max-sm:py-5 max-sm:h-auto max-sm:min-h-[220px]"
				style={{ background: "linear-gradient(to top right, white, #F6DFAA)" }}
			>
				<div className="mb-10 text-lg text-center text-black w-[386px] font-normal max-md:w-full max-md:text-xl max-sm:mb-8 max-sm:text-sm">
					{description}
				</div>

				{/* Circular icon positioned at bottom center, partially outside the card */}
				<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 h-[88px] w-[88px] max-sm:h-[70px] max-sm:w-[70px]">
					<div>
						<div
							dangerouslySetInnerHTML={{
								__html: `<svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-icon-bg" style="width: 88px; height: 88px; flex-shrink: 0; fill: #000; position: absolute; left: 0; top: 0"> <circle cx="44" cy="44" r="44" fill="black"></circle> </svg>`,
							}}
						/>
					</div>
					<img
						src={image}
						alt=""
						className="absolute top-0.5 left-0.5 shrink-0 aspect-[1/1] h-[83px] w-[83px] max-sm:top-0.5 max-sm:left-0.5 max-sm:h-[66px] max-sm:w-[66px]"
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
	const [isLoaded, setIsLoaded] = useState(false); // Add loading state
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
	const cardsPerView = isMobile ? 1 : 3;

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
		
		const cardWidth = isMobile ? 100 : 100 / 3;
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
			className="relative p-0 mx-auto my-0 w-full bg-white h-auto max-w-[90%] py-16 max-md:p-5 max-md:h-auto max-md:max-w-[991px] max-sm:p-4 max-sm:max-w-screen-sm"
			style={{ fontFamily: "'Krona One', sans-serif" }}
		>
			<div className="text-xl md:text-5xl text-center text-black mb-6 w-full max-md:mb-10 max-md:text-3xl max-md:text-center max-sm:mb-2 max-sm:text-2xl font-normal">
				Industries We Serve
			</div>

			{/* Main carousel container with navigation */}
			<div className="relative flex items-center justify-center">
				{/* Navigation arrows placed outside the carousel container - hidden on mobile */}
				{isLoaded && (
					<button
						onClick={handlePrev}
						className="absolute -left-16 z-10 bg-black text-white w-12 h-12 rounded-full  items-center justify-center focus:outline-none opacity-80 hover:opacity-100 transition-opacity shadow-lg sm:flex hidden"
						aria-label="Previous slide"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M15 18l-6-6 6-6" />
						</svg>
					</button>
				)}

				{/* Carousel container with exact width for 3 full cards on desktop, 1 on mobile */}
				<div className="w-full max-w-full overflow-hidden px-3 py-10">
					<div
						ref={carouselRef}
						className={`flex ${isLoaded ? 'transition-transform duration-500 ease-in-out' : ''}`}
						style={{
							width: `${extendedIndustries.length * 100 / (isMobile ? 1 : 3)}%`,
							opacity: isLoaded ? 1 : 0, // Hide until properly loaded
							transition: isLoaded ? 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out' : 'none',
						}}
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
						onTouchEnd={handleTouchEnd}
					>
						{extendedIndustries.map((industry, index) => (
							<div
								key={`${industry.id}-${index}`}
								className="flex justify-center"
								style={{ 
									width: `${100 / extendedIndustries.length}%`,
									padding: isMobile ? '0 5px' : '0 15px', // Smaller padding on mobile
								}}
							>
								<IndustryCard
									title={industry.title}
									description={industry.description}
									image={industry.image}
								/>
							</div>
						))}
					</div>
				</div>

				{/* Right Navigation Arrow - positioned outside the carousel - hidden on mobile */}
				{isLoaded && (
					<button
						onClick={handleNext}
						className="absolute -right-16 z-10 bg-black text-white w-12 h-12 rounded-full items-center justify-center focus:outline-none opacity-80 hover:opacity-100 transition-opacity shadow-lg sm:flex hidden"
						aria-label="Next slide"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M9 18l6-6-6-6" />
						</svg>
					</button>
				)}
			</div>

			{/* Carousel indicators */}
			<div className="flex justify-center mt-8 max-sm:mt-6">
				{industries.map((_, idx) => (
					<button
						key={idx}
						onClick={() => goToSlide(idx)}
						className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
							idx === (currentIndex % totalCards) ? "bg-black scale-110" : "bg-gray-300 hover:bg-gray-400"
						}`}
						aria-label={`Go to slide ${idx + 1}`}
					/>
				))}
			</div>

			{/* Mobile swipe instruction - shown only on mobile */}
			<div className="text-center mt-4 text-gray-500 text-sm sm:hidden">
				Swipe left or right to navigate
			</div>
		</div>
	);
}

export default Serve;