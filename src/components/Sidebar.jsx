import React from 'react';
import { Cloud, File as FileIcon, LogOut, User, X } from 'lucide-react';

const Sidebar = ({ isOpen, onClose, onLogout, navigateTo }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 sm:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-800 shadow-lg flex flex-col transform transition-transform duration-300 ease-in-out rounded-lg border border-gray-300 dark:border-gray-700
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 sm:static sm:inset-auto`}
        aria-label="Sidebar"
      >
        <div className="p-5 flex items-center justify-between text-2xl font-bold text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <Cloud className="text-indigo-500" />
            <span>AuraCloud</span>
          </div>
          <button
            onClick={onClose}
            className="sm:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => navigateTo('dashboard')}
            className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-900 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-lg w-full text-left"
          >
            <FileIcon className="w-5 h-5 mr-3" />
            My Files
          </button>
          <button
            onClick={() => navigateTo('profile')}
            className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors w-full text-left"
          >
            <User className="w-5 h-5 mr-3" />
            Profile
          </button>
        </nav>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={onLogout}
            className="w-full flex items-center px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
