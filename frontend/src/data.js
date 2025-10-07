
  const testimonials = [
    {
      name: "Rahul Singh",
      achievement: "Lost 20kg in 3 months",
      image: "/before after img 1.webp",
      duration: "12 Weeks",
      program: "Weight Loss Program",
      testimonial: "Gymmerzz changed my life completely!",
      text: "One of the best gyms in Mira Road. Transformed my body in just 3 months!",
      author: "Rahul S.",
      result: "Lost 12kg",
    },
    {
      name: "Priym Mehta",
      achievement: "Gained 8kg muscle in 6 months",
      image: "/before after img 2.webp",
      duration: "24 Weeks",
      program: "Muscle Building",
      testimonial: "Best decision I ever made!",
      text: "Great trainers and hygiene maintained. The community vibe is amazing!",
      author: "Priya M.",
      result: "Gained 5kg muscle",
    },
    {
      name: "Amit Kumar",
      achievement: "Lost 15kg in 4 months",
      image: "/before after img 3.jpg",
      duration: "16 Weeks",
      program: "Transformation Challenge",
      testimonial: "Unbelievable results with expert guidance!",
      text: "Well equipped and amazing vibe! Perfect balance of modern equipment and expert guidance.",
      author: "Amit K.",
      result: "Strength increased 40%",
    },
  ];

  const services = [
    {
      icon: Dumbbell,
      title: "Weight Training",
      desc: "Build strength and muscle with premium equipment",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Activity,
      title: "CrossFit",
      desc: "High-intensity functional training for ultimate fitness",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: HeartPulse,
      title: "Yoga",
      desc: "Flexibility, balance, and mental wellness",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: HeartPulse,
      title: "Cardio Zone",
      desc: "Endurance training and fat-loss optimization",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Personal Training",
      desc: "1:1 expert coaching for maximum results",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: Flame,
      title: "Wellness Suite",
      desc: "Steam, sauna for recovery and relaxation",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

   const galleryData = {
    images: [
      {
        type: "image",
        src: "/gym img1.webp",
        alt: "Gym Equipment",
        category: "Equipment",
      },
      {
        type: "image",
        src: "/gym img 2.jpeg",
        alt: "Training Area",
        category: "Training",
      },
      {
        type: "image",
        src: "/gym img 3.webp",
        alt: "Yoga Studio",
        category: "Yoga",
      },
      {
        type: "image",
        src: "/gym img 4.jpg",
        alt: "Cardio Zone",
        category: "Cardio",
      },
      {
        type: "image",
        src: "/gym img 5.jpeg",
        alt: "Weight Area",
        category: "Weights",
      },
      {
        type: "image",
        src: "/gym img 6.jpeg",
        alt: "Locker Room",
        category: "Facilities",
      },
      {
        type: "image",
        src: "/gym img 7.jpeg",
        alt: "Gym Equipment",
        category: "Equipment",
      },
      {
        type: "image",
        src: "/gym img 8.webp",
        alt: "Training Area",
        category: "Training",
      },
      {
        type: "image",
        src: "/gym img 9.jpeg",
        alt: "Yoga Studio",
        category: "Yoga",
      },
      {
        type: "image",
        src: "/gym img10.webp",
        alt: "Cardio Zone",
        category: "Cardio",
      },
    ],

    videos: [
      {
        type: "video",
        thumbnail: "https://img.youtube.com/vi/tmu0dxdLfog/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=tmu0dxdLfog",
        embedUrl: "https://www.youtube.com/embed/tmu0dxdLfog",
        title: "Gymmerzz Full Tour",
        duration: "2:45",
        category: "Tour",
        alt: "Gymmerzz Gym Tour Video",
      },
      {
        type: "video",
        thumbnail: "https://img.youtube.com/vi/as16JOI_SDI/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=as16JOI_SDI",
        embedUrl: "https://www.youtube.com/embed/as16JOI_SDI",
        title: "Workout Session",
        duration: "1:30",
        category: "Training",
        alt: "Workout Session Video",
      },
    ],
  };

  const plan = [
    {
      name: "Starter",
      price: "₹1,999",
      period: "per month",
      features: ["Gym Access", "Cardio Zone", "Steam Room", "Locker Facility"],
      popular: false,
      gradient: "from-gray-600 to-gray-800",
    },
    {
      name: "Pro",
      price: "₹4,999",
      period: "for 3 months",
      features: [
        "Everything in Starter",
        "Personal Diet Plan",
        "Group Classes",
        "Progress Tracking",
        "2 PT Sessions",
      ],
      popular: true,
      gradient: "from-red-600 to-orange-600",
    },
    {
      name: "Elite",
      price: "₹13,999",
      period: "for 12 months",
      features: [
        "Everything in Pro",
        "Unlimited PT Sessions",
        "Premium Merchandise",
        "Nutrition Coaching",
        "Recovery Therapy",
      ],
      popular: false,
      gradient: "from-purple-600 to-pink-600",
    },
  ];

  const trainer = [
    {
      name: "Sujeet Kargutkar",
      role: "Founder & Head Trainer",
      image: "/gym trainer img 3.jpg",
      experience: "21+ years",
      specialty: "Celebrity Trainer",
      achievements: ["500+ Transformations", "National Award Winner"],
    },
    {
      name: "Rajesh Kumar",
      role: "Strength & Conditioning",
      image: "/gym trainer img 2.jpg",
      experience: "15+ years",
      specialty: "Powerlifting Coach",
      achievements: ["State Champion", "IFBB Certified"],
    },
    {
      name: "Priya Sharma",
      role: "Yoga & Wellness",
      image: "/gym trainer img 1.jpg",
      experience: "12+ years",
      specialty: "Holistic Wellness",
      achievements: ["RYT 500 Certified", "Meditation Expert"],
    },
  ];

  const aboutUs = [
    {
      icon: HeartPulse,
      text: "Personalised coaching tailored to your goals",
    },
    {
      icon: Users,
      text: "Great crowd and positive workout vibe",
    },
    {
      icon: Flame,
      text: "Steam, yoga, cardio - complete wellness",
    },
    {
      icon: TrendingUp,
      text: "Proven results with data-driven approach",
    },
  ];

  const faqData = [
    {
      question: "What are your gym timings?",
      answer:
        "We're open 6 AM to 11 PM, 7 days a week. Early morning and late evening slots are available for your convenience.",
    },
    {
      question: "Do you provide personal training?",
      answer:
        "Yes! We have certified personal trainers including our founder Sujeet Kargutkar with 21+ years of experience. PT sessions are available for all membership plans.",
    },
    {
      question: "What facilities do you have?",
      answer:
        "We have modern weight training equipment, cardio machines, steam room, yoga studio, group classes, and a clean, well-maintained environment.",
    },
    {
      question: "Is there a trial period?",
      answer:
        "Yes! We offer a 3-day free trial so you can experience our facilities and training before committing to a membership.",
    },
    {
      question: "What are your membership plans?",
      answer:
        "We have Monthly (₹1,999), Quarterly (₹4,999), and Yearly (₹13,999) plans. All plans include gym access, cardio, and steam facilities.",
    },
    {
      question: "Do you provide diet plans?",
      answer:
        "Yes! Our Quarterly and Yearly plans include personalized diet plans to help you achieve your fitness goals faster.",
    },
  ];
const shortsGalleryData = [
  {
    title: "Quick Cardio Burn",
    url: "https://www.youtube.com/watch?v=Q595t3wpnU8",
    thumbnail: "https://img.youtube.com/vi/Q595t3wpnU8/maxresdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/Q595t3wpnU8",
    duration: "0:45",
    level: "Beginner",
    calories: "150 cal",
  },
  {
    title: "Strength Training Basics",
    url: "https://www.youtube.com/watch?v=EUxQpQMnpa8",
    thumbnail: "https://img.youtube.com/vi/EUxQpQMnpa8/maxresdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/EUxQpQMnpa8",
    duration: "1:15",
    level: "Intermediate",
    calories: "200 cal",
  },
  {
    title: "Yoga Flow",
    url: "https://www.youtube.com/watch?v=Q595t3wpnU8",
    thumbnail: "https://img.youtube.com/vi/Q595t3wpnU8/maxresdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/Q595t3wpnU8",
    duration: "2:00",
    level: "All Levels",
    calories: "120 cal",
  },
  {
    title: "HIIT Workout",
    url: "https://www.youtube.com/watch?v=EUxQpQMnpa8",
    thumbnail: "https://img.youtube.com/vi/EUxQpQMnpa8/maxresdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/EUxQpQMnpa8",
    duration: "1:30",
    level: "Advanced",
    calories: "250 cal",
  },
];
