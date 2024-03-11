const Skeleton = () => {
    return (
        <div className="animate-pulse bg-gray-200 dark:bg-gray-800 rounded-lg p-5">
            <div className="h-40 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4" />
            <div className="h-6 w-2/3 bg-gray-300 dark:bg-gray-700 rounded mb-2" />
            <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>
    );
};

export default Skeleton;