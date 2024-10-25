

const blogPosts = [
    {
        category: 'Design',
        title: 'UX review presentations',
        description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
        author: 'Olivia Rhye',
        date: '20 Jan 2024',
        imageUrl: 'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg',
        authorImageUrl: 'https://img.freepik.com/free-photo/close-up-young-person-barbeque_23-2149271990.jpg',
    },
    {
        category: 'Product',
        title: 'Migrating to Linear 101',
        description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
        author: 'Phoenix Baker',
        date: '19 Jan 2024',
        imageUrl: 'https://cybersify.tech/wp-content/uploads/2024/09/Product-1024x576.png',
        authorImageUrl: 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png',
    },
    {
        category: 'Software Engineering',
        title: 'Building your API stack',
        description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
        author: 'Lana Steiner',
        date: '18 Jan 2024',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMArfysR4mKUak27_yAMUeN742EWjV3SyqCw&s',
        authorImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyW2MAFrFnfa_bT1jSttLbmvfotJcqQyCCGg&s',
    },
];

const Blog = () => {
    return (
        <section className="pt-6 pb-2">
            <div className="max-w-6xl mx-auto p-10">
               
                <div>
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <p className="text-purple-600 text-sm font-semibold">Our blog</p>
                            <h2 className="text-3xl font-bold text-gray-900">Latest blog posts</h2>
                            <p className="text-gray-600">Tools and strategies modern teams need to help their companies grow.</p>
                        </div>
                        <button className="hidden sm:block sm:px-6 sm:py-2 sm:bg-purple-600 sm:text-white sm:rounded-lg sm:font-semibold sm:hover:bg-purple-700">
                            View all posts
                        </button>
                    </div>
                    {/* Blog Posts */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <div key={index} className="overflow-hidden">
                                <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                                <div className="py-6">
                                    <p className="text-purple-600 text-sm font-medium mb-2">{post.category}</p>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {post.title}
                                        <span className="ml-1 text-gray-500 text-sm">↗</span>
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                                    <div className="flex items-center">
                                        <img
                                            src={post.authorImageUrl}
                                            alt={post.author}
                                            className="w-8 h-8 rounded-full mr-3 object-cover"
                                        />
                                        <div className="text-sm">
                                            <p className="font-medium text-gray-900">{post.author}</p>
                                            <p className="text-gray-500">{post.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button className=" sm:hidden px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700">
                            View all posts
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
