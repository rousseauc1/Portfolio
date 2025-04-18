function BackToTopArrow() {
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
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-12 
            rounded-full bg-amber-800 text-white text-2xl 
            font-bold shadow-lg hover:bg-amber-900 transition-colors 
            duration-200 flex items-center justify-center focus:outline-none 
            focus:ring-2 focus:ring-amber-600 focus:ring-opacity-50"
        >
            ↑
        </button>
    )
}

export default BackToTopArrow;