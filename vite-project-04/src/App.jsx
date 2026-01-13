import React from 'react'
import Card from './components/card'

const App = () => {
  const jobs = [
  {
    id: 1,
    company: "Amazon",
    posted: "5 days ago",
    title: "Senior UI/UX Designer",
    tags: ["Part time", "Senior level"],
    rate: "$120/hr",
    location: "Mumbai, India",
    image:
      "https://i.pinimg.com/736x/36/ff/72/36ff72fc8d310f1353ecb2e5862296ab.jpg",
  },
  {
    id: 2,
    company: "Google",
    posted: "2 days ago",
    title: "Product Designer",
    tags: ["Full time", "Mid level"],
    rate: "$95/hr",
    location: "Bangalore, India",
    image:
      "https://i.pinimg.com/736x/0c/6b/9a/0c6b9a44cfc1f4c09c6bb1e6930f33c1.jpg",
  },
  {
    id: 3,
    company: "Microsoft",
    posted: "1 week ago",
    title: "UX Researcher",
    tags: ["Contract", "Senior level"],
    rate: "$110/hr",
    location: "Hyderabad, India",
    image:
      "https://i.pinimg.com/736x/3e/68/3f/3e683f2e0d44ff8f8b6c7c48f3b54b94.jpg",
  },
  {
    id: 4,
    company: "Netflix",
    posted: "3 days ago",
    title: "Visual Designer",
    tags: ["Part time", "Mid level"],
    rate: "$85/hr",
    location: "Remote",
    image:
      "https://i.pinimg.com/736x/7c/7d/30/7c7d309c2c67a3b7f13d6a8a87c6a3b5.jpg",
  },
  {
    id: 5,
    company: "Meta",
    posted: "6 days ago",
    title: "UI Designer",
    tags: ["Full time", "Junior level"],
    rate: "$70/hr",
    location: "Gurgaon, India",
    image:
      "https://i.pinimg.com/736x/4a/3f/0b/4a3f0b6f1cbe9c1a6c0ffb4a19f6e0fd.jpg",
  },
  {
    id: 6,
    company: "Adobe",
    posted: "4 days ago",
    title: "Interaction Designer",
    tags: ["Full time", "Senior level"],
    rate: "$130/hr",
    location: "Noida, India",
    image:
      "https://i.pinimg.com/736x/9a/29/61/9a2961f4b3e80a49c924f7d2f49c10b1.jpg",
  },
  {
    id: 7,
    company: "Uber",
    posted: "1 day ago",
    title: "UX Designer",
    tags: ["Contract", "Mid level"],
    rate: "$100/hr",
    location: "Pune, India",
    image:
      "https://i.pinimg.com/736x/2b/9f/41/2b9f417bc3f43b8c7d8e63d33bcb1b75.jpg",
  },
  {
    id: 8,
    company: "Spotify",
    posted: "8 days ago",
    title: "Product UX Designer",
    tags: ["Remote", "Senior level"],
    rate: "$140/hr",
    location: "Remote",
    image:
      "https://i.pinimg.com/736x/1d/47/8f/1d478f3c9c4d9c1f2d60a3f5d0e7b4a4.jpg",
  },
  {
    id: 9,
    company: "Flipkart",
    posted: "3 days ago",
    title: "UI Engineer",
    tags: ["Full time", "Mid level"],
    rate: "$90/hr",
    location: "Bangalore, India",
    image:
      "https://i.pinimg.com/736x/5c/8a/4a/5c8a4a3b5c6f8f9c1d7e6a4c3f8b5a1e.jpg",
  },
  {
    id: 10,
    company: "Swiggy",
    posted: "2 weeks ago",
    title: "Design Lead",
    tags: ["Full time", "Senior level"],
    rate: "$150/hr",
    location: "Bangalore, India",
    image:
      "https://i.pinimg.com/736x/8f/2c/9d/8f2c9d7e6a5b4c3d2e1f9a8b7c6d5e4f.jpg",
  },
];

  return (
    <div className="parent">
      <Card />
    </div>
  )
}

export default App
