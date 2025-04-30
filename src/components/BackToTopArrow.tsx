const BackToTopArrow = () => {
    // built in method to scroll the window, click event
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    // return a button that handles this
    return (
        <button 
            onClick={scrollToTop}
            className="mx-auto my-8 w-12 h-12 
            rounded-full bg-[#5c4d3f] text-white text-2xl 
            font-bold shadow-lg hover:bg-[#4a3e32] transition-colors 
            duration-200 flex items-center justify-center focus:outline-none 
            focus:ring-2 focus:ring-[#5c4d3f] focus:ring-opacity-50"
        >
            ↑
        </button>
    )
}

export default BackToTopArrow;