import { Link, NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import ProductCard from "../Component/UI/ProductCard";
import ProductList from "../Component/UI/ProductList";
import { useEffect, useState } from "react";
import { serverURL } from "../libs/http";
import UserList from "../Component/UserList/UserList";

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const q = queryParams.get("q");
  const pageNumber = queryParams.get("page_number") || 1;
  const navigator = useNavigate();
  const type = useParams().type;

  const [products, setProducts] = useState([{ price: 1000, title: "abc", description: "abc", images: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=7mrz0hB3WYsQ7kNvwFC67hE&_nc_oc=AdmFuOEWyX57JbG5-IRr1vmDeL7JUvQ5WG19YusX5nkjJb6cXPWzARuNuPBUhnBfydg&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=tUX1phrybSDVDmrzSh5elQ&oh=00_AfHnpXvioz7yhiK9sN_p77UNaFRffdomOh-Fi4i-V6vs7w&oe=68120A06" }, { price: 1000, title: "abc", description: "abc", images: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=7mrz0hB3WYsQ7kNvwFC67hE&_nc_oc=AdmFuOEWyX57JbG5-IRr1vmDeL7JUvQ5WG19YusX5nkjJb6cXPWzARuNuPBUhnBfydg&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=tUX1phrybSDVDmrzSh5elQ&oh=00_AfHnpXvioz7yhiK9sN_p77UNaFRffdomOh-Fi4i-V6vs7w&oe=68120A06" }, { price: 1000, title: "abc", description: "abc", images: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=7mrz0hB3WYsQ7kNvwFC67hE&_nc_oc=AdmFuOEWyX57JbG5-IRr1vmDeL7JUvQ5WG19YusX5nkjJb6cXPWzARuNuPBUhnBfydg&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=tUX1phrybSDVDmrzSh5elQ&oh=00_AfHnpXvioz7yhiK9sN_p77UNaFRffdomOh-Fi4i-V6vs7w&oe=68120A06" }, { price: 1000, title: "abc", description: "abc", images: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=7mrz0hB3WYsQ7kNvwFC67hE&_nc_oc=AdmFuOEWyX57JbG5-IRr1vmDeL7JUvQ5WG19YusX5nkjJb6cXPWzARuNuPBUhnBfydg&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=tUX1phrybSDVDmrzSh5elQ&oh=00_AfHnpXvioz7yhiK9sN_p77UNaFRffdomOh-Fi4i-V6vs7w&oe=68120A06" }, { price: 1000, title: "abc", description: "abc", images: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=7mrz0hB3WYsQ7kNvwFC67hE&_nc_oc=AdmFuOEWyX57JbG5-IRr1vmDeL7JUvQ5WG19YusX5nkjJb6cXPWzARuNuPBUhnBfydg&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=tUX1phrybSDVDmrzSh5elQ&oh=00_AfHnpXvioz7yhiK9sN_p77UNaFRffdomOh-Fi4i-V6vs7w&oe=68120A06" }, { price: 1000, title: "abc", description: "abc", images: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=7mrz0hB3WYsQ7kNvwFC67hE&_nc_oc=AdmFuOEWyX57JbG5-IRr1vmDeL7JUvQ5WG19YusX5nkjJb6cXPWzARuNuPBUhnBfydg&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=tUX1phrybSDVDmrzSh5elQ&oh=00_AfHnpXvioz7yhiK9sN_p77UNaFRffdomOh-Fi4i-V6vs7w&oe=68120A06" }, { price: 1000, title: "abc", description: "abc", images: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=7mrz0hB3WYsQ7kNvwFC67hE&_nc_oc=AdmFuOEWyX57JbG5-IRr1vmDeL7JUvQ5WG19YusX5nkjJb6cXPWzARuNuPBUhnBfydg&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=tUX1phrybSDVDmrzSh5elQ&oh=00_AfHnpXvioz7yhiK9sN_p77UNaFRffdomOh-Fi4i-V6vs7w&oe=68120A06" }, { price: 1000, title: "abc", description: "abc", images: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=7mrz0hB3WYsQ7kNvwFC67hE&_nc_oc=AdmFuOEWyX57JbG5-IRr1vmDeL7JUvQ5WG19YusX5nkjJb6cXPWzARuNuPBUhnBfydg&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=tUX1phrybSDVDmrzSh5elQ&oh=00_AfHnpXvioz7yhiK9sN_p77UNaFRffdomOh-Fi4i-V6vs7w&oe=68120A06" }, { price: 1000, title: "abc", description: "abc", images: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=7mrz0hB3WYsQ7kNvwFC67hE&_nc_oc=AdmFuOEWyX57JbG5-IRr1vmDeL7JUvQ5WG19YusX5nkjJb6cXPWzARuNuPBUhnBfydg&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=tUX1phrybSDVDmrzSh5elQ&oh=00_AfHnpXvioz7yhiK9sN_p77UNaFRffdomOh-Fi4i-V6vs7w&oe=68120A06" }, { price: 1000, title: "abc", description: "abc", images: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=7mrz0hB3WYsQ7kNvwFC67hE&_nc_oc=AdmFuOEWyX57JbG5-IRr1vmDeL7JUvQ5WG19YusX5nkjJb6cXPWzARuNuPBUhnBfydg&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=tUX1phrybSDVDmrzSh5elQ&oh=00_AfHnpXvioz7yhiK9sN_p77UNaFRffdomOh-Fi4i-V6vs7w&oe=68120A06" }, { price: 1000, title: "abc", description: "abc", images: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=7mrz0hB3WYsQ7kNvwFC67hE&_nc_oc=AdmFuOEWyX57JbG5-IRr1vmDeL7JUvQ5WG19YusX5nkjJb6cXPWzARuNuPBUhnBfydg&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=tUX1phrybSDVDmrzSh5elQ&oh=00_AfHnpXvioz7yhiK9sN_p77UNaFRffdomOh-Fi4i-V6vs7w&oe=68120A06" }, { price: 1000, title: "abc", description: "abc", images: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=7mrz0hB3WYsQ7kNvwFC67hE&_nc_oc=AdmFuOEWyX57JbG5-IRr1vmDeL7JUvQ5WG19YusX5nkjJb6cXPWzARuNuPBUhnBfydg&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=tUX1phrybSDVDmrzSh5elQ&oh=00_AfHnpXvioz7yhiK9sN_p77UNaFRffdomOh-Fi4i-V6vs7w&oe=68120A06" }, { price: 1000, title: "abc", description: "abc", images: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=7mrz0hB3WYsQ7kNvwFC67hE&_nc_oc=AdmFuOEWyX57JbG5-IRr1vmDeL7JUvQ5WG19YusX5nkjJb6cXPWzARuNuPBUhnBfydg&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=tUX1phrybSDVDmrzSh5elQ&oh=00_AfHnpXvioz7yhiK9sN_p77UNaFRffdomOh-Fi4i-V6vs7w&oe=68120A06" }, { price: 1000, title: "abc", description: "abc", images: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=7mrz0hB3WYsQ7kNvwFC67hE&_nc_oc=AdmFuOEWyX57JbG5-IRr1vmDeL7JUvQ5WG19YusX5nkjJb6cXPWzARuNuPBUhnBfydg&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=tUX1phrybSDVDmrzSh5elQ&oh=00_AfHnpXvioz7yhiK9sN_p77UNaFRffdomOh-Fi4i-V6vs7w&oe=68120A06" }, { price: 1000, title: "abc", description: "abc", images: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=7mrz0hB3WYsQ7kNvwFC67hE&_nc_oc=AdmFuOEWyX57JbG5-IRr1vmDeL7JUvQ5WG19YusX5nkjJb6cXPWzARuNuPBUhnBfydg&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=tUX1phrybSDVDmrzSh5elQ&oh=00_AfHnpXvioz7yhiK9sN_p77UNaFRffdomOh-Fi4i-V6vs7w&oe=68120A06" }, { price: 1000, title: "abc", description: "abc", images: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=7mrz0hB3WYsQ7kNvwFC67hE&_nc_oc=AdmFuOEWyX57JbG5-IRr1vmDeL7JUvQ5WG19YusX5nkjJb6cXPWzARuNuPBUhnBfydg&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=tUX1phrybSDVDmrzSh5elQ&oh=00_AfHnpXvioz7yhiK9sN_p77UNaFRffdomOh-Fi4i-V6vs7w&oe=68120A06" }, { price: 1000, title: "abc", description: "abc", images: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=7mrz0hB3WYsQ7kNvwFC67hE&_nc_oc=AdmFuOEWyX57JbG5-IRr1vmDeL7JUvQ5WG19YusX5nkjJb6cXPWzARuNuPBUhnBfydg&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=tUX1phrybSDVDmrzSh5elQ&oh=00_AfHnpXvioz7yhiK9sN_p77UNaFRffdomOh-Fi4i-V6vs7w&oe=68120A06" }, { price: 1000, title: "abc", description: "abc", images: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=7mrz0hB3WYsQ7kNvwFC67hE&_nc_oc=AdmFuOEWyX57JbG5-IRr1vmDeL7JUvQ5WG19YusX5nkjJb6cXPWzARuNuPBUhnBfydg&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=tUX1phrybSDVDmrzSh5elQ&oh=00_AfHnpXvioz7yhiK9sN_p77UNaFRffdomOh-Fi4i-V6vs7w&oe=68120A06" }, { price: 1000, title: "abc", description: "abc", images: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=7mrz0hB3WYsQ7kNvwFC67hE&_nc_oc=AdmFuOEWyX57JbG5-IRr1vmDeL7JUvQ5WG19YusX5nkjJb6cXPWzARuNuPBUhnBfydg&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=tUX1phrybSDVDmrzSh5elQ&oh=00_AfHnpXvioz7yhiK9sN_p77UNaFRffdomOh-Fi4i-V6vs7w&oe=68120A06" }, { price: 1000, title: "abc", description: "abc", images: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=7mrz0hB3WYsQ7kNvwFC67hE&_nc_oc=AdmFuOEWyX57JbG5-IRr1vmDeL7JUvQ5WG19YusX5nkjJb6cXPWzARuNuPBUhnBfydg&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=tUX1phrybSDVDmrzSh5elQ&oh=00_AfHnpXvioz7yhiK9sN_p77UNaFRffdomOh-Fi4i-V6vs7w&oe=68120A06" }, { price: 1000, title: "abc", description: "abc", images: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=7mrz0hB3WYsQ7kNvwFC67hE&_nc_oc=AdmFuOEWyX57JbG5-IRr1vmDeL7JUvQ5WG19YusX5nkjJb6cXPWzARuNuPBUhnBfydg&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=tUX1phrybSDVDmrzSh5elQ&oh=00_AfHnpXvioz7yhiK9sN_p77UNaFRffdomOh-Fi4i-V6vs7w&oe=68120A06" }]);

  const [users, setUsers] = useState([{
    state: "BAN",
    gender: "Male",
    birthOfDate: 1745897780730,
    name: "Nguyuen Tien",
    username: 'dev.quangnt',
    email: 'dev.quangnt@gmail.com',
    avatarUrl: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=vUjd58dVsMgQ7kNvwGYCy56&_nc_oc=AdnXgQV0ogY0VI87uo5nBWCEC2mvHMXoX7hQfOHnLiHsTpNUVh3zYH7mjGEDdX3QP78&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=JO9vF39X_vYnH7OixYB02A&oh=00_AfGeI9eUh2p2nx0dwGPeAdkK7nLvfVNLHuymGzJHg-ePDw&oe=680CC406",
    role: "user",
    address: "abcabcabcabn jn ajdn ajdn akjsdn jn adkjsna daca",
    phoneNumber: "0987665432",
  }, {
    name: "Nguyuen Tien Quang",
    username: 'dev.quangnt',
    email: 'dev.quangnt@gmail.com',
    avatarUrl: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=vUjd58dVsMgQ7kNvwGYCy56&_nc_oc=AdnXgQV0ogY0VI87uo5nBWCEC2mvHMXoX7hQfOHnLiHsTpNUVh3zYH7mjGEDdX3QP78&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=JO9vF39X_vYnH7OixYB02A&oh=00_AfGeI9eUh2p2nx0dwGPeAdkK7nLvfVNLHuymGzJHg-ePDw&oe=680CC406",
    role: "user",
    address: "abcabcabcabn jn ajdn ajdn akjsdn jn adkjsna daca",
    phoneNumber: "0987665432",
  }, {
    name: "Nguyuen Tien Quang",
    username: 'dev.quangnt',
    email: 'dev.quangnt@gmail.com',
    avatarUrl: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=vUjd58dVsMgQ7kNvwGYCy56&_nc_oc=AdnXgQV0ogY0VI87uo5nBWCEC2mvHMXoX7hQfOHnLiHsTpNUVh3zYH7mjGEDdX3QP78&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=JO9vF39X_vYnH7OixYB02A&oh=00_AfGeI9eUh2p2nx0dwGPeAdkK7nLvfVNLHuymGzJHg-ePDw&oe=680CC406",
    role: "user",
    address: "abcabcabcabn jn ajdn ajdn akjsdn jn adkjsna daca",
    phoneNumber: "0987665432",
  }, {
    name: "Nguyuen Tien Quang",
    username: 'dev.quangnt',
    email: 'dev.quangnt@gmail.com',
    avatarUrl: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=vUjd58dVsMgQ7kNvwGYCy56&_nc_oc=AdnXgQV0ogY0VI87uo5nBWCEC2mvHMXoX7hQfOHnLiHsTpNUVh3zYH7mjGEDdX3QP78&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=JO9vF39X_vYnH7OixYB02A&oh=00_AfGeI9eUh2p2nx0dwGPeAdkK7nLvfVNLHuymGzJHg-ePDw&oe=680CC406",
    role: "user",
    address: "abcabcabcabn jn ajdn ajdn akjsdn jn adkjsna daca",
    phoneNumber: "0987665432",
  }, {
    name: "Nguyuen Tien Quang",
    username: 'dev.quangnt',
    email: 'dev.quangnt@gmail.com',
    avatarUrl: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=vUjd58dVsMgQ7kNvwGYCy56&_nc_oc=AdnXgQV0ogY0VI87uo5nBWCEC2mvHMXoX7hQfOHnLiHsTpNUVh3zYH7mjGEDdX3QP78&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=JO9vF39X_vYnH7OixYB02A&oh=00_AfGeI9eUh2p2nx0dwGPeAdkK7nLvfVNLHuymGzJHg-ePDw&oe=680CC406",
    role: "user",
    address: "abcabcabcabn jn ajdn ajdn akjsdn jn adkjsna daca",
    phoneNumber: "0987665432",
  }, {
    name: "Nguyuen Tien Quang",
    username: 'dev.quangnt',
    email: 'dev.quangnt@gmail.com',
    avatarUrl: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=vUjd58dVsMgQ7kNvwGYCy56&_nc_oc=AdnXgQV0ogY0VI87uo5nBWCEC2mvHMXoX7hQfOHnLiHsTpNUVh3zYH7mjGEDdX3QP78&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=JO9vF39X_vYnH7OixYB02A&oh=00_AfGeI9eUh2p2nx0dwGPeAdkK7nLvfVNLHuymGzJHg-ePDw&oe=680CC406",
    role: "user",
    address: "abcabcabcabn jn ajdn ajdn akjsdn jn adkjsna daca",
    phoneNumber: "0987665432",
  }, {
    name: "Nguyuen Tien Quang",
    username: 'dev.quangnt',
    email: 'dev.quangnt@gmail.com',
    avatarUrl: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=vUjd58dVsMgQ7kNvwGYCy56&_nc_oc=AdnXgQV0ogY0VI87uo5nBWCEC2mvHMXoX7hQfOHnLiHsTpNUVh3zYH7mjGEDdX3QP78&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=JO9vF39X_vYnH7OixYB02A&oh=00_AfGeI9eUh2p2nx0dwGPeAdkK7nLvfVNLHuymGzJHg-ePDw&oe=680CC406",
    role: "user",
    address: "abcabcabcabn jn ajdn ajdn akjsdn jn adkjsna daca",
    phoneNumber: "0987665432",
  }, {
    name: "Nguyuen Tien Quang",
    username: 'dev.quangnt',
    email: 'dev.quangnt@gmail.com',
    avatarUrl: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=vUjd58dVsMgQ7kNvwGYCy56&_nc_oc=AdnXgQV0ogY0VI87uo5nBWCEC2mvHMXoX7hQfOHnLiHsTpNUVh3zYH7mjGEDdX3QP78&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=JO9vF39X_vYnH7OixYB02A&oh=00_AfGeI9eUh2p2nx0dwGPeAdkK7nLvfVNLHuymGzJHg-ePDw&oe=680CC406",
    role: "user",
    address: "abcabcabcabn jn ajdn ajdn akjsdn jn adkjsna daca",
    phoneNumber: "0987665432",
  }, {
    name: "Nguyuen Tien Quang",
    username: 'dev.quangnt',
    email: 'dev.quangnt@gmail.com',
    avatarUrl: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=vUjd58dVsMgQ7kNvwGYCy56&_nc_oc=AdnXgQV0ogY0VI87uo5nBWCEC2mvHMXoX7hQfOHnLiHsTpNUVh3zYH7mjGEDdX3QP78&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=JO9vF39X_vYnH7OixYB02A&oh=00_AfGeI9eUh2p2nx0dwGPeAdkK7nLvfVNLHuymGzJHg-ePDw&oe=680CC406",
    role: "user",
    address: "abcabcabcabn jn ajdn ajdn akjsdn jn adkjsna daca",
    phoneNumber: "0987665432",
  }, {
    name: "Nguyuen Tien Quang",
    username: 'dev.quangnt',
    email: 'dev.quangnt@gmail.com',
    avatarUrl: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=vUjd58dVsMgQ7kNvwGYCy56&_nc_oc=AdnXgQV0ogY0VI87uo5nBWCEC2mvHMXoX7hQfOHnLiHsTpNUVh3zYH7mjGEDdX3QP78&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=JO9vF39X_vYnH7OixYB02A&oh=00_AfGeI9eUh2p2nx0dwGPeAdkK7nLvfVNLHuymGzJHg-ePDw&oe=680CC406",
    role: "user",
    address: "abcabcabcabn jn ajdn ajdn akjsdn jn adkjsna daca",
    phoneNumber: "0987665432",
  }]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (type === "user") {
      fetch(serverURL + "/api/admin/account/search?keyword=" + q, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }).then(res => res.json()).then(data => {
        console.log(data)
        setUsers(data);
      }).catch(err => console.log(err))
    }

    else {
      fetch(serverURL + "/api/product?keyword=" + q, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }).then(res => res.json()).then(data => {
        console.log(data)
        setProducts(data.data);
      }).catch(err => console.log(err))
    }
  }, [q, type]);

  const clickHandler = (product) => {
    navigator("/detail/" + product.productID);
  }

  return <div className="SearchPage">
    <div className="wrap-title">
      <h4 className="title">Tìm kiếm: {q}</h4>
    </div>
    <div className="wrap-nav" style={{ display: "flex", gap: "4rem", justifyContent: "center", padding: "2rem" }}>
      <Link className={() => { }} to={"/search/user?q=" + q}>Người dùng</Link>
      <Link to={"/search/product?q=" + q}>Sản phẩm</Link>
    </div>

    <div className="wrap-product">
      {type === "product" && <ProductList clickHandler={clickHandler} products={products} />}
      {type === "user" && <UserList users={users}></UserList>}
    </div>
  </div>
}
export default SearchPage;