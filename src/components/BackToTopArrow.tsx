
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
            className="fixed bottom-8 right-8 w-12 h-12 
            rounded-full bg-blue-600 text-white text-2xl 
            font-bold shadow-lg hover:bg-blue-700 transition-colors 
            duration-200 flex items-center justify-center focus:outline-none 
            focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
            ^
        </button>
    )
}

export default BackToTopArrow;