import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, TrendingUp, Radio, BookOpen } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      category: "Trends",
      title: "The Future of Smart Identification: 2024 Trends",
      excerpt: "Explore the latest trends in identification technology and what they mean for businesses.",
      author: "Dr. Rajesh Kumar",
      date: "Jan 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      category: "RFID",
      title: "RFID Revolution: How It's Transforming Industries",
      excerpt: "Deep dive into RFID technology and its impact across different sectors.",
      author: "Priya Sharma",
      date: "Jan 12, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      category: "Guides",
      title: "Complete Guide to Choosing the Right ID Solution",
      excerpt: "Everything you need to know about selecting the perfect identification system.",
      author: "Amit Patel",
      date: "Jan 10, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      category: "Trends",
      title: "Sustainable ID Solutions: Green Tech in 2024",
      excerpt: "How eco-friendly materials are revolutionizing the identification industry.",
      author: "Dr. Meera Singh",
      date: "Jan 8, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      category: "RFID",
      title: "NFC vs RFID: Understanding the Differences",
      excerpt: "A comprehensive comparison to help you choose the right technology.",
      author: "Vikram Gupta",
      date: "Jan 5, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      category: "Guides",
      title: "Step-by-Step: Implementing RFID in Your Business",
      excerpt: "Practical guide to deploying RFID solutions in your organization.",
      author: "Sarah Johnson",
      date: "Jan 3, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1589833063058-1fa5c32d00b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    }
  ];

  const categories = [
    { name: "Trends in Tagging", icon: TrendingUp, count: 12 },
    { name: "RFID and Future of IDs", icon: Radio, count: 8 },
    { name: "Guides and How-Tos", icon: BookOpen, count: 15 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Tag Talk Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and guides in the world of identification technology.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {categories.map((category, index) => (
            <Card key={category.name} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-2">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">{category.name}</CardTitle>
                <CardDescription>{category.count} articles</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <Card className="overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-xl">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <Badge className="mb-4 bg-blue-100 text-blue-800">Featured</Badge>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-2" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {blogPosts[0].date}
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                  Read More
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 mb-4">{post.readTime}</div>
                  <Button variant="outline" className="w-full">Read Article</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;