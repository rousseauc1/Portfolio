import { useTheme } from '../context/ThemeContext';

const Header = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();

    const handleThemeToggle = () => {
        console.log('Toggling theme, current mode:', isDarkMode);
        toggleDarkMode();
    };

    return (
        <div className="flex flex-col px-8 py-6 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="flex justify-between items-center">
                <h1 className="text-left text-5xl font-light tracking-wide text-gray-800 dark:text-gray-100 transition-colors duration-300">Cade Rousseau</h1>
                <button
                    onClick={handleThemeToggle}
                    className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-lg dark:shadow-gray-800/50"
                    aria-label="Toggle dark mode"
                >
                    {isDarkMode ? '🌞' : '🌙'}
                </button>
            </div>
            <hr className="w-full border-t border-gray-200 dark:border-gray-800 mt-6 mb-0 transition-colors duration-300" />
        </div>
    )
}

export default Header;

